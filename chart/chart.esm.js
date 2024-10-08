import React, { Component } from 'react';
import { classNames } from 'primereact/utils';

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
var Chart = /*#__PURE__*/function (_Component) {
  _inherits(Chart, _Component);

  var _super = _createSuper(Chart);

  function Chart() {
    _classCallCheck(this, Chart);

    return _super.apply(this, arguments);
  }

  _createClass(Chart, [{
    key: "initChart",
    value: function initChart() {
      var _this = this;

      import('chart.js/auto').then(function (module) {
        if (_this.chart) {
          _this.chart.destroy();

          _this.chart = null;
        }

        if (module && module["default"]) {
          _this.chart = new module["default"](_this.canvas, {
            type: _this.props.type,
            data: _this.props.data,
            options: _this.props.options,
            plugins: _this.props.plugins
          });
        }
      });
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: "getChart",
    value: function getChart() {
      return this.chart;
    }
  }, {
    key: "getBase64Image",
    value: function getBase64Image() {
      return this.chart.toBase64Image();
    }
  }, {
    key: "generateLegend",
    value: function generateLegend() {
      if (this.chart) {
        this.chart.generateLegend();
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (this.chart) {
        this.chart.update();
      }
    }
  }, {
    key: "reinit",
    value: function reinit() {
      this.initChart();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.data === this.props.data && nextProps.options === this.props.options && nextProps.type === this.props.type) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initChart();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.reinit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = classNames('p-chart', this.props.className),
          style = Object.assign({
        width: this.props.width,
        height: this.props.height
      }, this.props.style);
      return /*#__PURE__*/React.createElement("div", {
        id: this.props.id,
        style: style,
        className: className
      }, /*#__PURE__*/React.createElement("canvas", {
        ref: function ref(el) {
          _this2.canvas = el;
        },
        width: this.props.width,
        height: this.props.height
      }));
    }
  }]);

  return Chart;
}(Component);

_defineProperty(Chart, "defaultProps", {
  id: null,
  type: null,
  data: null,
  options: null,
  plugins: null,
  width: null,
  height: null,
  style: null,
  className: null
});

export { Chart };
