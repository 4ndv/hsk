webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SettingsForm.js":
/*!************************************!*\
  !*** ./components/SettingsForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _ButtonCheckboxGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ButtonCheckboxGroup */ "./components/ButtonCheckboxGroup.js");
var _this = undefined,
    _jsxFileName = "/Users/lynx/projects/hsk/components/SettingsForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var SettingsForm = function SettingsForm(props) {
  var onSubmit = props.onSubmit;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])({
    defaultValues: {
      levels: [1, 2, 3, 4],
      wordsLimit: 0,
      modes: ['characters-pinyin'],
      alwaysShowPinyin: false,
      alwaysShowTranslation: false
    }
  }),
      control = _useForm.control,
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
    onSubmit: handleSubmit(onSubmit),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    "for": "levels",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "HSK Levels (all levels does not include previous ones)"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["Controller"], {
    as: _ButtonCheckboxGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    control: control,
    rules: {
      required: true
    },
    options: [{
      value: 1,
      label: 'HSK 1'
    }, {
      value: 2,
      label: 'HSK 2'
    }, {
      value: 3,
      label: 'HSK 3'
    }, {
      value: 4,
      label: 'HSK 4'
    }, {
      value: 5,
      label: 'HSK 5'
    }, {
      value: 6,
      label: 'HSK 6'
    }],
    name: "levels",
    valueName: "selected",
    color: "secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    "for": "words-limit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Words limit (0 = disabled)"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "number",
    name: "wordsLimit",
    placeholder: "0",
    id: "words-limit",
    min: 0,
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    "for": "modes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "Modes (if multiple selected modes will be randomized)")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "modes",
    value: "characters-pinyin",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), ' ', "Select pinyin for characters")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "modes",
    value: "pinyin-characters",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), ' ', "Select characters for pinyin")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "modes",
    value: "characters-translation",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), ' ', "Select translation for characters")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "modes",
    value: "translation-characters",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 11
    }
  }), ' ', "Select characters for translation")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: "mb-0 mt-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    "for": "modes",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, "Other settings")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "alwaysShowPinyin",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }), ' ', "Always show pinyin")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    check: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    type: "checkbox",
    name: "alwaysShowTranslation",
    innerRef: register(),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), ' ', "Always show definition")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: "mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    color: "primary",
    size: "lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 9
    }
  }, "Start")));
};

SettingsForm.propTypes = {
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SettingsForm);

/***/ })

})
//# sourceMappingURL=index.js.0c8c87fdfc297efdd1e4.hot-update.js.map