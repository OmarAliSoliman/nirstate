$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    infinite: true,
    loop: true,
    dots: false,
    // autoplay: true,
    asNavFor: ".slider-nav",
    customPaging: function (slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>'+(i+1)+'</a>';
    },
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    asNavFor: ".slider-for",
    centerMode: true,
    focusOnSelect: true,
  });

  // company slider
  $(".gallery-responsive").slick({
    dots: false,
    infinite: true,
    speed: 300,
    loop: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
