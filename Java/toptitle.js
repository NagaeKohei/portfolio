$(window).scroll(function() {
  // スクロール量を取得
  var scroll = $(this).scrollTop();
  // 透明度を計算
  var opacity = 1 - scroll / 1000;
  // 文字に透明度を適用
  $("#top h1").css("opacity", opacity);
});
