var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Workday = mongoose.model("Workday");
let Comment = mongoose.model("Comment");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workdays */
router.get('/', auth, function(req, res, next) {
    let query = Workday.find()
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate("comments.client");
    query.exec(function(err, workdays) {
        if (err) return next(err);
        res.json(workdays);
    });
});

/* GET workday by id */
router.param("workdayId", function (req, res, next, id) {
    let query = Workday.findById(id)
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate("comments.client");
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
    //let dateRegex = /^(?:(?:31(_)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(_)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(_)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(_)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
    //if (!dateString.match(dateRegex))
       // return res.status(400).json({ message: "Please insert a valid date (format: DD_MM_YYYY)." });
    // Create new date
    let date = new Date(dateString.split("_")[2]+"-"+dateString.split("_")[1]+"-"+dateString.split("_")[0]);

    let query = Workday.findOne({ date: date })
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate("comments.client");
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

/* GET workday by date by user */
router.get("/date/:date/:userId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) {
        if (req.user._id !== req.params.userId) return res.status(401).end();
    }

    let workday = req.workday;
    let clientWorkday = new Workday();

    // Add date
    clientWorkday.date = workday.date;
    // Add morningBus
    workday.morningBusses.forEach((morningBus) => {
        let userIds = [];
        morningBus.clients.forEach((client) => userIds.push(client._id.toString()));
        if (userIds.includes(req.params.userId))
            clientWorkday.morningBusses.push(morningBus);
    });
    // Add amActivity
    workday.amActivities.forEach((amActivity) => {
        let userIds = [];
        amActivity.clients.forEach((client) => userIds.push(client._id.toString()));
        if (userIds.includes(req.params.userId))
            clientWorkday.amActivities.push(amActivity);
    });
    // Add lunch
    clientWorkday.lunch = workday.lunch;
    // Add pmActivity
    workday.pmActivities.forEach((pmActivity) => {
        let userIds = [];
        pmActivity.clients.forEach((client) => userIds.push(client._id.toString()));
        if (userIds.includes(req.params.userId))
            clientWorkday.pmActivities.push(pmActivity);
    });
    // Add eveningBus
    workday.eveningBusses.forEach((eveningBus) => {
        let userIds = [];
        eveningBus.clients.forEach((client) => userIds.push(client._id.toString()));
        if (userIds.includes(req.params.userId))
            clientWorkday.eveningBusses.push(eveningBus);
    });
    // Add holiday
    clientWorkday.holiday = workday.holiday;
    // Add comment
    for (let comment of workday.comments) {
        if (comment.client._id.toString() === req.params.userId)
            clientWorkday.comments.push(comment); break;
    }

    res.json(clientWorkday);
});

/* POST workday */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

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
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.workday.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH workday */
router.patch("/:workdayId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let workday = req.workday;
    if (req.body.date)
        workday.date = req.body.date;
    if (req.body.daycareMentors)
        workday.daycareMentors = req.body.daycareMentors;
    if (req.body.morningBusses)
        workday.morningBusses = req.body.morningBusses;
    if (req.body.amActivities)
        workday.amActivities = req.body.amActivities;
    if (req.body.lunch)
        workday.lunch = req.body.lunch;
    if (req.body.pmActivities)
        workday.pmActivities = req.body.pmActivities;
    if (req.body.holiday)
        workday.holiday = req.body.holiday;
    workday.save(function (err, workday) {
        if (err) return next(err);
        res.json(workday);
    });
});

/* GET comments */
router.get("/:workdayId/comments", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workday.comments);
});

/* GET comment by id */
router.param("commentId", function (req, res, next, id) {
    for (let comment of req.workday.comments) {
        if (comment._id.toString() === id)
            req.comment = comment; return next();
    }
    return next(new Error("No comment found with id: " + id));
});
router.get("/:workdayId/comments/:commentId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) {
        if (req.user._id !== req.comment.client._id.toString()) return res.status(401).end();
    }

    res.json(req.comment);
});

/* POST comment */
router.post("/:workdayId/comments", auth, function (req, res, next) {
    let workday = req.workday;
    let comment = new Comment({
        comment: req.body.comment,
        client: req.user._id
    });
    workday.comments.push(comment);
    workday.save(function (err) {
        if (err) return next(err);
        res.json(comment);
    });
});

/* DELETE comment */
router.delete("/:workdayId/comments/:commentId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) {
        if (req.user._id !== req.comment.client._id.toString()) return res.status(401).end();
    }

    req.workday.comments.pull(req.params.commentId);
    req.workday.save(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH comment */
router.patch("/:workdayId/comments/:commentId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) {
        if (req.user._id !== req.comment.client._id.toString()) return res.status(401).end();
    }

    req.workday.comments.pull(req.params.commentId);

    let comment = req.comment;
    if (req.body.comment)
        comment.comment = req.body.comment;

    req.workday.comments.push(comment);

    req.workday.save(function (err) {
        if (err) return next(err);
        res.json(comment);
    });
});

module.exports = router;
