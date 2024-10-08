'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('primereact/utils');
var portal = require('primereact/portal');
var PrimeReact = require('primereact/api');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PrimeReact__default = /*#__PURE__*/_interopDefaultLegacy(PrimeReact);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var BlockUI = /*#__PURE__*/function (_Component) {
  _inherits(BlockUI, _Component);

  var _super = _createSuper(BlockUI);

  function BlockUI(props) {
    var _this;

    _classCallCheck(this, BlockUI);

    _this = _super.call(this, props);
    _this.state = {
      visible: props.blocked
    };
    _this.block = _this.block.bind(_assertThisInitialized(_this));
    _this.unblock = _this.unblock.bind(_assertThisInitialized(_this));
    _this.onPortalMounted = _this.onPortalMounted.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BlockUI, [{
    key: "block",
    value: function block() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "unblock",
    value: function unblock() {
      var _this2 = this;

      var callback = function callback() {
        _this2.setState({
          visible: false
        }, function () {
          _this2.props.fullScreen && utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
          _this2.props.onUnblocked && _this2.props.onUnblocked();
        });
      };

      if (this.mask) {
        utils.DomHandler.addClass(this.mask, 'p-component-overlay-leave');
        this.mask.addEventListener('animationend', function () {
          utils.ZIndexUtils.clear(_this2.mask);
          callback();
        });
      } else {
        callback();
      }
    }
  }, {
    key: "onPortalMounted",
    value: function onPortalMounted() {
      if (this.props.fullScreen) {
        utils.DomHandler.addClass(document.body, 'p-overflow-hidden');
        document.activeElement.blur();
      }

      if (this.props.autoZIndex) {
        var key = this.props.fullScreen ? 'modal' : 'overlay';
        utils.ZIndexUtils.set(key, this.mask, PrimeReact__default["default"].autoZIndex, this.props.baseZIndex || PrimeReact__default["default"].zIndex[key]);
      }

      this.props.onBlocked && this.props.onBlocked();
    }
  }, {
    key: "renderMask",
    value: function renderMask() {
      var _this3 = this;

      if (this.state.visible) {
        var className = utils.classNames('p-blockui p-component-overlay p-component-overlay-enter', {
          'p-blockui-document': this.props.fullScreen
        }, this.props.className);
        var content = this.props.template ? utils.ObjectUtils.getJSXElement(this.props.template, this.props) : null;
        var mask = /*#__PURE__*/React__default["default"].createElement("div", {
          ref: function ref(el) {
            return _this3.mask = el;
          },
          className: className,
          style: this.props.style
        }, content);
        return /*#__PURE__*/React__default["default"].createElement(portal.Portal, {
          element: mask,
          appendTo: this.props.fullScreen ? document.body : 'self',
          onMounted: this.onPortalMounted
        });
      }

      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.visible) {
        this.block();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.blocked !== this.props.blocked) {
        this.props.blocked ? this.block() : this.unblock();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.fullScreen) {
        utils.DomHandler.removeClass(document.body, 'p-overflow-hidden');
      }

      utils.ZIndexUtils.clear(this.mask);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var mask = this.renderMask();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        ref: function ref(el) {
          return _this4.container = el;
        },
        id: this.props.id,
        className: "p-blockui-container"
      }, this.props.children, mask);
    }
  }]);

  return BlockUI;
}(React.Component);

_defineProperty(BlockUI, "defaultProps", {
  id: null,
  blocked: false,
  fullScreen: false,
  baseZIndex: 0,
  autoZIndex: true,
  style: null,
  className: null,
  template: null,
  onBlocked: null,
  onUnblocked: null
});

exports.BlockUI = BlockUI;
