webpackHotUpdate("static/development/pages/learn.js",{

/***/ "./components/LearnCard.js":
/*!*********************************!*\
  !*** ./components/LearnCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");


var _this = undefined,
    _jsxFileName = "/Users/lynx/projects/hsk/components/LearnCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var renderQuestion = function renderQuestion(question, type) {
  switch (type) {
    case 'characters-pinyin':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }
      }, question.simplified);

    case 'pinyin-characters':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 14
        }
      }, "question.pinyin");

    case 'characters-translation':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 14
        }
      }, "question.simplified");

    case 'translation-characters':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      }, "question.definitions[0]");

    default:
      return 'None';
  }
};

var renderAnswerText = function renderAnswerText(answer, type) {
  switch (type) {
    case 'characters-pinyin':
      return answer.pinyin;

    case 'pinyin-characters':
      return answer.simplified;

    case 'characters-translation':
      return answer.definitions[0];

    case 'translation-characters':
      return "".concat(answer.simplified, " (").concat(answer.pinyin, ")");

    default:
      return 'None';
  }
};

var LearnCard = function LearnCard(props) {
  var word = props.word,
      submitResult = props.submitResult;
  var question = word.question,
      variants = word.variants,
      type = word.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var selectAnswer = function selectAnswer(index, correct) {
    var newSelected = [index].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));
    if (correct) return submitResult(newSelected);
    setSelected(newSelected);
    return null;
  };

  var renderAnswer = function renderAnswer(index, variant, correct) {
    var isSelected = selected.includes(index);
    var correctColor = correct ? 'success' : 'danger';
    var color = !isSelected ? 'secondary' : correctColor;
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      lg: 6,
      md: 12,
      sm: 12,
      className: "mb-4",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      block: true,
      color: color,
      disabled: isSelected,
      key: index,
      onClick: function onClick() {
        return selectAnswer(index, correct);
      },
      size: "lg",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, renderAnswerText(variant, type)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "learn-card mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, renderQuestion(question, type)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, variants.map(function (variant, i) {
    return renderAnswer(i, variant, question.simplified === variant.simplified);
  })));
};

LearnCard.propTypes = {
  word: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  submitResult: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LearnCard);

/***/ })

})
//# sourceMappingURL=learn.js.6b37619178d84d813aa9.hot-update.js.map