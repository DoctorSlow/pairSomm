//GET data from db, establish UPDATE for voting
$(document).ready(function () {
    $.get("/post:id", function (data) {
        alert("Data: " + data);
    });

});
$(".btn-danger").attr("onclick", "downvote()");
$(".btn-success").attr("onclick", "upvote()");
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