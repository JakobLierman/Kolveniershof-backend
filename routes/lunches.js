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

    req.lunchUnit.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
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
                deleteUnit((workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1)
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
                deleteUnit((workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1);
            });
        });
    }

    // Delete unit
    function deleteUnit(hasUsages) {
        if (!hasUsages) {
            req.lunchUnit.remove(function (err) {
                if (err) return next(err);
                res.send(true);
            });
        } else {
            res.send(true);
        }
    }
});

/* PATCH lunchUnit */
router.patch("/units/id/:lunchUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let lunchUnit = req.lunchUnit;
    if (req.body.lunch)
        lunchUnit.lunch = req.body.lunch;
    if (req.body.mentors)
        lunchUnit.mentors = req.body.mentors;
    if (req.body.clients)
        lunchUnit.clients = req.body.clients;
    lunchUnit.save(function (err, lunchUnit) {
        if (err) return next(err);
        res.json(lunchUnit);
    });
});

module.exports = router;
