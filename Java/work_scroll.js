$(function(){
  //--------------------------------------------------------------------------------
  // マウスホイールで横スクロール処理
  //--------------------------------------------------------------------------------
  // スクロール後の位置
  var moving;
  // スクロール後の位置+余韻の距離
  var aftermov;
  // 余韻の距離
  var after = 200;
  // 1スクロールの移動距離
  var speed = 60;
  // アニメーション
  var animation = 'easeOutCirc';
  // アニメーションスピード
  var anm_speed = 500;
  // 前回のスクロール位置
  var lastmov = 0;
  $('#works-list').mousewheel(function(event, mov) {
      //  スクロール後の位置の算出
      var moving = $(this).scrollLeft() - mov * speed;
      // スクロールする
      $(this).scrollLeft(moving);
      // 余韻の計算
      if (mov < 0) {
          // 下にスクロールしたとき
          aftermov =  moving + after;
      } else {
          // 上にスクロールしたとき
          aftermov =  moving - after;
      }
      // 横スクロールの終端まで来たら、縦スクロールに切り替える処理
      // スクロール位置が前回の位置と同じかどうかチェックし
      // 同じだったら、縦スクロールする
      // 違うなら、横スクロールする
      if(lastmov == aftermov) {
          // 縦スクロール
          return true;
      } else {
          lastmov = aftermov;
          // 縦スクロールさせない
          return false;
      }
  });
});
