var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["player"],{

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/playground/player.css":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??postcss!./src/playground/player.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".player_stage-only_3WHZN {\n    width: calc(480px + 1rem);\n}\n\n.player_stage-only_3WHZN * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n", ""]);

// exports
exports.locals = {
	"stage-only": "player_stage-only_3WHZN",
	"stageOnly": "player_stage-only_3WHZN"
};

/***/ }),

/***/ "./src/playground/player.css":
/*!***********************************!*\
  !*** ./src/playground/player.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??postcss!./player.css */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/playground/player.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/player.jsx":
/*!***********************************!*\
  !*** ./src/playground/player.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _box = __webpack_require__(/*! ../components/box/box.jsx */ "./src/components/box/box.jsx");

var _box2 = _interopRequireDefault(_box);

var _gui = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");

var _gui2 = _interopRequireDefault(_gui);

var _player = __webpack_require__(/*! ./player.css */ "./src/playground/player.css");

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (false) {}

var Player = function Player() {
    return _react2.default.createElement(
        _box2.default,
        { className: _player2.default.stageOnly },
        _react2.default.createElement(_gui2.default, {
            isPlayerOnly: true,
            isFullScreen: false
        })
    );
};

var appTarget = document.createElement('div');
document.body.appendChild(appTarget);

_reactDom2.default.render(_react2.default.createElement(Player, null), appTarget);

/***/ })

},[["./src/playground/player.jsx","lib.min"]]]);
//# sourceMappingURL=player.js.map