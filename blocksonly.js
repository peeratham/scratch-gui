var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["blocksonly"],{

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/playground/blocks-only.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??postcss!./src/playground/blocks-only.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocks-only_controls_2GEvs {\n    position: absolute;\n    z-index: 2;\n    top: 10px;\n    right: 15px;\n}\n", ""]);

// exports
exports.locals = {
	"controls": "blocks-only_controls_2GEvs"
};

/***/ }),

/***/ "./src/playground/blocks-only.css":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??postcss!./blocks-only.css */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??postcss!./src/playground/blocks-only.css");

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

/***/ "./src/playground/blocks-only.jsx":
/*!****************************************!*\
  !*** ./src/playground/blocks-only.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _controls = __webpack_require__(/*! ../containers/controls.jsx */ "./src/containers/controls.jsx");

var _controls2 = _interopRequireDefault(_controls);

var _blocks = __webpack_require__(/*! ../containers/blocks.jsx */ "./src/containers/blocks.jsx");

var _blocks2 = _interopRequireDefault(_blocks);

var _gui = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");

var _gui2 = _interopRequireDefault(_gui);

var _projectLoaderHoc = __webpack_require__(/*! ../lib/project-loader-hoc.jsx */ "./src/lib/project-loader-hoc.jsx");

var _projectLoaderHoc2 = _interopRequireDefault(_projectLoaderHoc);

var _blocksOnly = __webpack_require__(/*! ./blocks-only.css */ "./src/playground/blocks-only.css");

var _blocksOnly2 = _interopRequireDefault(_blocksOnly);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return { vm: state.vm };
};

var VMBlocks = (0, _reactRedux.connect)(mapStateToProps)(_blocks2.default);
var VMControls = (0, _reactRedux.connect)(mapStateToProps)(_controls2.default);

var BlocksOnly = function BlocksOnly(props) {
    return _react2.default.createElement(
        _gui2.default,
        props,
        _react2.default.createElement(VMBlocks, {
            grow: 1,
            options: {
                media: 'static/blocks-media/'
            }
        }),
        _react2.default.createElement(VMControls, { className: _blocksOnly2.default.controls })
    );
};

var App = (0, _projectLoaderHoc2.default)(BlocksOnly);

var appTarget = document.createElement('div');
document.body.appendChild(appTarget);

_reactDom2.default.render(_react2.default.createElement(App, null), appTarget);

/***/ })

},[["./src/playground/blocks-only.jsx","lib.min"]]]);
//# sourceMappingURL=blocksonly.js.map