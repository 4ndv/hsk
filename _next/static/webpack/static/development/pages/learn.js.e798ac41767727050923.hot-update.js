webpackHotUpdate("static/development/pages/learn.js",{

/***/ "./components/Learn.js":
/*!*****************************!*\
  !*** ./components/Learn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _LearnCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LearnCard */ "./components/LearnCard.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Link */ "./components/Link.js");



var _this = undefined,
    _jsxFileName = "/Users/lynx/projects/hsk/components/Learn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var renderMistakes = function renderMistakes(mistakes) {
  if (mistakes.length === 0) return null;
  var mistakesElements = mistakes.map(function (mistake) {
    var question = mistake.question;
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
      key: question.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "Character: "), question.simplified), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, "Pinyin: "), question.pinyin), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("b", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, "Definitions: "), question.definitions.join('; ')));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Mistakes"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, mistakesElements));
};

var Learn = function Learn(props) {
  var data = props.data,
      config = props.config;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      position = _useState[0],
      setPosition = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      correct = _useState2[0],
      setCorrect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      errors = _useState3[0],
      setErrors = _useState3[1];

  console.log(data);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setPosition(0);
    setCorrect(0);
    setErrors([]);
  }, [config]);

  var submitResult = function submitResult(result) {
    var word = result.word,
        selected = result.selected;
    setTimeout(function () {
      setPosition(position + 1);

      if (selected.length === 1) {
        setCorrect(correct + 1);
      } else {
        setErrors([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(errors), [word]));
      }
    }, 500);
  };

  var tryAgain = function tryAgain() {
    window.location.reload();
  };

  var retryIncorrect = function retryIncorrect() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
      pathname: '/learn',
      query: {
        config: JSON.stringify(_objectSpread({}, config, {
          forceIds: errors.map(function (error) {
            return error.id;
          })
        }))
      }
    });
  };

  if (position >= data.length) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    }, __jsx("span", {
      role: "img",
      "aria-label": "hooray",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, "\uD83C\uDF89"), ' ', "You've answered all the questions!"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }
    }, "Correct answers:", ' ', correct), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }
    }, "Incorrect answers:", ' ', data.length - correct), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 9
      }
    }, "Total answers:", ' ', data.length), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      onClick: tryAgain,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }
    }, "Try again"), errors.length > 0 ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "ml-1",
      onClick: retryIncorrect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 32
      }
    }, "Retry incorrect") : null, __jsx(_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
      href: "/",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      className: "ml-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 26
      }
    }, "Return to home"))), renderMistakes(errors));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
    multi: true,
    className: "mb-1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
    bar: true,
    color: "danger",
    value: 100.0 / data.length * (data.length - correct),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Progress"], {
    bar: true,
    color: "success",
    value: 100.0 / data.length * correct,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  })), __jsx(_LearnCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    word: data[position],
    key: position,
    submitResult: submitResult,
    config: config,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }));
};

Learn.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object).isRequired,
  config: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Learn);

/***/ })

})
//# sourceMappingURL=learn.js.e798ac41767727050923.hot-update.js.map