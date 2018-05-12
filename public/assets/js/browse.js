$(".btn-danger").attr ("onclick","downvote()"); 
$(".btn-success").attr ("onclick","upvote()"); 
app.put("/api/posts", function(req, res) {
  db.Post.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(userdb) {
      res.json(userdb);
    });
});