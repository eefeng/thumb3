webpackJsonp([0],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _index2.default();
xtag.register('x-praise', {
    content: '<div class="hand" id="thumb">' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger"></div>' + '<div class="finger thumb"></div>' + '<div class="arm"></div>\n' + '</div>',

    methods: {
        praise: function praise() {
            var _this = this;
            f.clickAction();

            var animationEle = _this.querySelector('#animation');
            animationEle.className = "hide num";
            setTimeout(function () {
                animationEle.className = "hide";
            }, 800);
        }
    },

    events: {
        click: function click(e) {
            var _this2 = this;

            var _this = this;
            if (e.target.id === 'thumb') {
                var t = '';
                if (t) {
                    clearTimeout(t);
                }

                t = setTimeout(function () {
                    _this2.praise();
                }, 500);
            }
        }
    }
});

/***/ })

},[4]);