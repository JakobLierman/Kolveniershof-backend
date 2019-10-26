var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let WorkdayTemplate = mongoose.model("WorkdayTemplate");
let Workday = mongoose.model("Workday");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET workday templates */
router.get('/', auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let query = WorkdayTemplate.find()
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] });
    query.exec(function(err, workdayTemplates) {
        if (err) return next(err);
        res.json(workdayTemplates);
    });
});

/* GET workday template by id */
router.param("workdayTemplateId", function (req, res, next, id) {
    let query = WorkdayTemplate.findById(id)
        .populate("daycareMentors")
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] });
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
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] });
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
        .populate({ path: "morningBusses", populate: ['bus', 'mentors', 'clients'] })
        .populate({ path: "amActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "lunch", populate: ['mentors', 'clients'] })
        .populate({ path: "pmActivities", populate: ['activity', 'mentors', 'clients'] })
        .populate({ path: "eveningBusses", populate: ['bus', 'mentors', 'clients'] });
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

/* Create week from template week */
router.post("/createWeek/:weekToCopy/:date", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Add days to date, creates copy
    function addDays(date, days) {
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() + days);
        return copy;
    }
    // Subtract days from date, creates copy
    function subtractDays(date, days) {
        const copy = new Date(Number(date));
        copy.setDate(date.getDate() - days);
        return copy;
    }

    let dateString = req.params.date;
    // Check if date is correctly formatted
    let dateRegex = /^(?:(?:31(_)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(_)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(_)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(_)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
    if (!dateString.match(dateRegex))
        return res.status(400).json({ message: "Please insert a valid date (format: DD_MM_YYYY)." });
    // Create new date
    let givenDate = new Date(dateString.split("_")[2]+"-"+dateString.split("_")[1]+"-"+dateString.split("_")[0]);
    // Find weekdays based on date
    let mondayDate = subtractDays(givenDate, (givenDate.getDay() - 1));
    let tuesdayDate = addDays(mondayDate, 1);
    let wednesdayDate = addDays(tuesdayDate, 1);
    let thursdayDate = addDays(wednesdayDate, 1);
    let fridayDate = addDays(thursdayDate, 1);
    let dates = [mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate];

    // Check if full week is present
    WorkdayTemplate.find({week: req.params.weekToCopy}).exec(function (err, items) {
        if (err) return next(err);
        if (items.length !== 5)
            return res.status(409).json({ message: "Week does not contain all workday templates yet." });
        else {
            // Check if workday is present at given dates
            Workday.find({ date: { $in: dates } }).exec(function (err, workdays) {
                if (err) return next(err);
                const daysPresent = [];
                workdays.forEach(workday => { daysPresent.push(workday.date.toString().split(' ')[0]) });
                console.log(daysPresent);
                if (daysPresent.length > 0)
                    return res.status(409).json({ message: "Workdays already present on " + daysPresent });
                else {
                    // Copy template content, create new workDays
                    let resultJson = {};
                    dates.forEach(date => {
                        WorkdayTemplate.findOne({ week: req.params.weekToCopy, day: date.getDay() }).exec(function (err, template) {
                            if (err) return next(err);
                            // Create new workday
                            let workday = new Workday({
                                date: date,
                                originalWeekNumber: template.week,
                                daycareMentors: template.daycareMentors,
                                morningBusses: template.morningBusses,
                                amActivities: template.amActivities,
                                lunch: template.lunch,
                                pmActivities: template.pmActivities,
                                holiday: false
                            });
                            workday.save(function (err, workday) {
                                if (err) return next(err);
                                // Add workday to json
                                resultJson[date.toString().split(' ')[0]] = workday;
                            });
                        });
                    });
                    res.json(resultJson);
                }
            });
        }
    });
});

module.exports = router;
