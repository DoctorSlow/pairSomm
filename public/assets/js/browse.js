var counter = 0;

$(".btn-success").click(function(){
  counter++;
  $(".vote-count1").text(counter);
});

$(".btn-danger").click(function(){
  counter--;    
  $(".vote-count2").text(counter);
  then(function(userdb) {
    res.json(userdb);
  });
});  
