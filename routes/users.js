var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let User = mongoose.model("User");
let passport = require("passport");
let jwt = require("express-jwt");
let zxcvbn = require("zxcvbn");
let validator = require("email-validator");

let auth = jwt({ secret: process.env.KOLV02_BACKEND_SECRET });

/* GET users listing. */
router.get("/", function(req, res, next) {
  let query = User.find(null, '-salt -hash');
  query.sort("email");
  query.exec(function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET user by id. */
router.param("userId", function(req, res, next, id) {
  let query = User.findById(id, '-salt -hash');
  query.exec(function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error("not found " + id));
    req.user = user;
    return next();
  });
});
router.get("/id/:userId", function(req, res, next) {
  res.json(req.user);
});

/* GET user by email. */
router.param("email", function(req, res, next, email) {
  let query = User.findOne({ email: email }, '-salt -hash');
  query.exec(function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error("No user found with email '" + email + "'."));
    req.user = user;
    return next();
  });
});
router.get("/:email", function(req, res, next) {
  res.json(req.user);
});

/* REGISTER / LOGIN functionality */
router.post("/isValidEmail", function(req, res, next) {
  // Check if all fields are filled in
  if (!req.body.email)
    return res.status(400).json({ message: "Please fill out all fields." });
  User.find({ email: req.body.email.trim().toLowerCase() }, function(
    err,
    result
  ) {
    if (result.length) {
      res.send(false);
    } else {
      res.send(validator.validate(req.body.email.trim().toLowerCase()));
    }
  });
});

router.post("/register", function(req, res, next) {
  // Check if all required fields are filled in
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.birthday
  )
    return res.status(400).json({ message: "Please fill out all fields." });
  // Check if password is strong enough
  if (zxcvbn(req.body.password).score < 2)
    return res.status(400).json({ msg: "Password is not strong enough." });

  let user = new User();
  user.email = req.body.email.trim().toLowerCase();
  user.setPassword(req.body.password);
  user.firstName = req.body.firstName.trim();
  user.lastName = req.body.lastName.trim();
  user.picture = req.body.picture;
  user.address.street = req.body.address.street;
  user.address.postalCode = req.body.address.postalCode;
  user.address.city = req.body.address.city;
  user.admin = req.body.admin;
  user.birthday = req.body.birthday;

  user.save(function(err) {
    if (err) return next(err);
    user.token = user.generateJWT();
    return res.json(user);
  });
});

router.post("/login", function(req, res, next) {
  // Check if all fields are filled in
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Please fill out all fields." });
  }
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      user.token = user.generateJWT();
      return res.json(user);
    } else {
      return res.status(401).send(info);
    }
  })(req, res, next);
});

/* PATCH user */
router.patch("/id/:userId", auth, function(req, res, next) {
  let user = req.user;
  if (req.body.firstName)
    user.firstName = req.body.firstName;
  if (req.body.lastName)
    user.lastName = req.body.lastName;
  if (req.body.email)
    user.email = req.body.email;
  if (req.body.picture)
    user.picture = req.body.picture;
  if (req.body.address.street)
    user.address.street = req.body.address.street;
  if (req.body.address.postalCode)
    user.address.postalCode = req.body.address.postalCode;
  if (req.body.address.city)
    user.address.city = req.body.address.city;
  if (req.body.admin)
    user.admin = req.body.admin;
  if (req.body.birthday)
    user.birthday = req.body.birthday;
  user.save(function(err) {
    if (err) return next(err);
    return res.json(user);
  });
});

module.exports = router;
