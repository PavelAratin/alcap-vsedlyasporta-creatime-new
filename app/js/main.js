/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fixedMenu.js":
/*!*****************************!*\
  !*** ./src/js/fixedMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fixedMenu": () => (/* binding */ fixedMenu)
/* harmony export */ });
function fixedMenu() {
  var headerFixedMenuEl = document.querySelector('.js-header-fixed-menu');
  var headerEl = document.querySelector('.js-header');
  var sidebarEl = document.querySelector('.js-sidebar');
  var fixedMenuEl = document.querySelector('.js-fixed-menu');
  var assortmentEl = document.querySelector('.js-assortment');
  window.addEventListener('scroll', function () {
    var scrollDistance = window.scrollY;

    if (scrollDistance >= headerEl.offsetHeight) {
      fixedMenuEl.classList.add('js-fixed-menu-show');
    } else {
      fixedMenuEl.classList.remove('js-fixed-menu-show');
    }

    if (fixedMenuEl.classList.contains('js-fixed-menu-show') && sidebarEl) {
      console.log(fixedMenuEl.classList.contains('js-fixed-menu-show'));
      sidebarEl.classList.add('js-fixed-sidebar');
      sidebarEl.style.top = "".concat(headerFixedMenuEl.offsetHeight + 20, "px");

      if (scrollDistance + sidebarEl.offsetHeight + 66 >= assortmentEl.offsetHeight + headerEl.offsetHeight) {
        sidebarEl.classList.add('js-absolute');
        sidebarEl.classList.remove('js-fixed-sidebar');
        sidebarEl.style.top = '';
      } else {
        sidebarEl.classList.add('js-fixed-sidebar');
        sidebarEl.classList.remove('js-absolute');
      }
    } else {
      if (sidebarEl !== null) {
        sidebarEl.classList.remove('js-fixed-sidebar');
        sidebarEl.style.top = '';
      }
    }
  });
}

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var modals = function modals() {
  //убрать прыжок при открытии модального окна
  var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
  var fixBlocks = document.querySelectorAll('.js-fix-block');

  function bindModal(triggerSelector, modalSelector, closeSelector) {
    var triggerElems = document.querySelectorAll(triggerSelector);
    var modal = document.querySelector(modalSelector);
    var closeElems = document.querySelectorAll(closeSelector);
    triggerElems.forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        modal.classList.add('js-modal-visible');
        document.body.classList.add('js-stop-scroll');
        fixBlocks.forEach(function (fixBlock) {
          fixBlock.style.paddingRight = paddingOffset;
        });
        document.body.style.paddingRight = paddingOffset;
      });
    });
    closeElems.forEach(function (close) {
      close.addEventListener('click', function () {
        modal.classList.remove('js-modal-visible');
        document.body.classList.remove('js-stop-scroll');
        fixBlocks.forEach(function (fixBlock) {
          fixBlock.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
      });
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal.querySelector('.js-overlay-wrapper')) {
        modal.classList.remove('js-modal-visible');
        document.body.classList.remove('js-stop-scroll');
        fixBlocks.forEach(function (fixBlock) {
          fixBlock.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
      }
    });
  }

  bindModal('.js-call-form-feedback', '.js-form-feedback', '.js-close-button-form');
  bindModal('.js-callform-director', '.js-form-director', '.js-close-button-form');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/rangeSlider.js":
/*!*******************************!*\
  !*** ./src/js/rangeSlider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRangeSlider": () => (/* binding */ getRangeSlider)
/* harmony export */ });
function getRangeSlider() {
  var rangeSlider = document.querySelector('.js-range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': [2000],
        'max': [15000]
      }
    });
    var inputs = document.querySelectorAll('.js-catalog-filter-input');
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });
  }
}
;

/***/ }),

/***/ "./src/js/select.js":
/*!**************************!*\
  !*** ./src/js/select.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var customeSelect = function customeSelect() {
  var element = document.querySelector('.js-custome-select');
  var choices = new Choices(element, {
    searchEnabled: false
  });
  console.log('custome select');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customeSelect);

/***/ }),

/***/ "./src/js/swiperCustom.js":
/*!********************************!*\
  !*** ./src/js/swiperCustom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swiperCustom": () => (/* binding */ swiperCustom)
/* harmony export */ });
function swiperCustom() {
  var heroSwiperEL = document.querySelector('.js-hero-swiper');
  var swiperTabELems = document.querySelectorAll('.js-swiper-tab');

  if (heroSwiperEL) {
    var swiperHero = new Swiper(heroSwiperEL, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination'
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  if (swiperTabELems) {
    swiperTabELems.forEach(function (swiperTabEL) {
      new Swiper(swiperTabEL, {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      });
    });
  }
}

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var tabs = function tabs() {
  var tabBtnElems = document.querySelectorAll('.js-tab-btn');
  var tabContentElems = document.querySelectorAll('.js-tab-content');
  tabBtnElems.forEach(function (item) {
    item.addEventListener('click', function () {
      var currentTabBtn = item;
      var tabBtnId = currentTabBtn.getAttribute('data-tab');
      var currentTabContent = document.querySelector(tabBtnId);

      if (!currentTabBtn.classList.contains('js-active-tab-button')) {
        tabBtnElems.forEach(function (item) {
          item.classList.remove('js-active-tab-button');
        });
        tabContentElems.forEach(function (item) {
          item.classList.remove('js-active-tab-content');
        });
        currentTabBtn.classList.add('js-active-tab-button');
        currentTabContent.classList.add('js-active-tab-content');
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _swiperCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swiperCustom */ "./src/js/swiperCustom.js");
/* harmony import */ var _fixedMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixedMenu */ "./src/js/fixedMenu.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals */ "./src/js/modals.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _rangeSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rangeSlider */ "./src/js/rangeSlider.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select */ "./src/js/select.js");






window.addEventListener('DOMContentLoaded', function () {
  (0,_swiperCustom__WEBPACK_IMPORTED_MODULE_0__.swiperCustom)();
  (0,_fixedMenu__WEBPACK_IMPORTED_MODULE_1__.fixedMenu)();
  (0,_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_rangeSlider__WEBPACK_IMPORTED_MODULE_4__.getRangeSlider)();
  (0,_select__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
