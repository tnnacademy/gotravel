(function ($) {

  // hamburguer - open menu mobile
  // ---------------------------
  $(".hamburguer, .menu-mobile > li").click(function () {
    $(".cortina").toggleClass("show");
    $("html").toggleClass("overflow-hidden");
  });

  // close menu mobile
  // ---------------------------
  $(".close-cortina").click(function () {
    $(".cortina").removeClass("show");
  });

})(jQuery);