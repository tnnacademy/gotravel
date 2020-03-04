(function ($) {

  // ao rolar exibe menu fixo
  // ---------------------------
  $(window).scroll(function () {
    var widthScreen = $(window).width();
    var valScroll = $(window).scrollTop();
    var target = $(".heroCta").outerHeight();

    if (valScroll > target && widthScreen >= 1200) {
      $('.header').addClass('fixed');
    } else {
      $('.header').removeClass('fixed');
    }
  });

})(jQuery);