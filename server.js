// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
// For Passport

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

app.use(passport.session()); // persistent login sessions
// Routes
// =============================================================
require("./controllers/api-controller.js")(app);
require("./controllers/html-controller.js")(app);// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function () {

  console.log('Nice! Database looks fine')

}).catch(function (err) {

  console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});