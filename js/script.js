$(function () {

  //スクロールでヘッダーの色を変更
  //初期設定
  $('.font--color').css('color', '#3E0000');
  $('.header').css('background-color', 'transparent');
  // menu表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 584) {
      $('.font--color').css('color', '#ffffff');
      $('.header').css('background-color', '#EA8988');
    } else {
      $('.font--color').css('color', '#3E0000');
      $('.header').css('background-color', 'transparent');
    }
  });

  $('.display--none').css('visibility', 'hidden');
  $('.display--none').css('opacity', '0');
  // menu表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 628) {
      $('.display--none').css('visibility', 'visible');
      $('.display--none').css('opacity', '1');
    } else {
      $('.display--none').css('visibility', 'hidden');
      $('.display--none').css('opacity', '0');
    }
  });

  // $('.header--none').css('visibility', 'visible');
  // $('.header--none').css('opacity', '1');
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 5050) {
  //     $('.header--none').css('visibility', 'hidden');
  //     $('.header--none').css('opacity', '0');
  //   } else {
  //     $('.header--none').css('visibility', 'visible');
  //     $('.header--none').css('opacity', '1');
  //   }
  // });

  //menuボタンをクリックしたら表示
  $('.openbtn,.header__nav').click(function () {
    $('.openbtn').toggleClass('active');
    $('.header__nav').toggleClass("active");
  });

});