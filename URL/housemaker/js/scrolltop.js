$(function(){
// IDが「form」で始まるhref属性を持つa要素がクリックされた時に実行する処理
$('a[href^="#"]').on('click', function () {

  // ヘッダーの高さを取得して、スクロール位置を調整する
  var adjust = $('header').height();

  // スクロールの速さを指定する
  var speed = 600;

  // href属性の値を取得する
  var href= $(this).attr("href");

  // href属性の値が空の場合、または「#」の場合は、ページトップをターゲットにする
  // そうでない場合は、指定されたhref属性の値をターゲットにする
  var target = $(href == "#" || href == "" ? 'html' : href);

  // ターゲット要素の位置を取得する
  var position = target.offset().top - adjust;

  // スクロールアニメーションを実行する
  $('body,html').animate({scrollTop:position}, speed, 'swing');

  // デフォルトのリンク動作をキャンセルする
  return false;
});});
