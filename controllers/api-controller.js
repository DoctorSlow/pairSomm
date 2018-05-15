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
        id: 1
      }
    })
      .then(function (userdb) {
        res.json(userdb);
      });
  });
  // Get route for retrieving a single post
  // app.get("/browse/:id", function (req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (userdb) {
  //       res.redirect("/browse/:id");
  //     });
  // });
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
        res.redirect("/browse");
      });
  });
  app.put("/post/down", function (req, res) {
    db.Post.update({ downvotes: sequelize.col('downvotes') + 1 }, {

      where: {
        id: req.body.downvotes

      }
    })
      .then(function (userdb) {
        res.json(userdb);
      });
  });
  app.put("/post/up", function (req, res) {
    db.Post.findById(1).then(upvotes => {
      return upvotes.increment('upvotes', { by: 1 })
    }).then(upvotes => { })
    // where: {
    //   id: req.body.upvotes
    // }
  })
  //     .then(function (userdb) {
  //       res.json(userdb);
  //     });
  // });
  // User.findById(1).then(user => {
  //   return user.increment('my-integer-field', { by: 2 })
  // }).then(user => {
  // Postgres will return the updated user by default (unless disabled by setting { returning: false })
  // In other dialects, you'll want to call user.reload() to get the updated instance...
  //})
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
