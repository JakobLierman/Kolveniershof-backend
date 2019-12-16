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

    let query = WorkdayTemplate.find();
    populateWorkdayTemplates(query);
    query.exec(function(err, workdayTemplates) {
        if (err) return next(err);
        res.json(workdayTemplates);
    });
});

/* GET workday template by id */
router.param("workdayTemplateId", function (req, res, next, id) {
    let query = WorkdayTemplate.findById(id);
    populateWorkdayTemplates(query);
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

/* GET templateNames */
router.get("/names", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let query = WorkdayTemplate.distinct('templateName');
    query.exec(function(err, templateNames) {
        if (err) return next(err);
        templateNames = templateNames.filter(Boolean);
        templateNames.sort();
        res.json(templateNames);
    });
});

/* GET workday templates by name */
router.param("name", function (req, res, next, name) {
    let query = WorkdayTemplate.find({ templateName: name });
    populateWorkdayTemplates(query);
    query.exec(function (err, workdayTemplates) {
        if (err) return next(err);
        if (!workdayTemplates) return next(new Error("No WorkdayTemplates found with name: " + name));
        req.workdayTemplates = workdayTemplates;
        return next();
    });
});
router.get("/name/:name", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workdayTemplates);
});

/* GET workday templates by name and week */
router.param("week", function (req, res, next, week) {
    let weekRegex = /^[1-4]/gm;
    if(!week.match(weekRegex))
        return res.status(400).json({ message: "Please insert a valid week number (1, 2, 3 or 4)." });

    let workdayTemplates = [];
    req.workdayTemplates.forEach(template =>
        template.weekNumber === parseInt(week) ? workdayTemplates.push(template) : null);
    req.workdayTemplates = workdayTemplates;
    return next();
});
router.get("/name/:name/:week", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    res.json(req.workdayTemplates);
});

/* GET workday template by name, week and day */
router.param("day", function (req, res, next, day) {
    let dayRegex = /^[1-5]/gm;
    if(!day.match(dayRegex))
        return res.status(400).json({ message: "Please insert a valid day number (1, 2, 3, 4 or 5)." });

    let workdayTemplate = null;
    req.workdayTemplates.forEach(template =>
        template.dayNumber === parseInt(day) ? workdayTemplate = template : null);
    req.workdayTemplate = workdayTemplate;
    return next();
});
router.get("/name/:name/:week/:day", auth, function (req, res, next) {
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
        pmActivities: req.body.pmActivities,
        eveningBusses: req.body.eveningBusses,
        holiday: req.body.holiday
    });
    workdayTemplate.save(function (err, workdayTemplate) {
        if (err) return next(err);
        res.json(workdayTemplate);
    });
});

/* DELETE workday templates with name */
router.delete("/name/:name", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    for (const template of req.workdayTemplates) {
        await template.remove(function (err) {
            if (err) return next(err);
        });
    }
    res.send(true);
});

/* Create workday templates with name */
router.post("/name", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // Create 4 weeks
    for (let week = 1; week < 5; week++) {
        // Create 5 days
        for (let day = 1; day < 6; day++) {
            // Create template
            let template = new WorkdayTemplate({
                templateName: req.body,
                weekNumber: week,
                dayNumber: day
            });
            // Save template
            await template.save(function (err) { if (err) return next(err); });
        }
    }
    res.send(true);
});

/* DELETE workday template */
router.delete("/id/:workdayTemplateId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.workdayTemplate.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH workday template */
router.patch("/id/:workdayTemplateId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let workdayTemplate = req.workdayTemplate;
    if (req.body.templateName)
        workdayTemplate.templateName = req.body.templateName;
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
    if (req.body.eveningBusses)
        workdayTemplate.eveningBusses = req.body.eveningBusses;
    if (workdayTemplate.holiday !== req.body.holiday)
        workdayTemplate.holiday = req.body.holiday;
    workdayTemplate.save(function (err, workdayTemplate) {
        if (err) return next(err);
        res.json(workdayTemplate);
    });
});

/* PATCH template name */
router.patch("/name/:name", auth, async function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    // TODO - Change all workdays
    for (const template of req.workdayTemplates) {
        template.templateName = req.body;
        await template.save(function (err) { if (err) return next(err); });
    }
    res.json(true);
});

/* Create week from template week */
router.post("/createWeek/:templateName/:weekToCopy/:date", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    const dateString = req.params.date;
    if(!checkDateFormat(dateString))
        return res.status(400).json("Please insert a valid date (format: DD_MM_YYYY).");
    const dates = getWeek(dateString);

    // Check if full week is present
    WorkdayTemplate.find({templateName: req.params.templateName, week: req.params.weekToCopy}).exec(function (err, items) {
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
                        if (date.getDay() === (6 || 0)) {
                            let workday = new Workday({
                                date: date,
                                originalTemplateName: req.params.templateName,
                                originalWeekNumber: req.params.weekToCopy
                            });
                            workday.save(function (err, workday) {
                                if (err) return next(err);
                                // Add workday to json
                                resultJson[date.toString().split(' ')[0]] = workday;
                            });
                        } else {
                            WorkdayTemplate.findOne({
                                templateName: req.params.templateName,
                                weekNumber: req.params.weekToCopy,
                                dayNumber: date.getDay()
                            }).exec(function (err, template) {
                                if (err) return next(err);
                                // Create new workday
                                let workday = new Workday({
                                    date: date,
                                    originalTemplateName: template.templateName,
                                    originalWeekNumber: template.weekNumber,
                                    daycareMentors: template.daycareMentors,
                                    morningBusses: template.morningBusses,
                                    amActivities: template.amActivities,
                                    lunch: template.lunch,
                                    pmActivities: template.pmActivities,
                                    eveningBusses: template.eveningBusses,
                                    holiday: false
                                });
                                workday.save(function (err, workday) {
                                    if (err) return next(err);
                                    // Add workday to json
                                    resultJson[date.toString().split(' ')[0]] = workday;
                                });
                            });
                        }
                    });
                    res.json(resultJson);
                }
            });
        }
    });
});

// Get week from dateString
function getWeek(dateString) {
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

    // Create new date
    let givenDate = new Date(dateString.split("_")[2]+"-"+dateString.split("_")[1]+"-"+dateString.split("_")[0]);
    // Find weekdays based on date
    let mondayDate = subtractDays(givenDate, (givenDate.getDay() - 1));
    let tuesdayDate = addDays(mondayDate, 1);
    let wednesdayDate = addDays(tuesdayDate, 1);
    let thursdayDate = addDays(wednesdayDate, 1);
    let fridayDate = addDays(thursdayDate, 1);
    let saturdayDate = addDays(fridayDate, 1);
    let sundayDate = addDays(saturdayDate, 1);

    return [mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate];
}

// Populate query
function populateWorkdayTemplates(query) {
    query
        .populate({ path: "daycareMentors", select: '-salt -hash' })
        .populate({ path: "morningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "amActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "lunch", populate: [{ path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "pmActivities", populate: ['activity', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] })
        .populate({ path: "eveningBusses", populate: ['bus', { path: 'mentors', select: '-salt -hash' }, { path: 'clients', select: '-salt -hash' }] });
}

// Check if date is correctly formatted
function checkDateFormat(dateString) {
    let dateRegex = /^(?:(?:31(_)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(_)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(_)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(_)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
    return dateString.match(dateRegex);
}

module.exports = router;
