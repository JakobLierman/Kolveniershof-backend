var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Workday = mongoose.model("Workday");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workdays */
router.get('/', function(req, res, next) {
    let query = Workday.find()
        .populate("user")
        .populate("busUnit")
        .populate("activityUnit")
        .populate("lunchUnit"); // TODO - nested populate
    query.exec(function(err, workdays) {
        if (err) return next(err);
        res.json(workdays);
    });
});

/* GET workday by id */
router.param("workdayId", function (req, res, next, id) {
    let query = Workday.findById(id)
        .populate("user")
        .populate("busUnit")
        .populate("activityUnit")
        .populate("lunchUnit"); // TODO - nested populate
    query.exec(function (err, workday) {
        if (err) return next(err);
        if (!workday) return next(new Error("not found " + id));
        req.workday = workday;
        return next();
    });
});
router.get("/:workdayId", function (req, res, next) {
    res.json(req.workday);
});

/* POST workday */
router.post("/", auth, function (req, res, next) {
    let workday = new Workday({
        date: req.body.date,
        daycareMentors: req.body.daycareMentors,
        morningBusses: req.body.morningBusses,
        amActivities: req.body.amActivities,
        lunch: req.body.lunch,
        pmActivities: req.body.pmActivities,
        holiday: req.body.holiday
    });
    workday.save(function (err, workday) {
        if (err) return next(err);
        res.json(workday);
    });
});

/* DELETE workday */
router.delete("/:workdayId", auth, function (req, res, next) {
    req.workday.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH workday */
router.patch("/:workdayId", auth, function (req, res, next) {
    // TODO
    res.send("not yet implemented");
});

module.exports = router;
