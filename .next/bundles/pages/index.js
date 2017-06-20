
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

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ })

},[541]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2ZkMTFjM2MiXSwic291cmNlc0NvbnRlbnQiOlsiLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IE1lbnVJdGVtID0gKCB7IHRpdGxlIH0gKSA9PiAoXG4gIDxsaT5cbiAgICB7IHRpdGxlIH1cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2V0QWxidW1DbGlja30+RGlzcGxheSBhbGJ1bTwvYnV0dG9uPlxuICA8L2xpPlxuKTtcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogW10sXG4gICAgICBhbGJ1bTogW10sXG4gICAgfTtcblxuICAgIGNvbnN0IGFwcFVybCA9ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSc7XG4gICAgdGhpcy51c2VyTGlzdCA9IGAke2FwcFVybH0vdXNlcnNgO1xuICAgIHRoaXMudXNlckFsYnVtTGlzdCA9IGAke2FwcFVybH0vYWxidW1zP3VzZXJJZD1gO1xuXG4gICAgdGhpcy5nZXRBbGJ1bUNsaWNrID0gdGhpcy5nZXRBbGJ1bUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhcGkoZW5kUG9pbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGVuZFBvaW50KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJMaXN0KS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcjogcmVzcG9uc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGJ1bUNsaWNrKGlkKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJBbGJ1bUxpc3QgKyBpZCkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsYnVtOiByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnVzZXIubGVuZ3RoID4gMCAgPyBcIlVzZXIgbG9hZGVkXCIgOiB0aGlzLmdldFVzZXIoKSB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy11c2VyXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUudXNlci5tYXAodXNlciA9PlxuICAgICAgICAgICAgICA8bGkga2V5PXsgdXNlci5pZCB9PlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgdXNlci5uYW1lIH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmdldEFsYnVtQ2xpY2sodXNlci5pZCl9PkRpc3BsYXkgYWxidW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1hbGxcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5hbGJ1bS5tYXAoYWxidW0gPT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuPnsgYWxidW0udXNlcklkIH0geyBhbGJ1bS50aXRsZSB9PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFMQTtBQUNBO0FBS0E7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFHQTtBQUpBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBT0E7Ozs7O0FBL0RBO0FBQ0E7QUFpRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        