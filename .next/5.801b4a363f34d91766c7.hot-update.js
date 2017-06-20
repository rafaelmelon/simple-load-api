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
      }, this.state.user.length > 0 ? "User loaded" : this.getUser(), _react2.default.createElement('div', { className: 'show-user', __source: {
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
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, user.name), _react2.default.createElement('button', { onClick: function onClick() {
            return _this5.getAlbumClick(user.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, 'Display album'));
      }))), _react2.default.createElement('div', { className: 'show-album', __source: {
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
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, album.userId, ' ', album.title), _react2.default.createElement('button', { onClick: function onClick() {
            return _this5.getPhotoClick(album.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, 'Display Photos'));
      })), _react2.default.createElement('div', { className: 'show-photo', __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, this.state.photo.map(function (photo) {
        return _react2.default.createElement('img', { src: photo.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44MDFiNGEzNjNmMzRkOTE3NjZjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBqc2hpbnQgZXN2ZXJzaW9uOjYgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdXNlcjogW10sXG4gICAgICBhbGJ1bTogW10sXG4gICAgICBwaG90bzogW11cbiAgICB9O1xuXG4gICAgY29uc3QgYXBwVXJsID0gJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcbiAgICB0aGlzLnVzZXJMaXN0ID0gYCR7YXBwVXJsfS91c2Vyc2A7XG4gICAgdGhpcy51c2VyQWxidW1MaXN0ID0gYCR7YXBwVXJsfS9hbGJ1bXM/dXNlcklkPWA7XG4gICAgdGhpcy51c2VyUGhvdG9MaXN0ID0gYCR7YXBwVXJsfS9waG90b3M/YWxidW1JZD1gO1xuXG4gICAgdGhpcy5nZXRBbGJ1bUNsaWNrID0gdGhpcy5nZXRBbGJ1bUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRQaG90b0NsaWNrID0gdGhpcy5nZXRQaG90b0NsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBhcGkoZW5kUG9pbnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGVuZFBvaW50KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFVzZXIoKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJMaXN0KS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlcjogcmVzcG9uc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRBbGJ1bUNsaWNrKGlkKXtcbiAgICB0aGlzLmFwaSh0aGlzLnVzZXJBbGJ1bUxpc3QgKyBpZCkudGhlbigocmVzcG9uc2UpPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFsYnVtOiByZXNwb25zZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFBob3RvQ2xpY2soaWQpe1xuICAgIHRoaXMuYXBpKHRoaXMudXNlclBob3RvTGlzdCArIGlkKS50aGVuKChyZXNwb25zZSk9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGhvdG86IHJlc3BvbnNlIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7IHRoaXMuc3RhdGUudXNlci5sZW5ndGggPiAwICA/IFwiVXNlciBsb2FkZWRcIiA6IHRoaXMuZ2V0VXNlcigpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXVzZXJcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS51c2VyLm1hcCh1c2VyID0+XG4gICAgICAgICAgICAgIDxsaSBrZXk9eyB1c2VyLmlkIH0+XG4gICAgICAgICAgICAgICAgPHNwYW4+eyB1c2VyLm5hbWUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0QWxidW1DbGljayh1c2VyLmlkKX0+RGlzcGxheSBhbGJ1bTwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LWFsYnVtXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuYWxidW0ubWFwKGFsYnVtID0+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8c3Bhbj57IGFsYnVtLnVzZXJJZCB9IHsgYWxidW0udGl0bGUgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0UGhvdG9DbGljayhhbGJ1bS5pZCl9PkRpc3BsYXkgUGhvdG9zPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93LXBob3RvXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5waG90by5tYXAocGhvdG8gPT4gPGltZyBzcmM9eyBwaG90by51cmwgfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBTEE7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFHQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7O0FBNUVBO0FBQ0E7QUE4RUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==