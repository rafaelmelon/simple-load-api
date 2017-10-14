'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('next/node_modules/babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/rafael-melon/Sites/personal/test-caseonit/pages/index.js?entry';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJheGlvcyIsIkFwcCIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwiYWxidW0iLCJwaG90byIsImFwcFVybCIsInVzZXJMaXN0IiwidXNlckFsYnVtTGlzdCIsInVzZXJQaG90b0xpc3QiLCJnZXRBbGJ1bUNsaWNrIiwiYmluZCIsImdldFBob3RvQ2xpY2siLCJlbmRQb2ludCIsInJlc29sdmUiLCJyZWplY3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImFwaSIsInNldFN0YXRlIiwiaWQiLCJsZW5ndGgiLCJnZXRVc2VyIiwiZmxvYXQiLCJ3aWR0aCIsIm1hcCIsImRpc3BsYXkiLCJtYXJnaW4iLCJuYW1lIiwiYmFja2dyb3VuZCIsImJvcmRlciIsInVzZXJJZCIsInRpdGxlIiwidXJsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFKUDs7SSxBQU1NOytCQUVKOztlQUFBLEFBQVksT0FBTzt3Q0FBQTs7Z0lBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7WUFBUSxBQUNMLEFBQ047YUFGVyxBQUVKLEFBQ1A7YUFIRixBQUFhLEFBR0osQUFHVDtBQU5hLEFBQ1g7O1FBS0ksU0FBTixBQUFlLEFBQ2Y7VUFBQSxBQUFLLFdBQUwsQUFBbUIsU0FDbkI7VUFBQSxBQUFLLGdCQUFMLEFBQXdCLFNBQ3hCO1VBQUEsQUFBSyxnQkFBTCxBQUF3QixTQUV4Qjs7VUFBQSxBQUFLLGdCQUFnQixNQUFBLEFBQUssY0FBTCxBQUFtQixLQUF4QyxBQUNBO1VBQUEsQUFBSyxnQkFBZ0IsTUFBQSxBQUFLLGNBQUwsQUFBbUIsS0FkdkIsQUFjakI7V0FDRDs7Ozs7d0JBRUcsQSxVQUFVLEFBQ1o7bUNBQW1CLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUN0Qzt3QkFBQSxBQUFNLElBQU4sQUFBVSxVQUFWLEFBQW9CLEtBQUssVUFBQSxBQUFDLFVBQWEsQUFDckM7a0JBQVEsU0FBUixBQUFpQixBQUNsQjtBQUZELFdBQUEsQUFFRyxNQUFNLFVBQUEsQUFBQyxPQUFVLEFBQ2xCO2lCQUFBLEFBQU8sQUFDUjtBQUpELEFBS0Q7QUFORCxBQUFPLEFBT1IsT0FQUTs7Ozs4QkFTQTttQkFDUDs7V0FBQSxBQUFLLElBQUksS0FBVCxBQUFjLFVBQWQsQUFBd0IsS0FBSyxVQUFBLEFBQUMsVUFBWSxBQUN4QztlQUFBLEFBQUssU0FBUyxFQUFFLE1BQWhCLEFBQWMsQUFBUSxBQUN2QjtBQUZELEFBR0Q7Ozs7a0NBRWEsQSxJQUFHO21CQUNmOztXQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssZ0JBQWQsQUFBOEIsSUFBOUIsQUFBa0MsS0FBSyxVQUFBLEFBQUMsVUFBWSxBQUNsRDtlQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUN4QjtBQUZELEFBR0Q7Ozs7a0NBRWEsQSxJQUFHO21CQUNmOztXQUFBLEFBQUssSUFBSSxLQUFBLEFBQUssZ0JBQWQsQUFBOEIsSUFBOUIsQUFBa0MsS0FBSyxVQUFBLEFBQUMsVUFBWSxBQUNsRDtlQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUN4QjtBQUZELEFBR0Q7Ozs7NkJBRVE7bUJBQ1A7OzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLE9BQUEsT0FDSSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLFNBQWhCLEFBQXlCLElBQXpCLEFBQThCLEtBQUssS0FEdkMsQUFDdUMsQUFBSyxBQUMxQywyQkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLGFBQVksT0FBTyxFQUFFLE9BQUYsQUFBUSxRQUFRLE9BQWxELEFBQWtDLEFBQXNCO29CQUF4RDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLElBQUksZ0JBQUE7K0JBQ25CLGNBQUEsUUFBSSxLQUFNLEtBQVYsQUFBZTtzQkFBZjt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxjQUFBLFVBQU0sT0FBTyxFQUFFLFNBQUYsQUFBVSxTQUFTLFFBQWhDLEFBQWEsQUFBMkI7c0JBQXhDO3dCQUFBLEFBQXFEO0FBQXJEO2dCQURGLEFBQ0UsQUFBMEQsQUFDMUQsdUJBQUEsY0FBQSxZQUFRLE9BQU8sRUFBRSxZQUFGLEFBQWEsUUFBUSxRQUFwQyxBQUFlLEFBQTZCLG9CQUFvQixTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxjQUFjLEtBQXpCLEFBQU0sQUFBd0I7QUFBdkc7c0JBQUE7d0JBQUE7QUFBQTtXQUhpQixBQUNuQixBQUVFO0FBUFYsQUFFRSxBQUNFLEFBQ0csQUFRTCw0QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlLGNBQWEsT0FBTyxFQUFFLE9BQUYsQUFBUSxRQUFRLE9BQW5ELEFBQW1DLEFBQXNCO29CQUF6RDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLElBQUksaUJBQUE7K0JBQ3BCLGNBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLFNBQUEsa0JBQ0UsY0FBQSxVQUFNLE9BQU8sRUFBRSxTQUFGLEFBQVUsU0FBUyxRQUFoQyxBQUFhLEFBQTJCO3NCQUF4Qzt3QkFBQSxBQUFxRDtBQUFyRDtpQkFBQSxBQUEyRCxRQUFhLGFBRDFFLEFBQ0UsQUFBOEUsQUFDOUUsd0JBQUEsY0FBQSxZQUFRLE9BQU8sRUFBRSxZQUFGLEFBQWEsVUFBVSxRQUF0QyxBQUFlLEFBQStCLHNCQUFzQixTQUFTLG1CQUFBO21CQUFNLE9BQUEsQUFBSyxjQUFjLE1BQXpCLEFBQU0sQUFBeUI7QUFBNUc7c0JBQUE7d0JBQUE7QUFBQTtXQUhrQixBQUNwQixBQUVFO0FBakJWLEFBWUUsQUFDRSxBQUNHLEFBUUwsNEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZSxjQUFhLE9BQU8sRUFBRSxPQUFGLEFBQVEsUUFBUSxPQUFuRCxBQUFtQyxBQUFzQjtvQkFBekQ7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLGlCQUFBO3NEQUFjLE9BQU8sRUFBRSxPQUFkLEFBQVksQUFBUSxTQUFTLEtBQU0sTUFBbkMsQUFBeUM7c0JBQXpDO3dCQUFULEFBQVM7QUFBQTtTQUFBO0FBeEJyQyxBQUNFLEFBc0JFLEFBQ0csQUFJUjs7Ozs7RUE1RWUsZ0JBQU0sQSxBQStFeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcmFmYWVsLW1lbG9uL1NpdGVzL3BlcnNvbmFsL3Rlc3QtY2FzZW9uaXQifQ==