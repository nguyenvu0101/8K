$(function () {
  if ($('.game-slider').length) {
    try {
      $('.game-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,

        infinite: true,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        touchMove: true,

        autoplay: true,           // Tự động chạy
        autoplaySpeed: 1000,      // Chuyển slide mỗi 2 giây
        pauseOnHover: true,       // Dừng khi di chuột vào

        arrows: false,
        dots: false,

        speed: 400,
        cssEase: 'ease',

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
    } catch (error) {
      console.error('Slick slider error:', error);
    }
  } else {
    console.warn('Element .game-slider not found');
  }
});
