//testimonial slider
$(".slider").slick({
    prevArrow:'<i class="fa-solid fa-angle-left text-white prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right text-white next"></i>'
});

// books slider

$('.books-slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 5,
    centerPadding: '60px',
    slidesToScroll: 1,
    prevArrow:'<i class="fa-solid fa-angle-left text-white prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right text-white next"></i>',
    responsive: [
      {
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