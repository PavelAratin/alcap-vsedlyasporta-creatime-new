export function fixedMenu() {
  const headerEl = document.querySelector('.js-header-fixed-menu');
  const fixedMenuEl = document.querySelector('.js-fixed-menu');
  window.addEventListener('scroll', function () {
    if (this.scrollY >= headerEl.offsetHeight) {
      fixedMenuEl.classList.add('js-fixed-menu-show')
    } else {
      fixedMenuEl.classList.remove('js-fixed-menu-show')
    }
  })
}