
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ })

},[541]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzBiYmU4OTYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IE1lbnVJdGVtID0gKCB7IHRpdGxlIH0gKSA9PiAoXG4gIDxsaT5cbiAgICB7IHRpdGxlIH1cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2V0QWxidW1DbGlja30+RGlzcGxheSBhbGJ1bTwvYnV0dG9uPlxuICA8L2xpPlxuKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogW10sXG4gICAgICBhbGJ1bTogW11cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwVXJsID0gJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbiAgICB0aGlzLnVzZXJMaXN0ID0gYCR7YXBwVXJsfS91c2Vyc2A7XG4gICAgdGhpcy51c2VyQWxidW1MaXN0ID0gYCR7YXBwVXJsfS9hbGJ1bXNgO1xuXG4gICAgdGhpcy5nZXRBbGJ1bUNsaWNrID0gdGhpcy5nZXRBbGJ1bUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhcGkoZW5kUG9pbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGVuZFBvaW50KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJMaXN0KS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcjogcmVzcG9uc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGJ1bUNsaWNrKCl7XG4gICAgdGhpcy5hcGkodGhpcy51c2VyQWxidW1MaXN0KS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgYWxidW06IHJlc3BvbnNlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUudXNlci5sZW5ndGggPiAwICA/IFwiVXNlciBsb2FkZWRcIiA6IHRoaXMuZ2V0VXNlcigpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXVzZXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyLm1hcCh1c2VyID0+XG4gICAgICAgICAgICAgIDxsaSBrZXk9eyB1c2VyLmlkIH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyB1c2VyLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyB0aGlzLmdldEFsYnVtQ2xpY2sgfT5EaXNwbGF5IGFsYnVtPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctYWxsXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxidW0ubWFwKGFsYnVtID0+XG4gICAgICAgICAgICAgIDxsaSBrZXk9eyBhbGJ1bS5pZCB9PlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgYWxidW0udGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBTEE7QUFDQTtBQUtBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBR0E7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFPQTs7Ozs7QUEvREE7QUFDQTtBQWlFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        