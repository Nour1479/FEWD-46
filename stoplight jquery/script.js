$(".stop-button").on("click",function(){
  $("#stop-light-stop").addClass("stoplight-stop");
  $("#stop-light-slow").removeClass("stoplight-slow");
  $("#stop-light-go").removeClass("stoplight-go")
  clearInterval(yellow);
})

$(".slow-button").on("click",function(){
  $("#stop-light-stop").removeClass("stoplight-stop");
  $("#stop-light-slow").addClass("stoplight-slow");
  $("#stop-light-go").removeClass("stoplight-go")
  clearInterval(yellow);
})

$(".go-button").on("click",function (){
  $("#stop-light-stop").removeClass("stoplight-stop");
  $("#stop-light-slow").removeClass("stoplight-slow");
  $("#stop-light-go").addClass("stoplight-go")
  clearInterval(yellow);
})

$(".caution-button").on("click",function (event){
  yellow = setInterval(stopLightFlashing,1000);
})

  function stopLightFlashing(){
    $("#stop-light-stop").removeClass("stoplight-stop");
    $("#stop-light-slow").toggleClass("stoplight-slow");
    $("#stop-light-go").removeClass("stoplight-go");
    }
