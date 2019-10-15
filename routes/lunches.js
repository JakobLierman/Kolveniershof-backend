var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let LunchUnit = mongoose.model("LunchUnit");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET lunchUnits */
router.get("/units/", auth, function(req, res, next) {
    let query = LunchUnit.find()
        .populate(['mentors', 'clients']);
    query.exec(function(err, lunchUnits) {
        if (err) return next(err);
        res.json(lunchUnits);
    });
});

/* GET lunchUnit by id */
router.param("lunchUnitId", function (req, res, next, id) {
    let query = LunchUnit.findById(id)
        .populate(['mentors', 'clients']);
    query.exec(function (err, lunchUnit) {
        if (err) return next(err);
        if (!lunchUnit) return next(new Error("not found " + id));
        req.lunchUnit = lunchUnit;
        return next();
    });
});
router.get("/units/:lunchUnitId", auth, function (req, res, next) {
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
router.delete("/units/:lunchUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.lunchUnit.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH lunchUnit */
router.patch("/units/:lunchUnitId", auth, function (req, res, next) {
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
