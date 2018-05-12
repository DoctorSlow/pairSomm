var exports = module.exports = {}



exports.signup = function (req, res) {

    res.render('register');

}
exports.login = function (req, res) {

    res.render("index", {
        layout: "login"
    });

}

exports.browse = function (req, res) {

    res.render('browse');

}

exports.profile = function (req, res) {
    res.render("profile");
}

exports.post = function (req, res) {
    res.render("post");
}

exports.logout = function (req, res) {

    req.session.destroy(function (err) {

        res.redirect('/');

    });

}