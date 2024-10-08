import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DomHandler, classNames, ObjectUtils, IconUtils } from 'primereact/utils';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { localeOption } from 'primereact/api';
import { Portal } from 'primereact/portal';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function confirmDialog(props) {
  var appendTo = props.appendTo || document.body;
  var confirmDialogWrapper = document.createDocumentFragment();
  DomHandler.appendChild(confirmDialogWrapper, appendTo);
  props = _objectSpread(_objectSpread({}, props), {
    visible: props.visible === undefined ? true : props.visible
  });
  var confirmDialogEl = /*#__PURE__*/React.createElement(ConfirmDialog, props);
  ReactDOM.render(confirmDialogEl, confirmDialogWrapper);

  var updateConfirmDialog = function updateConfirmDialog(newProps) {
    props = _objectSpread(_objectSpread({}, props), newProps);
    ReactDOM.render( /*#__PURE__*/React.cloneElement(confirmDialogEl, props), confirmDialogWrapper);
  };

  return {
    _destroy: function _destroy() {
      ReactDOM.unmountComponentAtNode(confirmDialogWrapper);
    },
    show: function show() {
      updateConfirmDialog({
        visible: true,
        onHide: function onHide() {
          updateConfirmDialog({
            visible: false
          }); // reset
        }
      });
    },
    hide: function hide() {
      updateConfirmDialog({
        visible: false
      });
    },
    update: function update(newProps) {
      updateConfirmDialog(newProps);
    }
  };
}
var ConfirmDialog = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmDialog, _Component);

  var _super = _createSuper(ConfirmDialog);

  function ConfirmDialog(props) {
    var _this;

    _classCallCheck(this, ConfirmDialog);

    _this = _super.call(this, props);
    _this.state = {
      visible: props.visible
    };
    _this.reject = _this.reject.bind(_assertThisInitialized(_this));
    _this.accept = _this.accept.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConfirmDialog, [{
    key: "acceptLabel",
    value: function acceptLabel() {
      return this.props.acceptLabel || localeOption('accept');
    }
  }, {
    key: "rejectLabel",
    value: function rejectLabel() {
      return this.props.rejectLabel || localeOption('reject');
    }
  }, {
    key: "accept",
    value: function accept() {
      if (this.props.accept) {
        this.props.accept();
      }

      this.hide('accept');
    }
  }, {
    key: "reject",
    value: function reject() {
      if (this.props.reject) {
        this.props.reject();
      }

      this.hide('reject');
    }
  }, {
    key: "show",
    value: function show() {
      this.setState({
        visible: true
      });
    }
  }, {
    key: "hide",
    value: function hide(result) {
      var _this2 = this;

      this.setState({
        visible: false
      }, function () {
        if (_this2.props.onHide) {
          _this2.props.onHide(result);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.visible !== this.props.visible) {
        this.setState({
          visible: this.props.visible
        });
      }
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var acceptClassName = classNames('p-confirm-dialog-accept', this.props.acceptClassName);
      var rejectClassName = classNames('p-confirm-dialog-reject', {
        'p-button-text': !this.props.rejectClassName
      }, this.props.rejectClassName);
      var content = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        label: this.rejectLabel(),
        icon: this.props.rejectIcon,
        className: rejectClassName,
        onClick: this.reject
      }), /*#__PURE__*/React.createElement(Button, {
        label: this.acceptLabel(),
        icon: this.props.acceptIcon,
        className: acceptClassName,
        onClick: this.accept,
        autoFocus: true
      }));

      if (this.props.footer) {
        var defaultContentOptions = {
          accept: this.accept,
          reject: this.reject,
          acceptClassName: acceptClassName,
          rejectClassName: rejectClassName,
          acceptLabel: this.acceptLabel(),
          rejectLabel: this.rejectLabel(),
          element: content,
          props: this.props
        };
        return ObjectUtils.getJSXElement(this.props.footer, defaultContentOptions);
      }

      return content;
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var className = classNames('p-confirm-dialog', this.props.className);
      var dialogProps = ObjectUtils.findDiffKeys(this.props, ConfirmDialog.defaultProps);
      var message = ObjectUtils.getJSXElement(this.props.message, this.props);
      var footer = this.renderFooter();
      return /*#__PURE__*/React.createElement(Dialog, _extends({
        visible: this.state.visible
      }, dialogProps, {
        className: className,
        footer: footer,
        onHide: this.hide,
        breakpoints: this.props.breakpoints
      }), IconUtils.getJSXIcon(this.props.icon, {
        className: 'p-confirm-dialog-icon'
      }, {
        props: this.props
      }), /*#__PURE__*/React.createElement("span", {
        className: "p-confirm-dialog-message"
      }, message));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      return /*#__PURE__*/React.createElement(Portal, {
        element: element,
        appendTo: this.props.appendTo
      });
    }
  }]);

  return ConfirmDialog;
}(Component);

_defineProperty(ConfirmDialog, "defaultProps", {
  visible: false,
  message: null,
  rejectLabel: null,
  acceptLabel: null,
  icon: null,
  rejectIcon: null,
  acceptIcon: null,
  rejectClassName: null,
  acceptClassName: null,
  className: null,
  appendTo: null,
  footer: null,
  breakpoints: null,
  onHide: null,
  accept: null,
  reject: null
});

export { ConfirmDialog, confirmDialog };
