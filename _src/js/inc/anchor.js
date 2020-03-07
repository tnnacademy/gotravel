(function ($) {
  // menu
  $('.menu > li, .menu-mobile > li').on('click', function (event) {
    event.preventDefault();
    
    var ind = $(this).index();
    var roll = $('.anchor').eq(ind).offset().top - 100;

    $('html, body').animate({
      scrollTop: roll
    }, 400);

    return false;
  });
}(jQuery));