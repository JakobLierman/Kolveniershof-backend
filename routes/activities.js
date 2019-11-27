var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Activity = mongoose.model("Activity");
let ActivityUnit = mongoose.model("ActivityUnit");
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

    let activity = req.body.activity;
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
router.param("activityUnitId", auth, function (req, res, next, id) {
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
router.delete("/units/id/:activityUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.activityUnit.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH activityUnit */
router.patch("/units/id/:activityUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let activityUnit = req.body.activityUnit;
    if (req.body.activity)
        activityUnit.activity = req.body.activity;
    if (req.body.mentors)
        activityUnit.mentors = req.body.mentors;
    if (req.body.clients)
        activityUnit.clients = req.body.clients;
    activityUnit.save(function (err, activityUnit) {
        if (err) return next(err);
        res.json(activityUnit);
    });
});

module.exports = router;
