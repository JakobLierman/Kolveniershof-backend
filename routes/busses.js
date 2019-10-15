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
router.get("/:busId", auth, function (req, res, next) {
    res.json(req.bus);
});

/* POST bus */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let bus = new Bus({
        name: req.body.name,
        color: req.body.color,
        icon: req.body.icon
    });
    bus.save(function (err, bus) {
        if (err) return next(err);
        res.json(bus);
    });
});

/* DELETE bus */
router.delete("/:busId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.bus.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH bus */
router.patch("/:busId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let bus = req.body.bus;
    if (req.body.name)
        bus.name = req.body.name;
    if (req.body.color)
        bus.color = req.body.color;
    if (req.body.icon)
        bus.icon = req.body.icon;
    bus.save(function (err, bus) {
        if (err) return next(err);
        res.json(bus);
    });
});

/* GET busUnits */
router.get("/units/", auth, function(req, res, next) {
    let query = BusUnit.find()
        .populate(['bus', 'mentors', 'clients']);
    query.exec(function(err, busUnits) {
        if (err) return next(err);
        res.json(busUnits);
    });
});

/* GET busUnit by id */
router.param("busUnitId", function (req, res, next, id) {
    let query = BusUnit.findById(id)
        .populate(['bus', 'mentors', 'clients']);
    query.exec(function (err, busUnit) {
        if (err) return next(err);
        if (!busUnit) return next(new Error("not found " + id));
        req.busUnit = busUnit;
        return next();
    });
});
router.get("/units/:busUnitId", auth, function (req, res, next) {
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
router.delete("/units/:busUnitId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.busUnit.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH busUnit */
router.patch("/units/:busUnitId", auth, function (req, res, next) {
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
