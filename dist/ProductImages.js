(window["wpshopifyComponents"] = window["wpshopifyComponents"] || []).push([["ProductImages"],{

/***/ "./components/products/product/images/featured/index.jsx":
/*!***************************************************************!*\
  !*** ./components/products/product/images/featured/index.jsx ***!
  \***************************************************************/
/*! exports provided: ProductFeaturedImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductFeaturedImage\", function() { return ProductFeaturedImage; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var _items_state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../items/_state/context */ \"./components/items/_state/context.js\");\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gallery/_state/context */ \"./components/products/product/images/gallery/_state/context.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image */ \"./components/products/product/images/image/index.jsx\");\n/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isNull */ \"./node_modules/lodash/isNull.js\");\n/* harmony import */ var lodash_isNull__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isNull__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var drift_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! drift-zoom */ \"./node_modules/drift-zoom/es/Drift.js\");\n\n\n\n\n\n\n\n\n\n\nfunction getVariantImage(variant) {\n  return variant.image;\n}\n\nfunction destroyDrift(drift) {\n  drift.destroy();\n  window.Drift = null;\n  drift = null;\n}\n\nfunction ProductFeaturedImage() {\n  var paneElement = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(true);\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_4__[\"ShopContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      shopState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_items_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ItemsContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      itemsState = _useContext4[0];\n\n  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_2__[\"ProductContext\"]),\n      _useContext6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext5, 1),\n      productState = _useContext6[0];\n\n  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_gallery_state_context__WEBPACK_IMPORTED_MODULE_5__[\"ProductGalleryContext\"]),\n      _useContext8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext7, 1),\n      galleryState = _useContext8[0];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(galleryState.featImage),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      featImage = _useState2[0],\n      setFeatImage = _useState2[1];\n\n  function driftOptions() {\n    return {\n      paneContainer: paneElement.current,\n      inlineOffsetX: -80\n    };\n  }\n\n  function showZoom() {\n    if (lodash_isNull__WEBPACK_IMPORTED_MODULE_7___default()(itemsState.componentOptions.showZoom)) {\n      return shopState.settings.productsImagesShowZoom;\n    }\n\n    return itemsState.componentOptions.showZoom;\n  }\n\n  function hasFeatImage() {\n    return featImage && galleryState.featImageElement;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isFirstRender.current) {\n      isFirstRender.current = false;\n      return;\n    }\n\n    if (galleryState.featImage) {\n      setFeatImage(galleryState.featImage);\n    }\n  }, [galleryState.featImage]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isFirstRender.current) {\n      isFirstRender.current = false;\n      return;\n    }\n\n    if (hasFeatImage() && showZoom()) {\n      var drift = new drift_zoom__WEBPACK_IMPORTED_MODULE_8__[\"default\"](galleryState.featImageElement, driftOptions());\n      return function () {\n        destroyDrift(drift);\n      };\n    }\n  }, [galleryState.featImageElement]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (productState.selectedVariant) {\n      setFeatImage(getVariantImage(productState.selectedVariant));\n    }\n  }, [productState.selectedVariant]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"wps-gallery-featured-wrapper\",\n    ref: paneElement\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"wps-product-image-wrapper\"\n  }, featImage ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_6__[\"ProductImage\"], {\n    isFeatured: true,\n    image: featImage\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_6__[\"ProductImage\"], {\n    isFeatured: true,\n    image: galleryState.featImagePlaceholder\n  })));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/featured/index.jsx?");

/***/ }),

/***/ "./components/products/product/images/gallery/_state/context.js":
/*!**********************************************************************!*\
  !*** ./components/products/product/images/gallery/_state/context.js ***!
  \**********************************************************************/
/*! exports provided: ProductGalleryContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductGalleryContext\", function() { return ProductGalleryContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ProductGalleryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/gallery/_state/context.js?");

/***/ }),

/***/ "./components/products/product/images/gallery/_state/initial-state.js":
/*!****************************************************************************!*\
  !*** ./components/products/product/images/gallery/_state/initial-state.js ***!
  \****************************************************************************/
/*! exports provided: ProductGalleryInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductGalleryInitialState\", function() { return ProductGalleryInitialState; });\nfunction ProductGalleryInitialState(productState) {\n  return {\n    featImage: productState.payload && productState.payload.images ? productState.payload.images[0] : false,\n    featImageElement: false,\n    featImagePlaceholder: {\n      src: '',\n      alt: 'WP Shopify Placeholder Image'\n    }\n  };\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/gallery/_state/initial-state.js?");

/***/ }),

/***/ "./components/products/product/images/gallery/_state/provider.jsx":
/*!************************************************************************!*\
  !*** ./components/products/product/images/gallery/_state/provider.jsx ***!
  \************************************************************************/
/*! exports provided: ProductGalleryProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductGalleryProvider\", function() { return ProductGalleryProvider; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducer */ \"./components/products/product/images/gallery/_state/reducer.js\");\n/* harmony import */ var _initial_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initial-state */ \"./components/products/product/images/gallery/_state/initial-state.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ \"./components/products/product/images/gallery/_state/context.js\");\n\n\n\n\n\n\n\nfunction ProductGalleryProvider(props) {\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_2___default.a.useReducer(_reducer__WEBPACK_IMPORTED_MODULE_3__[\"ProductGalleryReducer\"], Object(_initial_state__WEBPACK_IMPORTED_MODULE_4__[\"ProductGalleryInitialState\"])(props.productState)),\n      _React$useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_React$useReducer, 2),\n      state = _React$useReducer2[0],\n      dispatch = _React$useReducer2[1];\n\n  var value = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {\n    return [state, dispatch];\n  }, [state]);\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__[\"ProductGalleryContext\"].Provider, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n    value: value\n  }, props));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/gallery/_state/provider.jsx?");

/***/ }),

/***/ "./components/products/product/images/gallery/_state/reducer.js":
/*!**********************************************************************!*\
  !*** ./components/products/product/images/gallery/_state/reducer.js ***!
  \**********************************************************************/
/*! exports provided: ProductGalleryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductGalleryReducer\", function() { return ProductGalleryReducer; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ \"./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction ProductGalleryReducer(state, action) {\n  switch (action.type) {\n    case 'SET_FEAT_IMAGE':\n      {\n        return _objectSpread({}, state, {\n          featImage: immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.featImage, {\n            $set: action.payload\n          })\n        });\n      }\n\n    case 'SET_FEAT_IMAGE_ELEMENT':\n      {\n        return _objectSpread({}, state, {\n          featImageElement: immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(state.featImageElement, {\n            $set: action.payload\n          })\n        });\n      }\n\n    default:\n      {\n        throw new Error(\"Unhandled action type: \".concat(action.type, \" in ProductGalleryReducer\"));\n      }\n  }\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/gallery/_state/reducer.js?");

/***/ }),

/***/ "./components/products/product/images/gallery/index.jsx":
/*!**************************************************************!*\
  !*** ./components/products/product/images/gallery/index.jsx ***!
  \**************************************************************/
/*! exports provided: ProductGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductGallery\", function() { return ProductGallery; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/has */ \"./node_modules/lodash/has.js\");\n/* harmony import */ var lodash_has__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_has__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var _items_state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../items/_state/context */ \"./components/items/_state/context.js\");\n/* harmony import */ var _thumbnails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../thumbnails */ \"./components/products/product/images/thumbnails/index.jsx\");\n/* harmony import */ var _featured__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../featured */ \"./components/products/product/images/featured/index.jsx\");\n/* harmony import */ var _state_provider_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_state/provider.jsx */ \"./components/products/product/images/gallery/_state/provider.jsx\");\n\n\n\n\n\n\n\n\n\nfunction ProductGallery() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_items_state_context__WEBPACK_IMPORTED_MODULE_4__[\"ItemsContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      itemsState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      productState = _useContext4[0];\n\n  function hasManyImages() {\n    if (!productState) {\n      return false;\n    }\n\n    return productState.hasManyImages;\n  }\n\n  function isFeaturedOnly() {\n    if (!lodash_has__WEBPACK_IMPORTED_MODULE_2___default()(itemsState.componentOptions, 'showFeaturedOnly')) {\n      return false;\n    }\n\n    return itemsState.componentOptions.showFeaturedOnly;\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_state_provider_jsx__WEBPACK_IMPORTED_MODULE_7__[\"ProductGalleryProvider\"], {\n    productState: productState\n  }, isFeaturedOnly() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featured__WEBPACK_IMPORTED_MODULE_6__[\"ProductFeaturedImage\"], null) : hasManyImages() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featured__WEBPACK_IMPORTED_MODULE_6__[\"ProductFeaturedImage\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_thumbnails__WEBPACK_IMPORTED_MODULE_5__[\"ProductThumbnailImages\"], null)) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_featured__WEBPACK_IMPORTED_MODULE_6__[\"ProductFeaturedImage\"], null)));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/gallery/index.jsx?");

/***/ }),

/***/ "./components/products/product/images/image/index.jsx":
/*!************************************************************!*\
  !*** ./components/products/product/images/image/index.jsx ***!
  \************************************************************/
/*! exports provided: ProductImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductImage\", function() { return ProductImage; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var _items_state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../items/_state/context */ \"./components/items/_state/context.js\");\n/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gallery/_state/context */ \"./components/products/product/images/gallery/_state/context.js\");\n/* harmony import */ var _common_images__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/images */ \"./common/images/index.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../link */ \"./components/link/index.jsx\");\n/* harmony import */ var _common_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/settings */ \"./common/settings/index.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/components */ \"./common/components/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction ProductImage(_ref) {\n  var image = _ref.image,\n      isFeatured = _ref.isFeatured;\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      shopState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_items_state_context__WEBPACK_IMPORTED_MODULE_4__[\"ItemsContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      itemsState = _useContext4[0];\n\n  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]),\n      _useContext6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext5, 1),\n      productState = _useContext6[0];\n\n  var _useContext7 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_gallery_state_context__WEBPACK_IMPORTED_MODULE_5__[\"ProductGalleryContext\"]),\n      _useContext8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext7, 2),\n      galleryState = _useContext8[0],\n      galleryDispatch = _useContext8[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(applyImageSizing()),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      productImageSrc = _useState2[0],\n      setProductImageSrc = _useState2[1];\n\n  function doFeaturedSizing() {\n    return Object(_common_images__WEBPACK_IMPORTED_MODULE_6__[\"addCustomSizingToImageUrl\"])({\n      src: image.src,\n      width: shopState.settings.productsImagesSizingWidth,\n      height: shopState.settings.productsImagesSizingHeight,\n      crop: shopState.settings.productsImagesSizingCrop,\n      scale: shopState.settings.productsImagesSizingScale\n    });\n  }\n\n  function doThumbnailSizing() {\n    return Object(_common_images__WEBPACK_IMPORTED_MODULE_6__[\"addCustomSizingToImageUrl\"])({\n      src: image.src,\n      width: shopState.settings.productsThumbnailImagesSizingWidth,\n      height: shopState.settings.productsThumbnailImagesSizingHeight,\n      crop: shopState.settings.productsThumbnailImagesSizingCrop,\n      scale: shopState.settings.productsThumbnailImagesSizingScale\n    });\n  }\n\n  function applyImageSizing() {\n    if (isFeatured) {\n      if (shopState.settings.productsImagesSizingToggle) {\n        return doFeaturedSizing();\n      }\n\n      return image.src;\n    } else {\n      if (shopState.settings.productsThumbnailImagesSizingToggle) {\n        return doThumbnailSizing();\n      }\n\n      return image.src;\n    }\n  }\n\n  function isShowingLink() {\n    return Object(_common_settings__WEBPACK_IMPORTED_MODULE_8__[\"hasSinglePage\"])() && !Object(_common_components__WEBPACK_IMPORTED_MODULE_9__[\"onSinglePage\"])(itemsState) && isFeatured;\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setProductImageSrc(applyImageSizing());\n\n    if (isFeatured) {\n      galleryDispatch({\n        type: 'SET_FEAT_IMAGE_ELEMENT',\n        payload: imageRef.current\n      });\n    }\n  }, [image]);\n  /*\n  \n  TODO: Fix duplication here. For some reason the Drift image zoom breaks if we move \n  the image tag into a resuable component. Probably something to do with ref forwarding.\n   */\n\n  return isShowingLink() ? productImageSrc && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_link__WEBPACK_IMPORTED_MODULE_7__[\"Link\"], {\n    payload: productState.payload,\n    type: \"products\",\n    shop: shopState\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {\n    imageRef: imageRef,\n    image: image,\n    productImageSrc: productImageSrc,\n    shopState: shopState\n  })) : productImageSrc && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Img, {\n    imageRef: imageRef,\n    image: image,\n    productImageSrc: productImageSrc,\n    shopState: shopState\n  });\n}\n\nfunction Img(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    ref: props.imageRef,\n    itemProp: \"image\",\n    src: props.productImageSrc,\n    className: \"wps-product-image\",\n    alt: props.image.altText,\n    \"data-wps-is-ready\": props.shopState.isShopReady ? '1' : '0',\n    \"data-zoom\": props.image.src\n  }));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/image/index.jsx?");

/***/ }),

/***/ "./components/products/product/images/index.jsx":
/*!******************************************************!*\
  !*** ./components/products/product/images/index.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery */ \"./components/products/product/images/gallery/index.jsx\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var _items_state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../items/_state/context */ \"./components/items/_state/context.js\");\n/* harmony import */ var _common_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/hooks */ \"./common/hooks/index.js\");\n/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/utils */ \"./common/utils/index.js\");\n\n\n\n\n\n\n\n\nfunction ProductImages() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      productState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_items_state_context__WEBPACK_IMPORTED_MODULE_4__[\"ItemsContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 1),\n      itemsState = _useContext4[0];\n\n  return Object(_common_hooks__WEBPACK_IMPORTED_MODULE_5__[\"usePortal\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"wps-component wps-component-products-images\",\n    \"data-wps-component-order\": \"0\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gallery__WEBPACK_IMPORTED_MODULE_2__[\"ProductGallery\"], null))), Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__[\"findPortalElement\"])(productState.element, itemsState.componentOptions.dropzoneProductGallery));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductImages);\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/index.jsx?");

/***/ }),

/***/ "./components/products/product/images/thumbnail/index.jsx":
/*!****************************************************************!*\
  !*** ./components/products/product/images/thumbnail/index.jsx ***!
  \****************************************************************/
/*! exports provided: ProductThumbnailImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductThumbnailImage\", function() { return ProductThumbnailImage; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image */ \"./components/products/product/images/image/index.jsx\");\n/* harmony import */ var _gallery_state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gallery/_state/context */ \"./components/products/product/images/gallery/_state/context.js\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var _shop_state_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shop/_state/context */ \"./components/shop/_state/context.js\");\n\n\n\n\n\n\n\nfunction ProductThumbnailImage(_ref) {\n  var image = _ref.image;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_shop_state_context__WEBPACK_IMPORTED_MODULE_5__[\"ShopContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      shopState = _useContext2[0];\n\n  var _useContext3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_gallery_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ProductGalleryContext\"]),\n      _useContext4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext3, 2),\n      galleryState = _useContext4[0],\n      galleryDispatch = _useContext4[1];\n\n  var _useContext5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_4__[\"ProductContext\"]),\n      _useContext6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext5, 1),\n      productState = _useContext6[0];\n\n  var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(true);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      isActive = _useState2[0],\n      setIsActive = _useState2[1];\n\n  function checkIsActive(featImageSrc) {\n    return featImageSrc === image.src;\n  }\n\n  function handleThumbnailClick() {\n    galleryDispatch({\n      type: 'SET_FEAT_IMAGE',\n      payload: image\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setIsActive(checkIsActive(galleryState.featImage.src));\n  }, [galleryState.featImage]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (productState.selectedVariant) {\n      galleryDispatch({\n        type: 'SET_FEAT_IMAGE',\n        payload: productState.selectedVariant.image\n      });\n      setIsActive(checkIsActive(productState.selectedVariant.image.src));\n    }\n  }, [productState.selectedVariant]);\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"wps-component wps-component-products-images-thumbnail\",\n    onClick: handleThumbnailClick,\n    \"data-wps-is-active\": isActive,\n    \"data-wps-is-ready\": shopState.isShopReady\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_image__WEBPACK_IMPORTED_MODULE_2__[\"ProductImage\"], {\n    isFeatured: false,\n    image: image\n  }));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/thumbnail/index.jsx?");

/***/ }),

/***/ "./components/products/product/images/thumbnails/index.jsx":
/*!*****************************************************************!*\
  !*** ./components/products/product/images/thumbnails/index.jsx ***!
  \*****************************************************************/
/*! exports provided: ProductThumbnailImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProductThumbnailImages\", function() { return ProductThumbnailImages; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _thumbnail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumbnail */ \"./components/products/product/images/thumbnail/index.jsx\");\n/* harmony import */ var _state_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_state/context */ \"./components/products/product/_state/context.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v4 */ \"./node_modules/uuid/v4.js\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEmpty */ \"./node_modules/lodash/isEmpty.js\");\n/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction ProductThumbnailImages() {\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_state_context__WEBPACK_IMPORTED_MODULE_3__[\"ProductContext\"]),\n      _useContext2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useContext, 1),\n      productState = _useContext2[0];\n\n  function hasImages() {\n    return productState.payload && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_5___default()(productState.payload.images);\n  }\n\n  return hasImages() && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: \"wps-thumbnails-wrapper\"\n  }, productState.payload.images.map(function (image) {\n    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_thumbnail__WEBPACK_IMPORTED_MODULE_2__[\"ProductThumbnailImage\"], {\n      key: uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()(),\n      image: image\n    });\n  }));\n}\n\n\n\n//# sourceURL=webpack://wpshopifyComponents/./components/products/product/images/thumbnails/index.jsx?");

/***/ })

}]);