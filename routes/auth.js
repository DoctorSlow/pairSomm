var authController = require('../controllers/authcontroller.js');
var flash = require('connect-flash');

module.exports = function (app, passport) {

    app.use(flash());




    app.get('/register', authController.signup);


    app.get('/login', authController.login);


    app.post('/register', passport.authenticate('local', {
        successRedirect: '/browse',

        failureRedirect: '/register',

        failureFlash: true
    }

    ));
    app.get('/browse', isLoggedIn, authController.browse);

    app.get("/profile", isLoggedIn, authController.profile);

    app.get("/post", isLoggedIn, authController.post);

    app.get('/logout', authController.logout);

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/browse',

        failureRedirect: '/'
    }

    ));




    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }



}