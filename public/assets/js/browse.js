//GET data from db, establish UPDATE for voting

function downvote() {
    app.put("/posts", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (userdb) {
                res.json(userdb);
            });
    });
}
function upvote() {
    app.put("/posts", function (req, res) {
        db.Post.update(req.body,
            {
                where: {
                    id: req.body.id

                }
            })
            .then(function (userdb) {
                res.json(userdb);
            });
    });
}
$(".btn-danger").attr("onclick", "downvote()");
$(".btn-success").attr("onclick", "upvote()");