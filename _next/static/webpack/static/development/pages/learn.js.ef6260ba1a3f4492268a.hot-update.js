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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      correct = _useState2[0],
      setCorrect = _useState2[1];

  console.log(data);

  var submitResult = function submitResult(result) {
    setPosition(position + 1);
    if (result.length === 1) setCorrect(correct + 1);
  };

  if (position >= data.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("span", {
      role: "img",
      "aria-label": "hooray",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, "\uD83C\uDF89"), ' ', "You've answered all the questions!"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, "Correct answers:", correct), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, "Incorrect answers:", data.length - correct), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, "Total answers:", data.length));
  }

  return __jsx(_LearnCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    word: data[position],
    key: position,
    submitResult: submitResult,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=learn.js.ef6260ba1a3f4492268a.hot-update.js.map