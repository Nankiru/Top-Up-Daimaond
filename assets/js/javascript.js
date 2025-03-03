var swiper = new Swiper(".fraction-slide-carousel", {
    loop: true,
    fraction: true,
    navigation: {
      nextEl: ".fraction-slide-carousel .swiper-button-next",
      prevEl: ".fraction-slide-carousel .swiper-button-prev",
    },
    pagination: {
      el: '.fraction-slide-carousel .swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function(number) {
        return number;
      }
    },
    });