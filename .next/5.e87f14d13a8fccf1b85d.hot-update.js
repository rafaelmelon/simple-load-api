webpackHotUpdate(5,{

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(39);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(199);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(549);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rafaelmelon/Sites/test-caseonit/pages/index.js?entry',
    _this = undefined;

/* jshint esversion:6 */

var MenuItem = function MenuItem(_ref) {
  var title = _ref.title;
  return _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, title, _react2.default.createElement('button', { onClick: _this.getAlbumClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Display album'));
};

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this2.state = {
      user: [],
      album: []
    };

    var appUrl = 'http://jsonplaceholder.typicode.com';
    _this2.userList = appUrl + '/users';
    _this2.userAlbumList = appUrl + '/albums';

    _this2.getAlbumClick = _this2.getAlbumClick.bind(_this2);
    return _this2;
  }

  (0, _createClass3.default)(App, [{
    key: 'api',
    value: function api(endPoint) {
      return new _promise2.default(function (resolve, reject) {
        _axios2.default.get(endPoint).then(function (response) {
          resolve(response.data);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: 'getUser',
    value: function getUser() {
      var _this3 = this;

      this.api(this.userList).then(function (response) {
        _this3.setState({ user: response });
      });
    }
  }, {
    key: 'getAlbumClick',
    value: function getAlbumClick() {
      var _this4 = this;

      this.api(this.userAlbumList).then(function (response) {
        _this4.setState({ album: response });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.state.user.length > 0 ? "User loaded" : this.getUser(), _react2.default.createElement('div', { className: 'show-user', __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, this.state.user.map(function (user) {
        return _react2.default.createElement('li', { key: user.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, user.name), _react2.default.createElement('button', { onClick: _this5.getAlbumClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, 'Display album'));
      }))), _react2.default.createElement('div', { className: 'show-all', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, this.state.album.map(function (album) {
        return _react2.default.createElement('li', { key: album.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, album.title));
      }))));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/rafaelmelon/Sites/test-caseonit/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/rafaelmelon/Sites/test-caseonit/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lODdmMTRkMTNhOGZjY2YxYjg1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGZkN2VmNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTWVudUl0ZW0gPSAoIHsgdGl0bGUgfSApID0+IChcbiAgPGxpPlxuICAgIHsgdGl0bGUgfVxuICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRBbGJ1bUNsaWNrfT5EaXNwbGF5IGFsYnVtPC9idXR0b24+XG4gIDwvbGk+XG4pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiBbXSxcbiAgICAgIGFsYnVtOiBbXVxuICAgIH07XG5cbiAgICBjb25zdCBhcHBVcmwgPSAnaHR0cDovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20nO1xuICAgIHRoaXMudXNlckxpc3QgPSBgJHthcHBVcmx9L3VzZXJzYDtcbiAgICB0aGlzLnVzZXJBbGJ1bUxpc3QgPSBgJHthcHBVcmx9L2FsYnVtc2A7XG5cbiAgICB0aGlzLmdldEFsYnVtQ2xpY2sgPSB0aGlzLmdldEFsYnVtQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFwaShlbmRQb2ludCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoZW5kUG9pbnQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcigpe1xuICAgIHRoaXMuYXBpKHRoaXMudXNlckxpc3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsYnVtQ2xpY2soKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJBbGJ1bUxpc3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGJ1bTogcmVzcG9uc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHsgdGhpcy5zdGF0ZS51c2VyLmxlbmd0aCA+IDAgID8gXCJVc2VyIGxvYWRlZFwiIDogdGhpcy5nZXRVc2VyKCkgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctdXNlclwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXIubWFwKHVzZXIgPT5cbiAgICAgICAgICAgICAgPGxpIGtleT17IHVzZXIuaWQgfT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IHVzZXIubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17IHRoaXMuZ2V0QWxidW1DbGljayB9PkRpc3BsYXkgYWxidW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1hbGxcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGJ1bS5tYXAoYWxidW0gPT5cbiAgICAgICAgICAgICAgPGxpIGtleT17IGFsYnVtLmlkIH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBhbGJ1bS50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBTEE7QUFDQTtBQUtBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7QUEvREE7QUFDQTtBQWlFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9