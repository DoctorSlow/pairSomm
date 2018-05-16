//GET data from db, establish UPDATE for voting
$(document).ready(function () {
    $.get("/post/:id", function (data) {

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
        $("#vote-count1").text(ups);
        $("#vote-count2").text(downs);
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
}; 

function hideVote1() {
        var x = document.getElementById("vote-count1");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }; 

    function hideVote2() {
            var x = document.getElementById("vote-count2");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }; 