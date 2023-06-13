$(function(){

  $('#question dl dt').click(function(){
    $(this).next().slideToggle();
    $(this).find('.fa-solid').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  });

});
