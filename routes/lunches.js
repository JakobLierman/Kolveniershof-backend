var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
var array = require('lodash/array');
let LunchUnit = mongoose.model("LunchUnit");
let Workday = mongoose.model("Workday");
let WorkdayTemplate = mongoose.model("WorkdayTemplate");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET lunchUnits */
router.get("/units/", auth, function(req, res, next) {
    let query = LunchUnit.find()
        .populate([{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function(err, lunchUnits) {
        if (err) return next(err);
        res.json(lunchUnits);
    });
});

/* GET lunchUnit by id */
router.param("lunchUnitId", function (req, res, next, id) {
    let query = LunchUnit.findById(id)
        .populate([{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function (err, lunchUnit) {
        if (err) return next(err);
        if (!lunchUnit) return next(new Error("not found " + id));
        req.lunchUnit = lunchUnit;
        return next();
    });
});
router.get("/units/id/:lunchUnitId", auth, function (req, res, next) {
    res.json(req.lunchUnit);
});

/* POST lunchUnit */
router.post("/units/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let lunchUnit = new LunchUnit({
        lunch: req.body.lunch,
        mentors: req.body.mentors,
        clients: req.body.clients
    });
    lunchUnit.save(function (err, lunchUnit) {
        if (err) return next(err);
        res.json(lunchUnit);
    });
});

/* DELETE lunchUnit */
router.delete("/units/id/:lunchUnitId/force", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    deleteUnit(req, res, next, req.lunchUnit, false);
});

/* DELETE busUnit from workday/workdayTemplate */
router.delete("/units/id/:busUnitId", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Check if all required fields are filled in
    if (!req.body.workdayId && !req.body.workdayTemplateId)
        return res.status(400).send("Gelieve alle velden in te vullen."); // TODO - i18n

    // Find all elements with usages
    let workdaysWithUsage = await Workday.find({ lunch: req.lunchUnit }).lean();
    let workdayTemplatesWithUsage = await WorkdayTemplate.find({ lunch: req.lunchUnit }).lean();

    // Delete unit from workday/workdayTemplate
    if (req.body.workdayId) {
        Workday.findById(req.body.workdayId, (err, workday) => {
            if (err) return next(err);
            if (!workday) return next(new Error("No workday found"));
            workday.lunch = undefined;
            workday.markModified("lunch");
            workday.save().then(updatedWorkday => {
                array.remove(workdaysWithUsage, function (workdayDel) {
                    return workdayDel._id.toString() === updatedWorkday._id.toString();
                });
                // Delete based on more than one usage
                deleteUnit(req, res, next, req.lunchUnit, (workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1);
            });
        });
    } else if (req.body.workdayTemplateId) {
        WorkdayTemplate.findById(req.body.workdayTemplateId, (err, workdayTemplate) => {
            if (err) return next(err);
            if (!workdayTemplate) return next(new Error("No workdayTemplate found"));
            workdayTemplate.lunch = undefined;
            workdayTemplate.markModified("lunch");
            workdayTemplate.save().then(function (updatedWorkdayTemplate) {
                array.remove(workdayTemplatesWithUsage, function (workdayTemplateDel) {
                    return workdayTemplateDel._id.toString() === updatedWorkdayTemplate._id.toString()
                });
                // Delete based on more than one usage
                deleteUnit(req, res, next, req.lunchUnit, (workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1);
            });
        });
    }
});

/* PATCH lunchUnit */
router.patch("/units/id/:lunchUnitId/force", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    patchUnit(req, res, next, req.lunchUnit, false);
});

/* PATCH lunchUnit from (within) workday/workdayTemplate */
router.patch("/units/id/:lunchUnitId", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Check if all required fields are filled in
    if (!req.body.workdayId && !req.body.workdayTemplateId)
        return res.status(400).send("Gelieve alle velden in te vullen."); // TODO - i18n

    // Find all elements with usages
    let workdaysWithUsage = await Workday.find({ lunch: req.lunchUnit }).lean();
    let workdayTemplatesWithUsage = await WorkdayTemplate.find({ lunch: req.lunchUnit }).lean();

    // Check if has usages
    const hasUsages = (workdaysWithUsage.length + workdayTemplatesWithUsage.length) > 1;
    // Patch unit, return unit if new one is made
    let patchedUnit = await patchUnit(req, res, next, req.lunchUnit, hasUsages);

    if (hasUsages) {
        // Replace unit in workday
        if (req.body.workdayId) {
            await Workday.findById(req.body.workdayId, (err, workday) => {
                if (err) return next(err);
                if (!workday) return next(new Error("No workday found"));
                // Replace unit
                workday.lunch = patchedUnit;
                workday.markModified("lunch");
                // Save unit
                patchedUnit.save(function (err, lunchUnit) {
                    if (err) return next(err);
                    // Save workday
                    workday.save(function (err) {
                        if (err) return next(err);
                        res.json(lunchUnit);
                    });
                });
            });
        } else if (req.body.workdayTemplateId) {
            await WorkdayTemplate.findById(req.body.workdayTemplateId, (err, workdayTemplate) => {
                if (err) return next(err);
                if (!workdayTemplate) return next(new Error("No workday template found"));
                // Replace unit
                workdayTemplate.lunch = patchedUnit;
                workdayTemplate.markModified("lunch");
                // Save unit
                patchedUnit.save(function (err, lunchUnit) {
                    if (err) return next(err);
                    // Save workdayTemplate
                    workdayTemplate.save(function (err) {
                        if (err) return next(err);
                        res.json(lunchUnit);
                    });
                });
            });
        }
    } else {
        await patchedUnit.save(function (err, lunchUnit) {
            if (err) return next(err);
            res.json(lunchUnit);
        });
    }
});

// Delete unit
function deleteUnit(req, res, next, unit, hasUsages) {
    if (!hasUsages) {
        unit.remove(function (err) {
            if (err) return next(err);
            res.send(true);
        });
    } else {
        res.send(true);
    }
}

// Patch unit
function patchUnit(req, res, next, unit, hasUsages) {
    if (hasUsages) {
        return new LunchUnit({
            lunch: req.body.lunch ? req.body.lunch : unit.lunch,
            mentors: req.body.mentors ? req.body.mentors : unit.mentors,
            clients: req.body.clients ? req.body.clients : unit.clients
        });
    } else {
        if (req.body.lunch) {
            unit.lunch = req.body.lunch;
            unit.markModified("lunch");
        }
        if (req.body.mentors) {
            unit.mentors = req.body.mentors;
            unit.markModified("mentors");
        }
        if (req.body.clients) {
            unit.clients = req.body.clients;
            unit.markModified("clients");
        }
        return unit;
    }
}

module.exports = router;
