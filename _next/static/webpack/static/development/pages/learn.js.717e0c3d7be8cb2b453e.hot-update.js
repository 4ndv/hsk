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
/* harmony import */ var react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hotkeys-hook */ "./node_modules/react-hotkeys-hook/dist-web/index.js");
/* harmony import */ var _Hider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Hider */ "./components/Hider.js");


var _this = undefined,
    _jsxFileName = "/Users/lynx/projects/hsk/components/LearnCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var renderQuestion = function renderQuestion(config, question, type) {
  var hidePinyin = config.hidePinyin;

  switch (type) {
    case 'characters-pinyin':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      }, question.simplified);

    case 'pinyin-characters':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 14
        }
      }, question.pinyin);

    case 'characters-translation':
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, question.simplified), __jsx("div", {
        className: "comment",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, __jsx(_Hider__WEBPACK_IMPORTED_MODULE_5__["default"], {
        enabled: hidePinyin,
        caption: "Show pinyin",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }
      }, question.pinyin)));

    case 'translation-characters':
      return __jsx("div", {
        className: "question",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      }, question.definitions[0]);

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
      submitResult = props.submitResult,
      config = props.config;
  var question = word.question,
      variants = word.variants,
      type = word.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      selected = _useState[0],
      setSelected = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      disableAll = _useState2[0],
      setDisableAll = _useState2[1];

  var selectAnswer = function selectAnswer(index, correct) {
    if (disableAll) return null;
    var newSelected = [index].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selected));

    if (correct) {
      submitResult({
        word: word,
        selected: newSelected
      });
      setDisableAll(true);
    }

    setSelected(newSelected);
    return null;
  };

  var skip = function skip() {
    if (disableAll) return null;
    var newSelected = [0, 1, 2, 3];
    submitResult({
      word: word,
      selected: newSelected
    });
    setSelected(newSelected);
    setDisableAll(true);
    return null;
  };

  Object(react_hotkeys_hook__WEBPACK_IMPORTED_MODULE_4__["useHotkeys"])('1,2,3,4,space', function (event, _ref) {
    var key = _ref.key;

    if (key === 'space') {
      skip();
    } else {
      var index = +key - 1;
      var correct = variants.findIndex(function (item) {
        return question.simplified === item.simplified;
      });
      selectAnswer(index, index === correct);
    }
  }, [selected]);

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
        lineNumber: 107,
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
        lineNumber: 108,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
      color: "dark",
      className: "float-left mt-1",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    }, index + 1), ' ', renderAnswerText(variant, type)));
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "learn-card mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, renderQuestion(config, question, type)))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, variants.map(function (variant, i) {
    return renderAnswer(i, variant, question.simplified === variant.simplified);
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    block: true,
    color: "warning",
    onClick: function onClick() {
      return skip();
    },
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    color: "dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }, "Space"), ' ', "Skip"))));
};

LearnCard.propTypes = {
  word: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  submitResult: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  config: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LearnCard);

/***/ })

})
//# sourceMappingURL=learn.js.717e0c3d7be8cb2b453e.hot-update.js.map