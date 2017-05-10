'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reselect = require('reselect');

var _reduxRouter = require('redux-router5');

var _breadcrumb = require('../../actions/breadcrumb');

var _func = require('../../actions/func');

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reducerSelector = (0, _reselect.createSelector)(function (state) {
  return state.breadcrumb;
}, function (state) {
  return state.func;
}, function (state) {
  return state.router;
}, function (breadcrumb, func, router) {
  return {
    title: breadcrumb.title,
    func: func,
    error: hasCannotDeactivateError(router.transitionError)
  };
});

function hasCannotDeactivateError(error) {
  return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
}

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ setTitle: _breadcrumb.setTitle, setNuser: _func.setNuser, setNfunc: _func.setNfunc, setFuncEnv: _func.setFuncEnv, setFuncEnvVer: _func.setFuncEnvVer, setFunc: _func.setFunc, navigateTo: _reduxRouter.actions.navigateTo }, dispatch);
}

var AddFunc = function (_Component) {
  _inherits(AddFunc, _Component);

  function AddFunc(props, context) {
    _classCallCheck(this, AddFunc);

    var _this = _possibleConstructorReturn(this, (AddFunc.__proto__ || Object.getPrototypeOf(AddFunc)).call(this, props));

    _this.router = context.router;
    var setTitle = _this.props.setTitle;

    setTitle('Refinery > Add Refinery');
    return _this;
  }

  _createClass(AddFunc, [{
    key: 'handleFormValue',
    value: function handleFormValue(event, setter) {
      setter(event.target.value);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event, func, navigateTo) {
      //alert(JSON.stringify(func));
      _superagent2.default.post('/api/functions/create').send(func).end(function (err, res) {
        if (!err) {
          alert('등록 요청 되었습니다. 상태를 봅시다');
          navigateTo('dashboard');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          setNuser = _props.setNuser,
          setNfunc = _props.setNfunc,
          setFuncEnv = _props.setFuncEnv,
          setFuncEnvVer = _props.setFuncEnvVer,
          setFunc = _props.setFunc,
          func = _props.func,
          navigateTo = _props.navigateTo;


      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-8' },
          _react2.default.createElement(
            'div',
            { className: 'card' },
            _react2.default.createElement(
              'div',
              { className: 'card-header' },
              _react2.default.createElement(
                'strong',
                null,
                'Add'
              ),
              ' Function'
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-block' },
              _react2.default.createElement(
                'form',
                { action: '', method: 'post', enctype: 'multipart/form-data', className: 'form-horizontal ' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-group row' },
                  _react2.default.createElement(
                    'label',
                    { className: 'col-md-3 form-control-label', 'for': 'text-input' },
                    'User Name'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement('input', { type: 'text', id: 'nuser', name: 'nuser', className: 'form-control', placeholder: '\uB85C\uADF8\uC778 \uC0DD\uAE30\uBA74 \uC5C6\uC5B4\uC9D1\uB2C8\uB2F9', onChange: function onChange(e) {
                        return _this2.handleFormValue(e, setNuser);
                      } })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group row' },
                  _react2.default.createElement(
                    'label',
                    { className: 'col-md-3 form-control-label', 'for': 'select' },
                    'Platform'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'select',
                      { id: 'select', name: 'select', className: 'form-control', size: '1', onChange: function onChange(e) {
                          return _this2.handleFormValue(e, setFuncEnv);
                        } },
                      _react2.default.createElement(
                        'option',
                        { value: 'node' },
                        'nodejs'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group row' },
                  _react2.default.createElement(
                    'label',
                    { className: 'col-md-3 form-control-label', 'for': 'select' },
                    'Version'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'select',
                      { id: 'select', name: 'select', className: 'form-control', size: '1', onChange: function onChange(e) {
                          return _this2.handleFormValue(e, setFuncEnvVer);
                        } },
                      _react2.default.createElement(
                        'option',
                        { value: '0' },
                        'Please select'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '6.9' },
                        '6.9 LTS'
                      ),
                      _react2.default.createElement(
                        'option',
                        { value: '7.2' },
                        '7.2'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group row' },
                  _react2.default.createElement(
                    'label',
                    { className: 'col-md-3 form-control-label', 'for': 'text-input' },
                    'Function Name'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement('input', { type: 'text', id: 'nfunc', name: 'nfunc', className: 'form-control', placeholder: '\uD568\uC218 \uC774\uB984', onChange: function onChange(e) {
                        return _this2.handleFormValue(e, setNfunc);
                      } })
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-group row' },
                  _react2.default.createElement(
                    'label',
                    { className: 'col-md-3 form-control-label', 'for': 'textarea-input' },
                    'Function'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement('textarea', { id: 'textarea-input', name: 'textarea-input', rows: '9', className: 'form-control', placeholder: 'Function...', onChange: function onChange(e) {
                        return _this2.handleFormValue(e, setFunc);
                      } })
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-footer' },
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'btn btn-sm btn-primary', onClick: function onClick(e) {
                    return _this2.handleSubmit(e, func, navigateTo);
                  } },
                _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                ' Submit'
              )
            )
          )
        )
      );
    }
  }]);

  return AddFunc;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(reducerSelector, mapDispatchToProps)(AddFunc);

//# sourceMappingURL=func-compiled.js.map