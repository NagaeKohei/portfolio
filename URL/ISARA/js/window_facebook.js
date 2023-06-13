$(function(){
  // リンクをクリックしたら別のウィンドウを開く
  $('.facebook').click(function(){
    // リンク先のURLを取得
    var url = $(this).attr('href');
    // サブウィンドウのサイズを指定
    var w = 600;
    var h = 400;
    // メインウィンドウのサイズと位置を取得
    var mw = window.outerWidth;
    var mh = window.outerHeight;
    var mx = window.screenX;
    var my = window.screenY;
    // サブウィンドウの位置を計算
    var x = mx + (mw - w) / 2;
    var y = my + (mh - h) / 2;
    // サブウィンドウを開く
    window.open(url, '_blank', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
    // リンク先に遷移しないようにする
    return false;
  });
});
