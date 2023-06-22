$(function () {
  // animation scroll js
  var html_body = $('html, body');
  $('.navbar a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 90
        }, 1400);
        return false;
      }
    }
  });

  //testimonial slider
  $(".slider").slick({
    prevArrow: '<i class="fa-solid fa-angle-left text-white prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right text-white next"></i>'
  });

  // books slider

  $('.books-slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 5,
    centerPadding: '60px',
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left text-white prev"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right text-white next"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          centerPadding: '40px',
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 774,
        settings: {
          centerPadding: '20px',
          slidesToShow: 2.5,
          slidesToScroll: 1
        }
      }
    ]
  });

});