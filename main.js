$(function () {
  $('.game-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,

    arrows: true,
    dots: false,
    infinite: false,

    swipe: true,          // ✅ bật swipe
    swipeToSlide: true,   // ✅ lướt tới slide bất kỳ
    draggable: true,      // ✅ kéo chuột trên desktop

    touchMove: true,      // ✅ cho mobile

    centerMode: false,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  });
});
