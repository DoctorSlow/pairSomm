//load bcrypt
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');


module.exports = function (passport, user) {


    var User = user;

    var LocalStrategy = require('passport-local').Strategy;


    passport.use(new LocalStrategy(

        {

            usernameField: 'username',

            passwordField: 'password',



            passReqToCallback: true // allows us to pass back the entire request to the callback

        },



        function (req, username, password, done) {
            console.log(username);
            console.log(password);
            //	passReqToCallback: true // allows us to pass back the entire request to the callback

            var generateHash = function (password) {

                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

            };



            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (user) {


                    return done(null, false, {
                        message: 'That username is already taken'
                    });

                } else {
                    console.log(userPassword);

                    var userPassword = generateHash(password);

                    var data =

                        {


                            password: userPassword,

                            username: username,

                            email: req.body.email

                        };

                    User.create(data).then(function (newUser, created) {

                        if (!newUser) {

                            return done(null, false);

                        }

                        if (newUser) {

                            return done(null, newUser);

                        }

                    });

                }

            });

        }

    ));
    //serialize
    passport.serializeUser(function (user, done) {

        done(null, user.id);

    });

    passport.deserializeUser(function (id, done) {

        User.findById(id).then(function (user) {

            if (user) {

                done(null, user.get());

            } else {

                done(user.errors, null);

            }

        });

    });
    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

        {

            // 		// by default, local strategy uses username and password, we will override with email

            usernameField: 'username',

            passwordField: 'password',

            passReqToCallback: true // allows us to pass back the entire request to the callback

        },


        function (req, username, password, done) {
            //passReqToCallback: true // allows us to pass back the entire request to the callback
            var User = user;

            var isValidPassword = function (userpass, password) {

                return bCrypt.compareSync(password, userpass);

            }

            User.findOne({
                where: {
                    username: username
                }
            }).then(function (user) {

                if (!user) {

                    return done(null, false, {
                        message: 'Username does not exist'
                    });

                }

                if (!isValidPassword(user.password, password)) {

                    return done(null, false, {
                        message: 'Incorrect password.'
                    });

                }


                var userinfo = user.get();
                return done(null, userinfo);


            }).catch(function (err) {

                console.log("Error:", err);

                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });

            });


        }

    ));
}
