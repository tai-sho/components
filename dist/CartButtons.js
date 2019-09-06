(window["wpshopifyComponents"] = window["wpshopifyComponents"] || []).push([["CartButtons"],{

/***/ "./components/cart/buttons/button/_state/context.js":
/*!**********************************************************!*\
  !*** ./components/cart/buttons/button/_state/context.js ***!
  \**********************************************************/
/*! exports provided: CartButtonContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartButtonContext\", function() { return CartButtonContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CartButtonContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/button/_state/context.js?");

/***/ }),

/***/ "./components/cart/buttons/button/_state/initial-state.js":
/*!****************************************************************!*\
  !*** ./components/cart/buttons/button/_state/initial-state.js ***!
  \****************************************************************/
/*! exports provided: CartButtonInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartButtonInitialState\", function() { return CartButtonInitialState; });\nfunction CartButtonInitialState(options) {\n  return {\n    componentID: options.componentID,\n    element: options.element,\n    renderFromServer: options.componentOptions.renderFromServer,\n    componentOptions: options.componentOptions\n  };\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/button/_state/initial-state.js?");

/***/ }),

/***/ "./components/cart/buttons/button/_state/provider.jsx":
/*!************************************************************!*\
  !*** ./components/cart/buttons/button/_state/provider.jsx ***!
  \************************************************************/
/*! exports provided: CartButtonProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartButtonProvider\", function() { return CartButtonProvider; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./components/cart/buttons/button/_state/reducer.js\");\n/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial-state */ \"./components/cart/buttons/button/_state/initial-state.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./components/cart/buttons/button/_state/context.js\");\n\n\n\n\n\n\n\nfunction CartButtonProvider(props) {\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"CartButtonReducer\"], Object(_initial_state__WEBPACK_IMPORTED_MODULE_4__[\"CartButtonInitialState\"])(props.options)),\n      _React$useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  var value = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [state, dispatch];\n  }, [state]);\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__[\"CartButtonContext\"].Provider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    value: value\n  }, props));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/button/_state/provider.jsx?");

/***/ }),

/***/ "./components/cart/buttons/button/_state/reducer.js":
/*!**********************************************************!*\
  !*** ./components/cart/buttons/button/_state/reducer.js ***!
  \**********************************************************/
/*! exports provided: CartButtonReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartButtonReducer\", function() { return CartButtonReducer; });\nfunction CartButtonReducer(state, action) {\n  switch (action.type) {\n    default:\n      {\n        throw new Error(\"Unhandled action type: \".concat(action.type, \" in CartButtonReducer\"));\n      }\n  }\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/button/_state/reducer.js?");

/***/ }),

/***/ "./components/cart/buttons/button/index.jsx":
/*!**************************************************!*\
  !*** ./components/cart/buttons/button/index.jsx ***!
  \**************************************************/
/*! exports provided: CartButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartButton\", function() { return CartButton; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/context */ \"./components/cart/_state/context.js\");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../counter */ \"./components/cart/buttons/counter/index.jsx\");\n/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icon */ \"./components/cart/buttons/icon/index.jsx\");\n/* harmony import */ var _state_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_state/provider */ \"./components/cart/buttons/button/_state/provider.jsx\");\n/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/animations */ \"./common/animations/index.js\");\n/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/hooks */ \"./common/hooks/index.js\");\n/* harmony import */ var _common_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/cart */ \"./common/cart/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction CartButton(_ref) {\n  var options = _ref.options;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      shopState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"CartContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 2),\n      cartState = _useContext4[0],\n      cartDispatch = _useContext4[1];\n\n  var counterElement = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var animeSlideInRight = Object(_common_animations__WEBPACK_IMPORTED_MODULE_7__[\"useAnime\"])(_common_animations__WEBPACK_IMPORTED_MODULE_7__[\"slideInRight\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (options.componentOptions.type === 'fixed' && shopState.settings.cart.showFixedCartIcon) {\n      animeSlideInRight(counterElement.current);\n    }\n  }, []);\n\n  function getIconColor() {\n    if (options.componentOptions.componentOptions.type === 'fixed') {\n      return shopState.settings.cart.colorCartBackgroundFixed;\n    }\n\n    return '';\n  }\n\n  function iconStyles() {\n    return {\n      backgroundColor: getIconColor()\n    };\n  }\n\n  function onClick() {\n    cartDispatch({\n      type: 'TOGGLE_CART',\n      payload: true\n    });\n  }\n\n  return Object(_common_hooks__WEBPACK_IMPORTED_MODULE_8__[\"usePortal\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_state_provider__WEBPACK_IMPORTED_MODULE_6__[\"CartButtonProvider\"], {\n    options: options\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"button\", {\n    role: \"button\",\n    ref: counterElement,\n    className: \"wps-btn-cart wps-cart-icon-\".concat(options.componentOptions.type, \" \").concat(Object(_common_cart__WEBPACK_IMPORTED_MODULE_9__[\"isCartEmpty\"])(cartState.checkoutCache.lineItems) ? 'wps-cart-is-empty' : ''),\n    onClick: onClick,\n    \"data-wps-is-ready\": cartState.isReady ? '1' : '0',\n    style: iconStyles()\n  }, options.componentOptions.showCounter && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_4__[\"CartCounter\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icon__WEBPACK_IMPORTED_MODULE_5__[\"CartIcon\"], null)))), options.componentElement);\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/button/index.jsx?");

/***/ }),

/***/ "./components/cart/buttons/counter/index.jsx":
/*!***************************************************!*\
  !*** ./components/cart/buttons/counter/index.jsx ***!
  \***************************************************/
/*! exports provided: CartCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartCounter\", function() { return CartCounter; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/context */ \"./components/cart/_state/context.js\");\n/* harmony import */ var _button_state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/_state/context */ \"./components/cart/buttons/button/_state/context.js\");\n/* harmony import */ var _common_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/cart */ \"./common/cart/index.js\");\n/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/animations */ \"./common/animations/index.js\");\n\n\n\n\n\n\n\n\nfunction CartCounter() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"CartContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      cartState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      shopState = _useContext4[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Object(_common_cart__WEBPACK_IMPORTED_MODULE_5__[\"findTotalCartQuantities\"])(cartState.checkoutCache.lineItems)),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      totalItems = _useState2[0],\n      setTotalItems = _useState2[1];\n\n  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_button_state_context__WEBPACK_IMPORTED_MODULE_4__[\"CartButtonContext\"]),\n      _useContext6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext5, 1),\n      cartButtonState = _useContext6[0];\n\n  var animePulse = Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__[\"useAnime\"])(_common_animations__WEBPACK_IMPORTED_MODULE_6__[\"pulse\"]);\n  var element = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (!cartState.isReady) {\n      return;\n    }\n\n    var total = Object(_common_cart__WEBPACK_IMPORTED_MODULE_5__[\"findTotalCartQuantities\"])(cartState.checkoutCache.lineItems);\n\n    if (!Object(_common_cart__WEBPACK_IMPORTED_MODULE_5__[\"isTotalEmpty\"])(total)) {\n      setTotalItems(total);\n      animePulse(element.current);\n    }\n  }, [cartState.checkoutCache.lineItems]);\n\n  function counterStyles() {\n    return {\n      backgroundColor: getBackgroundColor(),\n      color: getColor()\n    };\n  }\n\n  function getColor() {\n    if (!cartButtonState.componentOptions.counterTextColor) {\n      if (cartButtonState.componentOptions.type !== 'fixed') {\n        return '#000';\n      }\n    }\n\n    if (cartButtonState.componentOptions.type !== 'fixed') {\n      return cartButtonState.componentOptions.counterTextColor;\n    }\n\n    return shopState.settings.cart.colorCartCounterFixed;\n  }\n\n  function getBackgroundColor() {\n    if (!cartButtonState.componentOptions.counterBackgroundColor) {\n      if (cartButtonState.componentOptions.componentOptions.type !== 'fixed') {\n        return shopState.settings.cart.colorCounter;\n      }\n    }\n\n    return cartButtonState.componentOptions.counterBackgroundColor;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    style: counterStyles(cartButtonState),\n    \"data-wps-is-big\": totalItems > 9 ? true : false,\n    className: \"wps-cart-counter\",\n    ref: element\n  }, totalItems));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/counter/index.jsx?");

/***/ }),

/***/ "./components/cart/buttons/icon/index.jsx":
/*!************************************************!*\
  !*** ./components/cart/buttons/icon/index.jsx ***!
  \************************************************/
/*! exports provided: CartIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CartIcon\", function() { return CartIcon; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/_state/context */ \"./components/cart/buttons/button/_state/context.js\");\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/hooks */ \"./common/hooks/index.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction CartIcon() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_button_state_context__WEBPACK_IMPORTED_MODULE_2__[\"CartButtonContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      cartButtonState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ShopContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      shopState = _useContext4[0];\n\n  function getIconColor() {\n    if (cartButtonState.componentOptions.type === 'fixed') {\n      return shopState.settings.cart.colorCartIconFixed;\n    }\n\n    return cartButtonState.componentOptions.iconColor;\n  }\n\n  function iconStyles() {\n    return {\n      fill: getIconColor()\n    };\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, cartButtonState.componentOptions.icon ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: cartButtonState.componentOptions.icon,\n    className: \"wps-icon wps-icon-cart\"\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"svg\", {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    className: \"wps-icon wps-icon-cart\",\n    viewBox: \"0 0 25 25\",\n    enableBackground: \"new 0 0 25 25\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"g\", {\n    style: iconStyles()\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"path\", {\n    d: \"M24.6 3.6c-.3-.4-.8-.6-1.3-.6h-18.4l-.1-.5c-.3-1.5-1.7-1.5-2.5-1.5h-1.3c-.6 0-1 .4-1 1s.4 1 1 1h1.8l3 13.6c.2 1.2 1.3 2.4 2.5 2.4h12.7c.6 0 1-.4 1-1s-.4-1-1-1h-12.7c-.2 0-.5-.4-.6-.8l-.2-1.2h12.6c1.3 0 2.3-1.4 2.5-2.4l2.4-7.4v-.2c.1-.5-.1-1-.4-1.4zm-4 8.5v.2c-.1.3-.4.8-.5.8h-13l-1.8-8.1h17.6l-2.3 7.1z\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"circle\", {\n    cx: \"9\",\n    cy: \"22\",\n    r: \"2\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"circle\", {\n    cx: \"19\",\n    cy: \"22\",\n    r: \"2\"\n  }))));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/icon/index.jsx?");

/***/ }),

/***/ "./components/cart/buttons/index.jsx":
/*!*******************************************!*\
  !*** ./components/cart/buttons/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ \"./components/cart/buttons/button/index.jsx\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/context */ \"./components/cart/_state/context.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v4 */ \"./node_modules/uuid/v4.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nfunction CartButtons() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"CartContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      cartState = _useContext2[0];\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, cartState.buttons.map(function (buttonOptions) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_button__WEBPACK_IMPORTED_MODULE_2__[\"CartButton\"], {\n      key: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),\n      options: buttonOptions\n    });\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartButtons);\n\n//# sourceURL=webpack://wpshopifyComponents/./components/cart/buttons/index.jsx?");

/***/ })

}]);