let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;
let mongoose = require("mongoose");
let User = mongoose.model("User");

passport.use(
    new LocalStrategy({ usernameField: 'userName', passwordField: 'password' }, function(username, password, done) {
        User.findOne({ userName: username }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, "Ongeldig emailadres."); // TODO - i18n
            }
            if (!user.validPassword(password)) {
                return done(null, false, "Ongeldig wachtwoord."); // TODO - i18n
            }
            return done(null, user);
        });
    })
);
