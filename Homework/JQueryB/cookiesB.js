$(document).ready(function(){

  $("#ingredients").click(function(){
    $("#.gridContent div:first-child ul").toggle();
  });

  $("#equipment").click(function(){
    $("#gridContent div:nth-child(2) ul").toggle();
  });

  $("#recipe").click(function(){
    $("#gridContent div:nth-child(3) ol").show();
  });

  $("#recipe").mouseover(function(){
    $(".gridContent div:nth-child(3))").css("background-color", "rgba(219, 56, 105, 0.21)");
  });

  $("footer").mouseover(function(){
    $("footer p").html("Don't eat all of them!");
  });

  $("footer").mouseleave(function(){
    $("footer p").html("Now go eat some cookies!");
  });

});
