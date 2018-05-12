// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// Sets up the Express app to handle data parsing
var app = express();
var passport = require("passport");
var session = require("express-session");
var flash = require('connect-flash');
var bodyParser = require("body-parser");
var env = require("dotenv").load();
// Set Handlebars.
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");




//handlebars initialized here.
// app.engine("handlebars", exphbs({
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));
// For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs', layoutsDir: __dirname + '/views1/layouts'}));
//For Handlebars
app.engine('handlebars', exphbs({
  defaultLayout: "main",
}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {

  res.render("index", {
    layout: "login"
  });

});
//Models
// var models = require("./models");
// Routes
// =============================================================
require('./routes/auth.js')(app, passport);
require("./controllers/api-controller.js")(app);
require("./controllers/html-controller.js")(app);// Syncing our sequelize models and then starting our Express app
// =============================================================
//Paspport strategy
require('./config/passport/passport.js')(passport, db.User);
db.sequelize.sync().then(function () {

  console.log('Nice! Database looks fine')

}).catch(function (err) {

  console.log(err, "Something went wrong with the Database Update!")

});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});