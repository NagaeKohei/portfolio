$(function(){
  $('#hamburger-button').on('click',function(){
    $('#hamburger-list').fadeToggle();
    $('.menu').animate({left: 0}, 300);
    $(this).fadeToggle();
  });
  $('#close').on('click',function(){
    $('#hamburger-list').fadeToggle();
    $('.menu').animate({left: -300}, 300);
    $('#hamburger-button').fadeToggle();
  });
  $('.menu li a').on('click',function(){
    $('#hamburger-list').fadeToggle();
    $('.menu').animate({left: -300}, 300);
    $('#hamburger-button').fadeToggle();
  });
});
