var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let WorkdayTemplate = mongoose.model("WorkdayTemplate");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workday templates */
router.get('/', auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let query = WorkdayTemplate.find()
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "amActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "lunch", populate: [{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "pmActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "eveningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] });
    query.exec(function(err, workdayTemplates) {
        if (err) return next(err);
        res.json(workdayTemplates);
    });
});

/* GET workday template by id */
router.param("workdayTemplateId", function (req, res, next, id) {
    let query = WorkdayTemplate.findById(id)
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "amActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "lunch", populate: [{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "pmActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "eveningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] });
    query.exec(function (err, workdayTemplate) {
        if (err) return next(err);
        if (!workdayTemplate) return next(new Error("No WorkdayTemplate found with id: " + id));
        req.workdayTemplate = workdayTemplate;
        return next();
    });
});
router.get("/id/:workdayTemplateId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workdayTemplate);
});

/* GET workday templates by week */
router.param("week", function (req, res, next, week) {
    let weekRegex = /^[1-4]/gm;
    if(!week.match(weekRegex))
        return res.status(400).json({ message: "Please insert a valid week number (1, 2, 3 or 4)." });

    let query = WorkdayTemplate.find({ weekNumber: week })
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "amActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "lunch", populate: [{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "pmActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "eveningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] });
    query.exec(function (err, workdayTemplates) {
        if (err) return next(err);
        if (!workdayTemplates) return next(new Error("No WorkdayTemplates found on week: " + week));
        req.workdayTemplates = workdayTemplates;
        return next();
    });
});
router.get("/:week", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workdayTemplate);
});

/* GET workday template by week and day */
router.param("day", function (req, res, next, day) {
    let dayRegex = /^[1-5]/gm;
    if(!day.match(dayRegex))
        return res.status(400).json({ message: "Please insert a valid day number (1, 2, 3, 4 or 5)." });

    let query = WorkdayTemplate.findOne({ dayNumber: day })
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "amActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "lunch", populate: [{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "pmActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "eveningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] });
    query.exec(function (err, workdayTemplate) {
        if (err) return next(err);
        if (!workdayTemplate) return next(new Error("No WorkdayTemplate found on day: " + day));
        req.workdayTemplate = workdayTemplate;
        return next();
    });
});
router.get("/:week/:day", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workdayTemplate);
});

/* POST workday template */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let workdayTemplate = new WorkdayTemplate({
        weekNumber: req.body.weekNumber,
        dayNumber: req.body.dayNumber,
        daycareMentors: req.body.daycareMentors,
        morningBusses: req.body.morningBusses,
        amActivities: req.body.amActivities,
        lunch: req.body.lunch,
        pmActivities: req.body.pmActivities
    });
    workdayTemplate.save(function (err, workdayTemplate) {
        if (err) return next(err);
        res.json(workdayTemplate);
    });
});

/* DELETE workday template */
router.delete("/id/:workdayTemplateId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.workday.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH workday template */
router.patch("/id/:workdayTemplateId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let workdayTemplate = req.workdayTemplate;
    if (req.body.weekNumber)
        workdayTemplate.weekNumber = req.body.weekNumber;
    if (req.body.dayNumber)
        workdayTemplate.dayNumber = req.body.dayNumber;
    if (req.body.daycareMentors)
        workdayTemplate.daycareMentors = req.body.daycareMentors;
    if (req.body.morningBusses)
        workdayTemplate.morningBusses = req.body.morningBusses;
    if (req.body.amActivities)
        workdayTemplate.amActivities = req.body.amActivities;
    if (req.body.lunch)
        workdayTemplate.lunch = req.body.lunch;
    if (req.body.pmActivities)
        workdayTemplate.pmActivities = req.body.pmActivities;
    workdayTemplate.save(function (err, workdayTemplate) {
        if (err) return next(err);
        res.json(workdayTemplate);
    });
});

module.exports = router;
