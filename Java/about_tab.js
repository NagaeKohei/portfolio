$(function(){
  //tab1以外を非表示
  $('#about-contents div[id != "about-tab1"]').hide();

  //タブをクリック
  $('#about-metext ul li a').on('click', function(){
    //クリック時の処理

    $('#about-contents div').hide();

    $($(this).attr('href')).show();

    return false;
  });
});
