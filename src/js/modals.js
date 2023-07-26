const modals = () => {
  //убрать прыжок при открытии модального окна
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let fixBlocks = document.querySelectorAll('.js-fix-block')
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelector(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modal.classList.add('js-cart-visible')
      document.body.classList.add('js-stop-scroll')
      fixBlocks.forEach((fixBlock) => {
        fixBlock.style.paddingRight = paddingOffset;
      })
      document.body.style.paddingRight = paddingOffset;
    });
    close.addEventListener('click', () => {
      modal.classList.remove('js-cart-visible')
      document.body.classList.remove('js-stop-scroll')
      fixBlocks.forEach((fixBlock) => {
        fixBlock.style.paddingRight = '0px'
      })
      document.body.style.paddingRight = '0px';
    })
    modal.addEventListener('click', (e) => {
      if (e.target === modal.querySelector('.js-overlay-wrapper')) {
        modal.classList.remove('js-cart-visible')
        document.body.classList.remove('js-stop-scroll')
        fixBlocks.forEach((fixBlock) => {
          fixBlock.style.paddingRight = '0px'
        })
        document.body.style.paddingRight = '0px';
      }
    })
  }
  bindModal('.js-cart-call', '.js-cart', '.js-close-button');
  bindModal('.js-cart-call-fixed-menu', '.js-cart', '.js-close-button');
  bindModal('.js-call-form-feedback', '.js-form-feedback', '.js-close-button-form-feedback');
}

export default modals;