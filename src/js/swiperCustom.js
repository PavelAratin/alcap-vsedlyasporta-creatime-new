export function swiperCustom() {
  const heroSwiperEL = document.querySelector('.js-hero-swiper');
  const viewedListSwiperEL = document.querySelector('.js-viewed-list-swiper');
  const swiperTabELems = document.querySelectorAll('.js-swiper-tab')
  const swiperBigThumbELems = document.querySelectorAll('.js-swiper-big-thumb')
  const swiperMinThumbELems = document.querySelectorAll('.js-swiper-min-thumb')
  if (heroSwiperEL) {
    new Swiper(heroSwiperEL, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
  if (swiperTabELems) {
    swiperTabELems.forEach((swiperTabEL) => {
      new Swiper(swiperTabEL, {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          620: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          900: {
            slidesPerView: 3,
          },
          // when window width is >= 640px
          1240: {
            slidesPerView: 4,
          }
        }
      });
    })
  }
  if (swiperBigThumbELems.length && swiperMinThumbELems.length) {
    swiperMinThumbELems.forEach(function (swiperMinThumbEL, swiperMinThumbELIndex) {
      new Swiper(swiperMinThumbEL, {
        direction: 'vertical',
        spaceBetween: 10,
        slidesPerView: 3,
        navigation: {
          nextEl: `.swiper-button-next${swiperMinThumbELIndex + 1}`,
          prevEl: `.swiper-button-prev${swiperMinThumbELIndex + 1}`,
        },
      })
      swiperBigThumbELems.forEach(function (swiperBigThumbEL, swiperBigThumbELIndex) {
        new Swiper(swiperBigThumbEL, {
          direction: 'horizontal',
          slidesPerView: 1,
          thumbs: {
            swiper: swiperMinThumbELIndex === swiperBigThumbELIndex ? swiperMinThumbEL : ''
          }
        })
      })
    })
  }
  if (viewedListSwiperEL) {
    new Swiper(viewedListSwiperEL, {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        620: {
          slidesPerView: 2,
        },
        // when window width is >= 480px
        900: {
          slidesPerView: 3,
        },
        // when window width is >= 640px
        1240: {
          slidesPerView: 4,
        }
      }
    });
  }
}