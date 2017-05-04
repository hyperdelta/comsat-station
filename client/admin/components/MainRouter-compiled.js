'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxRouter = require('redux-router5');

var _Refinery = require('./management/Refinery');

var _Refinery2 = _interopRequireDefault(_Refinery);

var _Dashboard = require('./dashboard/Dashboard');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _NotFound = require('./error/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  'addfunc': _Refinery2.default,
  'dashboard': _Dashboard2.default

};

function MainRouter(props) {
  var route = props.route;

  var segment = route ? route.name.split('.')[0] : undefined;

  return (0, _react.createElement)(components[segment] || _NotFound2.default);
}

exports.default = (0, _reactRedux.connect)(function (state) {
  return (0, _reduxRouter.routeNodeSelector)('');
})(MainRouter);

//# sourceMappingURL=MainRouter-compiled.js.map