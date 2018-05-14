//take form data and POST it to db
$(document).ready(function () {


});
function upvote(todo) {
    $.ajax({
        method: "PUT",
        url: "/post/up",
        data: todo
    }).then(getTodos);
}
function downvote(todo) {
    $.ajax({
        method: "PUT",
        url: "/post/down",
        data: todo
    }).then(getTodos);
}