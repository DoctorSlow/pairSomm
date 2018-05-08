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
    res.render("index");
  });

  app.get("/login", function (req, res) {
    res.render("index", {
      layout: "login"
    });
  });

  // blog route loads blog.html
  app.get("/profile", function (req, res) {
    res.render("profile");
  });
  app.get("/post", function (req, res) {
    res.render("post");
  });

};