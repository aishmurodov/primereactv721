this.primereact = this.primereact || {};
this.primereact.fullcalendar = (function (exports, React, utils) {
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
  var FullCalendar = /*#__PURE__*/function (_Component) {
    _inherits(FullCalendar, _Component);

    var _super = _createSuper(FullCalendar);

    function FullCalendar() {
      _classCallCheck(this, FullCalendar);

      return _super.apply(this, arguments);
    }

    _createClass(FullCalendar, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        console.warn("FullCalendar component is deprecated. Use FullCalendar component of '@fullcalendar/react' package.");
        this.config = {
          theme: true
        };

        if (this.props.options) {
          for (var prop in this.props.options) {
            this.config[prop] = this.props.options[prop];
          }
        }

        this.initialize();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!this.calendar) {
          this.initialize();
        } else {
          if (!utils.ObjectUtils.equals(prevProps.events, this.props.events)) {
            this.calendar.removeAllEventSources();
            this.calendar.addEventSource(this.props.events);
          }

          if (!utils.ObjectUtils.equals(prevProps.options, this.props.options)) {
            for (var prop in this.props.options) {
              var optionValue = this.props.options[prop];
              this.config[prop] = optionValue;
              this.calendar.setOption(prop, optionValue);
            }
          }
        }
      }
    }, {
      key: "initialize",
      value: function initialize() {
        var _this = this;

        import('@fullcalendar/core').then(function (module) {
          if (module && module.Calendar) {
            _this.calendar = new module.Calendar(_this.element, _this.config);

            _this.calendar.render();

            if (_this.props.events) {
              _this.calendar.removeAllEventSources();

              _this.calendar.addEventSource(_this.props.events);
            }
          }
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.calendar) {
          this.calendar.destroy();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return /*#__PURE__*/React__default["default"].createElement("div", {
          id: this.props.id,
          ref: function ref(el) {
            return _this2.element = el;
          },
          style: this.props.style,
          className: this.props.className
        });
      }
    }]);

    return FullCalendar;
  }(React.Component);

  _defineProperty(FullCalendar, "defaultProps", {
    id: null,
    events: [],
    style: null,
    className: null,
    options: null
  });

  exports.FullCalendar = FullCalendar;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({}, React, primereact.utils);
