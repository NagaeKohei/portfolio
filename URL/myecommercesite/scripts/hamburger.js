$(function(){
  $('.hamburger-menu').on('click', function(){
    //ハンバーガーメニューアイコンの変化
    $('.hamburger').toggleClass("open");

    //メニューの表示非表示
    $('.header-menu-sp').slideToggle();
    $('.menu-background').slideToggle();
  });
});

$(function() {
  // 初期状態で最初の2つのニュース項目を表示し、それ以降を非表示に設定
  $('.accordion-content').hide();

  // アコーディオンヘッダーがクリックされたときにコンテンツをトグル
  $('.accordion-btn').click(function() {
      $('.accordion-content').slideToggle();
  });
});