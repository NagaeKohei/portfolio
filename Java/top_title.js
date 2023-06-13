$(function(){

  var title = $("#top h1 span");
  $(window).on("load", function(){
      title.animation({bottom:"0px"},1000,"linear");
  });
});
