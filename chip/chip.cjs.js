'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('primereact/utils');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
var Chip = /*#__PURE__*/function (_Component) {
  _inherits(Chip, _Component);

  var _super = _createSuper(Chip);

  function Chip(props) {
    var _this;

    _classCallCheck(this, Chip);

    _this = _super.call(this, props);
    _this.state = {
      visible: true
    };
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Chip, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (event.keyCode === 13) {
        // enter
        this.close(event);
      }
    }
  }, {
    key: "close",
    value: function close(event) {
      var _this2 = this;

      event.persist();
      this.setState({
        visible: false
      }, function () {
        if (_this2.props.onRemove) {
          _this2.props.onRemove(event);
        }
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this3 = this;

      var content = [];

      if (this.props.image) {
        var onError = function onError(e) {
          if (_this3.props.onImageError) {
            _this3.props.onImageError(e);
          }
        };

        content.push( /*#__PURE__*/React__default["default"].createElement("img", {
          key: "image",
          src: this.props.image,
          alt: this.props.imageAlt,
          onError: onError
        }));
      } else if (this.props.icon) {
        content.push(utils.IconUtils.getJSXIcon(this.props.icon, {
          key: 'icon',
          className: 'p-chip-icon'
        }, {
          props: this.props
        }));
      }

      if (this.props.label) {
        content.push( /*#__PURE__*/React__default["default"].createElement("span", {
          key: "label",
          className: "p-chip-text"
        }, this.props.label));
      }

      if (this.props.removable) {
        content.push(utils.IconUtils.getJSXIcon(this.props.removeIcon, {
          key: 'removeIcon',
          tabIndex: 0,
          className: 'p-chip-remove-icon',
          onClick: this.close,
          onKeyDown: this.onKeyDown
        }, {
          props: this.props
        }));
      }

      return content;
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var containerClassName = utils.classNames('p-chip p-component', {
        'p-chip-image': this.props.image != null
      }, this.props.className);
      var content = this.props.template ? utils.ObjectUtils.getJSXElement(this.props.template, this.props) : this.renderContent();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: containerClassName,
        style: this.props.style
      }, content);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.visible && this.renderElement();
    }
  }]);

  return Chip;
}(React.Component);

_defineProperty(Chip, "defaultProps", {
  label: null,
  icon: null,
  image: null,
  removable: false,
  removeIcon: 'pi pi-times-circle',
  className: null,
  style: null,
  template: null,
  imageAlt: 'chip',
  onImageError: null,
  onRemove: null
});

exports.Chip = Chip;
