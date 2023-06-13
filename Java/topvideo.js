$(window).on('scroll resize', function () {
  // ウインドウのスクロール量取得
  var windowScrollTop = $(window).scrollTop();
  // ウインドウの高さ取得
  var windowHeight = $(window).height();
  // 動画の要素取得
  var video = $('.video-container');
  // 動画の位置取得
  var videoOffsetTop = video.offset().top;
  // 動画の高さ取得
  var videoHeight = video.height();
  // 動画が画面内にあるか判定
  if (windowScrollTop + windowHeight > videoOffsetTop && windowScrollTop < videoOffsetTop + videoHeight) {
    // 動画を再生
    video.get(0).play();
    // スクロール量に応じて動画のスケールを変更
    var scale = (1 - (videoOffsetTop - windowScrollTop) / windowHeight) * 1.5;
    video.css('transform', 'scale(' + scale + ')');
  } else {
    // 動画を停止
    video.get(0).pause();
  }
});
