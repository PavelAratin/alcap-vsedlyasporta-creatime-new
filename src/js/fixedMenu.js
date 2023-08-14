export function fixedMenu() {
  const headerFixedMenuEl = document.querySelector('.js-header-fixed-menu');
  const headerEl = document.querySelector('.js-header');
  const sidebarEl = document.querySelector('.js-sidebar');
  const fixedMenuEl = document.querySelector('.js-fixed-menu');
  const assortmentEl = document.querySelector('.js-assortment');

  window.addEventListener('scroll', function () {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= headerEl.offsetHeight) {
      fixedMenuEl.classList.add('js-fixed-menu-show');
    } else {
      fixedMenuEl.classList.remove('js-fixed-menu-show');
    }
    if (fixedMenuEl.classList.contains('js-fixed-menu-show')) {
      sidebarEl.classList.add('js-fixed-sidebar');
      sidebarEl.style.top = `${headerFixedMenuEl.offsetHeight + 20}px`;
      if (scrollDistance + sidebarEl.offsetHeight + 66 >= assortmentEl.offsetHeight + headerEl.offsetHeight) {
        sidebarEl.classList.add('js-absolute');
        sidebarEl.classList.remove('js-fixed-sidebar');
        sidebarEl.style.top = '';
      } else {
        sidebarEl.classList.add('js-fixed-sidebar');
        sidebarEl.classList.remove('js-absolute');
      }
    } else {
      sidebarEl.classList.remove('js-fixed-sidebar');
      sidebarEl.style.top = '';
    }
  })
}