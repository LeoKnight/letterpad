webpackHotUpdate("uranium",{

/***/ "./client/themes/uranium/containers/Layout.js":
/*!****************************************************!*\
  !*** ./client/themes/uranium/containers/Layout.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = Layout;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Sidebar = __webpack_require__(/*! client/containers/Sidebar */ "./client/containers/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Navbar = __webpack_require__(/*! client/components/Navbar */ "./client/components/Navbar/index.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = __webpack_require__(/*! client/components/Footer */ "./client/components/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

__webpack_require__(/*! ../style.scss */ "./client/themes/uranium/style.scss");

function Layout(Element, props) {
    var settings = props.settings;
    var layout = settings.layout_display.value;

    return function (_Component) {
        _inherits(_class, _Component);

        function _class() {
            _classCallCheck(this, _class);

            return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
        }

        _createClass(_class, [{
            key: "render",
            value: function render() {
                var _props = _extends({}, this.props, props, { settings: settings });
                return _react2.default.createElement(
                    "div",
                    { className: "main two-column" },
                    _react2.default.createElement(
                        "nav",
                        { className: "navbar navbar-custom" },
                        _react2.default.createElement(
                            "div",
                            { className: "container" },
                            _react2.default.createElement(_Navbar2.default, {
                                settings: settings,
                                position: "top",
                                router: _extends({}, this.props)
                            }),
                            _react2.default.createElement(_Footer2.default, { data: settings.site_footer.value })
                        )
                    ),
                    _react2.default.createElement(
                        "main",
                        null,
                        _react2.default.createElement(Element, _props)
                    ),
                    _react2.default.createElement(
                        "aside",
                        null,
                        _react2.default.createElement(_Sidebar2.default, _extends({ settings: settings }, this.props))
                    )
                );
            }
        }]);

        return _class;
    }(_react.Component);
}

/***/ })

})
//# sourceMappingURL=uranium.e375caa6ae59d1b075e0.hot-update.js.map