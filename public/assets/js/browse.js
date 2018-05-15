//GET data from db, establish UPDATE for voting
$(document).ready(function () {
    $.get("/post/:id", function (data) {
        alert("Data: " + data);
    });

});
$(".button-down").attr("onclick", "downvote()");
$(".button-up").attr("onclick", "upvote()");

function downvote() {
    $.ajax({
        method: "PUT",
        url: "/post/down"
    }).then(downvotes);
}

function upvote() {
    $.ajax({
        method: "PUT",
        url: "/post/up"
    }).then(upvotes);
}