$(function(){
  $('#img-pc img').on('click', function(){
    $('.zoom-contents').fadeIn();
  });
  $('.zoom-contents').on('click', function(){
    $(this).fadeOut();
  });

  $('#img-sp img').on('click', function(){
    $('.zoom-contents-sp').fadeIn();
  });
  $('.zoom-contents-sp').on('click', function(){
    $(this).fadeOut();
  });
});
