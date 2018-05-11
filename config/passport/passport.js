var bCrypt = require('bcrypt-nodejs');
module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

}
passport.use('local-signup', new LocalStrategy(

    {
        usernameField: 'exampleInputUsername',
        emailField: 'exampleInputEmail1',
        passwordField: 'exampleInputPassword1',
        passReqToCallback: true // allows us to pass back the entire request to the callback

    },

));
