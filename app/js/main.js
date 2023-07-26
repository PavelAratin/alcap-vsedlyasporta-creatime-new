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
  var headerEl = document.querySelector('.js-header-fixed-menu');
  var fixedMenuEl = document.querySelector('.js-fixed-menu');
  window.addEventListener('scroll', function () {
    if (this.scrollY >= headerEl.offsetHeight) {
      fixedMenuEl.classList.add('js-fixed-menu-show');
    } else {
      fixedMenuEl.classList.remove('js-fixed-menu-show');
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
    var trigger = document.querySelector(triggerSelector);
    var modal = document.querySelector(modalSelector);
    var close = document.querySelector(closeSelector);
    trigger.addEventListener('click', function (e) {
      if (e.target) {
        e.preventDefault();
      }

      modal.classList.add('js-cart-visible');
      document.body.classList.add('js-stop-scroll');
      fixBlocks.forEach(function (fixBlock) {
        fixBlock.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset;
    });
    close.addEventListener('click', function () {
      modal.classList.remove('js-cart-visible');
      document.body.classList.remove('js-stop-scroll');
      fixBlocks.forEach(function (fixBlock) {
        fixBlock.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = '0px';
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal.querySelector('.js-overlay-wrapper')) {
        modal.classList.remove('js-cart-visible');
        document.body.classList.remove('js-stop-scroll');
        fixBlocks.forEach(function (fixBlock) {
          fixBlock.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
      }
    });
  }

  bindModal('.js-cart-call', '.js-cart', '.js-close-button');
  bindModal('.js-cart-call-fixed-menu', '.js-cart', '.js-close-button');
  bindModal('.js-call-form-feedback', '.js-form-feedback', '.js-close-button-form-feedback');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

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
  swiperTabELems.forEach(function (swiperTabEL) {
    new Swiper(swiperTabEL, {
      // Optional parameters
      direction: 'horizontal',
      loop: false,
      slidesPerView: 4,
      spaceBetween: 20,
      // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  });
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




window.addEventListener('DOMContentLoaded', function () {
  (0,_swiperCustom__WEBPACK_IMPORTED_MODULE_0__.swiperCustom)();
  (0,_fixedMenu__WEBPACK_IMPORTED_MODULE_1__.fixedMenu)();
  (0,_modals__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
//# sourceMappingURL=main.js.map
