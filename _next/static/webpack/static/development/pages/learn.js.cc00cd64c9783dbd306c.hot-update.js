webpackHotUpdate("static/development/pages/learn.js",{

/***/ "./components/Learn.js":
/*!*****************************!*\
  !*** ./components/Learn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LearnCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LearnCard */ "./components/LearnCard.js");
var _this = undefined,
    _jsxFileName = "/Users/lynx/projects/hsk/components/Learn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Learn = function Learn(props) {
  var data = props.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      position = _useState[0],
      setPosition = _useState[1];

  console.log(data);

  var submitResult = function submitResult() {
    setPosition(position + 1);
  };

  return __jsx(_LearnCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    word: data[position],
    key: position,
    submitResult: submitResult,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  });
};

Learn.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ })

})
//# sourceMappingURL=learn.js.cc00cd64c9783dbd306c.hot-update.js.map