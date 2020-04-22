webpackHotUpdate("static/development/pages/learn.js",{

/***/ "./lib/learn.js":
/*!**********************!*\
  !*** ./lib/learn.js ***!
  \**********************/
/*! exports provided: levelWords, nRandomDigitsWithoutRepetitionExcluding, selectNWords, buildFromConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "levelWords", function() { return levelWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nRandomDigitsWithoutRepetitionExcluding", function() { return nRandomDigitsWithoutRepetitionExcluding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectNWords", function() { return selectNWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildFromConfig", function() { return buildFromConfig; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/random */ "./node_modules/lodash/random.js");
/* harmony import */ var lodash_random__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_random__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js");
/* harmony import */ var lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_uniq__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/shuffle */ "./node_modules/lodash/shuffle.js");
/* harmony import */ var lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_shuffle__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/chunk */ "./node_modules/lodash/chunk.js");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/flatten */ "./node_modules/lodash/flatten.js");
/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _words_hsk1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/words/hsk1 */ "./words/hsk1.json");
var _words_hsk1__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk1 */ "./words/hsk1.json", 1);
/* harmony import */ var _words_hsk2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/words/hsk2 */ "./words/hsk2.json");
var _words_hsk2__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk2 */ "./words/hsk2.json", 1);
/* harmony import */ var _words_hsk3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/words/hsk3 */ "./words/hsk3.json");
var _words_hsk3__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk3 */ "./words/hsk3.json", 1);
/* harmony import */ var _words_hsk4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/words/hsk4 */ "./words/hsk4.json");
var _words_hsk4__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk4 */ "./words/hsk4.json", 1);
/* harmony import */ var _words_hsk5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/words/hsk5 */ "./words/hsk5.json");
var _words_hsk5__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk5 */ "./words/hsk5.json", 1);
/* harmony import */ var _words_hsk6__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/words/hsk6 */ "./words/hsk6.json");
var _words_hsk6__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ~/words/hsk6 */ "./words/hsk6.json", 1);














function levelWords(level) {
  switch (level) {
    case 1:
      return _words_hsk1__WEBPACK_IMPORTED_MODULE_8__;

    case 2:
      return _words_hsk2__WEBPACK_IMPORTED_MODULE_9__;

    case 3:
      return _words_hsk3__WEBPACK_IMPORTED_MODULE_10__;

    case 4:
      return _words_hsk4__WEBPACK_IMPORTED_MODULE_11__;

    case 5:
      return _words_hsk5__WEBPACK_IMPORTED_MODULE_12__;

    case 6:
      return _words_hsk6__WEBPACK_IMPORTED_MODULE_13__;

    default:
      return {};
  }
}
function nRandomDigitsWithoutRepetitionExcluding(count, max, exclude) {
  var digits = [];

  while (lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default()(digits).length !== count) {
    var digit = lodash_random__WEBPACK_IMPORTED_MODULE_1___default()(0, max);
    if (digit !== exclude) digits.push(digit);
  }

  return lodash_uniq__WEBPACK_IMPORTED_MODULE_2___default()(digits);
}
function selectNWords(words, count, exclude) {
  return lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(nRandomDigitsWithoutRepetitionExcluding(count, words.length - 1, exclude), function (d) {
    return words[d];
  });
}
function buildFromConfig(config) {
  var data = lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(lodash_flatten__WEBPACK_IMPORTED_MODULE_7___default()(config.levels.map(function (level) {
    var words = levelWords(level);
    return lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(words, function (word, index) {
      var variants = [word].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(selectNWords(words, 3, index)));
      return {
        type: lodash_sample__WEBPACK_IMPORTED_MODULE_4___default()(config.modes),
        question: word,
        variants: lodash_shuffle__WEBPACK_IMPORTED_MODULE_5___default()(variants)
      };
    });
  })));

  if (config.wordsLimit > 0) {
    return lodash_chunk__WEBPACK_IMPORTED_MODULE_6___default()(data, +config.wordsLimit);
  }

  return data;
}

/***/ })

})
//# sourceMappingURL=learn.js.53ec63418f3cf592fef3.hot-update.js.map