'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ReactDOM = require('react-dom');
var utils = require('primereact/utils');
var button = require('primereact/button');
var csstransition = require('primereact/csstransition');
var PrimeReact = require('primereact/api');
var overlayservice = require('primereact/overlayservice');
var portal = require('primereact/portal');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function confirmPopup(props) {
  var appendTo = props.appendTo || document.body;
  var confirmPopupWrapper = document.createDocumentFragment();
  utils.DomHandler.appendChild(confirmPopupWrapper, appendTo);
  props = _objectSpread(_objectSpread({}, props), {
    visible: props.visible === undefined ? true : props.visible
  });
  var confirmPopupEl = /*#__PURE__*/React__default["default"].createElement(ConfirmPopup, props);
  ReactDOM__default["default"].render(confirmPopupEl, confirmPopupWrapper);

  var updateConfirmPopup = function updateConfirmPopup(newProps) {
    props = _objectSpread(_objectSpread({}, props), newProps);
    ReactDOM__default["default"].render( /*#__PURE__*/React__default["default"].cloneElement(confirmPopupEl, props), confirmPopupWrapper);
  };

  return {
    _destroy: function _destroy() {
      ReactDOM__default["default"].unmountComponentAtNode(confirmPopupWrapper);
    },
    show: function show() {
      updateConfirmPopup({
        visible: true,
        onHide: function onHide() {
          updateConfirmPopup({
            visible: false
          }); // reset
        }
      });
    },
    hide: function hide() {
      updateConfirmPopup({
        visible: false
      });
    },
    update: function update(newProps) {
      updateConfirmPopup(newProps);
    }
  };
}
var ConfirmPopup = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmPopup, _Component);

  var _super = _createSuper(ConfirmPopup);

  function ConfirmPopup(props) {
    var _this;

    _classCallCheck(this, ConfirmPopup);

    _this = _super.call(this, props);
    _this.state = {
      visible: false
    };
    _this.reject = _this.reject.bind(_assertThisInitialized(_this));
    _this.accept = _this.accept.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onCloseClick = _this.onCloseClick.bind(_assertThisInitialized(_this));
    _this.onPanelClick = _this.onPanelClick.bind(_assertThisInitialized(_this));
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntered = _this.onEntered.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    _this.overlayRef = /*#__PURE__*/React__default["default"].createRef();
    _this.acceptBtnRef = /*#__PURE__*/React__default["default"].createRef();
    return _this;
  }

  _createClass(ConfirmPopup, [{
    key: "acceptLabel",
    value: function acceptLabel() {
      return this.props.acceptLabel || PrimeReact.localeOption('accept');
    }
  }, {
    key: "rejectLabel",
    value: function rejectLabel() {
      return this.props.rejectLabel || PrimeReact.localeOption('reject');
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this2 = this;

      if (!this.documentClickListener && this.props.dismissable) {
        this.documentClickListener = function (event) {
          if (!_this2.isPanelClicked && _this2.isOutsideClicked(event.target)) {
            _this2.hide();
          }

          _this2.isPanelClicked = false;
        };

        document.addEventListener('click', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('click', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindScrollListener",
    value: function bindScrollListener() {
      var _this3 = this;

      if (!this.scrollHandler) {
        this.scrollHandler = new utils.ConnectedOverlayScrollHandler(this.props.target, function () {
          if (_this3.state.visible) {
            _this3.hide();
          }
        });
      }

      this.scrollHandler.bindScrollListener();
    }
  }, {
    key: "unbindScrollListener",
    value: function unbindScrollListener() {
      if (this.scrollHandler) {
        this.scrollHandler.unbindScrollListener();
      }
    }
  }, {
    key: "bindResizeListener",
    value: function bindResizeListener() {
      var _this4 = this;

      if (!this.resizeListener) {
        this.resizeListener = function () {
          if (_this4.state.visible && !utils.DomHandler.isTouchDevice()) {
            _this4.hide();
          }
        };

        window.addEventListener('resize', this.resizeListener);
      }
    }
  }, {
    key: "unbindResizeListener",
    value: function unbindResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(target) {
      return this.overlayRef && this.overlayRef.current && !(this.overlayRef.current.isSameNode(target) || this.overlayRef.current.contains(target));
    }
  }, {
    key: "onCloseClick",
    value: function onCloseClick(event) {
      this.hide();
      event.preventDefault();
    }
  }, {
    key: "onPanelClick",
    value: function onPanelClick(event) {
      this.isPanelClicked = true;
      overlayservice.OverlayService.emit('overlay-click', {
        originalEvent: event,
        target: this.props.target
      });
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
      var _this5 = this;

      this.setState({
        visible: true
      }, function () {
        _this5.overlayEventListener = function (e) {
          if (!_this5.isOutsideClicked(e.target)) {
            _this5.isPanelClicked = true;
          }
        };

        overlayservice.OverlayService.on('overlay-click', _this5.overlayEventListener);
      });
    }
  }, {
    key: "hide",
    value: function hide(result) {
      var _this6 = this;

      this.setState({
        visible: false
      }, function () {
        overlayservice.OverlayService.off('overlay-click', _this6.overlayEventListener);
        _this6.overlayEventListener = null;

        if (_this6.props.onHide) {
          _this6.props.onHide(result);
        }
      });
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      utils.ZIndexUtils.set('overlay', this.overlayRef.current, PrimeReact__default["default"].autoZIndex, PrimeReact__default["default"].zIndex['overlay']);
      this.align();
    }
  }, {
    key: "onEntered",
    value: function onEntered() {
      this.bindDocumentClickListener();
      this.bindScrollListener();
      this.bindResizeListener();

      if (this.acceptBtnRef && this.acceptBtnRef.current) {
        this.acceptBtnRef.current.focus();
      }

      this.props.onShow && this.props.onShow();
    }
  }, {
    key: "onExit",
    value: function onExit() {
      this.unbindDocumentClickListener();
      this.unbindScrollListener();
      this.unbindResizeListener();
    }
  }, {
    key: "onExited",
    value: function onExited() {
      utils.ZIndexUtils.clear(this.overlayRef.current);
    }
  }, {
    key: "align",
    value: function align() {
      if (this.props.target) {
        utils.DomHandler.absolutePosition(this.overlayRef.current, this.props.target);
        var containerOffset = utils.DomHandler.getOffset(this.overlayRef.current);
        var targetOffset = utils.DomHandler.getOffset(this.props.target);
        var arrowLeft = 0;

        if (containerOffset.left < targetOffset.left) {
          arrowLeft = targetOffset.left - containerOffset.left;
        }

        this.overlayRef.current.style.setProperty('--overlayArrowLeft', "".concat(arrowLeft, "px"));

        if (containerOffset.top < targetOffset.top) {
          utils.DomHandler.addClass(this.overlayRef.current, 'p-confirm-popup-flipped');
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.visible) {
        this.setState({
          visible: true
        });
      }
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
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unbindDocumentClickListener();
      this.unbindResizeListener();

      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }

      if (this.overlayEventListener) {
        overlayservice.OverlayService.off('overlay-click', this.overlayEventListener);
        this.overlayEventListener = null;
      }

      utils.ZIndexUtils.clear(this.overlayRef.current);
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var message = utils.ObjectUtils.getJSXElement(this.props.message, this.props);
      return /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-confirm-popup-content"
      }, utils.IconUtils.getJSXIcon(this.props.icon, {
        className: 'p-confirm-popup-icon'
      }, {
        props: this.props
      }), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "p-confirm-popup-message"
      }, message));
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var acceptClassName = utils.classNames('p-confirm-popup-accept p-button-sm', this.props.acceptClassName);
      var rejectClassName = utils.classNames('p-confirm-popup-reject p-button-sm', {
        'p-button-text': !this.props.rejectClassName
      }, this.props.rejectClassName);
      var content = /*#__PURE__*/React__default["default"].createElement("div", {
        className: "p-confirm-popup-footer"
      }, /*#__PURE__*/React__default["default"].createElement(button.Button, {
        label: this.rejectLabel(),
        icon: this.props.rejectIcon,
        className: rejectClassName,
        onClick: this.reject
      }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
        ref: this.acceptBtnRef,
        label: this.acceptLabel(),
        icon: this.props.acceptIcon,
        className: acceptClassName,
        onClick: this.accept
      }));

      if (this.props.footer) {
        var defaultContentOptions = {
          accept: this.accept,
          reject: this.reject,
          className: 'p-confirm-popup-footer',
          acceptClassName: acceptClassName,
          rejectClassName: rejectClassName,
          acceptLabel: this.acceptLabel(),
          rejectLabel: this.rejectLabel(),
          element: content,
          props: this.props
        };
        return utils.ObjectUtils.getJSXElement(this.props.footer, defaultContentOptions);
      }

      return content;
    }
  }, {
    key: "renderElement",
    value: function renderElement() {
      var className = utils.classNames('p-confirm-popup p-component', this.props.className);
      var content = this.renderContent();
      var footer = this.renderFooter();
      return /*#__PURE__*/React__default["default"].createElement(csstransition.CSSTransition, {
        nodeRef: this.overlayRef,
        classNames: "p-connected-overlay",
        "in": this.state.visible,
        timeout: {
          enter: 120,
          exit: 100
        },
        options: this.props.transitionOptions,
        unmountOnExit: true,
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onExit: this.onExit,
        onExited: this.onExited
      }, /*#__PURE__*/React__default["default"].createElement("div", {
        ref: this.overlayRef,
        id: this.props.id,
        className: className,
        style: this.props.style,
        onClick: this.onPanelClick
      }, content, footer));
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      return /*#__PURE__*/React__default["default"].createElement(portal.Portal, {
        element: element,
        appendTo: this.props.appendTo,
        visible: this.props.visible
      });
    }
  }]);

  return ConfirmPopup;
}(React.Component);

_defineProperty(ConfirmPopup, "defaultProps", {
  target: null,
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
  style: null,
  appendTo: null,
  dismissable: true,
  footer: null,
  onShow: null,
  onHide: null,
  accept: null,
  reject: null,
  transitionOptions: null
});

exports.ConfirmPopup = ConfirmPopup;
exports.confirmPopup = confirmPopup;
