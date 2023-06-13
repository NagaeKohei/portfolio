$(function(){

  $('.flow-image').click(function(){    
    $(this).next('.flow-text').slideToggle();
    $(this).find('.fa-solid').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');

    $('.flow-image').not($(this)).next('.flow-text').slideUp();
    $('.flow-image').not($(this)).find('.fa-solid').addClass('fa-chevron-down').removeClass('fa-chevron-up');
  });

});
