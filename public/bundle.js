/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	eval("'use strict';\n\nvar _before = __webpack_require__(1);\n\nvar _before2 = _interopRequireDefault(_before);\n\nvar _after = __webpack_require__(2);\n\nvar _after2 = _interopRequireDefault(_after);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _before2.default)();\n(0, _after2.default)();\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LegacyLine = function LegacyLine() {\n\t_classCallCheck(this, LegacyLine);\n\n\tthis.draw = function (x1, y1, x2, y2) {\n\t\tconsole.log('line from (' + x1 + ',' + y1 + ') to (' + x2 + ',' + y2 + ')');\n\t};\n};\n\nvar LegacyRectangle = function LegacyRectangle() {\n\t_classCallCheck(this, LegacyRectangle);\n\n\tthis.draw = function (x, y, w, h) {\n\t\tconsole.log('rectangle at (' + x + ',' + y + ') with width ' + w + ' and height ' + h);\n\t};\n};\n\nexports.default = function () {\n\tvar shapes = [new LegacyLine(), new LegacyRectangle()];\n\n\tvar x1 = 10;\n\tvar y1 = 20;\n\tvar x2 = 30;\n\tvar y2 = 60;\n\n\t// [Problem] - Because the interface between Line and Rectangle objects is incompatible, \n\t// the user has to recover the type of each shape and manually supply the correct arguments.\n\tshapes.forEach(function (shape) {\n\t\tswitch (shape.constructor.name) {\n\t\t\tcase 'LegacyLine':\n\t\t\t\tshape.draw(x1, y1, x2, y2);\n\t\t\t\tbreak;\n\t\t\tcase 'LegacyRectangle':\n\t\t\t\tvar x = Math.min(x1, x2);\n\t\t\t\tvar y = Math.min(y1, y2);\n\t\t\t\tvar w = Math.abs(x1 - x2);\n\t\t\t\tvar h = Math.abs(y1 - y2);\n\n\t\t\t\tshape.draw(x, y, w, h);\n\n\t\t\t\tbreak;\n\t\t\tdefault:\n\t\t\t\tbreak;\n\t\t}\n\t});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/before.js\n ** module id = 1\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./src/before.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar LegacyLine = function LegacyLine() {\n\t_classCallCheck(this, LegacyLine);\n\n\tthis.draw = function (x1, y1, x2, y2) {\n\t\tconsole.log(\"line from (\" + x1 + \",\" + y1 + \") to (\" + x2 + \",\" + y2 + \")\");\n\t};\n};\n\nvar LegacyRectangle = function LegacyRectangle() {\n\t_classCallCheck(this, LegacyRectangle);\n\n\tthis.draw = function (x, y, w, h) {\n\t\tconsole.log(\"rectangle at (\" + x + \",\" + y + \") with width \" + w + \" and height \" + h);\n\t};\n};\n\n// +\n\n\nvar Shape = function Shape() {\n\t_classCallCheck(this, Shape);\n\n\tthis.draw = function (x1, y1, x2, y2) {};\n};\n\n// +\n\n\nvar Line = function (_LegacyLine) {\n\t_inherits(Line, _LegacyLine);\n\n\tfunction Line() {\n\t\tvar _ref;\n\n\t\tvar _temp, _this, _ret;\n\n\t\t_classCallCheck(this, Line);\n\n\t\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\targs[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Line.__proto__ || Object.getPrototypeOf(Line)).call.apply(_ref, [this].concat(args))), _this), _this.legacyLine = new LegacyLine(), _this.draw = function (x1, y1, x2, y2) {\n\t\t\t_this.legacyLine.draw(x1, y1, x2, y2);\n\t\t}, _temp), _possibleConstructorReturn(_this, _ret);\n\t}\n\n\treturn Line;\n}(LegacyLine);\n\n// +\n\n\nvar Rectangle = function (_LegacyRectangle) {\n\t_inherits(Rectangle, _LegacyRectangle);\n\n\tfunction Rectangle() {\n\t\tvar _ref2;\n\n\t\tvar _temp2, _this2, _ret2;\n\n\t\t_classCallCheck(this, Rectangle);\n\n\t\tfor (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n\t\t\targs[_key2] = arguments[_key2];\n\t\t}\n\n\t\treturn _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call.apply(_ref2, [this].concat(args))), _this2), _this2.legacyRectangle = new LegacyRectangle(), _this2.draw = function (x1, y1, x2, y2) {\n\t\t\tvar x = Math.min(x1, x2);\n\t\t\tvar y = Math.min(y1, y2);\n\t\t\tvar w = Math.abs(x1 - x2);\n\t\t\tvar h = Math.abs(y1 - y2);\n\n\t\t\t_this2.legacyRectangle.draw(x, y, w, h);\n\t\t}, _temp2), _possibleConstructorReturn(_this2, _ret2);\n\t}\n\n\treturn Rectangle;\n}(LegacyRectangle);\n\nexports.default = function () {\n\tvar shapes = [new Line(), new Rectangle()];\n\n\tvar x1 = 10;\n\tvar y1 = 20;\n\tvar x2 = 30;\n\tvar y2 = 60;\n\n\tshapes.forEach(function (shape) {\n\t\tshape.draw(x1, y1, x2, y2);\n\t});\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/after.js\n ** module id = 2\n ** module chunks = 0\n **/\n\n//# sourceURL=webpack:///./src/after.js?");

/***/ }
/******/ ]);