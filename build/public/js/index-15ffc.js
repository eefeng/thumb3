/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
    function PraiseButton($ele, option) {
        _classCallCheck(this, PraiseButton);

        this.init();

        this.$ele = $ele;
        this.clickNum = option.clickNum || this.DEFAULT.clickNum;

        this.bindEvents();
    }

    _createClass(PraiseButton, [{
        key: 'init',
        value: function init() {
            this.setDefault();
        }
    }, {
        key: 'setDefault',
        value: function setDefault() {
            this.DEFAULT = {
                clickNum: 0
            };
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.$ele.click(function () {

                _this.$ele.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                _this.clickNum = window.add(_this.clickNum);

                setTimeout(function () {
                    $('#animation').removeClass('num');
                }, 1000);

                console.log(_this.clickNum);
            });
        }
    }]);

    return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
    _inherits(Thumb, _PraiseButton);

    function Thumb($ele, options) {
        _classCallCheck(this, Thumb);

        var _this2 = _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, $ele, options));

        _this2.maxClickNum = options.maxClickNum || _this2.DEFAULT.maxClickNum;
        _this2.timerSeconds = options.senconds || _this2.DEFAULT.timerSeconds;

        return _this2;
    }

    _createClass(Thumb, [{
        key: 'init',
        value: function init() {
            this.setDefault();
            this.initTimer();
        }
    }, {
        key: 'setDefault',
        value: function setDefault() {
            this.DEFAULT = {
                clickNum: 0,
                maxClickNum: 10,
                timerSeconds: 1
            };
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this3 = this;

            this.$ele.click(function () {

                if (_this3.timer === 0) {

                    _this3.timerStart();

                    if (_this3.clickNum < _this3.maxClickNum) {
                        _this3.$ele.css('-webkit-filter', 'grayscale(0)');
                        $('#animation').addClass('num');
                        _this3.clickNum = window.add(_this3.clickNum);

                        setTimeout(function () {
                            $('#animation').removeClass('num');
                        }, 1000);

                        axios.get('/index/update').then(function (res) {
                            console.log(res);
                        }).catch(function (err) {
                            console.log(err);
                        });
                    } else {
                        _this3.$ele.css('-webkit-filter', 'grayscale(1)');
                        _this3.clickNum = 0;
                    }

                    setTimeout(function () {
                        _this3.timerEnd();
                    }, _this3.timerSeconds * 1000);

                    console.log(_this3.clickNum);
                } else {
                    alert('just wait a minute');
                }
            });
        }
    }, {
        key: 'initTimer',
        value: function initTimer() {
            this.timer = 0;
        }
    }, {
        key: 'timerStart',
        value: function timerStart() {
            this.timer = 1;
        }
    }, {
        key: 'timerEnd',
        value: function timerEnd() {
            this.timer = 0;
        }
    }]);

    return Thumb;
}(PraiseButton);

exports.default = { PraiseButton: PraiseButton, Thumb: Thumb };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.add = function (num) {
    return ++num;
};

/***/ })
/******/ ]);