
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

var _jsxFileName = '/Users/rafaelmelon/Sites/test-caseonit/pages/index.js?entry';
/* jshint esversion:6 */

var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = {
      user: [],
      album: [],
      photo: []
    };

    var appUrl = 'http://jsonplaceholder.typicode.com';
    _this.userList = appUrl + '/users';
    _this.userAlbumList = appUrl + '/albums?userId=';
    _this.userPhotoList = appUrl + '/photos?albumId=';

    _this.getAlbumClick = _this.getAlbumClick.bind(_this);
    _this.getPhotoClick = _this.getPhotoClick.bind(_this);
    return _this;
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
      var _this2 = this;

      this.api(this.userList).then(function (response) {
        _this2.setState({ user: response });
      });
    }
  }, {
    key: 'getAlbumClick',
    value: function getAlbumClick(id) {
      var _this3 = this;

      this.api(this.userAlbumList + id).then(function (response) {
        _this3.setState({ album: response });
      });
    }
  }, {
    key: 'getPhotoClick',
    value: function getPhotoClick(id) {
      var _this4 = this;

      this.api(this.userPhotoList + id).then(function (response) {
        _this4.setState({ photo: response });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, this.state.user.length > 0 ? "" : this.getUser(), _react2.default.createElement('div', { className: 'show-user', style: { float: 'left', width: '33%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.state.user.map(function (user) {
        return _react2.default.createElement('li', { key: user.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement('span', { style: { display: 'block', margin: '5px 0' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, user.name), _react2.default.createElement('button', { style: { background: 'cyan', border: '1px solid blue' }, onClick: function onClick() {
            return _this5.getAlbumClick(user.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Display album'));
      }))), _react2.default.createElement('div', { className: 'show-album', style: { float: 'left', width: '33%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, this.state.album.map(function (album) {
        return _react2.default.createElement('li', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, _react2.default.createElement('span', { style: { display: 'block', margin: '5px 0' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, album.userId, ' - ', album.title), _react2.default.createElement('button', { style: { background: 'yellow', border: '1px solid orange' }, onClick: function onClick() {
            return _this5.getPhotoClick(album.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, 'Display Photos'));
      }))), _react2.default.createElement('div', { className: 'show-photo', style: { float: 'left', width: '33%' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.state.photo.map(function (photo) {
        return _react2.default.createElement('img', { style: { width: '20%' }, src: photo.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        });
      })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2FiNGNjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoganNoaW50IGVzdmVyc2lvbjo2ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHVzZXI6IFtdLFxuICAgICAgYWxidW06IFtdLFxuICAgICAgcGhvdG86IFtdXG4gICAgfTtcblxuICAgIGNvbnN0IGFwcFVybCA9ICdodHRwOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbSc7XG4gICAgdGhpcy51c2VyTGlzdCA9IGAke2FwcFVybH0vdXNlcnNgO1xuICAgIHRoaXMudXNlckFsYnVtTGlzdCA9IGAke2FwcFVybH0vYWxidW1zP3VzZXJJZD1gO1xuICAgIHRoaXMudXNlclBob3RvTGlzdCA9IGAke2FwcFVybH0vcGhvdG9zP2FsYnVtSWQ9YDtcblxuICAgIHRoaXMuZ2V0QWxidW1DbGljayA9IHRoaXMuZ2V0QWxidW1DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UGhvdG9DbGljayA9IHRoaXMuZ2V0UGhvdG9DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXBpKGVuZFBvaW50KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldChlbmRQb2ludCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRVc2VyKCl7XG4gICAgdGhpcy5hcGkodGhpcy51c2VyTGlzdCkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXI6IHJlc3BvbnNlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0QWxidW1DbGljayhpZCl7XG4gICAgdGhpcy5hcGkodGhpcy51c2VyQWxidW1MaXN0ICsgaWQpLnRoZW4oKHJlc3BvbnNlKT0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhbGJ1bTogcmVzcG9uc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQaG90b0NsaWNrKGlkKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJQaG90b0xpc3QgKyBpZCkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBob3RvOiByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgeyB0aGlzLnN0YXRlLnVzZXIubGVuZ3RoID4gMCAgPyBcIlwiIDogdGhpcy5nZXRVc2VyKCkgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctdXNlclwiIHN0eWxlPXt7IGZsb2F0OidsZWZ0Jywgd2lkdGg6JzMzJScgfX0gPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnVzZXIubWFwKHVzZXIgPT5cbiAgICAgICAgICAgICAgPGxpIGtleT17IHVzZXIuaWQgfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OidibG9jaycsIG1hcmdpbjogJzVweCAwJyB9fT57IHVzZXIubmFtZSB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgYmFja2dyb3VuZDonY3lhbicsIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyB9fSBvbkNsaWNrPXsoKSA9PiB0aGlzLmdldEFsYnVtQ2xpY2sodXNlci5pZCl9PkRpc3BsYXkgYWxidW08L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvdy1hbGJ1bVwiIHN0eWxlPXt7IGZsb2F0OidsZWZ0Jywgd2lkdGg6JzMzJScgfX0gPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFsYnVtLm1hcChhbGJ1bSA9PlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTonYmxvY2snLCBtYXJnaW46ICc1cHggMCcgfX0+eyBhbGJ1bS51c2VySWQgfSAtIHsgYWxidW0udGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXt7IGJhY2tncm91bmQ6J3llbGxvdycsIGJvcmRlcjogJzFweCBzb2xpZCBvcmFuZ2UnIH19IG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0UGhvdG9DbGljayhhbGJ1bS5pZCl9PkRpc3BsYXkgUGhvdG9zPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3ctcGhvdG9cIiBzdHlsZT17eyBmbG9hdDonbGVmdCcsIHdpZHRoOiczMyUnIH19ID5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5waG90by5tYXAocGhvdG8gPT4gPGltZyBzdHlsZT17eyB3aWR0aDonMjAlJyB9fSBzcmM9eyBwaG90by51cmwgfSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFMQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUdBO0FBTEE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7Ozs7O0FBNUVBO0FBQ0E7QUE4RUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        