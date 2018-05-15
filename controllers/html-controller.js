// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {
    res.render("index", {
      layout: "login"
    });
  });

  app.get("/register", function (req, res) {
    res.render("register", {
      layout: "login"
    });
  });

  // blog route loads blog.html
  app.get("/profile", function (req, res) {
    res.render("profile");
  });
  //route to post layout
  app.get("/post", function (req, res) {
    res.render("post");
  });
  //route to browse page
  app.get("/browse", function (req, res) {
    res.render("browse");
  });

};