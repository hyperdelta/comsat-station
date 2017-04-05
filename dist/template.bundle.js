/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _reactRouter = __webpack_require__(33);

	var _reactDom = __webpack_require__(39);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(256);

	var _App2 = _interopRequireDefault(_App);

	var _createRouter = __webpack_require__(225);

	var _createRouter2 = _interopRequireDefault(_createRouter);

	var _store = __webpack_require__(268);

	var _store2 = _interopRequireDefault(_store);

	var _routes = __webpack_require__(272);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = (0, _createRouter2.default)(_routes2.default);
	var store = (0, _store2.default)(router);
	var wrappedApp = _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(
	        _reactRouter.RouterProvider,
	        { router: router },
	        _react2.default.createElement(_App2.default, null)
	    )
	);

	router.start(function (err, state) {
	    _reactDom2.default.render(wrappedApp, document.getElementById('app'));
	});

	exports.default = wrappedApp;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.connect = exports.Provider = undefined;

	var _Provider = __webpack_require__(3);

	var _Provider2 = _interopRequireDefault(_Provider);

	var _connect = __webpack_require__(7);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports.Provider = _Provider2["default"];
	exports.connect = _connect2["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports["default"] = undefined;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	  didWarnAboutReceivingStore = true;

	  (0, _warning2["default"])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	    _this.store = props.store;
	    return _this;
	  }

	  Provider.prototype.render = function render() {
	    return _react.Children.only(this.props.children);
	  };

	  return Provider;
	}(_react.Component);

	exports["default"] = Provider;

	if (process.env.NODE_ENV !== 'production') {
	  Provider.prototype.componentWillReceiveProps = function (nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	}

	Provider.propTypes = {
	  store: _storeShape2["default"].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _storeShape2["default"].isRequired
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports["default"] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports["default"] = connect;

	var _react = __webpack_require__(1);

	var _storeShape = __webpack_require__(5);

	var _storeShape2 = _interopRequireDefault(_storeShape);

	var _shallowEqual = __webpack_require__(8);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _wrapActionCreators = __webpack_require__(9);

	var _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);

	var _warning = __webpack_require__(6);

	var _warning2 = _interopRequireDefault(_warning);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _hoistNonReactStatics = __webpack_require__(31);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(32);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var defaultMapStateToProps = function defaultMapStateToProps(state) {
	  return {};
	}; // eslint-disable-line no-unused-vars
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	var errorObject = { value: null };
	function tryCatch(fn, ctx) {
	  try {
	    return fn.apply(ctx);
	  } catch (e) {
	    errorObject.value = e;
	    return errorObject;
	  }
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var mapState = mapStateToProps || defaultMapStateToProps;

	  var mapDispatch = void 0;
	  if (typeof mapDispatchToProps === 'function') {
	    mapDispatch = mapDispatchToProps;
	  } else if (!mapDispatchToProps) {
	    mapDispatch = defaultMapDispatchToProps;
	  } else {
	    mapDispatch = (0, _wrapActionCreators2["default"])(mapDispatchToProps);
	  }

	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var _options$pure = options.pure,
	      pure = _options$pure === undefined ? true : _options$pure,
	      _options$withRef = options.withRef,
	      withRef = _options$withRef === undefined ? false : _options$withRef;

	  var checkMergedEquals = pure && finalMergeProps !== defaultMergeProps;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  return function wrapWithConnect(WrappedComponent) {
	    var connectDisplayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';

	    function checkStateShape(props, methodName) {
	      if (!(0, _isPlainObject2["default"])(props)) {
	        (0, _warning2["default"])(methodName + '() in ' + connectDisplayName + ' must return a plain object. ' + ('Instead received ' + props + '.'));
	      }
	    }

	    function computeMergedProps(stateProps, dispatchProps, parentProps) {
	      var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	      if (process.env.NODE_ENV !== 'production') {
	        checkStateShape(mergedProps, 'mergeProps');
	      }
	      return mergedProps;
	    }

	    var Connect = function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
	        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

	        _this.version = version;
	        _this.store = props.store || context.store;

	        (0, _invariant2["default"])(_this.store, 'Could not find "store" in either the context or ' + ('props of "' + connectDisplayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + connectDisplayName + '".'));

	        var storeState = _this.store.getState();
	        _this.state = { storeState: storeState };
	        _this.clearCache();
	        return _this;
	      }

	      Connect.prototype.computeStateProps = function computeStateProps(store, props) {
	        if (!this.finalMapStateToProps) {
	          return this.configureFinalMapState(store, props);
	        }

	        var state = store.getState();
	        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(stateProps, 'mapStateToProps');
	        }
	        return stateProps;
	      };

	      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {
	        var mappedState = mapState(store.getState(), props);
	        var isFactory = typeof mappedState === 'function';

	        this.finalMapStateToProps = isFactory ? mappedState : mapState;
	        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;

	        if (isFactory) {
	          return this.computeStateProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedState, 'mapStateToProps');
	        }
	        return mappedState;
	      };

	      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {
	        if (!this.finalMapDispatchToProps) {
	          return this.configureFinalMapDispatch(store, props);
	        }

	        var dispatch = store.dispatch;

	        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(dispatchProps, 'mapDispatchToProps');
	        }
	        return dispatchProps;
	      };

	      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {
	        var mappedDispatch = mapDispatch(store.dispatch, props);
	        var isFactory = typeof mappedDispatch === 'function';

	        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;
	        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;

	        if (isFactory) {
	          return this.computeDispatchProps(store, props);
	        }

	        if (process.env.NODE_ENV !== 'production') {
	          checkStateShape(mappedDispatch, 'mapDispatchToProps');
	        }
	        return mappedDispatch;
	      };

	      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {
	        var nextStateProps = this.computeStateProps(this.store, this.props);
	        if (this.stateProps && (0, _shallowEqual2["default"])(nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {
	        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);
	        if (this.dispatchProps && (0, _shallowEqual2["default"])(nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {
	        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);
	        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2["default"])(nextMergedProps, this.mergedProps)) {
	          return false;
	        }

	        this.mergedProps = nextMergedProps;
	        return true;
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (!pure || !(0, _shallowEqual2["default"])(nextProps, this.props)) {
	          this.haveOwnPropsChanged = true;
	        }
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	        this.clearCache();
	      };

	      Connect.prototype.clearCache = function clearCache() {
	        this.dispatchProps = null;
	        this.stateProps = null;
	        this.mergedProps = null;
	        this.haveOwnPropsChanged = true;
	        this.hasStoreStateChanged = true;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;
	        this.renderedElement = null;
	        this.finalMapDispatchToProps = null;
	        this.finalMapStateToProps = null;
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        var storeState = this.store.getState();
	        var prevStoreState = this.state.storeState;
	        if (pure && prevStoreState === storeState) {
	          return;
	        }

	        if (pure && !this.doStatePropsDependOnOwnProps) {
	          var haveStatePropsChanged = tryCatch(this.updateStatePropsIfNeeded, this);
	          if (!haveStatePropsChanged) {
	            return;
	          }
	          if (haveStatePropsChanged === errorObject) {
	            this.statePropsPrecalculationError = errorObject.value;
	          }
	          this.haveStatePropsBeenPrecalculated = true;
	        }

	        this.hasStoreStateChanged = true;
	        this.setState({ storeState: storeState });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        (0, _invariant2["default"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var haveOwnPropsChanged = this.haveOwnPropsChanged,
	            hasStoreStateChanged = this.hasStoreStateChanged,
	            haveStatePropsBeenPrecalculated = this.haveStatePropsBeenPrecalculated,
	            statePropsPrecalculationError = this.statePropsPrecalculationError,
	            renderedElement = this.renderedElement;

	        this.haveOwnPropsChanged = false;
	        this.hasStoreStateChanged = false;
	        this.haveStatePropsBeenPrecalculated = false;
	        this.statePropsPrecalculationError = null;

	        if (statePropsPrecalculationError) {
	          throw statePropsPrecalculationError;
	        }

	        var shouldUpdateStateProps = true;
	        var shouldUpdateDispatchProps = true;
	        if (pure && renderedElement) {
	          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;
	          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;
	        }

	        var haveStatePropsChanged = false;
	        var haveDispatchPropsChanged = false;
	        if (haveStatePropsBeenPrecalculated) {
	          haveStatePropsChanged = true;
	        } else if (shouldUpdateStateProps) {
	          haveStatePropsChanged = this.updateStatePropsIfNeeded();
	        }
	        if (shouldUpdateDispatchProps) {
	          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();
	        }

	        var haveMergedPropsChanged = true;
	        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {
	          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();
	        } else {
	          haveMergedPropsChanged = false;
	        }

	        if (!haveMergedPropsChanged && renderedElement) {
	          return renderedElement;
	        }

	        if (withRef) {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {
	            ref: 'wrappedInstance'
	          }));
	        } else {
	          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);
	        }

	        return this.renderedElement;
	      };

	      return Connect;
	    }(_react.Component);

	    Connect.displayName = connectDisplayName;
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _storeShape2["default"]
	    };
	    Connect.propTypes = {
	      store: _storeShape2["default"]
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;
	        this.trySubscribe();
	        this.clearCache();
	      };
	    }

	    return (0, _hoistNonReactStatics2["default"])(Connect, WrappedComponent);
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = wrapActionCreators;

	var _redux = __webpack_require__(10);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(11);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(26);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(28);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(29);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(30);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(27);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2['default'])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _combineReducers2['default'];
	exports.bindActionCreators = _bindActionCreators2['default'];
	exports.applyMiddleware = _applyMiddleware2['default'];
	exports.compose = _compose2['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _symbolObservable = __webpack_require__(22);

	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;

	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, preloadedState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;

	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }

	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }

	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGetTag = __webpack_require__(13),
	    getPrototype = __webpack_require__(19),
	    isObjectLike = __webpack_require__(21);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(14),
	    getRawTag = __webpack_require__(17),
	    objectToString = __webpack_require__(18);

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	    if (value == null) {
	        return value === undefined ? undefinedTag : nullTag;
	    }
	    value = Object(value);
	    return symToStringTag && symToStringTag in value ? getRawTag(value) : objectToString(value);
	}

	module.exports = baseGetTag;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(15);

	/** Built-in value references. */
	var _Symbol = root.Symbol;

	module.exports = _Symbol;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(16);

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;

/***/ },
/* 16 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(14);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	module.exports = getRawTag;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}

	module.exports = objectToString;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(20);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(23);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ponyfill = __webpack_require__(25);

	var _ponyfill2 = _interopRequireDefault(_ponyfill);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var root; /* global window */

	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}

	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(24)(module)))

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;

		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}

		return result;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	var _createStore = __webpack_require__(11);

	var _isPlainObject = __webpack_require__(12);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(27);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2['default'])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
	  });

	  unexpectedKeys.forEach(function (key) {
	    unexpectedKeyCache[key] = true;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];

	    if (process.env.NODE_ENV !== 'production') {
	      if (typeof reducers[key] === 'undefined') {
	        (0, _warning2['default'])('No reducer provided for key "' + key + '"');
	      }
	    }

	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  if (process.env.NODE_ENV !== 'production') {
	    var unexpectedKeyCache = {};
	  }

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
	      if (warningMessage) {
	        (0, _warning2['default'])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that if you enable
	    // "break on all exceptions" in your console,
	    // it would pause the execution at this line.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports['default'] = applyMiddleware;

	var _compose = __webpack_require__(30);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, preloadedState, enhancer) {
	      var store = createStore(reducer, preloadedState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left. The rightmost
	 * function can take multiple arguments as it provides the signature for
	 * the resulting composite function.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing the argument functions
	 * from right to left. For example, compose(f, g, h) is identical to doing
	 * (...args) => f(g(h(...args))).
	 */

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  var rest = funcs.slice(0, -1);
	  return function () {
	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);

	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }

	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {}
	            }
	        }
	    }

	    return targetComponent;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Link = exports.withRoute = exports.RouterProvider = exports.routeNode = exports.BaseLink = undefined;

	var _BaseLink = __webpack_require__(34);

	var _BaseLink2 = _interopRequireDefault(_BaseLink);

	var _routeNode = __webpack_require__(35);

	var _routeNode2 = _interopRequireDefault(_routeNode);

	var _RouterProvider = __webpack_require__(37);

	var _RouterProvider2 = _interopRequireDefault(_RouterProvider);

	var _withRoute = __webpack_require__(38);

	var _withRoute2 = _interopRequireDefault(_withRoute);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var Link = (0, _withRoute2.default)(_BaseLink2.default);

	exports.BaseLink = _BaseLink2.default;
	exports.routeNode = _routeNode2.default;
	exports.RouterProvider = _RouterProvider2.default;
	exports.withRoute = _withRoute2.default;
	exports.Link = Link;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var BaseLink = function (_Component) {
	    _inherits(BaseLink, _Component);

	    function BaseLink(props, context) {
	        _classCallCheck(this, BaseLink);

	        var _this = _possibleConstructorReturn(this, (BaseLink.__proto__ || Object.getPrototypeOf(BaseLink)).call(this, props, context));

	        _this.router = context.router;

	        if (!_this.router.hasPlugin('BROWSER_PLUGIN')) {
	            console.error('[react-router5][BaseLink] missing browser plugin, href might be build incorrectly');
	        };

	        _this.isActive = _this.isActive.bind(_this);
	        _this.clickHandler = _this.clickHandler.bind(_this);

	        _this.state = { active: _this.isActive() };
	        return _this;
	    }

	    _createClass(BaseLink, [{
	        key: 'buildUrl',
	        value: function buildUrl(routeName, routeParams) {
	            if (this.router.buildUrl) {
	                return this.router.buildUrl(routeName, routeParams);
	            }

	            return this.router.buildPath(routeName, routeParams);
	        }
	    }, {
	        key: 'isActive',
	        value: function isActive() {
	            return this.router.isActive(this.props.routeName, this.props.routeParams, this.props.activeStrict);
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(evt) {
	            if (this.props.onClick) {
	                this.props.onClick(evt);

	                if (evt.defaultPrevented) {
	                    return;
	                }
	            }

	            var comboKey = evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey;

	            if (evt.button === 0 && !comboKey) {
	                evt.preventDefault();
	                this.router.navigate(this.props.routeName, this.props.routeParams, this.props.routeOptions);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var routeName = _props.routeName;
	            var routeParams = _props.routeParams;
	            var className = _props.className;
	            var activeClassName = _props.activeClassName;
	            var children = _props.children;

	            var active = this.isActive();
	            var href = this.buildUrl(routeName, routeParams);
	            var linkclassName = (className ? className.split(' ') : []).concat(active ? [activeClassName] : []).join(' ');

	            var onClick = this.clickHandler;

	            return _react2.default.createElement('a', { href: href, className: linkclassName, onClick: onClick }, children);
	        }
	    }]);

	    return BaseLink;
	}(_react.Component);

	BaseLink.contextTypes = {
	    router: _react2.default.PropTypes.object.isRequired
	};

	// BaseLink.propTypes = {
	//     routeName:       React.PropTypes.string.isRequired,
	//     routeParams:     React.PropTypes.object,
	//     routeOptions:    React.PropTypes.object,
	//     activeClassName: React.PropTypes.string,
	//     activeStrict:    React.PropTypes.bool,
	//     onClick:         React.PropTypes.func
	// };

	BaseLink.defaultProps = {
	    activeClassName: 'active',
	    activeStrict: false,
	    routeParams: {},
	    routeOptions: {}
	};

	exports.default = BaseLink;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(36);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function routeNode(nodeName) {
	    return function routeNodeWrapper(RouteSegment) {
	        var RouteNode = function (_Component) {
	            _inherits(RouteNode, _Component);

	            function RouteNode(props, context) {
	                _classCallCheck(this, RouteNode);

	                var _this = _possibleConstructorReturn(this, (RouteNode.__proto__ || Object.getPrototypeOf(RouteNode)).call(this, props, context));

	                _this.router = context.router;
	                _this.state = {
	                    previousRoute: null,
	                    route: _this.router.getState()
	                };
	                return _this;
	            }

	            _createClass(RouteNode, [{
	                key: 'componentDidMount',
	                value: function componentDidMount() {
	                    var _this2 = this;

	                    (0, _utils.ifNot)(this.router.hasPlugin('LISTENERS_PLUGIN'), '[react-router5][routeNode] missing listeners plugin');

	                    this.nodeListener = function (toState, fromState) {
	                        return _this2.setState({ previousRoute: fromState, route: toState });
	                    };
	                    this.router.addNodeListener(nodeName, this.nodeListener);
	                }
	            }, {
	                key: 'componentWillUnmout',
	                value: function componentWillUnmout() {
	                    this.router.removeNodeListener(nodeName, this.nodeListener);
	                }
	            }, {
	                key: 'render',
	                value: function render() {
	                    var props = this.props;
	                    var router = this.router;
	                    var _state = this.state;
	                    var previousRoute = _state.previousRoute;
	                    var route = _state.route;

	                    var component = (0, _react.createElement)(RouteSegment, _extends({}, props, { router: router, previousRoute: previousRoute, route: route }));

	                    return component;
	                }
	            }]);

	            return RouteNode;
	        }(_react.Component);

	        RouteNode.contextTypes = {
	            router: _react2.default.PropTypes.object.isRequired
	        };

	        RouteNode.displayName = 'RouteNode[' + (0, _utils.getDisplayName)(RouteSegment) + ']';

	        return RouteNode;
	    };
	}

	exports.default = routeNode;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var getDisplayName = exports.getDisplayName = function getDisplayName(component) {
	    return component.displayName || component.name || 'Component';
	};

	var ifNot = exports.ifNot = function ifNot(condition, errorMessage) {
	    if (!condition) throw new Error(errorMessage);
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var RouterProvider = function (_Component) {
	    _inherits(RouterProvider, _Component);

	    function RouterProvider(props, context) {
	        _classCallCheck(this, RouterProvider);

	        var _this = _possibleConstructorReturn(this, (RouterProvider.__proto__ || Object.getPrototypeOf(RouterProvider)).call(this, props, context));

	        _this.router = props.router;
	        return _this;
	    }

	    _createClass(RouterProvider, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { router: this.router };
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if (this.props.router !== nextProps.router) {
	                console.error('[react-router5][Router]does not support changing the router object.');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var children = this.props.children;

	            return _react.Children.only(children);
	        }
	    }]);

	    return RouterProvider;
	}(_react.Component);

	RouterProvider.propTypes = {
	    router: _react.PropTypes.object.isRequired,
	    children: _react.PropTypes.element.isRequired
	};

	RouterProvider.childContextTypes = {
	    router: _react.PropTypes.object.isRequired
	};

	exports.default = RouterProvider;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utils = __webpack_require__(36);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	function withRoute(BaseComponent) {
	    var ComponentWithRoute = function (_Component) {
	        _inherits(ComponentWithRoute, _Component);

	        function ComponentWithRoute(props, context) {
	            _classCallCheck(this, ComponentWithRoute);

	            var _this = _possibleConstructorReturn(this, (ComponentWithRoute.__proto__ || Object.getPrototypeOf(ComponentWithRoute)).call(this, props, context));

	            _this.router = context.router;
	            _this.state = {
	                previousRoute: null,
	                route: _this.router.getState()
	            };
	            _this.listener = _this.listener.bind(_this);
	            return _this;
	        }

	        _createClass(ComponentWithRoute, [{
	            key: 'componentDidMount',
	            value: function componentDidMount() {
	                var _this2 = this;

	                (0, _utils.ifNot)(this.router.hasPlugin('LISTENERS_PLUGIN'), '[react-router5][withRoute] missing listeners plugin');

	                this.listener = function (toState, fromState) {
	                    return _this2.setState({ previousRoute: fromState, route: toState });
	                };
	                this.router.addListener(this.listener);
	            }
	        }, {
	            key: 'componentWillUnmount',
	            value: function componentWillUnmount() {
	                this.router.removeListener(this.listener);
	            }
	        }, {
	            key: 'listener',
	            value: function listener(toState, fromState) {
	                this.setState({
	                    previousRoute: fromState,
	                    route: toState
	                });
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                (0, _utils.ifNot)(!this.props.router && !this.props.route && !this.props.previousRoute, '[react-router5] prop names `router`, `route` and `previousRoute` are reserved.');

	                return (0, _react.createElement)(BaseComponent, _extends({}, this.props, this.state, { router: this.router }));
	            }
	        }]);

	        return ComponentWithRoute;
	    }(_react.Component);

	    ComponentWithRoute.contextTypes = {
	        router: _react2.default.PropTypes.object.isRequired
	    };

	    ComponentWithRoute.displayName = 'WithRoute[' + (0, _utils.getDisplayName)(BaseComponent) + ']';

	    return ComponentWithRoute;
	}

	exports.default = withRoute;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.reduxPlugin = exports.routeNodeSelector = exports.actionTypes = exports.actions = exports.router5Reducer = exports.router5Middleware = undefined;

	var _router5Middleware = __webpack_require__(44);

	var _router5Middleware2 = _interopRequireDefault(_router5Middleware);

	var _router5Reducer = __webpack_require__(48);

	var _router5Reducer2 = _interopRequireDefault(_router5Reducer);

	var _routeNodeSelector = __webpack_require__(49);

	var _routeNodeSelector2 = _interopRequireDefault(_routeNodeSelector);

	var _actions = __webpack_require__(47);

	var actions = _interopRequireWildcard(_actions);

	var _actionTypes = __webpack_require__(45);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	var _reduxPlugin = __webpack_require__(46);

	var _reduxPlugin2 = _interopRequireDefault(_reduxPlugin);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.router5Middleware = _router5Middleware2.default;
	exports.router5Reducer = _router5Reducer2.default;
	exports.actions = actions;
	exports.actionTypes = actionTypes;
	exports.routeNodeSelector = _routeNodeSelector2.default;
	exports.reduxPlugin = _reduxPlugin2.default;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actionTypes = __webpack_require__(45);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	var _reduxPlugin = __webpack_require__(46);

	var _reduxPlugin2 = _interopRequireDefault(_reduxPlugin);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	var router5ReduxMiddleware = function router5ReduxMiddleware(router) {
	    return function (store) {
	        var dispatch = store.dispatch;

	        router.setDependency('store', store);
	        router.usePlugin((0, _reduxPlugin2.default)(dispatch));

	        return function (next) {
	            return function (action) {
	                switch (action.type) {
	                    case actionTypes.NAVIGATE_TO:
	                        var _action$payload = action.payload;
	                        var name = _action$payload.name;
	                        var params = _action$payload.params;
	                        var opts = _action$payload.opts;

	                        router.navigate(name, params, opts);
	                        break;

	                    case actionTypes.CANCEL_TRANSITION:
	                        router.cancel();
	                        break;

	                    case actionTypes.CAN_DEACTIVATE:
	                        router.canDeactivate(action.payload.name, action.payload.canDeactivate);
	                        break;

	                    case actionTypes.CAN_ACTIVATE:
	                        router.canActivate(action.payload.name, action.payload.canDeactivate);
	                        break;

	                    default:
	                        return next(action);
	                }
	            };
	        };
	    };
	};

	exports.default = router5ReduxMiddleware;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAVIGATE_TO = exports.NAVIGATE_TO = '@@router5/NAVIGATE';
	var CANCEL_TRANSITION = exports.CANCEL_TRANSITION = '@@router5/CANCEL';
	var TRANSITION_ERROR = exports.TRANSITION_ERROR = '@@router5/TRANSITION_ERROR';
	var TRANSITION_SUCCESS = exports.TRANSITION_SUCCESS = '@@router5/TRANSITION_SUCCESS';
	var TRANSITION_START = exports.TRANSITION_START = '@@router5/TRANSITION_START';
	var CLEAR_ERRORS = exports.CLEAR_ERRORS = '@@router5/CLEAR_ERRORS';
	var CAN_DEACTIVATE = exports.CAN_DEACTIVATE = '@@router5/CAN_DEACTIVATE';
	var CAN_ACTIVATE = exports.CAN_ACTIVATE = '@@router5/CAN_ACTIVATE';

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _actions = __webpack_require__(47);

	var actions = _interopRequireWildcard(_actions);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	function reduxPluginFactory(dispatch) {
	    function reduxPlugin() {
	        return {
	            onTransitionStart: function onTransitionStart(toState, fromState) {
	                dispatch(actions.transitionStart(toState, fromState));
	            },
	            onTransitionSuccess: function onTransitionSuccess(toState, fromState) {
	                dispatch(actions.transitionSuccess(toState, fromState));
	            },
	            onTransitionError: function onTransitionError(toState, fromState, err) {
	                dispatch(actions.transitionError(toState, fromState, err));
	            }
	        };
	    };

	    reduxPlugin.pluginName = 'REDUX_PLUGIN';

	    return reduxPlugin;
	}

	exports.default = reduxPluginFactory;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.navigateTo = navigateTo;
	exports.cancelTransition = cancelTransition;
	exports.clearErrors = clearErrors;
	exports.transitionStart = transitionStart;
	exports.transitionSuccess = transitionSuccess;
	exports.transitionError = transitionError;
	exports.canActivate = canActivate;
	exports.canDeactivate = canDeactivate;

	var _actionTypes = __webpack_require__(45);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	function navigateTo(name) {
	    var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var opts = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    return {
	        type: actionTypes.NAVIGATE_TO,
	        payload: {
	            name: name,
	            params: params,
	            opts: opts
	        }
	    };
	}

	function cancelTransition() {
	    return {
	        type: actionTypes.CANCEL_TRANSITION
	    };
	}

	function clearErrors() {
	    return {
	        type: actionTypes.CLEAR_ERRORS
	    };
	}

	function transitionStart(route, previousRoute) {
	    return {
	        type: actionTypes.TRANSITION_START,
	        payload: {
	            route: route,
	            previousRoute: previousRoute
	        }
	    };
	}

	function transitionSuccess(route, previousRoute) {
	    return {
	        type: actionTypes.TRANSITION_SUCCESS,
	        payload: {
	            route: route,
	            previousRoute: previousRoute
	        }
	    };
	}

	function transitionError(route, previousRoute, transitionError) {
	    return {
	        type: actionTypes.TRANSITION_ERROR,
	        payload: {
	            route: route,
	            previousRoute: previousRoute,
	            transitionError: transitionError
	        }
	    };
	}

	function canActivate(name, canActivate) {
	    return {
	        type: actionTypes.CAN_ACTIVATE,
	        payload: {
	            name: name,
	            canActivate: canActivate
	        }
	    };
	}

	function canDeactivate(name, canDeactivate) {
	    return {
	        type: actionTypes.CAN_DEACTIVATE,
	        payload: {
	            name: name,
	            canDeactivate: canDeactivate
	        }
	    };
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _actionTypes = __webpack_require__(45);

	var actionTypes = _interopRequireWildcard(_actionTypes);

	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}

	var initialState = {
	    route: null,
	    previousRoute: null,
	    transitionRoute: null,
	    transitionError: null
	};

	function router5Reducer() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case actionTypes.TRANSITION_START:
	            return _extends({}, state, {
	                transitionRoute: action.payload.route,
	                transitionError: null
	            });

	        case actionTypes.TRANSITION_SUCCESS:
	            return _extends({}, state, {
	                transitionRoute: null,
	                transitionError: null,
	                previousRoute: action.payload.previousRoute,
	                route: action.payload.route
	            });

	        case actionTypes.TRANSITION_ERROR:
	            return _extends({}, state, {
	                transitionRoute: action.payload.route,
	                transitionError: action.payload.transitionError
	            });

	        case actionTypes.CLEAR_ERRORS:
	            return _extends({}, state, {
	                transitionRoute: null,
	                transitionError: null
	            });

	        default:
	            return state;
	    }
	}

	exports.default = router5Reducer;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _router = __webpack_require__(50);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function routeNodeSelector(routeNode) {
	    var reducerKey = arguments.length <= 1 || arguments[1] === undefined ? 'router' : arguments[1];

	    var routerStateSelector = function routerStateSelector(state) {
	        return state[reducerKey] || state.get && state.get(reducerKey);
	    };
	    var lastReturnedValue = void 0;

	    return function (state) {
	        var _routerStateSelector = routerStateSelector(state);

	        var route = _routerStateSelector.route;
	        var previousRoute = _routerStateSelector.previousRoute;

	        var intersection = route ? (0, _router2.default)(route, previousRoute).intersection : '';

	        if (!lastReturnedValue) {
	            lastReturnedValue = { route: route, previousRoute: previousRoute };
	        } else if (!previousRoute || previousRoute !== route && intersection === routeNode) {
	            lastReturnedValue = { route: route, previousRoute: previousRoute };
	        }

	        return lastReturnedValue;
	    };
	}

	exports.default = routeNodeSelector;

/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.nameToIDs = nameToIDs;
	function nameToIDs(name) {
	    return name.split('.').reduce(function (ids, name) {
	        return ids.concat(ids.length ? ids[ids.length - 1] + '.' + name : name);
	    }, []);
	}

	function exists(val) {
	    return val !== undefined && val !== null;
	}

	function hasMetaParams(state) {
	    return state && state.meta && state.meta.params;
	}

	function extractSegmentParams(name, state) {
	    if (!exists(state.meta.params[name])) return {};

	    return Object.keys(state.meta.params[name]).reduce(function (params, p) {
	        params[p] = state.params[p];
	        return params;
	    }, {});
	}

	function transitionPath(toState, fromState) {
	    var fromStateIds = fromState ? nameToIDs(fromState.name) : [];
	    var toStateIds = nameToIDs(toState.name);
	    var maxI = Math.min(fromStateIds.length, toStateIds.length);

	    function pointOfDifference() {
	        var i = void 0;

	        var _loop = function _loop() {
	            var left = fromStateIds[i];
	            var right = toStateIds[i];

	            if (left !== right) return {
	                v: i
	            };

	            var leftParams = extractSegmentParams(left, toState);
	            var rightParams = extractSegmentParams(right, fromState);

	            if (leftParams.length !== rightParams.length) return {
	                v: i
	            };
	            if (leftParams.length === 0) return 'continue';

	            var different = Object.keys(leftParams).some(function (p) {
	                return rightParams[p] !== leftParams[p];
	            });
	            if (different) {
	                return {
	                    v: i
	                };
	            }
	        };

	        for (i = 0; i < maxI; i += 1) {
	            var _ret = _loop();

	            switch (_ret) {
	                case 'continue':
	                    continue;

	                default:
	                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }

	        return i;
	    }

	    var i = void 0;
	    if (!fromState) {
	        i = 0;
	    } else if (!hasMetaParams(fromState) && !hasMetaParams(toState)) {
	        console.warn('[router5.transition-path] Some states are missing metadata, reloading all segments');
	        i = 0;
	    } else {
	        i = pointOfDifference();
	    }

	    var toDeactivate = fromStateIds.slice(i).reverse();
	    var toActivate = toStateIds.slice(i);

	    var intersection = fromState && i > 0 ? fromStateIds[i - 1] : '';

	    return {
	        intersection: intersection,
	        toDeactivate: toDeactivate,
	        toActivate: toActivate
	    };
	}

	exports.default = transitionPath;

/***/ },
/* 51 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.__esModule = true;
	exports.defaultMemoize = defaultMemoize;
	exports.createSelectorCreator = createSelectorCreator;
	exports.createStructuredSelector = createStructuredSelector;

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function defaultEqualityCheck(a, b) {
	  return a === b;
	}

	function defaultMemoize(func) {
	  var equalityCheck = arguments.length <= 1 || arguments[1] === undefined ? defaultEqualityCheck : arguments[1];

	  var lastArgs = null;
	  var lastResult = null;
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    if (lastArgs === null || lastArgs.length !== args.length || !args.every(function (value, index) {
	      return equalityCheck(value, lastArgs[index]);
	    })) {
	      lastResult = func.apply(undefined, args);
	    }
	    lastArgs = args;
	    return lastResult;
	  };
	}

	function getDependencies(funcs) {
	  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

	  if (!dependencies.every(function (dep) {
	    return typeof dep === 'function';
	  })) {
	    var dependencyTypes = dependencies.map(function (dep) {
	      return typeof dep === 'undefined' ? 'undefined' : _typeof(dep);
	    }).join(', ');
	    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
	  }

	  return dependencies;
	}

	function createSelectorCreator(memoize) {
	  for (var _len2 = arguments.length, memoizeOptions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    memoizeOptions[_key2 - 1] = arguments[_key2];
	  }

	  return function () {
	    for (var _len3 = arguments.length, funcs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      funcs[_key3] = arguments[_key3];
	    }

	    var recomputations = 0;
	    var resultFunc = funcs.pop();
	    var dependencies = getDependencies(funcs);

	    var memoizedResultFunc = memoize.apply(undefined, [function () {
	      recomputations++;
	      return resultFunc.apply(undefined, arguments);
	    }].concat(memoizeOptions));

	    var selector = function selector(state, props) {
	      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
	        args[_key4 - 2] = arguments[_key4];
	      }

	      var params = dependencies.map(function (dependency) {
	        return dependency.apply(undefined, [state, props].concat(args));
	      });
	      return memoizedResultFunc.apply(undefined, _toConsumableArray(params));
	    };

	    selector.resultFunc = resultFunc;
	    selector.recomputations = function () {
	      return recomputations;
	    };
	    selector.resetRecomputations = function () {
	      return recomputations = 0;
	    };
	    return selector;
	  };
	}

	var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

	function createStructuredSelector(selectors) {
	  var selectorCreator = arguments.length <= 1 || arguments[1] === undefined ? createSelector : arguments[1];

	  if ((typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors)) !== 'object') {
	    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + (typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors))));
	  }
	  var objectKeys = Object.keys(selectors);
	  return selectorCreator(objectKeys.map(function (key) {
	    return selectors[key];
	  }), function () {
	    for (var _len5 = arguments.length, values = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	      values[_key5] = arguments[_key5];
	    }

	    return values.reduce(function (composition, value, index) {
	      composition[objectKeys[index]] = value;
	      return composition;
	    }, {});
	  });
	}

/***/ },
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureRouter;

	var _router = __webpack_require__(226);

	var _router2 = _interopRequireDefault(_router);

	var _logger = __webpack_require__(241);

	var _logger2 = _interopRequireDefault(_logger);

	var _listeners = __webpack_require__(242);

	var _listeners2 = _interopRequireDefault(_listeners);

	var _browser = __webpack_require__(243);

	var _browser2 = _interopRequireDefault(_browser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureRouter(routes) {
	  var useListenersPlugin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var router = (0, _router2.default)(routes.routes, {
	    defaultRoute: routes.defaultRoute
	  })
	  // Plugins
	  .usePlugin(_logger2.default).usePlugin((0, _browser2.default)({
	    useHash: true
	  }));

	  if (useListenersPlugin) {
	    router.usePlugin((0, _listeners2.default)());
	  }

	  return router;
	}

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.constants = exports.transitionPath = exports.errorCodes = exports.loggerPlugin = exports.RouteNode = exports.createRouter = undefined;

	var _createRouter = __webpack_require__(227);

	var _createRouter2 = _interopRequireDefault(_createRouter);

	var _routeNode = __webpack_require__(228);

	var _routeNode2 = _interopRequireDefault(_routeNode);

	var _logger = __webpack_require__(241);

	var _logger2 = _interopRequireDefault(_logger);

	var _router = __webpack_require__(50);

	var _router2 = _interopRequireDefault(_router);

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _createRouter2.default;
	exports.createRouter = _createRouter2.default;
	exports.RouteNode = _routeNode2.default;
	exports.loggerPlugin = _logger2.default;
	exports.errorCodes = _constants.errorCodes;
	exports.transitionPath = _router2.default;
	exports.constants = _constants2.default;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _routeNode = __webpack_require__(228);

	var _routeNode2 = _interopRequireDefault(_routeNode);

	var _utils = __webpack_require__(231);

	var _utils2 = _interopRequireDefault(_utils);

	var _routerLifecycle = __webpack_require__(233);

	var _routerLifecycle2 = _interopRequireDefault(_routerLifecycle);

	var _navigation = __webpack_require__(234);

	var _navigation2 = _interopRequireDefault(_navigation);

	var _middleware = __webpack_require__(237);

	var _middleware2 = _interopRequireDefault(_middleware);

	var _plugins = __webpack_require__(238);

	var _plugins2 = _interopRequireDefault(_plugins);

	var _routeLifecycle = __webpack_require__(239);

	var _routeLifecycle2 = _interopRequireDefault(_routeLifecycle);

	var _clone = __webpack_require__(240);

	var _clone2 = _interopRequireDefault(_clone);

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	var defaultOptions = {
	    trailingSlash: 0,
	    useTrailingSlash: undefined,
	    autoCleanUp: true,
	    strictQueryParams: true,
	    allowNotFound: false,
	    strongMatching: true
	};

	/**
	 * Create a router
	 * @param  {Array}  [routes]          The routes
	 * @param  {Object} [options={}]      The router options
	 * @param  {Object} [dependencies={}] The router dependencies
	 * @return {Object}                   The router instance
	 */
	function createRouter(routes) {
	    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    var deps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    var routerState = null;
	    var callbacks = {};
	    var dependencies = deps;
	    var options = _extends({}, defaultOptions);

	    Object.keys(opts).forEach(function (opt) {
	        return setOption(opt, opts[opt]);
	    });

	    var router = {
	        rootNode: rootNode,
	        getOptions: getOptions,
	        setOption: setOption,
	        getState: getState,
	        setState: setState,
	        makeState: makeState,
	        makeNotFoundState: makeNotFoundState,
	        setDependency: setDependency,
	        setDependencies: setDependencies,
	        getDependencies: getDependencies,
	        add: add,
	        addNode: addNode,
	        executeFactory: executeFactory,
	        addEventListener: addEventListener,
	        removeEventListener: removeEventListener,
	        invokeEventListeners: invokeEventListeners
	    };

	    /**
	     * Invoke all event listeners by event name. Possible event names are listed under constants
	     * (`import { constants } from 'router5'`): `ROUTER_START`, `ROUTER_STOP`, `TRANSITION_START`,
	     * `TRANSITION_CANCEL`, `TRANSITION_SUCCESS`, `TRANSITION_ERROR`.
	     * This method is used internally and should not be invoked directly, but it can be useful for
	     * testing purposes.
	     * @private
	     * @name invokeEventListeners
	     * @param  {String}    eventName The event name
	     */
	    function invokeEventListeners(eventName) {
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }

	        (callbacks[eventName] || []).forEach(function (cb) {
	            return cb.apply(undefined, args);
	        });
	    }

	    /**
	     * Removes an event listener
	     * @private
	     * @param  {String}   eventName The event name
	     * @param  {Function} cb        The callback to remove
	     */
	    function removeEventListener(eventName, cb) {
	        callbacks[eventName] = callbacks[eventName].filter(function (_cb) {
	            return _cb !== cb;
	        });
	    }

	    /**
	     * Add an event listener
	     * @private
	     * @param {String}   eventName The event name
	     * @param {Function} cb        The callback to add
	     */
	    function addEventListener(eventName, cb) {
	        callbacks[eventName] = (callbacks[eventName] || []).concat(cb);

	        return function () {
	            return removeEventListener(eventName, cb);
	        };
	    }

	    (0, _utils2.default)(router);
	    (0, _plugins2.default)(router);
	    (0, _middleware2.default)(router);
	    (0, _routeLifecycle2.default)(router);
	    (0, _routerLifecycle2.default)(router);
	    (0, _navigation2.default)(router);
	    (0, _clone2.default)(router, createRouter);

	    var rootNode = routes instanceof _routeNode2.default ? routes : new _routeNode2.default('', '', routes, addCanActivate);

	    router.rootNode = rootNode;

	    return router;

	    function addCanActivate(route) {
	        if (route.canActivate) router.canActivate(route.name, route.canActivate);
	    }

	    /**
	     * Build a state object
	     * @param  {String} name         The state name
	     * @param  {Object} params       The state params
	     * @param  {String} path         The state path
	     * @param  {Object} [metaParams] Description of the state params
	     * @param  {String} [source]     The source of the routing state
	     * @return {Object}              The state object
	     */
	    function makeState(name, params, path, metaParams, source) {
	        var state = {};
	        var setProp = function setProp(key, value) {
	            return Object.defineProperty(state, key, { value: value, enumerable: true });
	        };
	        setProp('name', name);
	        setProp('params', params);
	        setProp('path', path);
	        if (metaParams || source) {
	            var meta = { params: metaParams };

	            if (source) meta.source = source;

	            setProp('meta', meta);
	        }
	        return state;
	    }

	    /**
	     * Build a not found state for a given path
	     * @param  {String} path The unmatched path
	     * @return {Object}      The not found state object
	     */
	    function makeNotFoundState(path) {
	        return makeState(_constants2.default.UNKNOWN_ROUTE, { path: path }, path, {});
	    }

	    /**
	     * Get the current router state
	     * @return {Object} The current state
	     */
	    function getState() {
	        return routerState;
	    }

	    /**
	     * Set the current router state
	     * @param {Object} state The state object
	     */
	    function setState(state) {
	        routerState = state;
	    }

	    /**
	     * Get router options
	     * @return {Object} The router options
	     */
	    function getOptions() {
	        return options;
	    }

	    /**
	     * Set an option
	     * @param  {String} option The option name
	     * @param  {*}      value  The option value
	     * @return {Object}       The router instance
	     */
	    function setOption(option, value) {
	        if (option === 'useTrailingSlash' && value !== undefined) {
	            options.trailingSlash = true;
	        }
	        options[option] = value;
	        return router;
	    }

	    /**
	     * Set a router dependency
	     * @param  {String} dependencyName The dependency name
	     * @param  {*}      dependency     The dependency
	     * @return {Object}                The router instance
	     */
	    function setDependency(dependencyName, dependency) {
	        dependencies[dependencyName] = dependency;
	        return router;
	    }

	    /**
	     * Add dependencies
	     * @param { Object} deps A object of dependencies (key-value pairs)
	     * @return {Object}      The router instance
	     */
	    function setDependencies(deps) {
	        Object.keys(deps).forEach(function (depName) {
	            dependencies[depName] = deps[depName];
	        });

	        return router;
	    }

	    /**
	     * Get dependencies
	     * @return {Object} The dependencies
	     */
	    function getDependencies() {
	        return dependencies;
	    }

	    function getInjectables() {
	        return [router, getDependencies()];
	    }

	    function executeFactory(factoryFunction) {
	        return factoryFunction.apply(undefined, _toConsumableArray(getInjectables()));
	    }

	    /**
	     * Add routes
	     * @param  {Array} routes A list of routes to add
	     * @return {Object}       The router instance
	     */
	    function add(routes) {
	        rootNode.add(routes, addCanActivate);
	        return router;
	    }

	    /**
	     * Add a single route (node)
	     * @param {String} name                   The route name (full name)
	     * @param {String} path                   The route path (from parent)
	     * @param {Function} [canActivateHandler] The canActivate handler for this node
	     */
	    function addNode(name, path, canActivateHandler) {
	        router.rootNode.addNode(name, path);
	        if (canActivateHandler) router.canActivate(name, canActivateHandler);
	        return router;
	    }
	}

	exports.default = createRouter;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _pathParser = __webpack_require__(229);

	var _pathParser2 = _interopRequireDefault(_pathParser);

	var _searchParams = __webpack_require__(230);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var noop = function noop() {};

	var RouteNode = function () {
	    function RouteNode() {
	        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	        var childRoutes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	        var cb = arguments[3];
	        var parent = arguments[4];

	        _classCallCheck(this, RouteNode);

	        this.name = name;
	        this.absolute = /^~/.test(path);
	        this.path = this.absolute ? path.slice(1) : path;
	        this.parser = this.path ? new _pathParser2.default(this.path) : null;
	        this.children = [];
	        this.parent = parent;

	        this.checkParents();

	        this.add(childRoutes, cb);

	        return this;
	    }

	    _createClass(RouteNode, [{
	        key: 'checkParents',
	        value: function checkParents() {
	            if (this.absolute && this.haveParentsParams()) {
	                throw new Error('[RouteNode] A RouteNode with an abolute path cannot have parents with route parameters');
	            }
	        }
	    }, {
	        key: 'haveParentsParams',
	        value: function haveParentsParams() {
	            if (this.parent && this.parent.parser) {
	                var parser = this.parent.parser;
	                var hasParams = parser.hasUrlParams || parser.hasSpatParam || parser.hasMatrixParams || parser.hasQueryParams;

	                return hasParams || this.parent.haveParentsParams();
	            }

	            return false;
	        }
	    }, {
	        key: 'getNonAbsoluteChildren',
	        value: function getNonAbsoluteChildren() {
	            return this.children.filter(function (child) {
	                return !child.absolute;
	            });
	        }
	    }, {
	        key: 'findAbsoluteChildren',
	        value: function findAbsoluteChildren() {
	            return this.children.reduce(function (absoluteChildren, child) {
	                return absoluteChildren.concat(child.absolute ? child : []).concat(child.findAbsoluteChildren());
	            }, []);
	        }
	    }, {
	        key: 'findSlashChild',
	        value: function findSlashChild() {
	            var slashChildren = this.getNonAbsoluteChildren().filter(function (child) {
	                return child.parser && /^\/(\?|$)/.test(child.parser.path);
	            });

	            return slashChildren[0];
	        }
	    }, {
	        key: 'getParentSegments',
	        value: function getParentSegments() {
	            var segments = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	            return this.parent && this.parent.parser ? this.parent.getParentSegments(segments.concat(this.parent)) : segments.reverse();
	        }
	    }, {
	        key: 'setParent',
	        value: function setParent(parent) {
	            this.parent = parent;
	            this.checkParents();
	        }
	    }, {
	        key: 'setPath',
	        value: function setPath() {
	            var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	            this.path = path;
	            this.parser = path ? new _pathParser2.default(path) : null;
	        }
	    }, {
	        key: 'add',
	        value: function add(route) {
	            var _this = this;

	            var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

	            var originalRoute = void 0;
	            if (route === undefined || route === null) return;

	            if (route instanceof Array) {
	                route.forEach(function (r) {
	                    return _this.add(r, cb);
	                });
	                return;
	            }

	            if (!(route instanceof RouteNode) && !(route instanceof Object)) {
	                throw new Error('RouteNode.add() expects routes to be an Object or an instance of RouteNode.');
	            } else if (route instanceof RouteNode) {
	                route.setParent(this);
	            } else {
	                if (!route.name || !route.path) {
	                    throw new Error('RouteNode.add() expects routes to have a name and a path defined.');
	                }
	                originalRoute = route;
	                route = new RouteNode(route.name, route.path, route.children, cb, this);
	            }

	            var names = route.name.split('.');

	            if (names.length === 1) {
	                // Check duplicated routes
	                if (this.children.map(function (child) {
	                    return child.name;
	                }).indexOf(route.name) !== -1) {
	                    throw new Error('Alias "' + route.name + '" is already defined in route node');
	                }

	                // Check duplicated paths
	                if (this.children.map(function (child) {
	                    return child.path;
	                }).indexOf(route.path) !== -1) {
	                    throw new Error('Path "' + route.path + '" is already defined in route node');
	                }

	                this.children.push(route);
	                // Push greedy spats to the bottom of the pile
	                this.children.sort(function (left, right) {
	                    var leftPath = left.path.split('?')[0].replace(/(.+)\/$/, '$1');
	                    var rightPath = right.path.split('?')[0].replace(/(.+)\/$/, '$1');
	                    // '/' last
	                    if (leftPath === '/') return 1;
	                    if (rightPath === '/') return -1;
	                    // Spat params last
	                    if (left.parser.hasSpatParam) return 1;
	                    if (right.parser.hasSpatParam) return -1;
	                    // No spat, number of segments (less segments last)
	                    var leftSegments = (leftPath.match(/\//g) || []).length;
	                    var rightSegments = (rightPath.match(/\//g) || []).length;
	                    if (leftSegments < rightSegments) return 1;
	                    if (leftSegments > rightSegments) return -1;
	                    // Same number of segments, number of URL params ascending
	                    var leftParamsCount = left.parser.urlParams.length;
	                    var rightParamsCount = right.parser.urlParams.length;
	                    if (leftParamsCount < rightParamsCount) return -1;
	                    if (leftParamsCount > rightParamsCount) return 1;
	                    // Same number of segments and params, last segment length descending
	                    var leftParamLength = (leftPath.split('/').slice(-1)[0] || '').length;
	                    var rightParamLength = (rightPath.split('/').slice(-1)[0] || '').length;
	                    if (leftParamLength < rightParamLength) return 1;
	                    if (leftParamLength > rightParamLength) return -1;
	                    // Same last segment length, preserve definition order
	                    return 0;
	                });
	            } else {
	                // Locate parent node
	                var segments = this.getSegmentsByName(names.slice(0, -1).join('.'));
	                if (segments) {
	                    segments[segments.length - 1].add(new RouteNode(names[names.length - 1], route.path, route.children));
	                } else {
	                    throw new Error('Could not add route named \'' + route.name + '\', parent is missing.');
	                }
	            }

	            if (originalRoute) cb(originalRoute);

	            return this;
	        }
	    }, {
	        key: 'addNode',
	        value: function addNode(name, params) {
	            this.add(new RouteNode(name, params));
	            return this;
	        }
	    }, {
	        key: 'getSegmentsByName',
	        value: function getSegmentsByName(routeName) {
	            var findSegmentByName = function findSegmentByName(name, routes) {
	                var filteredRoutes = routes.filter(function (r) {
	                    return r.name === name;
	                });
	                return filteredRoutes.length ? filteredRoutes[0] : undefined;
	            };
	            var segments = [];
	            var routes = this.parser ? [this] : this.children;
	            var names = (this.parser ? [''] : []).concat(routeName.split('.'));

	            var matched = names.every(function (name) {
	                var segment = findSegmentByName(name, routes);
	                if (segment) {
	                    routes = segment.children;
	                    segments.push(segment);
	                    return true;
	                }
	                return false;
	            });

	            return matched ? segments : null;
	        }
	    }, {
	        key: 'getSegmentsMatchingPath',
	        value: function getSegmentsMatchingPath(path, options) {
	            var trailingSlash = options.trailingSlash;
	            var strictQueryParams = options.strictQueryParams;
	            var strongMatching = options.strongMatching;

	            var matchChildren = function matchChildren(nodes, pathSegment, segments) {
	                var isRoot = nodes.length === 1 && nodes[0].name === '';
	                // for (child of node.children) {

	                var _loop = function _loop(i) {
	                    var child = nodes[i];

	                    // Partially match path
	                    var match = void 0;
	                    var remainingPath = void 0;

	                    if (!child.children.length) {
	                        match = child.parser.test(pathSegment, { trailingSlash: trailingSlash });
	                    }

	                    if (!match) {
	                        match = child.parser.partialTest(pathSegment, { delimiter: strongMatching });
	                    }

	                    if (match) {
	                        // Remove consumed segment from path
	                        var consumedPath = child.parser.build(match, { ignoreSearch: true });
	                        if (trailingSlash && !child.children.length) {
	                            consumedPath = consumedPath.replace(/\/$/, '');
	                        }
	                        remainingPath = pathSegment.replace(consumedPath, '');
	                        var search = (0, _searchParams.omit)((0, _searchParams.getSearch)(pathSegment.replace(consumedPath, '')), child.parser.queryParams.concat(child.parser.queryParamsBr));
	                        remainingPath = (0, _searchParams.getPath)(remainingPath) + (search ? '?' + search : '');
	                        if (trailingSlash && !isRoot && remainingPath === '/' && !/\/$/.test(consumedPath)) {
	                            remainingPath = '';
	                        }

	                        segments.push(child);
	                        Object.keys(match).forEach(function (param) {
	                            return segments.params[param] = match[param];
	                        });

	                        if (!isRoot && !remainingPath.length) {
	                            // fully matched
	                            return {
	                                v: segments
	                            };
	                        }
	                        if (!isRoot && !strictQueryParams && remainingPath.indexOf('?') === 0) {
	                            // unmatched queryParams in non strict mode
	                            var remainingQueryParams = (0, _searchParams.parse)(remainingPath.slice(1));

	                            remainingQueryParams.forEach(function (_ref) {
	                                var name = _ref.name;
	                                var value = _ref.value;
	                                return segments.params[name] = value;
	                            });
	                            return {
	                                v: segments
	                            };
	                        }
	                        // Continue matching on non absolute children
	                        var children = child.getNonAbsoluteChildren();
	                        // If no children to match against but unmatched path left
	                        if (!children.length) {
	                            return {
	                                v: null
	                            };
	                        }
	                        // Else: remaining path and children
	                        return {
	                            v: matchChildren(children, remainingPath, segments)
	                        };
	                    }
	                };

	                for (var i = 0; i < nodes.length; i += 1) {
	                    var _ret = _loop(i);

	                    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	                }

	                return null;
	            };

	            var topLevelNodes = this.parser ? [this] : this.children;
	            var startingNodes = topLevelNodes.reduce(function (nodes, node) {
	                return nodes.concat(node, node.findAbsoluteChildren());
	            }, []);

	            var segments = [];
	            segments.params = {};

	            var matched = matchChildren(startingNodes, path, segments);
	            if (matched && matched.length === 1 && matched[0].name === '') return null;
	            return matched;
	        }
	    }, {
	        key: 'getPathFromSegments',
	        value: function getPathFromSegments(segments) {
	            return segments ? segments.map(function (segment) {
	                return segment.path;
	            }).join('') : null;
	        }
	    }, {
	        key: 'getPath',
	        value: function getPath(routeName) {
	            return this.getPathFromSegments(this.getSegmentsByName(routeName));
	        }
	    }, {
	        key: 'buildPathFromSegments',
	        value: function buildPathFromSegments(segments) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            if (!segments) return null;

	            var searchParams = segments.filter(function (s) {
	                return s.parser.hasQueryParams;
	            }).reduce(function (params, s) {
	                return params.concat(s.parser.queryParams).concat(s.parser.queryParamsBr.map(function (p) {
	                    return p + '[]';
	                }));
	            }, []);

	            var searchPart = !searchParams.length ? null : searchParams.filter(function (p) {
	                if (Object.keys(params).indexOf((0, _searchParams.withoutBrackets)(p)) === -1) {
	                    return false;
	                }

	                var val = params[(0, _searchParams.withoutBrackets)(p)];

	                return val !== undefined && val !== null;
	            }).map(function (p) {
	                var val = params[(0, _searchParams.withoutBrackets)(p)];
	                var encodedVal = Array.isArray(val) ? val.map(encodeURIComponent) : encodeURIComponent(val);

	                return _pathParser2.default.serialise(p, encodedVal);
	            }).join('&');

	            var path = segments.reduce(function (path, segment) {
	                var segmentPath = segment.parser.build(params, { ignoreSearch: true });

	                return segment.absolute ? segmentPath : path + segmentPath;
	            }, '');

	            return path + (searchPart ? '?' + searchPart : '');
	        }
	    }, {
	        key: 'getMetaFromSegments',
	        value: function getMetaFromSegments(segments) {
	            var accName = '';

	            return segments.reduce(function (meta, segment) {
	                var urlParams = segment.parser.urlParams.reduce(function (params, p) {
	                    params[p] = 'url';
	                    return params;
	                }, {});

	                var allParams = segment.parser.queryParams.reduce(function (params, p) {
	                    params[p] = 'query';
	                    return params;
	                }, urlParams);

	                if (segment.name !== undefined) {
	                    accName = accName ? accName + '.' + segment.name : segment.name;
	                    meta[accName] = allParams;
	                }
	                return meta;
	            }, {});
	        }
	    }, {
	        key: 'buildPath',
	        value: function buildPath(routeName) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	            var path = this.buildPathFromSegments(this.getSegmentsByName(routeName), params);

	            if (options.trailingSlash === true) {
	                return (/\/$/.test(path) ? path : path + '/'
	                );
	            } else if (options.trailingSlash === false) {
	                return (/\/$/.test(path) ? path.slice(0, -1) : path
	                );
	            }

	            return path;
	        }
	    }, {
	        key: 'buildStateFromSegments',
	        value: function buildStateFromSegments(segments) {
	            if (!segments || !segments.length) return null;

	            var name = segments.map(function (segment) {
	                return segment.name;
	            }).filter(function (name) {
	                return name;
	            }).join('.');
	            var params = segments.params;

	            return {
	                name: name,
	                params: params,
	                _meta: this.getMetaFromSegments(segments)
	            };
	        }
	    }, {
	        key: 'buildState',
	        value: function buildState(name) {
	            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var segments = this.getSegmentsByName(name);
	            if (!segments || !segments.length) return null;

	            return {
	                name: name,
	                params: params,
	                _meta: this.getMetaFromSegments(segments)
	            };
	        }
	    }, {
	        key: 'matchPath',
	        value: function matchPath(path, options) {
	            var defaultOptions = { trailingSlash: false, strictQueryParams: true, strongMatching: true };
	            var opts = _extends({}, defaultOptions, options);
	            var matchedSegments = this.getSegmentsMatchingPath(path, opts);

	            if (matchedSegments) {
	                if (matchedSegments[0].absolute) {
	                    var firstSegmentParams = matchedSegments[0].getParentSegments();

	                    matchedSegments.reverse();
	                    matchedSegments.push.apply(matchedSegments, _toConsumableArray(firstSegmentParams));
	                    matchedSegments.reverse();
	                }

	                var lastSegment = matchedSegments[matchedSegments.length - 1];
	                var lastSegmentSlashChild = lastSegment.findSlashChild();

	                if (lastSegmentSlashChild) {
	                    matchedSegments.push(lastSegmentSlashChild);
	                }
	            }

	            return this.buildStateFromSegments(matchedSegments);
	        }
	    }]);

	    return RouteNode;
	}();

	exports.default = RouteNode;
	module.exports = exports['default'];

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _searchParams = __webpack_require__(230);

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	var defaultOrConstrained = function defaultOrConstrained(match) {
	    return '(' + (match ? match.replace(/(^<|>$)/g, '') : '[a-zA-Z0-9-_.~%\':]+') + ')';
	};

	var rules = [{
	    // An URL can contain a parameter :paramName
	    // - and _ are allowed but not in last position
	    name: 'url-parameter',
	    pattern: /^:([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
	    regex: function regex(match) {
	        return new RegExp(defaultOrConstrained(match[2]));
	    }
	}, {
	    // Url parameter (splat)
	    name: 'url-parameter-splat',
	    pattern: /^\*([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/,
	    regex: /([^\?]*)/
	}, {
	    name: 'url-parameter-matrix',
	    pattern: /^\;([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(<(.+?)>)?/,
	    regex: function regex(match) {
	        return new RegExp(';' + match[1] + '=' + defaultOrConstrained(match[2]));
	    }
	}, {
	    // Query parameter: ?param1&param2
	    //                   ?:param1&:param2
	    name: 'query-parameter-bracket',
	    pattern: /^(?:\?|&)(?:\:)?([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})(?:\[\])/
	}, {
	    // Query parameter: ?param1&param2
	    //                   ?:param1&:param2
	    name: 'query-parameter',
	    pattern: /^(?:\?|&)(?:\:)?([a-zA-Z0-9-_]*[a-zA-Z0-9]{1})/
	}, {
	    // Delimiter /
	    name: 'delimiter',
	    pattern: /^(\/|\?)/,
	    regex: function regex(match) {
	        return new RegExp('\\' + match[0]);
	    }
	}, {
	    // Sub delimiters
	    name: 'sub-delimiter',
	    pattern: /^(\!|\&|\-|_|\.|;)/,
	    regex: function regex(match) {
	        return new RegExp(match[0]);
	    }
	}, {
	    // Unmatched fragment (until delimiter is found)
	    name: 'fragment',
	    pattern: /^([0-9a-zA-Z]+)/,
	    regex: function regex(match) {
	        return new RegExp(match[0]);
	    }
	}];

	var exists = function exists(val) {
	    return val !== undefined && val !== null;
	};

	var tokenise = function tokenise(str) {
	    var tokens = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	    // Look for a matching rule
	    var matched = rules.some(function (rule) {
	        var match = str.match(rule.pattern);
	        if (!match) return false;

	        tokens.push({
	            type: rule.name,
	            match: match[0],
	            val: match.slice(1, 2),
	            otherVal: match.slice(2),
	            regex: rule.regex instanceof Function ? rule.regex(match) : rule.regex
	        });

	        if (match[0].length < str.length) tokens = tokenise(str.substr(match[0].length), tokens);
	        return true;
	    });

	    // If no rules matched, throw an error (possible malformed path)
	    if (!matched) {
	        throw new Error('Could not parse path.');
	    }
	    // Return tokens
	    return tokens;
	};

	var optTrailingSlash = function optTrailingSlash(source, trailingSlash) {
	    if (!trailingSlash) return source;
	    return source.replace(/\\\/$/, '') + '(?:\\/)?';
	};

	var upToDelimiter = function upToDelimiter(source, delimiter) {
	    if (!delimiter) return source;

	    return (/(\/)$/.test(source) ? source : source + '(\\/|\\?|\\.|;|$)'
	    );
	};

	var appendQueryParam = function appendQueryParam(params, param) {
	    var val = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

	    if (/\[\]$/.test(param)) {
	        param = (0, _searchParams.withoutBrackets)(param);
	        val = [val];
	    }
	    var existingVal = params[param];

	    if (existingVal === undefined) params[param] = val;else params[param] = Array.isArray(existingVal) ? existingVal.concat(val) : [existingVal, val];

	    return params;
	};

	var parseQueryParams = function parseQueryParams(path) {
	    var searchPart = (0, _searchParams.getSearch)(path);
	    if (!searchPart) return {};

	    return (0, _searchParams.toObject)((0, _searchParams.parse)(searchPart));
	};

	function _serialise(key, val) {
	    if (Array.isArray(val)) {
	        return val.map(function (v) {
	            return _serialise(key, v);
	        }).join('&');
	    }

	    if (val === true) {
	        return key;
	    }

	    return key + '=' + val;
	}

	var Path = function () {
	    _createClass(Path, null, [{
	        key: 'createPath',
	        value: function createPath(path) {
	            return new Path(path);
	        }
	    }, {
	        key: 'serialise',
	        value: function serialise(key, val) {
	            return _serialise(key, val);
	        }
	    }]);

	    function Path(path) {
	        _classCallCheck(this, Path);

	        if (!path) throw new Error('Please supply a path');
	        this.path = path;
	        this.tokens = tokenise(path);

	        this.hasUrlParams = this.tokens.filter(function (t) {
	            return (/^url-parameter/.test(t.type)
	            );
	        }).length > 0;
	        this.hasSpatParam = this.tokens.filter(function (t) {
	            return (/splat$/.test(t.type)
	            );
	        }).length > 0;
	        this.hasMatrixParams = this.tokens.filter(function (t) {
	            return (/matrix$/.test(t.type)
	            );
	        }).length > 0;
	        this.hasQueryParams = this.tokens.filter(function (t) {
	            return (/^query-parameter/.test(t.type)
	            );
	        }).length > 0;
	        // Extract named parameters from tokens
	        this.spatParams = this._getParams('url-parameter-splat');
	        this.urlParams = this._getParams(/^url-parameter/);
	        // Query params
	        this.queryParams = this._getParams('query-parameter');
	        this.queryParamsBr = this._getParams('query-parameter-bracket');
	        // All params
	        this.params = this.urlParams.concat(this.queryParams).concat(this.queryParamsBr);
	        // Check if hasQueryParams
	        // Regular expressions for url part only (full and partial match)
	        this.source = this.tokens.filter(function (t) {
	            return t.regex !== undefined;
	        }).map(function (r) {
	            return r.regex.source;
	        }).join('');
	    }

	    _createClass(Path, [{
	        key: '_getParams',
	        value: function _getParams(type) {
	            var predicate = type instanceof RegExp ? function (t) {
	                return type.test(t.type);
	            } : function (t) {
	                return t.type === type;
	            };

	            return this.tokens.filter(predicate).map(function (t) {
	                return t.val[0];
	            });
	        }
	    }, {
	        key: '_isQueryParam',
	        value: function _isQueryParam(name) {
	            return this.queryParams.indexOf(name) !== -1 || this.queryParamsBr.indexOf(name) !== -1;
	        }
	    }, {
	        key: '_urlTest',
	        value: function _urlTest(path, regex) {
	            var _this = this;

	            var match = path.match(regex);
	            if (!match) return null;else if (!this.urlParams.length) return {};
	            // Reduce named params to key-value pairs
	            return match.slice(1, this.urlParams.length + 1).reduce(function (params, m, i) {
	                params[_this.urlParams[i]] = decodeURIComponent(m);
	                return params;
	            }, {});
	        }
	    }, {
	        key: 'test',
	        value: function test(path, opts) {
	            var _this2 = this;

	            var options = _extends({ trailingSlash: false }, opts);
	            // trailingSlash: falsy => non optional, truthy => optional
	            var source = optTrailingSlash(this.source, options.trailingSlash);
	            // Check if exact match
	            var matched = this._urlTest(path, new RegExp('^' + source + (this.hasQueryParams ? '(\\?.*$|$)' : '$')));
	            // If no match, or no query params, no need to go further
	            if (!matched || !this.hasQueryParams) return matched;
	            // Extract query params
	            var queryParams = parseQueryParams(path);
	            var unexpectedQueryParams = Object.keys(queryParams).filter(function (p) {
	                return _this2.queryParams.concat(_this2.queryParamsBr).indexOf(p) === -1;
	            });

	            if (unexpectedQueryParams.length === 0) {
	                // Extend url match
	                Object.keys(queryParams).forEach(function (p) {
	                    return matched[p] = queryParams[p];
	                });

	                return matched;
	            }

	            return null;
	        }
	    }, {
	        key: 'partialTest',
	        value: function partialTest(path, opts) {
	            var _this3 = this;

	            var options = _extends({ delimited: true }, opts);
	            // Check if partial match (start of given path matches regex)
	            // trailingSlash: falsy => non optional, truthy => optional
	            var source = upToDelimiter(this.source, options.delimited);
	            var match = this._urlTest(path, new RegExp('^' + source));

	            if (!match) return match;

	            if (!this.hasQueryParams) return match;

	            var queryParams = parseQueryParams(path);

	            Object.keys(queryParams).filter(function (p) {
	                return _this3.queryParams.concat(_this3.queryParamsBr).indexOf(p) >= 0;
	            }).forEach(function (p) {
	                return appendQueryParam(match, p, queryParams[p]);
	            });

	            return match;
	        }
	    }, {
	        key: 'build',
	        value: function build() {
	            var _this4 = this;

	            var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	            var options = _extends({ ignoreConstraints: false, ignoreSearch: false }, opts);
	            var encodedParams = Object.keys(params).reduce(function (acc, key) {
	                if (!exists(params[key])) {
	                    return acc;
	                }

	                var val = params[key];
	                var encode = _this4._isQueryParam(key) ? encodeURIComponent : encodeURI;

	                if (typeof val === 'boolean') {
	                    acc[key] = val;
	                } else if (Array.isArray(val)) {
	                    acc[key] = val.map(encode);
	                } else {
	                    acc[key] = encode(val);
	                }

	                return acc;
	            }, {});

	            // Check all params are provided (not search parameters which are optional)
	            if (this.urlParams.some(function (p) {
	                return !exists(encodedParams[p]);
	            })) throw new Error('Missing parameters');

	            // Check constraints
	            if (!options.ignoreConstraints) {
	                var constraintsPassed = this.tokens.filter(function (t) {
	                    return (/^url-parameter/.test(t.type) && !/-splat$/.test(t.type)
	                    );
	                }).every(function (t) {
	                    return new RegExp('^' + defaultOrConstrained(t.otherVal[0]) + '$').test(encodedParams[t.val]);
	                });

	                if (!constraintsPassed) throw new Error('Some parameters are of invalid format');
	            }

	            var base = this.tokens.filter(function (t) {
	                return (/^query-parameter/.test(t.type) === false
	                );
	            }).map(function (t) {
	                if (t.type === 'url-parameter-matrix') return ';' + t.val + '=' + encodedParams[t.val[0]];
	                return (/^url-parameter/.test(t.type) ? encodedParams[t.val[0]] : t.match
	                );
	            }).join('');

	            if (options.ignoreSearch) return base;

	            var queryParams = this.queryParams.concat(this.queryParamsBr.map(function (p) {
	                return p + '[]';
	            }));

	            var searchPart = queryParams.filter(function (p) {
	                return Object.keys(encodedParams).indexOf((0, _searchParams.withoutBrackets)(p)) !== -1;
	            }).map(function (p) {
	                return _serialise(p, encodedParams[(0, _searchParams.withoutBrackets)(p)]);
	            }).join('&');

	            return base + (searchPart ? '?' + searchPart : '');
	        }
	    }]);

	    return Path;
	}();

	exports.default = Path;
	module.exports = exports['default'];

/***/ },
/* 230 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// Split path
	var getPath = exports.getPath = function getPath(path) {
	    return path.split('?')[0];
	};
	var getSearch = exports.getSearch = function getSearch(path) {
	    return path.split('?')[1];
	};

	// Search param value
	var isSerialisable = function isSerialisable(val) {
	    return val !== undefined && val !== null && val !== '';
	};

	// Search param name
	var bracketTest = /\[\]$/;
	var hasBrackets = exports.hasBrackets = function hasBrackets(paramName) {
	    return bracketTest.test(paramName);
	};
	var withoutBrackets = exports.withoutBrackets = function withoutBrackets(paramName) {
	    return paramName.replace(bracketTest, '');
	};

	/**
	 * Parse a querystring and return a list of params (Objects with name and value properties)
	 * @param  {String} querystring The querystring to parse
	 * @return {Array[Object]}      The list of params
	 */
	var parse = exports.parse = function parse(querystring) {
	    return querystring.split('&').reduce(function (params, param) {
	        var split = param.split('=');
	        var name = split[0];
	        var value = split[1];

	        return params.concat(split.length === 1 ? { name: name, value: true } : { name: name, value: decodeURIComponent(value) });
	    }, []);
	};

	/**
	 * Reduce a list of parameters (returned by `.parse()``) to an object (key-value pairs)
	 * @param  {Array} paramList The list of parameters returned by `.parse()`
	 * @return {Object}          The object of parameters (key-value pairs)
	 */
	var toObject = exports.toObject = function toObject(paramList) {
	    return paramList.reduce(function (params, _ref) {
	        var name = _ref.name;
	        var value = _ref.value;

	        var isArray = hasBrackets(name);
	        var currentValue = params[withoutBrackets(name)];

	        if (currentValue === undefined) {
	            params[withoutBrackets(name)] = isArray ? [value] : value;
	        } else {
	            params[withoutBrackets(name)] = [].concat(currentValue, value);
	        }

	        return params;
	    }, {});
	};

	/**
	 * Build a querystring from a list of parameters
	 * @param  {Array} paramList The list of parameters (see `.parse()`)
	 * @return {String}          The querystring
	 */
	var build = exports.build = function build(paramList) {
	    return paramList.filter(function (_ref2) {
	        var value = _ref2.value;
	        return value !== undefined && value !== null;
	    }).map(function (_ref3) {
	        var name = _ref3.name;
	        var value = _ref3.value;
	        return value === true ? name : name + '=' + encodeURIComponent(value);
	    }).join('&');
	};

	/**
	 * Remove a list of parameters from a querystring
	 * @param  {String} querystring  The original querystring
	 * @param  {Array}  paramsToOmit The parameters to omit
	 * @return {String}              The querystring
	 */
	var omit = exports.omit = function omit(querystring, paramsToOmit) {
	    if (!querystring) return '';

	    var remainingQueryParams = parse(querystring).filter(function (_ref4) {
	        var name = _ref4.name;
	        return paramsToOmit.indexOf(withoutBrackets(name)) === -1;
	    });
	    var remainingQueryString = build(remainingQueryParams);

	    return remainingQueryString || '';
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = withUtils;

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function withUtils(router) {
	    var options = router.getOptions();

	    router.isActive = isActive;
	    router.areStatesEqual = areStatesEqual;
	    router.areStatesDescendants = areStatesDescendants;
	    router.buildPath = buildPath;
	    router.buildState = buildState;
	    router.matchPath = matchPath;
	    router.setRootPath = setRootPath;

	    /**
	     * Check if a route is currently active
	     * @param  {String}  name                     The route name
	     * @param  {Object}  params                   The route params
	     * @param  {Boolean} [strictEquality=false]   Whether to check if the given route is the active route, or part of the active route
	     * @param  {Boolean} [ignoreQueryParams=true] Whether to ignore query parameters
	     * @return {Boolean}                          Whether the given route is active
	     */
	    function isActive(name) {
	        var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	        var strictEquality = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	        var ignoreQueryParams = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

	        var activeState = router.getState();

	        if (!activeState) return false;

	        if (strictEquality || activeState.name === name) {
	            return areStatesEqual(router.makeState(name, params), activeState, ignoreQueryParams);
	        }

	        return areStatesDescendants(router.makeState(name, params), activeState);
	    }

	    /**
	     * Compare two route state objects
	     * @param  {Object}  state1            The route state
	     * @param  {Object}  state2            The other route state
	     * @param  {Boolean} ignoreQueryParams Whether to ignore query parameters or not
	     * @return {Boolean}                   Whether the two route state are equal or not
	     */
	    function areStatesEqual(state1, state2) {
	        var ignoreQueryParams = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	        if (state1.name !== state2.name) return false;

	        var getUrlParams = function getUrlParams(name) {
	            return router.rootNode.getSegmentsByName(name).map(function (segment) {
	                return segment.parser[ignoreQueryParams ? 'urlParams' : 'params'];
	            }).reduce(function (params, p) {
	                return params.concat(p);
	            }, []);
	        };

	        var state1Params = getUrlParams(state1.name);
	        var state2Params = getUrlParams(state2.name);

	        return state1Params.length === state2Params.length && state1Params.every(function (p) {
	            return state1.params[p] === state2.params[p];
	        });
	    }

	    /**
	     * Check if two states are related
	     * @param  {State} parentState  The parent state
	     * @param  {State} childState   The child state
	     * @return {Boolean}            Whether the two states are descendants or not
	     */
	    function areStatesDescendants(parentState, childState) {
	        var regex = new RegExp('^' + parentState.name + '\\.(.*)$');
	        if (!regex.test(childState.name)) return false;
	        // If child state name extends parent state name, and all parent state params
	        // are in child state params.
	        return Object.keys(parentState.params).every(function (p) {
	            return parentState.params[p] === childState.params[p];
	        });
	    }

	    /**
	     * Build a path
	     * @param  {String} route  The route name
	     * @param  {Object} params The route params
	     * @return {String}        The path
	     */
	    function buildPath(route, params) {
	        if (route === _constants2.default.UNKNOWN_ROUTE) {
	            return params.path;
	        }

	        var useTrailingSlash = options.useTrailingSlash;

	        return router.rootNode.buildPath(route, params, { trailingSlash: useTrailingSlash });
	    }

	    function buildState(route, params) {
	        return router.rootNode.buildState(route, params);
	    }

	    /**
	     * Match a path
	     * @param  {String} path     The path to match
	     * @param  {String} [source] The source (optional, used internally)
	     * @return {Object}          The matched state (null if unmatched)
	     */
	    function matchPath(path, source) {
	        var trailingSlash = options.trailingSlash;
	        var strictQueryParams = options.strictQueryParams;
	        var strongMatching = options.strongMatching;

	        var match = router.rootNode.matchPath(path, { trailingSlash: trailingSlash, strictQueryParams: strictQueryParams, strongMatching: strongMatching });

	        if (match) {
	            var name = match.name;
	            var params = match.params;
	            var _meta = match._meta;

	            var builtPath = options.useTrailingSlash === undefined ? path : router.buildPath(name, params);

	            return router.makeState(name, params, builtPath, _meta, source);
	        }

	        return null;
	    }

	    /**
	     * Set the root node patch, use carefully. It can be used to set app-wide allowed query parameters.
	     * @param {String} rootPath The root node path
	     */
	    function setRootPath(rootPath) {
	        router.rootNode.setPath(rootPath);
	    }
	}

/***/ },
/* 232 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var errorCodes = exports.errorCodes = {
	    ROUTER_NOT_STARTED: 'NOT_STARTED',
	    NO_START_PATH_OR_STATE: 'NO_START_PATH_OR_STATE',
	    ROUTER_ALREADY_STARTED: 'ALREADY_STARTED',
	    ROUTE_NOT_FOUND: 'ROUTE_NOT_FOUND',
	    SAME_STATES: 'SAME_STATES',
	    CANNOT_DEACTIVATE: 'CANNOT_DEACTIVATE',
	    CANNOT_ACTIVATE: 'CANNOT_ACTIVATE',
	    TRANSITION_ERR: 'TRANSITION_ERR',
	    TRANSITION_CANCELLED: 'CANCELLED'
	};

	var constants = {
	    UNKNOWN_ROUTE: '@@router5/UNKNOWN_ROUTE',
	    ROUTER_START: '$start',
	    ROUTER_STOP: '$stop',
	    TRANSITION_START: '$$start',
	    TRANSITION_CANCEL: '$$cancel',
	    TRANSITION_SUCCESS: '$$success',
	    TRANSITION_ERROR: '$$error'
	};

	exports.default = constants;

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = withRouterLifecycle;

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var noop = function noop() {};

	function withRouterLifecycle(router) {
	    var started = false;
	    var options = router.getOptions();

	    router.isStarted = isStarted;
	    router.start = start;
	    router.stop = stop;

	    /**
	     * Check if the router is started
	     * @return {Boolean} Whether the router is started or not
	     */
	    function isStarted() {
	        return started;
	    }

	    /**
	     * Start the router
	     * @param  {String|Object} startPathOrState The start path or state. This is optional when using the browser plugin.
	     * @param  {Function}      done             A done node style callback (err, state)
	     * @return {Object}                         The router instance
	     */
	    function start() {
	        var lastArg = arguments.length <= arguments.length - 1 + 0 ? undefined : arguments[arguments.length - 1 + 0];
	        var done = typeof lastArg === 'function' ? lastArg : noop;
	        var startPathOrState = typeof (arguments.length <= 0 ? undefined : arguments[0]) !== 'function' ? arguments.length <= 0 ? undefined : arguments[0] : undefined;

	        if (started) {
	            done({ code: _constants.errorCodes.ROUTER_ALREADY_STARTED });
	            return router;
	        }

	        var startPath = void 0,
	            startState = void 0;

	        started = true;
	        router.invokeEventListeners(_constants2.default.ROUTER_START);

	        // callback
	        var cb = function cb(err, state) {
	            var invokeErrCb = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

	            if (!err) router.invokeEventListeners(_constants2.default.TRANSITION_SUCCESS, state, null, { replace: true });
	            if (err && invokeErrCb) router.invokeEventListeners(_constants2.default.TRANSITION_ERROR, state, null, err);
	            done(err, state);
	        };

	        if (startPathOrState === undefined && !options.defaultRoute) {
	            return cb({ code: _constants.errorCodes.NO_START_PATH_OR_STATE });
	        }if (typeof startPathOrState === 'string') {
	            startPath = startPathOrState;
	        } else if ((typeof startPathOrState === 'undefined' ? 'undefined' : _typeof(startPathOrState)) === 'object') {
	            startState = startPathOrState;
	        }

	        if (!startState) {
	            (function () {
	                // If no supplied start state, get start state
	                startState = startPath === undefined ? null : router.matchPath(startPath);
	                // Navigate to default function
	                var navigateToDefault = function navigateToDefault() {
	                    return router.navigateToDefault({ replace: true }, done);
	                };
	                var redirect = function redirect(route) {
	                    return router.navigate(route.name, route.params, { replace: true, reload: true }, done);
	                };
	                // If matched start path
	                if (startState) {
	                    router.transitionToState(startState, router.getState(), {}, function (err, state) {
	                        if (!err) cb(null, state);else if (err.redirect) redirect(err.redirect);else if (options.defaultRoute) navigateToDefault();else cb(err, null, false);
	                    });
	                } else if (options.defaultRoute) {
	                    // If default, navigate to default
	                    navigateToDefault();
	                } else if (options.allowNotFound) {
	                    cb(null, router.makeNotFoundState(startPath));
	                } else {
	                    // No start match, no default => do nothing
	                    cb({ code: _constants.errorCodes.ROUTE_NOT_FOUND, path: startPath }, null);
	                }
	            })();
	        } else {
	            // Initialise router with provided start state
	            router.setState(startState);
	            cb(null, startState);
	        }

	        return router;
	    }

	    /**
	     * Stop the router
	     * @return {Object} The router instance
	     */
	    function stop() {
	        if (started) {
	            router.setState(null);
	            started = false;
	            router.invokeEventListeners(_constants2.default.ROUTER_STOP);
	        }

	        return router;
	    }
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = withNavigation;

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	var _transition = __webpack_require__(235);

	var _transition2 = _interopRequireDefault(_transition);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var noop = function noop() {};

	function withNavigation(router) {
	    var cancelCurrentTransition = void 0;

	    router.navigate = navigate;
	    router.navigateToDefault = navigateToDefault;
	    router.transitionToState = transitionToState;
	    router.cancel = cancel;

	    /**
	     * Cancel the current transition if there is one
	     * @return {Object} The router instance
	     */
	    function cancel() {
	        if (cancelCurrentTransition) {
	            cancelCurrentTransition('navigate');
	            cancelCurrentTransition = null;
	        }

	        return router;
	    }

	    /**
	     * Navigate to a route
	     * @param  {String}   routeName      The route name
	     * @param  {Object}   [routeParams]  The route params
	     * @param  {Object}   [options]      The navigation options (`replace`, `reload`)
	     * @param  {Function} [done]         A done node style callback (err, state)
	     * @return {Function}                A cancel function
	     */
	    function navigate() {
	        var name = arguments.length <= 0 ? undefined : arguments[0];
	        var lastArg = arguments.length <= arguments.length - 1 + 0 ? undefined : arguments[arguments.length - 1 + 0];
	        var done = typeof lastArg === 'function' ? lastArg : noop;
	        var params = _typeof(arguments.length <= 1 ? undefined : arguments[1]) === 'object' ? arguments.length <= 1 ? undefined : arguments[1] : {};
	        var opts = _typeof(arguments.length <= 2 ? undefined : arguments[2]) === 'object' ? arguments.length <= 2 ? undefined : arguments[2] : {};

	        if (!router.isStarted()) {
	            done({ code: _constants.errorCodes.ROUTER_NOT_STARTED });
	            return;
	        }

	        var route = router.buildState(name, params);

	        if (!route) {
	            var err = { code: _constants.errorCodes.ROUTE_NOT_FOUND };
	            done(err);
	            router.invokeEventListeners(_constants2.default.TRANSITION_ERROR, null, router.getState(), err);
	            return;
	        }

	        var toState = router.makeState(route.name, route.params, router.buildPath(name, params), route._meta);
	        var sameStates = router.getState() ? router.areStatesEqual(router.getState(), toState, false) : false;

	        // Do not proceed further if states are the same and no reload
	        // (no desactivation and no callbacks)
	        if (sameStates && !opts.reload) {
	            var _err = { code: _constants.errorCodes.SAME_STATES };
	            done(_err);
	            router.invokeEventListeners(_constants2.default.TRANSITION_ERROR, toState, router.getState(), _err);
	            return;
	        }

	        var fromState = sameStates ? null : router.getState();

	        // Transitio
	        return transitionToState(toState, fromState, opts, function (err, state) {
	            if (err) {
	                if (err.redirect) {
	                    var _err$redirect = err.redirect;
	                    var _name = _err$redirect.name;
	                    var _params = _err$redirect.params;

	                    navigate(_name, _params, _extends({}, opts, { reload: true }), done);
	                } else {
	                    done(err);
	                }
	            } else {
	                router.invokeEventListeners(_constants2.default.TRANSITION_SUCCESS, state, fromState, opts);
	                done(null, state);
	            }
	        });
	    }

	    /**
	     * Navigate to the default route (if defined)
	     * @param  {Object}   [opts] The navigation options
	     * @param  {Function} [done] A done node style callback (err, state)
	     * @return {Function}        A cancel function
	     */
	    function navigateToDefault() {
	        var opts = _typeof(arguments.length <= 0 ? undefined : arguments[0]) === 'object' ? arguments.length <= 0 ? undefined : arguments[0] : {};
	        var done = arguments.length === 2 ? arguments.length <= 1 ? undefined : arguments[1] : typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'function' ? arguments.length <= 0 ? undefined : arguments[0] : noop;
	        var options = router.getOptions();

	        if (options.defaultRoute) {
	            return navigate(options.defaultRoute, options.defaultParams, opts, done);
	        }

	        return function () {};
	    }

	    function transitionToState(toState, fromState) {
	        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	        var done = arguments.length <= 3 || arguments[3] === undefined ? noop : arguments[3];

	        cancel();
	        router.invokeEventListeners(_constants2.default.TRANSITION_START, toState, fromState);

	        cancelCurrentTransition = (0, _transition2.default)(router, toState, fromState, options, function (err, state) {
	            cancelCurrentTransition = null;
	            state = state || toState;

	            if (err) {
	                if (err.code === _constants.errorCodes.TRANSITION_CANCELLED) {
	                    router.invokeEventListeners(_constants2.default.TRANSITION_CANCEL, toState, fromState);
	                } else {
	                    router.invokeEventListeners(_constants2.default.TRANSITION_ERROR, toState, fromState, err);
	                }
	                done(err);
	            } else {
	                router.setState(state);
	                done(null, state);
	            }
	        });

	        return cancelCurrentTransition;
	    }
	}

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	                _arr.push(_s.value);if (i && _arr.length === i) break;
	            }
	        } catch (err) {
	            _d = true;_e = err;
	        } finally {
	            try {
	                if (!_n && _i["return"]) _i["return"]();
	            } finally {
	                if (_d) throw _e;
	            }
	        }return _arr;
	    }return function (arr, i) {
	        if (Array.isArray(arr)) {
	            return arr;
	        } else if (Symbol.iterator in Object(arr)) {
	            return sliceIterator(arr, i);
	        } else {
	            throw new TypeError("Invalid attempt to destructure non-iterable instance");
	        }
	    };
	}();

	var _router = __webpack_require__(50);

	var _router2 = _interopRequireDefault(_router);

	var _resolve = __webpack_require__(236);

	var _resolve2 = _interopRequireDefault(_resolve);

	var _constants = __webpack_require__(232);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	exports.default = transition;

	function transition(router, toState, fromState, opts, callback) {
	    var cancelled = false;
	    var completed = false;
	    var options = router.getOptions();

	    var _router$getLifecycleF = router.getLifecycleFunctions();

	    var _router$getLifecycleF2 = _slicedToArray(_router$getLifecycleF, 2);

	    var canDeactivateFunctions = _router$getLifecycleF2[0];
	    var canActivateFunctions = _router$getLifecycleF2[1];

	    var middlewareFunctions = router.getMiddlewareFunctions();
	    var isCancelled = function isCancelled() {
	        return cancelled;
	    };
	    var cancel = function cancel() {
	        if (!cancelled && !completed) {
	            cancelled = true;
	            callback({ code: _constants.errorCodes.TRANSITION_CANCELLED }, null);
	        }
	    };
	    var done = function done(err, state) {
	        completed = true;

	        if (isCancelled()) {
	            return;
	        }

	        if (!err && options.autoCleanUp) {
	            (function () {
	                var activeSegments = (0, _router.nameToIDs)(toState.name);
	                Object.keys(canDeactivateFunctions).forEach(function (name) {
	                    if (activeSegments.indexOf(name) === -1) router.clearCanDeactivate(name);
	                });
	            })();
	        }

	        callback(err, state || toState);
	    };
	    var makeError = function makeError(base, err) {
	        return _extends({}, base, err instanceof Object ? err : { error: err });
	    };

	    var _transitionPath = (0, _router2.default)(toState, fromState);

	    var toDeactivate = _transitionPath.toDeactivate;
	    var toActivate = _transitionPath.toActivate;

	    var asyncBase = { isCancelled: isCancelled, toState: toState, fromState: fromState };

	    var canDeactivate = function canDeactivate(toState, fromState, cb) {
	        var canDeactivateFunctionMap = toDeactivate.filter(function (name) {
	            return canDeactivateFunctions[name];
	        }).reduce(function (fnMap, name) {
	            return _extends({}, fnMap, _defineProperty({}, name, canDeactivateFunctions[name]));
	        }, {});

	        (0, _resolve2.default)(canDeactivateFunctionMap, _extends({}, asyncBase, { errorKey: 'segment' }), function (err) {
	            return cb(err ? makeError({ code: _constants.errorCodes.CANNOT_DEACTIVATE }, err) : null);
	        });
	    };

	    var canActivate = function canActivate(toState, fromState, cb) {
	        var canActivateFunctionMap = toActivate.filter(function (name) {
	            return canActivateFunctions[name];
	        }).reduce(function (fnMap, name) {
	            return _extends({}, fnMap, _defineProperty({}, name, canActivateFunctions[name]));
	        }, {});

	        (0, _resolve2.default)(canActivateFunctionMap, _extends({}, asyncBase, { errorKey: 'segment' }), function (err) {
	            return cb(err ? makeError({ code: _constants.errorCodes.CANNOT_ACTIVATE }, err) : null);
	        });
	    };

	    var middleware = !middlewareFunctions.length ? [] : function (toState, fromState, cb) {
	        return (0, _resolve2.default)(middlewareFunctions, _extends({}, asyncBase), function (err, state) {
	            return cb(err ? makeError({ code: _constants.errorCodes.TRANSITION_ERR }, err) : null, state || toState);
	        });
	    };

	    var pipeline = (fromState && !opts.forceDeactivate ? [canDeactivate] : []).concat(canActivate).concat(middleware);

	    (0, _resolve2.default)(pipeline, asyncBase, done);

	    return cancel;
	}

/***/ },
/* 236 */
/***/ function(module, exports) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	exports.default = resolve;

	function _defineProperty(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	    } else {
	        obj[key] = value;
	    }return obj;
	}

	function resolve(functions, _ref, callback) {
	    var isCancelled = _ref.isCancelled;
	    var toState = _ref.toState;
	    var fromState = _ref.fromState;
	    var errorKey = _ref.errorKey;

	    var remainingFunctions = Array.isArray(functions) ? functions : Object.keys(functions);

	    var isState = function isState(obj) {
	        return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.name !== undefined && obj.params !== undefined && obj.path !== undefined;
	    };
	    var hasStateChanged = function hasStateChanged(state) {
	        return state.name !== toState.name || state.params !== toState.params || state.path !== toState.path;
	    };

	    var processFn = function processFn(done) {
	        if (!remainingFunctions.length) return true;

	        var isMapped = typeof remainingFunctions[0] === 'string';
	        var errBase = errorKey && isMapped ? _defineProperty({}, errorKey, remainingFunctions[0]) : {};
	        var stepFn = isMapped ? functions[remainingFunctions[0]] : remainingFunctions[0];

	        // const len = stepFn.length;
	        var res = stepFn.call(null, toState, fromState, done);
	        if (isCancelled()) {
	            done(null);
	        } else if (typeof res === 'boolean') {
	            done(res ? null : errBase);
	        } else if (res && typeof res.then === 'function') {
	            res.then(function (resVal) {
	                if (resVal instanceof Error) done({ error: resVal }, null);else done(null, resVal);
	            }, function (err) {
	                if (err instanceof Error) {
	                    console.error(err.stack || err);
	                    done(_extends({}, errBase, { promiseError: err }), null);
	                } else {
	                    done((typeof err === 'undefined' ? 'undefined' : _typeof(err)) === 'object' ? _extends({}, errBase, err) : errBase, null);
	                }
	            });
	        }
	        // else: wait for done to be called

	        return false;
	    };

	    var iterate = function iterate(err, val) {
	        if (isCancelled()) {
	            callback();
	        } else if (err) {
	            callback(err);
	        } else {
	            if (val && isState(val)) {
	                if (hasStateChanged(val)) console.error('[router5][transition] Warning: state values changed during transition process.');
	                toState = val;
	            }
	            remainingFunctions = remainingFunctions.slice(1);
	            next();
	        }
	    };

	    var next = function next() {
	        if (isCancelled()) {
	            callback();
	        } else {
	            var finished = processFn(iterate);
	            if (finished) callback(null, toState);
	        }
	    };

	    next();
	}

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = withMiddleware;
	function withMiddleware(router) {
	    var middlewareFactories = [];
	    var middlewareFunctions = [];

	    router.useMiddleware = useMiddleware;
	    router.getMiddlewareFactories = getMiddlewareFactories;
	    router.getMiddlewareFunctions = getMiddlewareFunctions;
	    router.clearMiddleware = clearMiddleware;

	    /**
	     * Register middleware functions.
	     * @param  {...Function} middlewares The middleware functions
	     * @return {Object}                  The router instance
	     */
	    function useMiddleware() {
	        for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	            middlewares[_key] = arguments[_key];
	        }

	        middlewares.forEach(addMiddleware);

	        return router;
	    }

	    /**
	     * Remove all middleware functions
	     * @return {Object} The router instance
	     */
	    function clearMiddleware() {
	        middlewareFactories = [];
	        middlewareFunctions = [];

	        return router;
	    }

	    function getMiddlewareFactories() {
	        return middlewareFactories;
	    }

	    function getMiddlewareFunctions() {
	        return middlewareFunctions;
	    }

	    function addMiddleware(middleware) {
	        middlewareFactories.push(middleware);
	        middlewareFunctions.push(router.executeFactory(middleware));
	    }
	}

/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = withPlugins;

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	var pluginMethods = ['onStart', 'onStop', 'onTransitionSuccess', 'onTransitionStart', 'onTransitionError', 'onTransitionCancel'];

	function withPlugins(router) {
	    var plugins = [];
	    var removePluginListeners = [];

	    router.usePlugin = usePlugin;
	    router.hasPlugin = hasPlugin;
	    router.getPlugins = getPlugins;

	    function getPlugins() {
	        return plugins;
	    }

	    /**
	     * Use plugins
	     * @param  {...Function} plugins An argument list of plugins
	     * @return {Object}              The router instance
	     */
	    function usePlugin() {
	        for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
	            plugins[_key] = arguments[_key];
	        }

	        plugins.forEach(addPlugin);
	        return router;
	    }

	    function addPlugin(plugin) {
	        if (!hasPlugin(plugin)) {
	            plugins.push(plugin);
	            startPlugin(plugin);
	        }
	    }

	    /**
	     * Check if a plugin has already been registered.
	     * @param  {String}  pluginName The plugin name
	     * @return {Boolean}            Whether the plugin has been registered
	     */
	    function hasPlugin(pluginName) {
	        return plugins.filter(function (p) {
	            return p.pluginName === pluginName || p.name === pluginName;
	        }).length > 0;
	    }

	    function startPlugin(plugin) {
	        var appliedPlugin = router.executeFactory(plugin);

	        var removeEventListeners = pluginMethods.map(function (methodName) {
	            if (appliedPlugin[methodName]) {
	                return router.addEventListener(methodName.toLowerCase().replace(/^on/, '$$').replace(/transition/, '$$'), appliedPlugin[methodName]);
	            }
	        }).filter(Boolean);

	        removePluginListeners.push.apply(removePluginListeners, _toConsumableArray(removeEventListeners));
	    }
	}

/***/ },
/* 239 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = withRouteLifecycle;
	var toFunction = function toFunction(val) {
	    return typeof val === 'function' ? val : function () {
	        return function () {
	            return val;
	        };
	    };
	};

	function withRouteLifecycle(router) {
	    var canDeactivateFactories = {};
	    var canActivateFactories = {};
	    var canDeactivateFunctions = {};
	    var canActivateFunctions = {};

	    router.canDeactivate = canDeactivate;
	    router.canActivate = canActivate;
	    router.getLifecycleFactories = getLifecycleFactories;
	    router.getLifecycleFunctions = getLifecycleFunctions;
	    router.clearCanDeactivate = clearCanDeactivate;

	    function getLifecycleFactories() {
	        return [canDeactivateFactories, canActivateFactories];
	    }

	    function getLifecycleFunctions() {
	        return [canDeactivateFunctions, canActivateFunctions];
	    }

	    /**
	     * Register a canDeactivate handler or specify a if a route can be deactivated
	     * @param  {String} name                           The route name
	     * @param  {Function|Boolean} canDeactivateHandler The canDeactivate handler or boolean
	     * @return {Object}                                The router instance
	     */
	    function canDeactivate(name, canDeactivateHandler) {
	        var factory = toFunction(canDeactivateHandler);

	        canDeactivateFactories[name] = factory;
	        canDeactivateFunctions[name] = router.executeFactory(factory);

	        return router;
	    }

	    /**
	     * Remove a canDeactivate handler for a route
	     * @param  {String} name The route name
	     * @return {Object}      The router instance
	     */
	    function clearCanDeactivate(name) {
	        canDeactivateFactories[name] = undefined;
	        canDeactivateFunctions[name] = undefined;

	        return router;
	    }

	    /**
	     * Register a canActivate handler or specify a if a route can be deactivated
	     * @param  {String} name                         The route name
	     * @param  {Function|Boolean} canActivateHandler The canActivate handler or boolean
	     * @return {Object}                              The router instance
	     */
	    function canActivate(name, canActivateHandler) {
	        var factory = toFunction(canActivateHandler);

	        canActivateFactories[name] = factory;
	        canActivateFunctions[name] = router.executeFactory(factory);

	        return router;
	    }
	}

/***/ },
/* 240 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () {
	    function sliceIterator(arr, i) {
	        var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	                _arr.push(_s.value);if (i && _arr.length === i) break;
	            }
	        } catch (err) {
	            _d = true;_e = err;
	        } finally {
	            try {
	                if (!_n && _i["return"]) _i["return"]();
	            } finally {
	                if (_d) throw _e;
	            }
	        }return _arr;
	    }return function (arr, i) {
	        if (Array.isArray(arr)) {
	            return arr;
	        } else if (Symbol.iterator in Object(arr)) {
	            return sliceIterator(arr, i);
	        } else {
	            throw new TypeError("Invalid attempt to destructure non-iterable instance");
	        }
	    };
	}();

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	exports.default = withCloning;

	function _toConsumableArray(arr) {
	    if (Array.isArray(arr)) {
	        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	            arr2[i] = arr[i];
	        }return arr2;
	    } else {
	        return Array.from(arr);
	    }
	}

	function withCloning(router, createRouter) {
	    router.clone = clone;

	    /**
	     * Clone the current router configuration. The new returned router will be non-started,
	     * with a null state
	     * @param  {[type]} deps [description]
	     * @return {[type]}      [description]
	     */
	    function clone() {
	        var deps = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var clonedDependencies = _extends({}, router.getDependencies(), deps);
	        var clonedRouter = createRouter(router.rootNode, router.getOptions(), clonedDependencies);

	        clonedRouter.useMiddleware.apply(clonedRouter, _toConsumableArray(router.getMiddlewareFactories()));
	        clonedRouter.usePlugin.apply(clonedRouter, _toConsumableArray(router.getPlugins()));

	        var _router$getLifecycleF = router.getLifecycleFactories();

	        var _router$getLifecycleF2 = _slicedToArray(_router$getLifecycleF, 2);

	        var canDeactivateFactories = _router$getLifecycleF2[0];
	        var canActivateFactories = _router$getLifecycleF2[1];

	        Object.keys(canDeactivateFactories).forEach(function (name) {
	            return clonedRouter.canDeactivate(name, canDeactivateFactories[name]);
	        });
	        Object.keys(canActivateFactories).forEach(function (name) {
	            return clonedRouter.canActivate(name, canActivateFactories[name]);
	        });

	        return clonedRouter;
	    }
	};

/***/ },
/* 241 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* istanbul ignore next */
	function loggerPlugin() {
	    var startGroup = function startGroup() {
	        return console.group('Router transition');
	    };
	    var endGroup = function endGroup() {
	        return console.groupEnd('Router transition');
	    };

	    console.info('Router started');

	    return {
	        onStop: function onStop() {
	            console.info('Router stopped');
	        },
	        onTransitionStart: function onTransitionStart(toState, fromState) {
	            endGroup();
	            startGroup();
	            console.log('Transition started from state');
	            console.log(fromState);
	            console.log('To state');
	            console.log(toState);
	        },
	        onTransitionCancel: function onTransitionCancel() {
	            console.warn('Transition cancelled');
	        },
	        onTransitionError: function onTransitionError(toState, fromState, err) {
	            console.warn('Transition error with code ' + err.code);
	            endGroup();
	        },
	        onTransitionSuccess: function onTransitionSuccess() {
	            console.log('Transition success');
	            endGroup();
	        }
	    };
	};

	loggerPlugin.pluginName = 'LOGGER_PLUGIN';

	exports.default = loggerPlugin;

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _router = __webpack_require__(50);

	var _router2 = _interopRequireDefault(_router);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var defaultOptions = {
	    autoCleanUp: true
	};

	function listenersPluginFactory() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? defaultOptions : arguments[0];

	    function listenersPlugin(router) {
	        var listeners = {};

	        function removeListener(name, cb) {
	            if (cb) {
	                if (listeners[name]) listeners[name] = listeners[name].filter(function (callback) {
	                    return callback !== cb;
	                });
	            } else {
	                listeners[name] = [];
	            }
	            return router;
	        };

	        function addListener(name, cb, replace) {
	            var normalizedName = name.replace(/^(\*|\^|=)/, '');

	            if (normalizedName && !/^\$/.test(name)) {
	                var segments = router.rootNode.getSegmentsByName(normalizedName);
	                if (!segments) console.warn('No route found for ' + normalizedName + ', listener might never be called!');
	            }

	            if (!listeners[name]) listeners[name] = [];
	            listeners[name] = (replace ? [] : listeners[name]).concat(cb);

	            return router;
	        };

	        router.getListeners = function () {
	            return listeners;
	        };

	        router.addListener = function (cb) {
	            return addListener('*', cb);
	        };
	        router.removeListener = function (cb) {
	            return removeListener('*', cb);
	        };

	        router.addNodeListener = function (name, cb) {
	            return addListener('^' + name, cb, true);
	        };
	        router.removeNodeListener = function (name, cb) {
	            return removeListener('^' + name, cb);
	        };

	        router.addRouteListener = function (name, cb) {
	            return addListener('=' + name, cb);
	        };
	        router.removeRouteListener = function (name, cb) {
	            return removeListener('=' + name, cb);
	        };

	        function invokeListeners(name, toState, fromState) {
	            (listeners[name] || []).forEach(function (cb) {
	                if (listeners[name].indexOf(cb) !== -1) {
	                    cb(toState, fromState);
	                }
	            });
	        }

	        function onTransitionSuccess(toState, fromState, opts) {
	            var _transitionPath = (0, _router2.default)(toState, fromState);

	            var intersection = _transitionPath.intersection;
	            var toDeactivate = _transitionPath.toDeactivate;

	            var intersectionNode = opts.reload ? '' : intersection;
	            var name = toState.name;

	            if (options.autoCleanUp) {
	                toDeactivate.forEach(function (name) {
	                    return removeListener('^' + name);
	                });
	            }

	            invokeListeners('^' + intersectionNode, toState, fromState);
	            invokeListeners('=' + name, toState, fromState);
	            invokeListeners('*', toState, fromState);
	        }

	        return { onTransitionSuccess: onTransitionSuccess };
	    };

	    listenersPlugin.pluginName = 'LISTENERS_PLUGIN';

	    return listenersPlugin;
	}

	exports.default = listenersPluginFactory;

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _constants = __webpack_require__(232);

	var _constants2 = _interopRequireDefault(_constants);

	var _browser = __webpack_require__(244);

	var _browser2 = _interopRequireDefault(_browser);

	var _utils = __webpack_require__(245);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	var defaultOptions = {
	    forceDeactivate: true,
	    useHash: false,
	    hashPrefix: '',
	    base: false
	};

	var source = 'popstate';

	function browserPluginFactory() {
	    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var browser = arguments.length <= 1 || arguments[1] === undefined ? _browser2.default : arguments[1];

	    var options = _extends({}, defaultOptions, opts);
	    var transitionOptions = { forceDeactivate: options.forceDeactivate, source: source };

	    function browserPlugin(router) {
	        var routerOptions = router.getOptions();
	        var routerStart = router.start;

	        (0, _utils2.default)(router, options);

	        router.start = function () {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            if (args.length === 0 || typeof args[0] === 'function') {
	                routerStart.apply(undefined, [browser.getLocation(options)].concat(args));
	            } else {
	                routerStart.apply(undefined, args);
	            }

	            return router;
	        };

	        router.replaceHistoryState = function (name) {
	            var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	            var state = router.buildState(name, params);
	            var url = router.buildUrl(name, params);
	            router.lastKnownState = state;
	            browser.replaceState(state, '', url);
	        };

	        function updateBrowserState(state, url, replace) {
	            if (replace) browser.replaceState(state, '', url);else browser.pushState(state, '', url);
	        }

	        function onPopState(evt) {
	            var routerState = router.getState();
	            // Do nothing if no state or if last know state is poped state (it should never happen)
	            var newState = !evt.state || !evt.state.name;
	            var state = newState ? router.matchPath(browser.getLocation(options), source) : evt.state;
	            var defaultRoute = routerOptions.defaultRoute;
	            var defaultParams = routerOptions.defaultParams;

	            if (!state) {
	                // If current state is already the default route, we will have a double entry
	                // Navigating back and forth will emit SAME_STATES error
	                defaultRoute && router.navigateToDefault(_extends({}, transitionOptions, { reload: true, replace: true }));
	                return;
	            }
	            if (routerState && router.areStatesEqual(state, routerState, false)) {
	                return;
	            }

	            router.transitionToState(state, routerState, transitionOptions, function (err, toState) {
	                if (err) {
	                    if (err.redirect) {
	                        var _err$redirect = err.redirect;
	                        var name = _err$redirect.name;
	                        var params = _err$redirect.params;

	                        router.navigate(name, params, _extends({}, transitionOptions, { replace: true }));
	                    } else if (err === _constants.errorCodes.CANNOT_DEACTIVATE) {
	                        var url = router.buildUrl(routerState.name, routerState.params);
	                        if (!newState) {
	                            // Keep history state unchanged but use current URL
	                            updateBrowserState(state, url, true);
	                        }
	                        // else do nothing or history will be messed up
	                        // TODO: history.back()?
	                    } else {
	                        // Force navigation to default state
	                        defaultRoute && router.navigate(defaultRoute, defaultParams, _extends({}, transitionOptions, { reload: true, replace: true }));
	                    }
	                } else {
	                    router.invokeEventListeners(_constants2.default.TRANSITION_SUCCESS, toState, routerState, { replace: true });
	                }
	            });
	        }

	        function onStart() {
	            if (options.useHash && !options.base) {
	                // Guess base
	                options.base = browser.getBase();
	            }

	            browser.addPopstateListener(onPopState);
	        }

	        function onStop() {
	            browser.removePopstateListener(onPopState);
	        }

	        function onTransitionSuccess(toState, fromState, opts) {
	            var historyState = browser.getState();
	            var replace = opts.replace || fromState && router.areStatesEqual(toState, fromState, false) || opts.reload && historyState && router.areStatesEqual(toState, historyState, false);
	            updateBrowserState(toState, router.buildUrl(toState.name, toState.params), replace);
	        }

	        return { onStart: onStart, onStop: onStop, onTransitionSuccess: onTransitionSuccess, onPopState: onPopState };
	    };

	    browserPlugin.pluginName = 'BROWSER_PLUGIN';

	    return browserPlugin;
	}

	exports.default = browserPluginFactory;

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Dumb functions
	 */
	// istanbul ignore next
	var identity = function identity(arg) {
	    return function () {
	        return arg;
	    };
	};
	// istanbul ignore next
	var noop = function noop() {};

	/**
	 * Browser detection
	 */
	var isBrowser = typeof window !== 'undefined' && window.history;

	/**
	 * Browser functions needed by router5
	 */
	var getBase = function getBase() {
	    return window.location.pathname.replace(/\/$/, '');
	};

	var pushState = function pushState(state, title, path) {
	    return window.history.pushState(state, title, path);
	};

	var replaceState = function replaceState(state, title, path) {
	    return window.history.replaceState(state, title, path);
	};

	var addPopstateListener = function addPopstateListener(fn) {
	    return window.addEventListener('popstate', fn);
	};

	var removePopstateListener = function removePopstateListener(fn) {
	    return window.removeEventListener('popstate', fn);
	};

	var getLocation = function getLocation(opts) {
	    var path = opts.useHash ? window.location.hash.replace(new RegExp('^#' + opts.hashPrefix), '') : window.location.pathname.replace(new RegExp('^' + opts.base), '');
	    return (path || '/') + window.location.search;
	};

	var getState = function getState() {
	    return window.history.state;
	};

	/**
	 * Export browser object
	 */
	var browser = {};
	if (isBrowser) {
	    browser = { getBase: getBase, pushState: pushState, replaceState: replaceState, addPopstateListener: addPopstateListener, removePopstateListener: removePopstateListener, getLocation: getLocation, getState: getState };
	} else {
	    // istanbul ignore next
	    browser = {
	        getBase: identity(''),
	        pushState: noop,
	        replaceState: noop,
	        addPopstateListener: noop,
	        removePopstateListener: noop,
	        getLocation: identity(''),
	        getState: identity(null)
	    };
	}

	exports.default = browser;

/***/ },
/* 245 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = withUtils;
	function withUtils(router, options) {
	    router.urlToPath = urlToPath;
	    router.buildUrl = buildUrl;
	    router.matchUrl = matchUrl;

	    function buildUrl(route, params) {
	        var base = options.base || '';
	        var prefix = options.useHash ? '#' + options.hashPrefix : '';
	        var path = router.buildPath(route, params);

	        return base + prefix + path;
	    }

	    function urlToPath(url) {
	        var match = url.match(/^(?:http|https)\:\/\/(?:[0-9a-z_\-\.\:]+?)(?=\/)(.*)$/);
	        var path = match ? match[1] : url;

	        var pathParts = path.match(/^(.+?)(#.+?)?(\?.+)?$/);

	        if (!pathParts) throw new Error('[router5] Could not parse url ' + url);

	        var pathname = pathParts[1];
	        var hash = pathParts[2] || '';
	        var search = pathParts[3] || '';

	        return (options.useHash ? hash.replace(new RegExp('^#' + options.hashPrefix), '') : options.base ? pathname.replace(new RegExp('^' + options.base), '') : pathname) + search;
	    }

	    function matchUrl(url) {
	        return router.matchPath(urlToPath(url));
	    }
	}

/***/ },
/* 246 */,
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _core = __webpack_require__(248);

	var _helpers = __webpack_require__(249);

	var _defaults = __webpack_require__(252);

	var _defaults2 = _interopRequireDefault(_defaults);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var loggerOptions = _extends({}, _defaults2.default, options);

	  var logger = loggerOptions.logger;
	  var transformer = loggerOptions.transformer;
	  var stateTransformer = loggerOptions.stateTransformer;
	  var errorTransformer = loggerOptions.errorTransformer;
	  var predicate = loggerOptions.predicate;
	  var logErrors = loggerOptions.logErrors;
	  var diffPredicate = loggerOptions.diffPredicate;

	  // Return if 'console' object is not defined

	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }

	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }

	  var logBuffer = [];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }

	        var logEntry = {};
	        logBuffer.push(logEntry);

	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;

	        var returnedValue = undefined;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }

	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());

	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;

	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}

	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.printBuffer = printBuffer;

	var _helpers = __webpack_require__(249);

	var _diff = __webpack_require__(250);

	var _diff2 = _interopRequireDefault(_diff);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}

	function _typeof(obj) {
	  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
	}

	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}

	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp;
	  var duration = options.duration;

	  return function (action, time, took) {
	    var parts = ['action'];
	    if (timestamp) {
	      parts.push('@ ' + time);
	    }
	    parts.push(action.type);
	    if (duration) {
	      parts.push('(in ' + took.toFixed(2) + ' ms)');
	    }
	    return parts.join(' ');
	  };
	}

	function printBuffer(buffer, options) {
	  var logger = options.logger;
	  var actionTransformer = options.actionTransformer;
	  var _options$titleFormatt = options.titleFormatter;
	  var titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt;
	  var collapsed = options.collapsed;
	  var colors = options.colors;
	  var level = options.level;
	  var diff = options.diff;

	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started;
	    var startedTime = logEntry.startedTime;
	    var action = logEntry.action;
	    var prevState = logEntry.prevState;
	    var error = logEntry.error;
	    var took = logEntry.took;
	    var nextState = logEntry.nextState;

	    var nextEntry = buffer[key + 1];

	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }

	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action) : collapsed;

	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);

	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }

	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }

	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }

	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }

	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }

	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }

	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('—— log end ——');
	    }
	  });
	}

/***/ },
/* 249 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};

	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};

	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};

	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;

	var _deepDiff = __webpack_require__(251);

	var _deepDiff2 = _interopRequireDefault(_deepDiff);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};

	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}

	function render(diff) {
	  var kind = diff.kind;
	  var path = diff.path;
	  var lhs = diff.lhs;
	  var rhs = diff.rhs;
	  var index = diff.index;
	  var item = diff.item;

	  switch (kind) {
	    case 'E':
	      return path.join('.') + ' ' + lhs + ' → ' + rhs;
	    case 'N':
	      return path.join('.') + ' ' + rhs;
	    case 'D':
	      return '' + path.join('.');
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return null;
	  }
	}

	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);

	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }

	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;

	      var output = render(elem);

	      logger.log('%c ' + dictionary[kind].text, style(kind), output);
	    });
	  } else {
	    logger.log('—— no diff ——');
	  }

	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('—— diff end —— ');
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function (root, factory) {
	  'use strict';

	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	})(undefined, function (undefined) {
	  'use strict';

	  var $scope,
	      conflict,
	      conflictResolution = [];
	  if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(function () {
	      if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	        $scope.DeepDiff = conflict;
	        conflict = undefined;
	      }
	    });
	  }

	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }

	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }

	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);

	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);

	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);

	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);

	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }

	  function realTypeOf(subject) {
	    var type = typeof subject === 'undefined' ? 'undefined' : _typeof(subject);
	    if (type !== 'object') {
	      return type;
	    }

	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }

	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof prefilter === 'function' && prefilter(currentPath, key)) {
	          return;
	        } else if ((typeof prefilter === 'undefined' ? 'undefined' : _typeof(prefilter)) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) {
	            return;
	          }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }

	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }

	    var ltype = typeof lhs === 'undefined' ? 'undefined' : _typeof(lhs);
	    var rtype = typeof rhs === 'undefined' ? 'undefined' : _typeof(rhs);
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && lhs - rhs !== 0) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i,
	              len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function (k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function (k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }

	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs, function (diff) {
	      if (diff) {
	        accum.push(diff);
	      }
	    }, prefilter);
	    return accum.length ? accum : undefined;
	  }

	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i,
	          u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }

	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = typeof change.path[i] === 'number' ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }

	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i,
	          u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }

	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i,
	          u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }

	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function onChange(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }

	  Object.defineProperties(accumulateDiff, {

	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function value() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function value() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function (it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });

	  return accumulateDiff;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,

	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports['default'];

/***/ },
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = App;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Nav = __webpack_require__(257);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Main = __webpack_require__(259);

	var _Main2 = _interopRequireDefault(_Main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function App(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'mail-client' },
	        _react2.default.createElement(
	            'aside',
	            null,
	            _react2.default.createElement(_Nav2.default, null)
	        ),
	        _react2.default.createElement(
	            'main',
	            null,
	            _react2.default.createElement(_Main2.default, null)
	        )
	    );
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(258);

	var _Link2 = _interopRequireDefault(_Link);

	var _reactRedux = __webpack_require__(2);

	var _redux = __webpack_require__(10);

	var _reduxRouter = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Nav = function (_Component) {
	    _inherits(Nav, _Component);

	    function Nav(props, context) {
	        _classCallCheck(this, Nav);

	        var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

	        _this.router = context.router;
	        return _this;
	    }

	    _createClass(Nav, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                navigateTo = _props.navigateTo,
	                route = _props.route;


	            return _react2.default.createElement(
	                'nav',
	                null,
	                _react2.default.createElement(
	                    _Link2.default,
	                    { router: this.router, navigateTo: navigateTo, name: 'inbox', options: { reload: true } },
	                    'Inbox'
	                ),
	                _react2.default.createElement(
	                    _Link2.default,
	                    { router: this.router, navigateTo: navigateTo, name: 'compose' },
	                    'Compose'
	                ),
	                _react2.default.createElement(
	                    _Link2.default,
	                    { router: this.router, navigateTo: navigateTo, name: 'contacts' },
	                    'Contacts'
	                )
	            );
	        }
	    }]);

	    return Nav;
	}(_react.Component);

	Nav.contextTypes = {
	    router: _react.PropTypes.object.isRequired
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return state.router.route;
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ navigateTo: _reduxRouter.actions.navigateTo }, dispatch);
	})(Nav);

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Link(props) {
	    var name = props.name,
	        params = props.params,
	        options = props.options,
	        router = props.router,
	        navigateTo = props.navigateTo;


	    var href = router.buildUrl(name, params);
	    var onClick = function onClick(evt) {
	        evt.preventDefault();
	        navigateTo(name, params, options);
	    };
	    var className = router.isActive(name, params) ? 'active' : '';

	    return _react2.default.createElement(
	        'a',
	        { href: href, onClick: onClick, className: className },
	        props.children
	    );
	}

	Link.propTypes = {
	    name: _react.PropTypes.string.isRequired,
	    params: _react.PropTypes.object,
	    options: _react.PropTypes.object,
	    navigateTo: _react.PropTypes.func.isRequired
	};

	Link.defaultProps = {
	    params: {},
	    options: {}
	};

	exports.default = Link;

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _reduxRouter = __webpack_require__(43);

	var _Inbox = __webpack_require__(260);

	var _Inbox2 = _interopRequireDefault(_Inbox);

	var _Compose = __webpack_require__(265);

	var _Compose2 = _interopRequireDefault(_Compose);

	var _NotFound = __webpack_require__(267);

	var _NotFound2 = _interopRequireDefault(_NotFound);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var components = {
	    'inbox': _Inbox2.default,
	    'compose': _Compose2.default
	};

	function Main(props) {
	    var route = props.route;

	    var segment = route ? route.name.split('.')[0] : undefined;

	    return (0, _react.createElement)(components[segment] || _NotFound2.default);
	}

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return (0, _reduxRouter.routeNodeSelector)('');
	})(Main);

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _InboxList = __webpack_require__(261);

	var _InboxList2 = _interopRequireDefault(_InboxList);

	var _Message = __webpack_require__(263);

	var _Message2 = _interopRequireDefault(_Message);

	var _reactRedux = __webpack_require__(2);

	var _reduxRouter = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Inbox(props) {
	    var route = props.route;


	    return _react2.default.createElement(
	        'div',
	        { className: 'inbox' },
	        _react2.default.createElement(_InboxList2.default, null),
	        route.name === 'inbox.message' ? _react2.default.createElement(_Message2.default, { messageId: route.params.id, key: route.params.id }) : null
	    );
	}

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return (0, _reduxRouter.routeNodeSelector)('inbox');
	})(Inbox);

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _InboxItem = __webpack_require__(262);

	var _InboxItem2 = _interopRequireDefault(_InboxItem);

	var _reactRedux = __webpack_require__(2);

	var _redux = __webpack_require__(10);

	var _reduxRouter = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InboxList(_ref) {
	    var emails = _ref.emails,
	        navigateTo = _ref.navigateTo;

	    return _react2.default.createElement(
	        'ul',
	        { className: 'mail-list' },
	        emails.map(function (mail) {
	            return _react2.default.createElement(_InboxItem2.default, _extends({}, mail, { key: mail.id, onClick: function onClick() {
	                    return navigateTo('inbox.message', { id: mail.id });
	                } }));
	        })
	    );
	}

	exports.default = (0, _reactRedux.connect)(function (state) {
	    return { emails: state.emails };
	}, function (dispatch) {
	    return (0, _redux.bindActionCreators)({ navigateTo: _reduxRouter.actions.navigateTo }, dispatch);
	})(InboxList);

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function InboxItem(props) {
	    var mailTitle = props.mailTitle,
	        mailMessage = props.mailMessage,
	        onClick = props.onClick;


	    return _react2.default.createElement(
	        'li',
	        { onClick: onClick },
	        _react2.default.createElement(
	            'h4',
	            null,
	            mailTitle
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            mailMessage
	        )
	    );
	}

	exports.default = InboxItem;

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Message = Message;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _lodash = __webpack_require__(264);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function mapStateToProps(state, props) {
	    return {
	        email: (0, _lodash2.default)(state.emails, { id: props.messageId })
	    };
	}

	function Message(props) {
	    var _props$email = props.email,
	        mailTitle = _props$email.mailTitle,
	        mailMessage = _props$email.mailMessage;


	    return _react2.default.createElement(
	        'section',
	        { className: 'mail' },
	        _react2.default.createElement(
	            'h4',
	            null,
	            mailTitle
	        ),
	        _react2.default.createElement(
	            'p',
	            null,
	            mailMessage
	        )
	    );
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Message);

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_SAFE_INTEGER = 9007199254740991,
	    MAX_INTEGER = 1.7976931348623157e+308,
	    NAN = 0 / 0;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/,
	    reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}();

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * The base implementation of `_.findIndex` and `_.findLastIndex` without
	 * support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);

	  while (fromRight ? index-- : ++index < length) {
	    if (predicate(array[index], index, array)) {
	      return index;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/** Built-in value references. */
	var _Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object),
	    nativeMax = Math.max;

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache();
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	/**
	 * Creates a `_.find` or `_.findLast` function.
	 *
	 * @private
	 * @param {Function} findIndexFunc The function to find the collection index.
	 * @returns {Function} Returns the new find function.
	 */
	function createFind(findIndexFunc) {
	  return function (collection, predicate, fromIndex) {
	    var iterable = Object(collection);
	    if (!isArrayLike(collection)) {
	      var iteratee = baseIteratee(predicate, 3);
	      collection = keys(collection);
	      predicate = function predicate(key) {
	        return iteratee(iterable[key], key, iterable);
	      };
	    }
	    var index = findIndexFunc(collection, predicate, fromIndex);
	    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
	  };
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	          return seen.add(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = keys(object),
	      length = result.length;

	  while (length--) {
	    var key = result[length],
	        value = object[key];

	    result[length] = [key, value, isStrictComparable(value)];
	  }
	  return result;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	  getTag = function getTag(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag;
	        case mapCtorString:
	          return mapTag;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag;
	        case weakMapCtorString:
	          return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function (string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.find` except that it returns the index of the first
	 * element `predicate` returns truthy for instead of the element itself.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.1.0
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {number} Returns the index of the found element, else `-1`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'active': false },
	 *   { 'user': 'fred',    'active': false },
	 *   { 'user': 'pebbles', 'active': true }
	 * ];
	 *
	 * _.findIndex(users, function(o) { return o.user == 'barney'; });
	 * // => 0
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.findIndex(users, { 'user': 'fred', 'active': false });
	 * // => 1
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.findIndex(users, ['active', false]);
	 * // => 0
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.findIndex(users, 'active');
	 * // => 2
	 */
	function findIndex(array, predicate, fromIndex) {
	  var length = array ? array.length : 0;
	  if (!length) {
	    return -1;
	  }
	  var index = fromIndex == null ? 0 : toInteger(fromIndex);
	  if (index < 0) {
	    index = nativeMax(length + index, 0);
	  }
	  return baseFindIndex(array, baseIteratee(predicate, 3), index);
	}

	/**
	 * Iterates over elements of `collection`, returning the first element
	 * `predicate` returns truthy for. The predicate is invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to inspect.
	 * @param {Function} [predicate=_.identity]
	 *  The function invoked per iteration.
	 * @param {number} [fromIndex=0] The index to search from.
	 * @returns {*} Returns the matched element, else `undefined`.
	 * @example
	 *
	 * var users = [
	 *   { 'user': 'barney',  'age': 36, 'active': true },
	 *   { 'user': 'fred',    'age': 40, 'active': false },
	 *   { 'user': 'pebbles', 'age': 1,  'active': true }
	 * ];
	 *
	 * _.find(users, function(o) { return o.age < 40; });
	 * // => object for 'barney'
	 *
	 * // The `_.matches` iteratee shorthand.
	 * _.find(users, { 'age': 1, 'active': true });
	 * // => object for 'pebbles'
	 *
	 * // The `_.matchesProperty` iteratee shorthand.
	 * _.find(users, ['active', false]);
	 * // => object for 'fred'
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.find(users, 'active');
	 * // => object for 'barney'
	 */
	var find = createFind(findIndex);

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;

	  return result === result ? remainder ? result - remainder : result : 0;
	}

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? other + '' : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = find;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(24)(module)))

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(2);

	var _reselect = __webpack_require__(51);

	var _redux = __webpack_require__(10);

	var _draft = __webpack_require__(266);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var draftSelector = (0, _reselect.createSelector)(function (state) {
	    return state.draft;
	}, function (state) {
	    return state.router;
	}, function (draft, router) {
	    return {
	        title: draft.title,
	        message: draft.message,
	        error: hasCannotDeactivateError(router.transitionError)
	    };
	});

	function hasCannotDeactivateError(error) {
	    return error && error.code === 'CANNOT_DEACTIVATE' && error.segment === 'compose';
	}

	function mapDispatchToProps(dispatch) {
	    return (0, _redux.bindActionCreators)({ updateTitle: _draft.updateTitle, updateMessage: _draft.updateMessage }, dispatch);
	}

	var Compose = function (_Component) {
	    _inherits(Compose, _Component);

	    function Compose(props, context) {
	        _classCallCheck(this, Compose);

	        var _this = _possibleConstructorReturn(this, (Compose.__proto__ || Object.getPrototypeOf(Compose)).call(this, props, context));

	        _this.router = context.router;
	        return _this;
	    }

	    _createClass(Compose, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                title = _props.title,
	                message = _props.message,
	                error = _props.error,
	                updateTitle = _props.updateTitle,
	                updateMessage = _props.updateMessage;

	            this.router.canDeactivate('compose', !title && !message);

	            return _react2.default.createElement(
	                'div',
	                { className: 'compose' },
	                _react2.default.createElement(
	                    'h4',
	                    null,
	                    'Compose a new message'
	                ),
	                _react2.default.createElement('input', { name: 'title', value: title, onChange: function onChange(evt) {
	                        return updateTitle(evt.target.value);
	                    } }),
	                _react2.default.createElement('textarea', { name: 'message', value: message, onChange: function onChange(evt) {
	                        return updateMessage(evt.target.value);
	                    } }),
	                error ? _react2.default.createElement(
	                    'p',
	                    null,
	                    'Clear inputs before continuing'
	                ) : null
	            );
	        }
	    }]);

	    return Compose;
	}(_react.Component);

	Compose.contextTypes = {
	    router: _react.PropTypes.object.isRequired
	};

	exports.default = (0, _reactRedux.connect)(draftSelector, mapDispatchToProps)(Compose);

/***/ },
/* 266 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.updateTitle = updateTitle;
	exports.updateMessage = updateMessage;
	function updateTitle(title) {
	    return {
	        type: 'UPDATE_TITLE',
	        title: title
	    };
	}

	function updateMessage(message) {
	    return {
	        type: 'UPDATE_MESSAGE',
	        message: message
	    };
	}

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = NotFound;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function NotFound(props) {
	    return _react2.default.createElement(
	        'div',
	        { className: 'not-found' },
	        'Purposely Not found (not a bug)'
	    );
	}

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(10);

	var _reduxThunk = __webpack_require__(269);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxRouter = __webpack_require__(43);

	var _emails = __webpack_require__(270);

	var _emails2 = _interopRequireDefault(_emails);

	var _draft = __webpack_require__(271);

	var _draft2 = _interopRequireDefault(_draft);

	var _reduxLogger = __webpack_require__(247);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore(router) {
	    var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    var createStoreWithMiddleware = (0, _redux.applyMiddleware)((0, _reduxRouter.router5Middleware)(router), (0, _reduxLogger2.default)())(_redux.createStore);
	    var store = createStoreWithMiddleware((0, _redux.combineReducers)({
	        router: _reduxRouter.router5Reducer,
	        emails: _emails2.default,
	        draft: _draft2.default
	    }), initialState);

	    window.store = store;
	    return store;
	}

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }

	        return next(action);
	      };
	    };
	  };
	}

	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;

	exports['default'] = thunk;

/***/ },
/* 270 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = emails;
	var initialState = [{
	    "id": "1",
	    "mailTitle": "Why router5?",
	    "mailMessage": "I imagine a lot of developers who will first see router5 will ask themselves the question: is it yet another router? is it any good? Why oh why do people keep writing new routers all the time? It is not always easy to see the potential of something straight away, or understand the motivations behind. I therefore decided to try to tell you more about router5, why I decided to develop an entire new routing solution, and what problems it tries to solve."
	}, {
	    "id": "2",
	    "mailTitle": "Use with React",
	    "mailMessage": "I have just started playing with it. It does make sense to use a flux-like implementation, to provide a layer between the router and view updates."
	}, {
	    "id": "3",
	    "mailTitle": "Compose a new message",
	    "mailMessage": "Click on compose, start to fill title and message fields and then try to navigate away by clicking on app links, or by using the back button."
	}];

	function emails() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        default:
	            return state;
	    }
	}

/***/ },
/* 271 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = draft;
	var initialState = {
	    title: '',
	    message: ''
	};

	function draft() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments[1];

	    switch (action.type) {
	        case 'UPDATE_TITLE':
	            return _extends({}, state, {
	                title: action.title
	            });

	        case 'UPDATE_MESSAGE':
	            return _extends({}, state, {
	                message: action.message
	            });

	        default:
	            return state;
	    }
	}

/***/ },
/* 272 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var routes = {
	  routes: [{ name: 'inbox', path: '/inbox' }, { name: 'inbox.message', path: '/message/:id' }, { name: 'compose', path: '/compose' }, { name: 'contacts', path: '/contacts' }],
	  defaultRoute: 'inbox'
	};

	exports.default = routes;

/***/ }
/******/ ]);