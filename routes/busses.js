var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Bus = mongoose.model("Bus");
let BusUnit = mongoose.model("BusUnit");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET busses */
router.get('/', auth, function(req, res, next) {
    let query = Bus.find();
    query.exec(function(err, busses) {
        if (err) return next(err);
        res.json(busses);
    });
});

/* GET bus by id */
router.param("busId", function (req, res, next, id) {
    let query = Bus.findById(id);
    query.exec(function (err, bus) {
        if (err) return next(err);
        if (!bus) return next(new Error("not found " + id));
        req.bus = bus;
        return next();
    });
});
router.get("/id/:busId", auth, function (req, res, next) {
    res.json(req.bus);
});

/* POST bus */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let bus = new Bus({
        name: req.body.name,
        color: req.body.color
    });
    bus.save(function (err, bus) {
        if (err) return next(err);
        res.json(bus);
    });
});

/* DELETE bus */
router.delete("/id/:busId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.bus.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH bus */
router.patch("/id/:busId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let bus = req.body.bus;
    if (req.body.name)
        bus.name = req.body.name;
    if (req.body.color)
        bus.color = req.body.color;
    bus.save(function (err, bus) {
        if (err) return next(err);
        res.json(bus);
    });
});

/* GET busUnits */
router.get("/units/", auth, function(req, res, next) {
    let query = BusUnit.find()
        .populate(['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function(err, busUnits) {
        if (err) return next(err);
        res.json(busUnits);
    });
});

/* GET busUnit by id */
router.param("busUnitId", function (req, res, next, id) {
    let query = BusUnit.findById(id)
        .populate(['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }]);
    query.exec(function (err, busUnit) {
        if (err) return next(err);
        if (!busUnit) return next(new Error("not found " + id));
        req.busUnit = busUnit;
        return next();
    });
});
router.get("/units/id/:busUnitId", auth, function (req, res, next) {
    res.json(req.busUnit);
});

/* POST busUnit */
router.post("/units/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let busUnit = new BusUnit({
        bus: req.body.bus,
        mentors: req.body.mentors,
        clients: req.body.clients
    });
    busUnit.save(function (err, busUnit) {
        if (err) return next(err);
        res.json(busUnit);
    });
});

/* DELETE busUnit */
router.delete("/units/id/:busUnitId/force", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.busUnit.remove(function (err) {
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
    let workdaysWithUsage = await Workday.find({
        $or: [{ morningBusses: req.busUnit }, { eveningBusses: req.busUnit }]
    }).lean();
    let workdayTemplatesWithUsage = await WorkdayTemplate.find({
        $or: [{ morningBusses: req.busUnit }, { eveningBusses: req.busUnit }]
    }).lean();

    // Delete unit from workday/workdayTemplate
    if (req.body.workdayId) {
        Workday.findById(req.body.workdayId, (err, workday) => {
            if (err) return next(err);
            if (!workday) return next(new Error("No workday found"));
            array.remove(workday.morningBusses, function(busUnit) {
                return busUnit._id.toString() === req.busUnit._id.toString();
            });
            array.remove(workday.eveningBusses, function(busUnit) {
                return busUnit._id.toString() === req.busUnit._id.toString();
            });
            workday.markModified("morningBusses");
            workday.markModified("eveningBusses");
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
            array.remove(workdayTemplate.morningBusses, function(busUnit) {
                return busUnit._id.toString() === req.busUnit._id.toString();
            });
            array.remove(workdayTemplate.eveningBusses, function(busUnit) {
                return busUnit._id.toString() === req.busUnit._id.toString();
            });
            workdayTemplate.markModified("morningBusses");
            workdayTemplate.markModified("eveningBusses");
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
            req.busUnit.remove(function (err) {
                if (err) return next(err);
                res.send(true);
            });
        } else {
            res.send(true);
        }
    }
});

/* PATCH busUnit */
router.patch("/units/id/:busUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let busUnit = req.body.busUnit;
    if (req.body.bus)
        busUnit.bus = req.body.bus;
    if (req.body.mentors)
        busUnit.mentors = req.body.mentors;
    if (req.body.clients)
        busUnit.clients = req.body.clients;
    busUnit.save(function (err, busUnit) {
        if (err) return next(err);
        res.json(busUnit);
    });
});

module.exports = router;
