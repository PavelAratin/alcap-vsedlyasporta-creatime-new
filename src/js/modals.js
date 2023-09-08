const modals = () => {
  //убрать прыжок при открытии модального окна
  let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  let fixBlocks = document.querySelectorAll('.js-fix-block')
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    const triggerElems = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const closeElems = document.querySelectorAll(closeSelector);
    triggerElems.forEach(function (trigger) {
      trigger.addEventListener('click', (e) => {
        if (e.target) {
          e.preventDefault();
        }
        modal.classList.add('js-modal-visible')
        document.body.classList.add('js-stop-scroll')
        fixBlocks.forEach((fixBlock) => {
          fixBlock.style.paddingRight = paddingOffset;
        })
        document.body.style.paddingRight = paddingOffset;
      });
    })
    closeElems.forEach(function (close) {
      close.addEventListener('click', () => {
        modal.classList.remove('js-modal-visible')
        document.body.classList.remove('js-stop-scroll')
        fixBlocks.forEach((fixBlock) => {
          fixBlock.style.paddingRight = '0px'
        })
        document.body.style.paddingRight = '0px';
      })
    })
    modal.addEventListener('click', (e) => {
      if (e.target === modal.querySelector('.js-overlay-wrapper')) {
        modal.classList.remove('js-modal-visible')
        document.body.classList.remove('js-stop-scroll')
        fixBlocks.forEach((fixBlock) => {
          fixBlock.style.paddingRight = '0px'
        })
        document.body.style.paddingRight = '0px';
      }
    })
  }
  bindModal('.js-call-form-feedback', '.js-form-feedback', '.js-close-button-form');
  bindModal('.js-callform-director', '.js-form-director', '.js-close-button-form');
}

export default modals;