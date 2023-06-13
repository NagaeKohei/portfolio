$(function(){
  $('#header-menu').on('click', function(){

    //「MENU」表示を「CLOSE」に変換
    if ($('#header-menu p').text() === 'CLOSE') {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('MENU');
      $('#header-menu p').animate({opacity: 1}, 800);
    } else {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('CLOSE');
      $('#header-menu p').animate({opacity: 1}, 800);
    }

    //ハンバーガーメニューアイコンの変化
    $('.hamburger').toggleClass("open");

    //メニューの表示非表示
    $('#menu-list').slideToggle();
    $('#menu-back').slideToggle();

  });
  $('#menu-list ul').on("click",function(){
    //「MENU」表示を「CLOSE」に変換
    if ($('#header-menu p').text() === 'CLOSE') {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('MENU');
      $('#header-menu p').animate({opacity: 1}, 800);
    } else {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('CLOSE');
      $('#header-menu p').animate({opacity: 1}, 800);
    }

    //ハンバーガーメニューアイコンの変化
    $('.hamburger').toggleClass("open");

    //メニューの表示非表示
    $('#menu-list').slideToggle();
    $('#menu-back').slideToggle();
  });

  $('#menu-back').on("click",function(){
    //「MENU」表示を「CLOSE」に変換
    if ($('#header-menu p').text() === 'CLOSE') {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('MENU');
      $('#header-menu p').animate({opacity: 1}, 800);
    } else {
      $('#header-menu p').css("opacity", 0);
      $('#header-menu p').text('CLOSE');
      $('#header-menu p').animate({opacity: 1}, 800);
    }

    //ハンバーガーメニューアイコンの変化
    $('.hamburger').toggleClass("open");

    //メニューの表示非表示
    $('#menu-list').slideToggle();
    $('#menu-back').slideToggle();
});
});
