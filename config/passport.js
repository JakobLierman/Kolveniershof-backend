let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;
let mongoose = require("mongoose");
let User = mongoose.model("User");

passport.use(
    new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, function(username, password, done) {
        User.findOne({ email: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, "Incorrect email address."); // TODO - i18n
            }
            if (!user.validPassword(password)) {
                return done(null, false, "Incorrect password."); // TODO - i18n
            }
            return done(null, user);
        });
    })
);
