this.primereact = this.primereact || {};
this.primereact.progressspinner = (function (exports, React, utils) {
  'use strict';

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
  var ProgressSpinner = /*#__PURE__*/function (_Component) {
    _inherits(ProgressSpinner, _Component);

    var _super = _createSuper(ProgressSpinner);

    function ProgressSpinner() {
      _classCallCheck(this, ProgressSpinner);

      return _super.apply(this, arguments);
    }

    _createClass(ProgressSpinner, [{
      key: "render",
      value: function render() {
        var spinnerClass = utils.classNames('p-progress-spinner', this.props.className);
        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          style: this.props.style,
          className: spinnerClass,
          role: "alert",
          "aria-busy": true
        }, /*#__PURE__*/React__default["default"].createElement("svg", {
          className: "p-progress-spinner-svg",
          viewBox: "25 25 50 50",
          style: {
            animationDuration: this.props.animationDuration
          }
        }, /*#__PURE__*/React__default["default"].createElement("circle", {
          className: "p-progress-spinner-circle",
          cx: "50",
          cy: "50",
          r: "20",
          fill: this.props.fill,
          strokeWidth: this.props.strokeWidth,
          strokeMiterlimit: "10"
        })));
      }
    }]);

    return ProgressSpinner;
  }(React.Component);

  _defineProperty(ProgressSpinner, "defaultProps", {
    id: null,
    style: null,
    className: null,
    strokeWidth: "2",
    fill: "none",
    animationDuration: "2s"
  });

  exports.ProgressSpinner = ProgressSpinner;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.utils);
