webpackHotUpdate("client/themes/uranium/public/dist/client",{

/***/ "./client/themes/uranium/containers/SinglePage.js":
/*!********************************************************!*\
  !*** ./client/themes/uranium/containers/SinglePage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ../components/Post/Article */ \"./client/themes/uranium/components/Post/Article.js\");\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nvar _Loader = __webpack_require__(/*! ../components/Loader */ \"./client/themes/uranium/components/Loader.js\");\n\nvar _Loader2 = _interopRequireDefault(_Loader);\n\nvar _SEO = __webpack_require__(/*! ../components/SEO */ \"./client/themes/uranium/components/SEO.js\");\n\nvar _SEO2 = _interopRequireDefault(_SEO);\n\nvar _OhSnap = __webpack_require__(/*! ../components/OhSnap */ \"./client/themes/uranium/components/OhSnap.js\");\n\nvar _OhSnap2 = _interopRequireDefault(_OhSnap);\n\nvar _SinglePageData = __webpack_require__(/*! shared/data-connectors/SinglePageData */ \"./shared/data-connectors/SinglePageData.js\");\n\nvar _SinglePageData2 = _interopRequireDefault(_SinglePageData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SinglePage = function (_Component) {\n    _inherits(SinglePage, _Component);\n\n    function SinglePage() {\n        _classCallCheck(this, SinglePage);\n\n        return _possibleConstructorReturn(this, (SinglePage.__proto__ || Object.getPrototypeOf(SinglePage)).apply(this, arguments));\n    }\n\n    _createClass(SinglePage, [{\n        key: \"render\",\n        value: function render() {\n            if (this.props.loading) {\n                return _react2.default.createElement(_Loader2.default, null);\n            }\n            if (!this.props.page.ok) {\n                return _react2.default.createElement(_OhSnap2.default, { message: \"Sorry, this page does not exist or might be restricted.\" });\n            }\n            var post = this.props.page;\n            var tags = [],\n                categories = [];\n            post.taxonomies.forEach(function (taxonomy) {\n                if (taxonomy.type === \"post_category\") {\n                    categories.push(taxonomy.name);\n                } else {\n                    tags.push(taxonomy.name);\n                }\n            });\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(_SEO2.default, {\n                    schema: \"BlogPosting\",\n                    title: post.title,\n                    description: post.excerpt,\n                    path: \"/post/\" + this.props.match.params.slug,\n                    contentType: \"article\",\n                    category: categories.join(\",\"),\n                    tags: tags,\n                    image: post.cover_image,\n                    settings: this.props.settings || {}\n                }),\n                _react2.default.createElement(_Article2.default, { post: post })\n            );\n        }\n    }]);\n\n    return SinglePage;\n}(_react.Component);\n\nvar _default = (0, _SinglePageData2.default)(SinglePage);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SinglePage, \"SinglePage\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    reactHotLoader.register(_default, \"default\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdGhlbWVzL3VyYW5pdW0vY29udGFpbmVycy9TaW5nbGVQYWdlLmpzP2JiMmQiXSwibmFtZXMiOlsiU2luZ2xlUGFnZSIsInByb3BzIiwibG9hZGluZyIsInBhZ2UiLCJvayIsInBvc3QiLCJ0YWdzIiwiY2F0ZWdvcmllcyIsInRheG9ub21pZXMiLCJmb3JFYWNoIiwidGF4b25vbXkiLCJ0eXBlIiwicHVzaCIsIm5hbWUiLCJ0aXRsZSIsImV4Y2VycHQiLCJtYXRjaCIsInBhcmFtcyIsInNsdWciLCJqb2luIiwiY292ZXJfaW1hZ2UiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQix1QkFBTyxxREFBUDtBQUNIO0FBQ0QsZ0JBQUksQ0FBQyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEVBQXJCLEVBQXlCO0FBQ3JCLHVCQUNJLGtEQUFRLFNBQVEseURBQWhCLEdBREo7QUFHSDtBQUNELGdCQUFNQyxPQUFPLEtBQUtKLEtBQUwsQ0FBV0UsSUFBeEI7QUFDQSxnQkFBTUcsT0FBTyxFQUFiO0FBQUEsZ0JBQ0lDLGFBQWEsRUFEakI7QUFFQUYsaUJBQUtHLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCLG9CQUFZO0FBQ2hDLG9CQUFJQyxTQUFTQyxJQUFULEtBQWtCLGVBQXRCLEVBQXVDO0FBQ25DSiwrQkFBV0ssSUFBWCxDQUFnQkYsU0FBU0csSUFBekI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hQLHlCQUFLTSxJQUFMLENBQVVGLFNBQVNHLElBQW5CO0FBQ0g7QUFDSixhQU5EO0FBT0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFDSSw0QkFBTyxhQURYO0FBRUksMkJBQU9SLEtBQUtTLEtBRmhCO0FBR0ksaUNBQWFULEtBQUtVLE9BSHRCO0FBSUksMEJBQU0sV0FBVyxLQUFLZCxLQUFMLENBQVdlLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxJQUo3QztBQUtJLGlDQUFZLFNBTGhCO0FBTUksOEJBQVVYLFdBQVdZLElBQVgsQ0FBZ0IsR0FBaEIsQ0FOZDtBQU9JLDBCQUFNYixJQVBWO0FBUUksMkJBQU9ELEtBQUtlLFdBUmhCO0FBU0ksOEJBQVUsS0FBS25CLEtBQUwsQ0FBV29CLFFBQVgsSUFBdUI7QUFUckMsa0JBREo7QUFZSSxtRUFBUyxNQUFNaEIsSUFBZjtBQVpKLGFBREo7QUFnQkg7Ozs7OztlQUdVLDhCQUFlTCxVQUFmLEM7Ozs7Ozs7Ozs7Ozs7OzRCQXZDVEEsVSIsImZpbGUiOiIuL2NsaWVudC90aGVtZXMvdXJhbml1bS9jb250YWluZXJzL1NpbmdsZVBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0FydGljbGVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgU0VPIGZyb20gXCIuLi9jb21wb25lbnRzL1NFT1wiO1xuaW1wb3J0IE9oU25hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9PaFNuYXBcIjtcbmltcG9ydCBTaW5nbGVQYWdlRGF0YSBmcm9tIFwic2hhcmVkL2RhdGEtY29ubmVjdG9ycy9TaW5nbGVQYWdlRGF0YVwiO1xuXG5jbGFzcyBTaW5nbGVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGVyIC8+O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wYWdlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPaFNuYXAgbWVzc2FnZT1cIlNvcnJ5LCB0aGlzIHBhZ2UgZG9lcyBub3QgZXhpc3Qgb3IgbWlnaHQgYmUgcmVzdHJpY3RlZC5cIiAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wcm9wcy5wYWdlO1xuICAgICAgICBjb25zdCB0YWdzID0gW10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzID0gW107XG4gICAgICAgIHBvc3QudGF4b25vbWllcy5mb3JFYWNoKHRheG9ub215ID0+IHtcbiAgICAgICAgICAgIGlmICh0YXhvbm9teS50eXBlID09PSBcInBvc3RfY2F0ZWdvcnlcIikge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh0YXhvbm9teS5uYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHRheG9ub215Lm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNFT1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9XCJCbG9nUG9zdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtcIi9wb3N0L1wiICsgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU9XCJhcnRpY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3JpZXMuam9pbihcIixcIil9XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RhZ3N9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0LmNvdmVyX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5ncyB8fCB7fX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBhZ2VEYXRhKFNpbmdsZVBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/themes/uranium/containers/SinglePage.js\n");

/***/ }),

/***/ "./client/themes/uranium/containers/SinglePage.js":
/*!********************************************************!*\
  !*** ./client/themes/uranium/containers/SinglePage.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Article = __webpack_require__(/*! ../components/Post/Article */ \"./client/themes/uranium/components/Post/Article.js\");\n\nvar _Article2 = _interopRequireDefault(_Article);\n\nvar _Loader = __webpack_require__(/*! ../components/Loader */ \"./client/themes/uranium/components/Loader.js\");\n\nvar _Loader2 = _interopRequireDefault(_Loader);\n\nvar _SEO = __webpack_require__(/*! ../components/SEO */ \"./client/themes/uranium/components/SEO.js\");\n\nvar _SEO2 = _interopRequireDefault(_SEO);\n\nvar _OhSnap = __webpack_require__(/*! ../components/OhSnap */ \"./client/themes/uranium/components/OhSnap.js\");\n\nvar _OhSnap2 = _interopRequireDefault(_OhSnap);\n\nvar _SinglePageData = __webpack_require__(/*! shared/data-connectors/SinglePageData */ \"./shared/data-connectors/SinglePageData.js\");\n\nvar _SinglePageData2 = _interopRequireDefault(_SinglePageData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar SinglePage = function (_Component) {\n    _inherits(SinglePage, _Component);\n\n    function SinglePage() {\n        _classCallCheck(this, SinglePage);\n\n        return _possibleConstructorReturn(this, (SinglePage.__proto__ || Object.getPrototypeOf(SinglePage)).apply(this, arguments));\n    }\n\n    _createClass(SinglePage, [{\n        key: \"render\",\n        value: function render() {\n            if (this.props.loading) {\n                return _react2.default.createElement(_Loader2.default, null);\n            }\n            if (!this.props.page.ok) {\n                return _react2.default.createElement(_OhSnap2.default, { message: \"Sorry, this page does not exist or might be restricted.\" });\n            }\n            var post = this.props.page;\n            var tags = [],\n                categories = [];\n            post.taxonomies.forEach(function (taxonomy) {\n                if (taxonomy.type === \"post_category\") {\n                    categories.push(taxonomy.name);\n                } else {\n                    tags.push(taxonomy.name);\n                }\n            });\n            return _react2.default.createElement(\n                \"div\",\n                null,\n                _react2.default.createElement(_SEO2.default, {\n                    schema: \"BlogPosting\",\n                    title: post.title,\n                    description: post.excerpt,\n                    path: \"/post/\" + this.props.match.params.slug,\n                    contentType: \"article\",\n                    category: categories.join(\",\"),\n                    tags: tags,\n                    image: post.cover_image,\n                    settings: this.props.settings || {}\n                }),\n                _react2.default.createElement(_Article2.default, { post: post })\n            );\n        }\n    }]);\n\n    return SinglePage;\n}(_react.Component);\n\nvar _default = (0, _SinglePageData2.default)(SinglePage);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"./node_modules/react-hot-loader/index.js\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(SinglePage, \"SinglePage\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    reactHotLoader.register(_default, \"default\", \"/Users/ajaxtown/Sites/ReactCMS/client/themes/uranium/containers/SinglePage.js\");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdGhlbWVzL3VyYW5pdW0vY29udGFpbmVycy9TaW5nbGVQYWdlLmpzP2JiMmQiXSwibmFtZXMiOlsiU2luZ2xlUGFnZSIsInByb3BzIiwibG9hZGluZyIsInBhZ2UiLCJvayIsInBvc3QiLCJ0YWdzIiwiY2F0ZWdvcmllcyIsInRheG9ub21pZXMiLCJmb3JFYWNoIiwidGF4b25vbXkiLCJ0eXBlIiwicHVzaCIsIm5hbWUiLCJ0aXRsZSIsImV4Y2VycHQiLCJtYXRjaCIsInBhcmFtcyIsInNsdWciLCJqb2luIiwiY292ZXJfaW1hZ2UiLCJzZXR0aW5ncyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7Ozs7Ozs7OztpQ0FDTztBQUNMLGdCQUFJLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZixFQUF3QjtBQUNwQix1QkFBTyxxREFBUDtBQUNIO0FBQ0QsZ0JBQUksQ0FBQyxLQUFLRCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JDLEVBQXJCLEVBQXlCO0FBQ3JCLHVCQUNJLGtEQUFRLFNBQVEseURBQWhCLEdBREo7QUFHSDtBQUNELGdCQUFNQyxPQUFPLEtBQUtKLEtBQUwsQ0FBV0UsSUFBeEI7QUFDQSxnQkFBTUcsT0FBTyxFQUFiO0FBQUEsZ0JBQ0lDLGFBQWEsRUFEakI7QUFFQUYsaUJBQUtHLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXdCLG9CQUFZO0FBQ2hDLG9CQUFJQyxTQUFTQyxJQUFULEtBQWtCLGVBQXRCLEVBQXVDO0FBQ25DSiwrQkFBV0ssSUFBWCxDQUFnQkYsU0FBU0csSUFBekI7QUFDSCxpQkFGRCxNQUVPO0FBQ0hQLHlCQUFLTSxJQUFMLENBQVVGLFNBQVNHLElBQW5CO0FBQ0g7QUFDSixhQU5EO0FBT0EsbUJBQ0k7QUFBQTtBQUFBO0FBQ0k7QUFDSSw0QkFBTyxhQURYO0FBRUksMkJBQU9SLEtBQUtTLEtBRmhCO0FBR0ksaUNBQWFULEtBQUtVLE9BSHRCO0FBSUksMEJBQU0sV0FBVyxLQUFLZCxLQUFMLENBQVdlLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCQyxJQUo3QztBQUtJLGlDQUFZLFNBTGhCO0FBTUksOEJBQVVYLFdBQVdZLElBQVgsQ0FBZ0IsR0FBaEIsQ0FOZDtBQU9JLDBCQUFNYixJQVBWO0FBUUksMkJBQU9ELEtBQUtlLFdBUmhCO0FBU0ksOEJBQVUsS0FBS25CLEtBQUwsQ0FBV29CLFFBQVgsSUFBdUI7QUFUckMsa0JBREo7QUFZSSxtRUFBUyxNQUFNaEIsSUFBZjtBQVpKLGFBREo7QUFnQkg7Ozs7OztlQUdVLDhCQUFlTCxVQUFmLEM7Ozs7Ozs7Ozs7Ozs7OzRCQXZDVEEsVSIsImZpbGUiOiIuL2NsaWVudC90aGVtZXMvdXJhbml1bS9jb250YWluZXJzL1NpbmdsZVBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0L0FydGljbGVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgU0VPIGZyb20gXCIuLi9jb21wb25lbnRzL1NFT1wiO1xuaW1wb3J0IE9oU25hcCBmcm9tIFwiLi4vY29tcG9uZW50cy9PaFNuYXBcIjtcbmltcG9ydCBTaW5nbGVQYWdlRGF0YSBmcm9tIFwic2hhcmVkL2RhdGEtY29ubmVjdG9ycy9TaW5nbGVQYWdlRGF0YVwiO1xuXG5jbGFzcyBTaW5nbGVQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmxvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8TG9hZGVyIC8+O1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5wYWdlLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPaFNuYXAgbWVzc2FnZT1cIlNvcnJ5LCB0aGlzIHBhZ2UgZG9lcyBub3QgZXhpc3Qgb3IgbWlnaHQgYmUgcmVzdHJpY3RlZC5cIiAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5wcm9wcy5wYWdlO1xuICAgICAgICBjb25zdCB0YWdzID0gW10sXG4gICAgICAgICAgICBjYXRlZ29yaWVzID0gW107XG4gICAgICAgIHBvc3QudGF4b25vbWllcy5mb3JFYWNoKHRheG9ub215ID0+IHtcbiAgICAgICAgICAgIGlmICh0YXhvbm9teS50eXBlID09PSBcInBvc3RfY2F0ZWdvcnlcIikge1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMucHVzaCh0YXhvbm9teS5uYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFncy5wdXNoKHRheG9ub215Lm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFNFT1xuICAgICAgICAgICAgICAgICAgICBzY2hlbWE9XCJCbG9nUG9zdGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5leGNlcnB0fVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtcIi9wb3N0L1wiICsgdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU9XCJhcnRpY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e2NhdGVnb3JpZXMuam9pbihcIixcIil9XG4gICAgICAgICAgICAgICAgICAgIHRhZ3M9e3RhZ3N9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwb3N0LmNvdmVyX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncz17dGhpcy5wcm9wcy5zZXR0aW5ncyB8fCB7fX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBcnRpY2xlIHBvc3Q9e3Bvc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVBhZ2VEYXRhKFNpbmdsZVBhZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/themes/uranium/containers/SinglePage.js\n");

/***/ })

})