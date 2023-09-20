export function swiperCustom() {
  const heroSwiperEL = document.querySelector('.js-hero-swiper');
  const swiperTabELems = document.querySelectorAll('.js-swiper-tab')
  const swiperBigThumbELems = document.querySelectorAll('.js-swiper-big-thumb')
  const swiperMinThumbELems = document.querySelectorAll('.js-swiper-min-thumb')
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
  if (swiperBigThumbELems.length) {
    swiperMinThumbELems.forEach(function (swiperMinThumbEL, swiperMinThumbELIndex) {
      new Swiper(swiperMinThumbEL, {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
      })
      swiperBigThumbELems.forEach(function (swiperBigThumbEL, swiperBigThumbELIndex) {
        new Swiper(swiperBigThumbEL, {
          direction: 'horizontal',
          slidesPerView: 1,
          // Navigation arrows
          navigation: {
            nextEl: `.swiper-button-next${swiperBigThumbELIndex+1}`,
            prevEl: `.swiper-button-prev${swiperBigThumbELIndex+1}`,
          },
          thumbs: {
            swiper: swiperMinThumbELIndex === swiperBigThumbELIndex ? swiperMinThumbEL : ''
          }
        })
      })
    })
    // const swiperBigThumbELems1 = new Swiper(swiperBigThumbELems, {
    //   direction: 'horizontal',
    //   slidesPerView: 1,
    //   thumbs: {
    //     swiper: swiperMinThumbELems
    //   }
    // })
    // const swiperMinThumbELems1 = new Swiper(swiperMinThumbELems, {
    //   direction: 'vertical',
    //   spaceBetween: 10,
    //   slidesPerView: 3,
    // })
  }
}