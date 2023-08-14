export function swiperCustom() {
  const heroSwiperEL = document.querySelector('.js-hero-swiper');
  const swiperTabELems = document.querySelectorAll('.js-swiper-tab')
  if (heroSwiperEL) {
    const swiperHero = new Swiper(heroSwiperEL, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  if (swiperTabELems) {
    swiperTabELems.forEach((swiperTabEL) => {
      new Swiper(swiperTabEL, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    })
  }
}