/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CartApp.js":
/*!************************!*\
  !*** ./src/CartApp.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_CartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/CartItem */ "./src/Components/CartItem.js");
/* harmony import */ var _Components_Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Cart */ "./src/Components/Cart.js");


var item1 = new _Components_CartItem__WEBPACK_IMPORTED_MODULE_0__.CartItem('True', 'Thriller', 35, 5);
var item2 = new _Components_CartItem__WEBPACK_IMPORTED_MODULE_0__.CartItem('Vaery', 'Comedy', 50);
var cart1 = new _Components_Cart__WEBPACK_IMPORTED_MODULE_1__.Cart('midreader');
cart1.addItem(item1, 5);
cart1.addItem(item2, 15); //cart1.addItem({id: 3}, 6);
//cart1.deleteItem(item1);

cart1.changeItemAmount(item2, 20);
cart1.showCart();

/***/ }),

/***/ "./src/Components/Cart.js":
/*!********************************!*\
  !*** ./src/Components/Cart.js ***!
  \********************************/
/*! namespace exports */
/*! export Cart [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => /* binding */ Cart
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validation */ "./src/Components/Validation.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Cart {
  constructor() {
    var discountCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'noDiscount';
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateString(discountCode);
    var discountCodes = {
      bestreader: 30,
      midbestreader: 25,
      midreader: 20,
      newreader: 5,
      noDiscount: 0
    };
    this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
    this.discountCode = discountCode;

    if (Object.keys(discountCodes).find(key => discountCode === key)) {
      Object.keys(discountCodes).some(key => {
        if (discountCode === key) {
          this.discount = discountCodes[key];
        }
      });
    } else this.discount = 0;

    this.cartList = [];
  }

  addItem(cartItem, amount) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateCartItem(cartItem);
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateAmount(amount);
    this.cartList.push(_objectSpread(_objectSpread({}, cartItem), {}, {
      amount
    }));
  }

  deleteItem(cartItem) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateCartItem(cartItem);
    var result = this.cartList.filter(item => item.uuid !== cartItem.uuid ? item : null);
    this.cartList = result;
  }

  changeItemAmount(cartItem, amount) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateCartItem(cartItem);
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateAmount(amount);
    var result = this.cartList.filter(item => item.uuid === cartItem.uuid);
    var [item] = result;
    item.amount = amount;
  }

  cartSummary() {
    var result = this.cartList.map(item => item.price * item.amount - item.price * item.amount * (this.discount / 100)).reduce((acc, el) => acc += el);
    console.log("Your cart is worth ".concat(result.toFixed(2), " PLN."));
  }

  showCart() {
    console.log("\n        Cart:\n            ".concat(this.cartList.map((item, index) => "\n            \n            Product ".concat(index + 1, "\n\n            id: ").concat(item.id, "\n            name: ").concat(item.name, "\n            category: ").concat(item.category, "\n            price: ").concat(item.price, "\n            discount: ").concat(item.discount, "\n            amount: ").concat(item.amount, "\n            ")), "\n        "));
    this.cartSummary();
  }

}
;

/***/ }),

/***/ "./src/Components/CartItem.js":
/*!************************************!*\
  !*** ./src/Components/CartItem.js ***!
  \************************************/
/*! namespace exports */
/*! export CartItem [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartItem": () => /* binding */ CartItem
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Validation */ "./src/Components/Validation.js");


class CartItem {
  constructor(name, category, price) {
    var discount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.default)();
    this.name = name;
    this.category = category;
    this.price = price - price * discount / 100;
    this.discount = discount;
  }

  modifyPrice(price) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateNumber(price);
    this.price = price;
  }

  modifyName(name) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateString(name);
    this.name = name;
  }

  modifyDiscount(discount) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateNumber(price);
    this.discount = discount;
  }

  addCategory(category) {
    _Validation__WEBPACK_IMPORTED_MODULE_0__.Validation.validateString(category);
    this.category = category;
  }

}
;

/***/ }),

/***/ "./src/Components/Validation.js":
/*!**************************************!*\
  !*** ./src/Components/Validation.js ***!
  \**************************************/
/*! namespace exports */
/*! export Validation [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validation": () => /* binding */ Validation
/* harmony export */ });
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartItem */ "./src/Components/CartItem.js");

class Validation {
  constructor() {}

  static validateCartItem(item) {
    if (!(item instanceof _CartItem__WEBPACK_IMPORTED_MODULE_0__.CartItem)) throw new Error("Argument must be a CartItem object.");
  }

  static validateAmount(amount) {
    if (!(typeof amount === 'number')) throw new Error("Argument must be a number.");
    if (isNaN(amount)) throw new Error("Argument must be a number.");
    if (amount < 0) throw new Error("Argument must be greater or equal to zero.");
  }

  static validateString(str) {
    if (!(typeof str === 'string')) throw new Error("Argument must be a string.");
    if (str.length === 0) throw new Error("Empty string.");
  }

  static validateNumber(num) {
    if (!(typeof num === 'number' && !isNaN(num))) throw new Error("Argument should be a number.");
    if (!(num >= 0)) throw new Error("Argument should be more than zero.");
  }

}
;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ rng
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/CartApp.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map