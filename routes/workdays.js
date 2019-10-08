var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Workday = mongoose.model("Workday");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workdays */
router.get('/', auth, function(req, res, next) {
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
        if (!workday) return next(new Error("No Workday found with id: " + id));
        req.workday = workday;
        return next();
    });
});
router.get("/:workdayId", auth, function (req, res, next) {
    res.json(req.workday);
});

/* GET workday by date */
router.param("date", function (req, res, next, dateString) {
    // Check if date is correctly formatted
    let dateRegex = /^(?:(?:31(_)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(_)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(_)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(_)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
    if (!dateString.match(dateRegex))
        return res.status(400).json({ message: "Please insert a valid date (format: DD_MM_YYYY)." });
    // Create new date
    let date = new Date(dateString.split("_")[2]+"-"+dateString.split("_")[1]+"-"+dateString.split("_")[0]);

    let query = Workday.findOne({ date: date })
        .populate("user")
        .populate("busUnit")
        .populate("activityUnit")
        .populate("lunchUnit"); // TODO - nested populate
    query.exec(function (err, workday) {
        if (err) return next(err);
        if (!workday) return next(new Error("No Workday found on date: " + date));
        req.workday = workday;
        return next();
    });
});
router.get("/date/:date", auth, function (req, res, next) {
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
