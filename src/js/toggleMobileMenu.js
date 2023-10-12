export const getToggleMobilemenu = function () {
  const burgerButtonEl = document.querySelector('.js-burger-button');
  const mobileMenuEl = document.querySelector('.js-mobile-menu');
  const mobileNavEl = document.querySelector('.js-mobile-nav');
  const closeMenuButtonEl = document.querySelector('.js-close-menu-button');
  burgerButtonEl.addEventListener('click', function () {
    mobileMenuEl.classList.add('js-mobile-menu-visible');
    mobileNavEl.classList.add('js-mobile-nav-visible');
    document.body.classList.add('.js-stop-scroll');
  })
  closeMenuButtonEl.addEventListener('click', function () {
    mobileMenuEl.classList.remove('js-mobile-menu-visible');
    mobileNavEl.classList.remove('js-mobile-nav-visible');
    document.body.classList.remove('.js-stop-scroll');
  })
}