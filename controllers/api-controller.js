// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  // app.get("/api/posts/", function (req, res) {
  //   db.Post.findAll({})
  //     .then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // Get route for retrieving a single post
  app.get("/post/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (userdb) {
        res.json(userdb);
      });
  });

  // POST route for saving a new post
  app.post("/post", function (req, res) {
    console.log(req.body);
    db.Post.create({
      item1: req.body.firstlink,
      item2: req.body.lastlink,
      hashtag: req.body.hashtag,
      UserId: req.user.id
    })
      .then(function (userdb) {
        res.redirect("/browse/1");
      });
  });
  app.put("/post/down", function (req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.downvotes++

        }
      })
      .then(function (userdb) {
        res.json(userdb);
      });
  });
  app.put("/post/up", function (req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.upvotes++

        }
      })
      .then(function (userdb) {
        res.json(userdb);
      });
  });
  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function (req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });


};
