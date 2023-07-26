const tabs = () => {
  const tabBtnElems = document.querySelectorAll('.js-tab-btn');
  const tabContentElems = document.querySelectorAll('.js-tab-content');
  tabBtnElems.forEach((item) => {
    item.addEventListener('click', () => {
      let currentTabBtn = item;
      let tabBtnId = currentTabBtn.getAttribute('data-tab');
      let currentTabContent = document.querySelector(tabBtnId);

      if (!currentTabBtn.classList.contains('js-active-tab-button')) {
        tabBtnElems.forEach((item) => {
          item.classList.remove('js-active-tab-button')
        })
        tabContentElems.forEach((item) => {
          item.classList.remove('js-active-tab-content')
        })
        currentTabBtn.classList.add('js-active-tab-button')
        currentTabContent.classList.add('js-active-tab-content')
      }
    })
  })
}

export default tabs;