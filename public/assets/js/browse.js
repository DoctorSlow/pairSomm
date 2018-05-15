//GET data from db, establish UPDATE for voting
$(document).ready(function () {
    $.get("/post/:id", function (data) {
        alert("Data: " + data.hashtag);
        var firstlink = data.item1;
        var secondlink = data.item2;
        var hashtag = data.hashtag;
        var ups = data.upvotes;
        var downs = data.downvotes;
        console.log(firstlink);
        console.log(secondlink);
        console.log(hashtag);
        console.log(ups);
        console.log(downs);
        $("#image1").attr("src", firstlink);
        $("#image2").attr("src", secondlink);
        $("#hashtags").text(hashtag);
        $("#vote-count1").val(ups);
        $("#vote-count2").val(downs);
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