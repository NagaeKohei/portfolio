$(document).ready(function(){
  var target = $('.target'); // 対象の要素

  // スクロール時の処理
  $(window).scroll(function(){
    var scroll = $(window).scrollTop(); // スクロール量
    if(scroll > 0){
      // 対象の要素が画面内に入った時にフェードインする
      target.fadeIn();
    } else {
      // 対象の要素が画面外に出た時に再び非表示にする
      target.fadeOut();
    }
  });
});
