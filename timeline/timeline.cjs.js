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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
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
var Timeline = /*#__PURE__*/function (_Component) {
  _inherits(Timeline, _Component);

  var _super = _createSuper(Timeline);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _super.apply(this, arguments);
  }

  _createClass(Timeline, [{
    key: "getKey",
    value: function getKey(item, index) {
      return this.props.dataKey ? utils.ObjectUtils.resolveFieldData(item, this.props.dataKey) : "pr_id__".concat(index);
    }
  }, {
    key: "renderEvents",
    value: function renderEvents() {
      var _this = this;

      return this.props.value && this.props.value.map(function (item, index) {
        var opposite = utils.ObjectUtils.getJSXElement(_this.props.opposite, item, index);
        var marker = utils.ObjectUtils.getJSXElement(_this.props.marker, item, index) || /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-timeline-event-marker"
        });
        var connector = index !== _this.props.value.length - 1 && /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-timeline-event-connector"
        });
        var content = utils.ObjectUtils.getJSXElement(_this.props.content, item, index);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          key: _this.getKey(item, index),
          className: "p-timeline-event"
        }, /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-timeline-event-opposite"
        }, opposite), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-timeline-event-separator"
        }, marker, connector), /*#__PURE__*/React__default["default"].createElement("div", {
          className: "p-timeline-event-content"
        }, content));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var containerClassName = utils.classNames('p-timeline p-component', (_classNames = {}, _defineProperty(_classNames, "p-timeline-".concat(this.props.align), true), _defineProperty(_classNames, "p-timeline-".concat(this.props.layout), true), _classNames), this.props.className);
      var events = this.renderEvents();
      return /*#__PURE__*/React__default["default"].createElement("div", {
        id: this.props.id,
        className: containerClassName,
        style: this.props.style
      }, events);
    }
  }]);

  return Timeline;
}(React.Component);

_defineProperty(Timeline, "defaultProps", {
  id: null,
  value: null,
  align: 'left',
  layout: 'vertical',
  dataKey: null,
  className: null,
  style: null,
  opposite: null,
  marker: null,
  content: null
});

exports.Timeline = Timeline;
