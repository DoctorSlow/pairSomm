//GET data from db, establish UPDATE for voting
$(".btn-danger").attr("onclick", "downvote()");
$(".btn-success").attr("onclick", "upvote()");
function downvote(todo) {
    $.ajax({
        method: "PUT",
        url: "/post/down",
        data: todo
    }).then(getTodos);
}
function upvote(todo) {
    $.ajax({
        method: "PUT",
        url: "/post/up",
        data: todo
    }).then(getTodos);
}