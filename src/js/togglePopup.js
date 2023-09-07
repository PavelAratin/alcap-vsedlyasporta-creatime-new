export function toggleDisplayPopup() {
  const btnPlusEl = document.querySelector('.js-button-plus');
  const popupEl = document.querySelector('.js-alcap-popup');
  const cartItemAmountEl = document.querySelector('.js-cart-item-amount');
  btnPlusEl.addEventListener('click', function () {
    if (this.closest('.js-cart-item-amount')) {
      let coords = cartItemAmountEl.getBoundingClientRect()
      console.log(coords);

      let top = coords.top + window.pageYOffset - cartItemAmountEl.offsetHeight
      let left = coords.left + window.pageXOffset - cartItemAmountEl.offsetWidth / 2
      console.log(top);
      console.log(left);
      popupEl.style.top = `${top}px`
      popupEl.style.left = `${left}px`

    }

  })
  // console.log('click');
  // console.log(btnPlusEl);
  // console.log(popupEl);
}