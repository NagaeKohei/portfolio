'use strict'

$(document).ready(function(){
  $('#contact-btn').click(function() {
    $('#login, .bk-color').slideDown();
  });

  $('.back').click(function() {
    $('#login, .bk-color').slideUp();
  });

});

$(window).on('load',function() {
  $('#menu').slideDown('slow');
});




$(window).on('load scroll', function(){
  //現時点のスクロールの高さ取得
  var scrollPosition = $(window).scrollTop();
  //ウィンドウの高さ取得
  var windowHeight = $(window).height();

  $('.animation_box').each(function(){
    //要素の位置（高さ）を取得
    var elemPosition = $(this).offset().top;
    //スクロールの高さが要素の位置を超えたら以下のスタイルを適用
    if(elemPosition < scrollPosition + windowHeight){
      $(this).css({
        opacity: 1,
        transform: 'translateX(0)'
      });
    }
  });

});
