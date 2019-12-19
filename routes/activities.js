var express = require('express');
var router = express.Router();
var array = require('lodash/array');
let mongoose = require('mongoose');
let Activity = mongoose.model("Activity");
let ActivityUnit = mongoose.model("ActivityUnit");
let Workday = mongoose.model("Workday");
let WorkdayTemplate = mongoose.model("WorkdayTemplate");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET activities */
router.get('/', auth, function(req, res, next) {
    let query = Activity.find();
    query.exec(function(err, activities) {
        if (err) return next(err);
        res.json(activities);
    });
});

/* GET activity by id */
router.param("activityId", function (req, res, next, id) {
    let query = Activity.findById(id);
    query.exec(function (err, activity) {
        if (err) return next(err);
        if (!activity) return next(new Error("not found " + id));
        req.activity = activity;
        return next();
    });
});
router.get("/id/:activityId", auth, function (req, res, next) {
    res.json(req.activity);
});

/* POST activity */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let activity = new Activity({
        name: req.body.name,
        icon: req.body.icon
    });
    activity.save(function (err, activity) {
        if (err) return next(err);
        res.json(activity);
    });
});

/* DELETE activity */
router.delete("/id/:activityId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.activity.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH activity */
router.patch("/id/:activityId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let activity = req.activity;
    if (req.body.name)
        activity.name = req.body.name;
    if (req.body.icon)
        activity.icon = req.body.icon;
    activity.save(function (err, activity) {
        if (err) return next(err);
        res.json(activity);
    });
});

/* GET activityUnits */
router.get("/units/", auth, function(req, res, next) {
    let query = ActivityUnit.find()
        .populate(['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function(err, activityUnits) {
        if (err) return next(err);
        res.json(activityUnits);
    });
});

/* GET activityUnit by id */
router.param("activityUnitId", function (req, res, next, id) {
    let query = ActivityUnit.findById(id)
        .populate(['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function (err, activityUnit) {
        if (err) return next(err);
        if (!activityUnit) return next(new Error("not found " + id));
        req.activityUnit = activityUnit;
        return next();
    });
});
router.get("/units/id/:activityUnitId", auth, function (req, res, next) {
    res.json(req.activityUnit);
});

/* POST activityUnit */
router.post("/units/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let activityUnit = new ActivityUnit({
        activity: req.body.activity,
        mentors: req.body.mentors,
        clients: req.body.clients
    });
    activityUnit.save(function (err, activityUnit) {
        if (err) return next(err);
        res.json(activityUnit);
    });
});

/* DELETE activityUnit */
router.delete("/units/id/:activityUnitId/force", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    deleteUnit(req, res, next, req.activityUnit, false);

});

/* DELETE activityUnit from workday/workdayTemplate */
router.delete("/units/id/:activityUnitId", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Check if all required fields are filled in
    if (!req.body.workdayId && !req.body.workdayTemplateId)
        return res.status(400).send("Gelieve alle velden in te vullen."); // TODO - i18n

    // Find all elements with usages
    let workdaysWithUsage = await Workday.find({
        $or: [{ amActivities: req.activityUnit }, { pmActivities: req.activityUnit }]
    }).lean();
    let workdayTemplatesWithUsage = await WorkdayTemplate.find({
        $or: [{ amActivities: req.activityUnit }, { pmActivities: req.activityUnit }]
    }).lean();

    // Delete unit from workday/workdayTemplate
    if (req.body.workdayId) {
        Workday.findById(req.body.workdayId, (err, workday) => {
            if (err) return next(err);
            if (!workday) return next(new Error("No workday found"));
            array.remove(workday.amActivities, function(activityUnit) {
                return activityUnit._id.toString() === req.activityUnit._id.toString();
            });
            array.remove(workday.pmActivities, function(activityUnit) {
                return activityUnit._id.toString() === req.activityUnit._id.toString();
            });
            workday.markModified("amActivities");
            workday.markModified("pmActivities");
            workday.save().then(updatedWorkday => {
                array.remove(workdaysWithUsage, function (workdayDel) {
                    return workdayDel._id.toString() === updatedWorkday._id.toString();
                });
                // Delete based on more than one usage
                deleteUnit(req, res, next, req.activityUnit, (workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1)
            });
        });
    } else if (req.body.workdayTemplateId) {
        WorkdayTemplate.findById(req.body.workdayTemplateId, (err, workdayTemplate) => {
            if (err) return next(err);
            if (!workdayTemplate) return next(new Error("No workdayTemplate found"));
            array.remove(workdayTemplate.amActivities, function(activityUnit) {
                return activityUnit._id.toString() === req.activityUnit._id.toString();
            });
            array.remove(workdayTemplate.pmActivities, function(activityUnit) {
                return activityUnit._id.toString() === req.activityUnit._id.toString();
            });
            workdayTemplate.markModified("amActivities");
            workdayTemplate.markModified("pmActivities");
            workdayTemplate.save().then(function (updatedWorkdayTemplate) {
                array.remove(workdayTemplatesWithUsage, function (workdayTemplateDel) {
                    return workdayTemplateDel._id.toString() === updatedWorkdayTemplate._id.toString()
                });
                // Delete based on more than one usage
                deleteUnit(req, res, next, req.activityUnit, (workdaysWithUsage.length + workdayTemplatesWithUsage.length) >= 1);
            });
        });
    }
});

/* PATCH activityUnit */
router.patch("/units/id/:activityUnitId/force", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    patchUnit(req, res, next, req.activityUnit, false)
});

/* PATCH activityUnit from (within) workday/workdayTemplate */
router.patch("/units/id/:activityUnitId", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Check if all required fields are filled in
    if (!req.body.workdayId && !req.body.workdayTemplateId)
        return res.status(400).send("Gelieve alle velden in te vullen."); // TODO - i18n

    // Find all elements with usages
    let workdaysWithUsage = await Workday.find({
        $or: [{ amActivities: req.activityUnit }, { pmActivities: req.activityUnit }]
    }).lean();
    let workdayTemplatesWithUsage = await WorkdayTemplate.find({
        $or: [{ amActivities: req.activityUnit }, { pmActivities: req.activityUnit }]
    }).lean();

    // Check if has usages
    const hasUsages = (workdaysWithUsage.length + workdayTemplatesWithUsage.length) > 1;
    // Patch unit, return unit if new one is made
    let patchedUnit = patchUnit(req, res, next, req.activityUnit, hasUsages);

    if (hasUsages) {
        // Replace unit in workday
        if (req.body.workdayId) {
            await Workday.findById(req.body.workdayId, (err, workday) => {
                if (err) return next(err);
                if (!workday) return next(new Error("No workday found"));
                // Find index for unit
                let amIndex = array.findIndex(workday.amActivities, req.activityUnit._id);
                let pmIndex = array.findIndex(workday.pmActivities, req.activityUnit._id);
                // Replace unit
                if (amIndex !== -1) {
                    workday.amActivities.splice(amIndex, 1, patchedUnit);
                    workday.markModified("amActivities");
                }
                if (pmIndex !== -1) {
                    workday.pmActivities.splice(pmIndex, 1, patchedUnit);
                    workday.markModified("pmActivities");
                }
                // Save unit
                patchedUnit.save(function (err, activityUnit) {
                    if (err) return next(err);
                    // Save workday
                    workday.save(function (err) {
                        if (err) return next(err);
                        res.json(activityUnit);
                    });
                });
            });
        } else if (req.body.workdayTemplateId) {
            await WorkdayTemplate.findById(req.body.workdayTemplateId, (err, workdayTemplate) => {
                if (err) return next(err);
                if (!workdayTemplate) return next(new Error("No workday template found"));
                // Find index for unit
                let amIndex = array.findIndex(workdayTemplate.amActivities, req.activityUnit._id);
                let pmIndex = array.findIndex(workdayTemplate.pmActivities, req.activityUnit._id);
                // Replace unit
                if (amIndex !== -1) {
                    workdayTemplate.amActivities.splice(amIndex, 1, patchedUnit);
                    workdayTemplate.markModified("amActivities");
                }
                if (pmIndex !== -1) {
                    workdayTemplate.pmActivities.splice(pmIndex, 1, patchedUnit);
                    workdayTemplate.markModified("pmActivities");
                }
                // Save unit
                patchedUnit.save(function (err, activityUnit) {
                    if (err) return next(err);
                    // Save workdayTemplate
                    workdayTemplate.save(function (err) {
                        if (err) return next(err);
                        res.json(activityUnit);
                    });
                });
            });
        }}
    else {
        await patchedUnit.save(function (err, activityUnit) {
            if (err) return next(err);
            res.json(activityUnit);
        })
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
        return new ActivityUnit({
            activity: req.body.activity ? req.body.activity : unit.activity,
            mentors: req.body.mentors ? req.body.mentors : unit.mentors,
            clients: req.body.clients ? req.body.clients : unit.clients
        });
    } else {
        if (req.body.activity) {
            unit.activity = req.body.activity;
            unit.markModified("activity");
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
