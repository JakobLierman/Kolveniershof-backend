var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Group = mongoose.model("Group");
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET groups */
router.get('/', auth, function(req, res, next) {
    let query = Group.find()
        .populate("members");
    query.exec(function(err, groups) {
        if (err) return next(err);
        res.json(groups);
    });
});

/* GET group by id */
router.param("groupId", function (req, res, next, id) {
    let query = Group.findById(id)
        .populate("members");
    query.exec(function (err, group) {
        if (err) return next(err);
        if (!group) return next(new Error("not found " + id));
        req.group = group;
        return next();
    });
});
router.get("/id/:groupId", auth, function (req, res, next) {
    res.json(req.group);
});

/* POST group */
router.post("/", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let group = new Group({
        name: req.body.name,
        members: req.body.members
    });
    group.save(function (err, group) {
        if (err) return next(err);
        res.json(group);
    });
});

/* DELETE group */
router.delete("/id/:groupId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    req.group.remove(function (err) {
        if (err) return next(err);
        res.send(true);
    });
});

/* PATCH group */
router.patch("/id/:groupId", auth, function (req, res, next) {
    // Check permissions
    if (!req.user.admin) return res.status(401).end();

    let group = req.group;
    if (req.body.name)
        group.name = req.body.name;
    if (req.body.members)
        group.members = req.body.members;
    group.save(function (err, group) {
        if (err) return next(err);
        res.json(group);
    });
});

module.exports = router;
