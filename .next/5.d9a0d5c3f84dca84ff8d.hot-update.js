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
    _this2.userAlbumList = appUrl + '/albums?userId=';

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
    value: function getAlbumClick(id) {
      var _this4 = this;

      this.api(this.userAlbumList + id).then(function (response) {
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
        }, user.name), _react2.default.createElement('button', { onClick: function onClick() {
            return _this5.getAlbumClick(user.id);
          }, __source: {
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
        return _react2.default.createElement('li', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, album.userId, ' ', album.title));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kOWEwZDVjM2Y4NGRjYTg0ZmY4ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgTWVudUl0ZW0gPSAoIHsgdGl0bGUgfSApID0+IChcbiAgPGxpPlxuICAgIHsgdGl0bGUgfVxuICAgIDxidXR0b24gb25DbGljaz17dGhpcy5nZXRBbGJ1bUNsaWNrfT5EaXNwbGF5IGFsYnVtPC9idXR0b24+XG4gIDwvbGk+XG4pO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyOiBbXSxcbiAgICAgIGFsYnVtOiBbXSxcbiAgICB9O1xuXG4gICAgY29uc3QgYXBwVXJsID0gJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbiAgICB0aGlzLnVzZXJMaXN0ID0gYCR7YXBwVXJsfS91c2Vyc2A7XG4gICAgdGhpcy51c2VyQWxidW1MaXN0ID0gYCR7YXBwVXJsfS9hbGJ1bXM/dXNlcklkPWA7XG5cbiAgICB0aGlzLmdldEFsYnVtQ2xpY2sgPSB0aGlzLmdldEFsYnVtQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGFwaShlbmRQb2ludCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoZW5kUG9pbnQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlcigpe1xuICAgIHRoaXMuYXBpKHRoaXMudXNlckxpc3QpLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEFsYnVtQ2xpY2soaWQpe1xuICAgIHRoaXMuYXBpKHRoaXMudXNlckFsYnVtTGlzdCArIGlkKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWxidW06IHJlc3BvbnNlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUudXNlci5sZW5ndGggPiAwICA/IFwiVXNlciBsb2FkZWRcIiA6IHRoaXMuZ2V0VXNlcigpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXVzZXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyLm1hcCh1c2VyID0+XG4gICAgICAgICAgICAgIDxsaSBrZXk9eyB1c2VyLmlkIH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyB1c2VyLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0QWxidW1DbGljayh1c2VyLmlkKX0+RGlzcGxheSBhbGJ1bTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWFsbFwiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsYnVtLm1hcChhbGJ1bSA9PlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyBhbGJ1bS51c2VySWQgfSB7IGFsYnVtLnRpdGxlIH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFMQTtBQUNBO0FBS0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7O0FBL0RBO0FBQ0E7QUFpRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==