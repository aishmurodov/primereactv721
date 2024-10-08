import React, { Component } from 'react';
import { classNames, ObjectUtils, DomHandler } from 'primereact/utils';
import { Ripple } from 'primereact/ripple';
import { Button } from 'primereact/button';

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

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PickListItem = /*#__PURE__*/function (_Component) {
  _inherits(PickListItem, _Component);

  var _super = _createSuper$4(PickListItem);

  function PickListItem(props) {
    var _this;

    _classCallCheck(this, PickListItem);

    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListItem, [{
    key: "onClick",
    value: function onClick(event) {
      if (this.props.onClick) {
        this.props.onClick({
          originalEvent: event,
          value: this.props.value
        });
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      if (this.props.onKeyDown) {
        this.props.onKeyDown({
          originalEvent: event,
          value: this.props.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.props.template ? this.props.template(this.props.value) : this.props.value;
      var className = classNames('p-picklist-item', {
        'p-highlight': this.props.selected
      }, this.props.className);
      return /*#__PURE__*/React.createElement("li", {
        className: className,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        tabIndex: this.props.tabIndex,
        role: "option",
        "aria-selected": this.props.selected
      }, content, /*#__PURE__*/React.createElement(Ripple, null));
    }
  }]);

  return PickListItem;
}(Component);

_defineProperty(PickListItem, "defaultProps", {
  value: null,
  className: null,
  template: null,
  selected: false,
  tabIndex: null,
  onClick: null,
  onKeyDown: null
});

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PickListSubListComponent = /*#__PURE__*/function (_Component) {
  _inherits(PickListSubListComponent, _Component);

  var _super = _createSuper$3(PickListSubListComponent);

  function PickListSubListComponent(props) {
    var _this;

    _classCallCheck(this, PickListSubListComponent);

    _this = _super.call(this, props);
    _this.onItemClick = _this.onItemClick.bind(_assertThisInitialized(_this));
    _this.onItemKeyDown = _this.onItemKeyDown.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListSubListComponent, [{
    key: "onItemClick",
    value: function onItemClick(event) {
      var originalEvent = event.originalEvent;
      var item = event.value;

      var selection = _toConsumableArray(this.props.selection);

      var index = ObjectUtils.findIndexInList(item, selection, this.props.dataKey);
      var selected = index !== -1;
      var metaSelection = this.props.metaKeySelection;

      if (metaSelection) {
        var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;

        if (selected && metaKey) {
          selection.splice(index, 1);
        } else {
          if (!metaKey) {
            selection.length = 0;
          }

          selection.push(item);
        }
      } else {
        if (selected) selection.splice(index, 1);else selection.push(item);
      }

      if (this.props.onSelectionChange) {
        this.props.onSelectionChange({
          event: originalEvent,
          value: selection
        });
      }
    }
  }, {
    key: "onItemKeyDown",
    value: function onItemKeyDown(event) {
      var listItem = event.originalEvent.currentTarget;

      switch (event.originalEvent.which) {
        //down
        case 40:
          var nextItem = this.findNextItem(listItem);

          if (nextItem) {
            nextItem.focus();
          }

          event.originalEvent.preventDefault();
          break;
        //up

        case 38:
          var prevItem = this.findPrevItem(listItem);

          if (prevItem) {
            prevItem.focus();
          }

          event.originalEvent.preventDefault();
          break;
        //enter

        case 13:
          this.onItemClick(event);
          event.originalEvent.preventDefault();
          break;
      }
    }
  }, {
    key: "findNextItem",
    value: function findNextItem(item) {
      var nextItem = item.nextElementSibling;
      if (nextItem) return !DomHandler.hasClass(nextItem, 'p-picklist-item') ? this.findNextItem(nextItem) : nextItem;else return null;
    }
  }, {
    key: "findPrevItem",
    value: function findPrevItem(item) {
      var prevItem = item.previousElementSibling;
      if (prevItem) return !DomHandler.hasClass(prevItem, 'p-picklist-item') ? this.findPrevItem(prevItem) : prevItem;else return null;
    }
  }, {
    key: "isSelected",
    value: function isSelected(item) {
      return ObjectUtils.findIndexInList(item, this.props.selection, this.props.dataKey) !== -1;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var header = null;
      var items = null;
      var wrapperClassName = classNames('p-picklist-list-wrapper', this.props.className);
      var listClassName = classNames('p-picklist-list', this.props.listClassName);

      if (this.props.header) {
        header = /*#__PURE__*/React.createElement("div", {
          className: "p-picklist-header"
        }, ObjectUtils.getJSXElement(this.props.header, this.props));
      }

      if (this.props.list) {
        items = this.props.list.map(function (item, i) {
          return /*#__PURE__*/React.createElement(PickListItem, {
            key: JSON.stringify(item),
            value: item,
            template: _this2.props.itemTemplate,
            selected: _this2.isSelected(item),
            onClick: _this2.onItemClick,
            onKeyDown: _this2.onItemKeyDown,
            tabIndex: _this2.props.tabIndex
          });
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        ref: this.props.forwardRef,
        className: wrapperClassName
      }, header, /*#__PURE__*/React.createElement("ul", {
        className: listClassName,
        style: this.props.style,
        role: "listbox",
        "aria-multiselectable": true
      }, items));
    }
  }]);

  return PickListSubListComponent;
}(Component);

var PickListSubList = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(PickListSubListComponent, _extends({
    forwardRef: ref
  }, props));
});

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PickListControls = /*#__PURE__*/function (_Component) {
  _inherits(PickListControls, _Component);

  var _super = _createSuper$2(PickListControls);

  function PickListControls(props) {
    var _this;

    _classCallCheck(this, PickListControls);

    _this = _super.call(this, props);
    _this.moveUp = _this.moveUp.bind(_assertThisInitialized(_this));
    _this.moveTop = _this.moveTop.bind(_assertThisInitialized(_this));
    _this.moveDown = _this.moveDown.bind(_assertThisInitialized(_this));
    _this.moveBottom = _this.moveBottom.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListControls, [{
    key: "moveUp",
    value: function moveUp(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = 0; i < selectedItems.length; i++) {
          var selectedItem = selectedItems[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

          if (selectedItemIndex !== 0) {
            var movedItem = list[selectedItemIndex];
            var temp = list[selectedItemIndex - 1];
            list[selectedItemIndex - 1] = movedItem;
            list[selectedItemIndex] = temp;
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'up'
          });
        }
      }
    }
  }, {
    key: "moveTop",
    value: function moveTop(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = 0; i < selectedItems.length; i++) {
          var selectedItem = selectedItems[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

          if (selectedItemIndex !== 0) {
            var movedItem = list.splice(selectedItemIndex, 1)[0];
            list.unshift(movedItem);
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'top'
          });
        }
      }
    }
  }, {
    key: "moveDown",
    value: function moveDown(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = selectedItems.length - 1; i >= 0; i--) {
          var selectedItem = selectedItems[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

          if (selectedItemIndex !== list.length - 1) {
            var movedItem = list[selectedItemIndex];
            var temp = list[selectedItemIndex + 1];
            list[selectedItemIndex + 1] = movedItem;
            list[selectedItemIndex] = temp;
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'down'
          });
        }

        this.movedDown = true;
      }
    }
  }, {
    key: "moveBottom",
    value: function moveBottom(event) {
      var selectedItems = this.props.selection;

      if (selectedItems && selectedItems.length) {
        var list = _toConsumableArray(this.props.list);

        for (var i = selectedItems.length - 1; i >= 0; i--) {
          var selectedItem = selectedItems[i];
          var selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, list, this.props.dataKey);

          if (selectedItemIndex !== list.length - 1) {
            var movedItem = list.splice(selectedItemIndex, 1)[0];
            list.push(movedItem);
          } else {
            break;
          }
        }

        if (this.props.onReorder) {
          this.props.onReorder({
            originalEvent: event,
            value: list,
            direction: 'bottom'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var moveDisabled = !this.props.selection.length;
      var className = classNames('p-picklist-buttons', this.props.className);
      return /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement(Button, {
        disabled: moveDisabled,
        type: "button",
        icon: "pi pi-angle-up",
        onClick: this.moveUp
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveDisabled,
        type: "button",
        icon: "pi pi-angle-double-up",
        onClick: this.moveTop
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveDisabled,
        type: "button",
        icon: "pi pi-angle-down",
        onClick: this.moveDown
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveDisabled,
        type: "button",
        icon: "pi pi-angle-double-down",
        onClick: this.moveBottom
      }));
    }
  }]);

  return PickListControls;
}(Component);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PickListTransferControls = /*#__PURE__*/function (_Component) {
  _inherits(PickListTransferControls, _Component);

  var _super = _createSuper$1(PickListTransferControls);

  function PickListTransferControls(props) {
    var _this;

    _classCallCheck(this, PickListTransferControls);

    _this = _super.call(this, props);
    _this.moveRight = _this.moveRight.bind(_assertThisInitialized(_this));
    _this.moveAllRight = _this.moveAllRight.bind(_assertThisInitialized(_this));
    _this.moveLeft = _this.moveLeft.bind(_assertThisInitialized(_this));
    _this.moveAllLeft = _this.moveAllLeft.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickListTransferControls, [{
    key: "moveRight",
    value: function moveRight(event) {
      var selection = this.props.sourceSelection;

      if (ObjectUtils.isNotEmpty(selection)) {
        var targetList = _toConsumableArray(this.props.target);

        var sourceList = _toConsumableArray(this.props.source);

        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];

          if (ObjectUtils.findIndexInList(selectedItem, targetList, this.props.dataKey) === -1) {
            targetList.push(sourceList.splice(ObjectUtils.findIndexInList(selectedItem, sourceList, this.props.dataKey), 1)[0]);
          }
        }

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'toTarget'
          });
        }
      }
    }
  }, {
    key: "moveAllRight",
    value: function moveAllRight(event) {
      if (this.props.source) {
        var targetList = [].concat(_toConsumableArray(this.props.target), _toConsumableArray(this.props.source));
        var sourceList = [];

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'allToTarget'
          });
        }
      }
    }
  }, {
    key: "moveLeft",
    value: function moveLeft(event) {
      var selection = this.props.targetSelection;

      if (ObjectUtils.isNotEmpty(selection)) {
        var targetList = _toConsumableArray(this.props.target);

        var sourceList = _toConsumableArray(this.props.source);

        for (var i = 0; i < selection.length; i++) {
          var selectedItem = selection[i];

          if (ObjectUtils.findIndexInList(selectedItem, sourceList, this.props.dataKey) === -1) {
            sourceList.push(targetList.splice(ObjectUtils.findIndexInList(selectedItem, targetList, this.props.dataKey), 1)[0]);
          }
        }

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'toSource'
          });
        }
      }
    }
  }, {
    key: "moveAllLeft",
    value: function moveAllLeft(event) {
      if (this.props.source) {
        var sourceList = [].concat(_toConsumableArray(this.props.source), _toConsumableArray(this.props.target));
        var targetList = [];

        if (this.props.onTransfer) {
          this.props.onTransfer({
            originalEvent: event,
            source: sourceList,
            target: targetList,
            direction: 'allToSource'
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var moveRightDisabled = ObjectUtils.isEmpty(this.props.sourceSelection);
      var moveLeftDisabled = ObjectUtils.isEmpty(this.props.targetSelection);
      var moveAllRightDisabled = ObjectUtils.isEmpty(this.props.source);
      var moveAllLeftDisabled = ObjectUtils.isEmpty(this.props.target);
      var className = classNames('p-picklist-buttons p-picklist-transfer-buttons', this.props.className);
      return /*#__PURE__*/React.createElement("div", {
        className: className
      }, /*#__PURE__*/React.createElement(Button, {
        disabled: moveRightDisabled,
        type: "button",
        icon: "pi pi-angle-right",
        onClick: this.moveRight
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveAllRightDisabled,
        type: "button",
        icon: "pi pi-angle-double-right",
        onClick: this.moveAllRight
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveLeftDisabled,
        type: "button",
        icon: "pi pi-angle-left",
        onClick: this.moveLeft
      }), /*#__PURE__*/React.createElement(Button, {
        disabled: moveAllLeftDisabled,
        type: "button",
        icon: "pi pi-angle-double-left",
        onClick: this.moveAllLeft
      }));
    }
  }]);

  return PickListTransferControls;
}(Component);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var PickList = /*#__PURE__*/function (_Component) {
  _inherits(PickList, _Component);

  var _super = _createSuper(PickList);

  function PickList(props) {
    var _this;

    _classCallCheck(this, PickList);

    _this = _super.call(this, props);
    _this.state = {};

    if (!_this.props.onSourceSelectionChange) {
      _this.state.sourceSelection = [];
    }

    if (!_this.props.onTargetSelectionChange) {
      _this.state.targetSelection = [];
    }

    _this.onSourceReorder = _this.onSourceReorder.bind(_assertThisInitialized(_this));
    _this.onTargetReorder = _this.onTargetReorder.bind(_assertThisInitialized(_this));
    _this.onTransfer = _this.onTransfer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PickList, [{
    key: "getSourceSelection",
    value: function getSourceSelection() {
      return this.props.onSourceSelectionChange ? this.props.sourceSelection : this.state.sourceSelection;
    }
  }, {
    key: "getTargetSelection",
    value: function getTargetSelection() {
      return this.props.onTargetSelectionChange ? this.props.targetSelection : this.state.targetSelection;
    }
  }, {
    key: "onSourceReorder",
    value: function onSourceReorder(event) {
      this.handleChange(event, event.value, this.props.target);
      this.reorderedListElement = this.sourceListElement;
      this.reorderDirection = event.direction;
    }
  }, {
    key: "onTargetReorder",
    value: function onTargetReorder(event) {
      this.handleChange(event, this.props.source, event.value);
      this.reorderedListElement = this.targetListElement;
      this.reorderDirection = event.direction;
    }
  }, {
    key: "handleScrollPosition",
    value: function handleScrollPosition(listElement, direction) {
      if (listElement) {
        var listContainer = DomHandler.findSingle(listElement, '.p-picklist-list');

        switch (direction) {
          case 'up':
            this.scrollInView(listContainer, -1);
            break;

          case 'top':
            listContainer.scrollTop = 0;
            break;

          case 'down':
            this.scrollInView(listContainer, 1);
            break;

          case 'bottom':
            listContainer.scrollTop = listContainer.scrollHeight;
            break;
        }
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event, source, target) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event.originalEvent,
          source: source,
          target: target
        });
      }
    }
  }, {
    key: "onTransfer",
    value: function onTransfer(event) {
      var originalEvent = event.originalEvent,
          source = event.source,
          target = event.target,
          direction = event.direction;

      switch (direction) {
        case 'toTarget':
          if (this.props.onMoveToTarget) {
            this.props.onMoveToTarget({
              originalEvent: originalEvent,
              value: this.getSourceSelection()
            });
          }

          break;

        case 'allToTarget':
          if (this.props.onMoveAllToTarget) {
            this.props.onMoveAllToTarget({
              originalEvent: originalEvent,
              value: this.props.source
            });
          }

          break;

        case 'toSource':
          if (this.props.onMoveToSource) {
            this.props.onMoveToSource({
              originalEvent: originalEvent,
              value: this.getTargetSelection()
            });
          }

          break;

        case 'allToSource':
          if (this.props.onMoveAllToSource) {
            this.props.onMoveAllToSource({
              originalEvent: originalEvent,
              value: this.props.target
            });
          }

          break;
      }

      this.onSelectionChange({
        originalEvent: originalEvent,
        value: []
      }, 'sourceSelection', this.props.onSourceSelectionChange);
      this.onSelectionChange({
        originalEvent: originalEvent,
        value: []
      }, 'targetSelection', this.props.onTargetSelectionChange);
      this.handleChange(event, source, target);
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(listContainer) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var selectedItems = listContainer.getElementsByClassName('p-highlight');

      if (ObjectUtils.isNotEmpty(selectedItems)) {
        DomHandler.scrollInView(listContainer, direction === -1 ? selectedItems[0] : selectedItems[selectedItems.length - 1]);
      }
    }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(e, stateKey, callback) {
      if (callback) {
        callback(e);
      } else {
        this.setState(_defineProperty({}, stateKey, e.value));
      }

      if (ObjectUtils.isNotEmpty(this.state.sourceSelection) && stateKey === 'targetSelection') {
        this.setState({
          sourceSelection: []
        });
      } else if (ObjectUtils.isNotEmpty(this.state.targetSelection) && stateKey === 'sourceSelection') {
        this.setState({
          targetSelection: []
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.reorderedListElement) {
        this.handleScrollPosition(this.reorderedListElement, this.reorderDirection);
        this.reorderedListElement = null;
        this.reorderDirection = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = classNames('p-picklist p-component', this.props.className);
      var sourceSelection = this.getSourceSelection();
      var targetSelection = this.getTargetSelection();
      return /*#__PURE__*/React.createElement("div", {
        id: this.props.id,
        className: className,
        style: this.props.style
      }, this.props.showSourceControls && /*#__PURE__*/React.createElement(PickListControls, {
        list: this.props.source,
        selection: sourceSelection,
        onReorder: this.onSourceReorder,
        className: "p-picklist-source-controls",
        dataKey: this.props.dataKey
      }), /*#__PURE__*/React.createElement(PickListSubList, {
        ref: function ref(el) {
          return _this2.sourceListElement = el;
        },
        list: this.props.source,
        selection: sourceSelection,
        onSelectionChange: function onSelectionChange(e) {
          return _this2.onSelectionChange(e, 'sourceSelection', _this2.props.onSourceSelectionChange);
        },
        itemTemplate: this.props.itemTemplate,
        header: this.props.sourceHeader,
        style: this.props.sourceStyle,
        className: "p-picklist-source-wrapper",
        listClassName: "p-picklist-source",
        metaKeySelection: this.props.metaKeySelection,
        tabIndex: this.props.tabIndex,
        dataKey: this.props.dataKey
      }), /*#__PURE__*/React.createElement(PickListTransferControls, {
        onTransfer: this.onTransfer,
        source: this.props.source,
        target: this.props.target,
        sourceSelection: sourceSelection,
        targetSelection: targetSelection,
        dataKey: this.props.dataKey
      }), /*#__PURE__*/React.createElement(PickListSubList, {
        ref: function ref(el) {
          return _this2.targetListElement = el;
        },
        list: this.props.target,
        selection: targetSelection,
        onSelectionChange: function onSelectionChange(e) {
          return _this2.onSelectionChange(e, 'targetSelection', _this2.props.onTargetSelectionChange);
        },
        itemTemplate: this.props.itemTemplate,
        header: this.props.targetHeader,
        style: this.props.targetStyle,
        className: "p-picklist-target-wrapper",
        listClassName: "p-picklist-target",
        metaKeySelection: this.props.metaKeySelection,
        tabIndex: this.props.tabIndex,
        dataKey: this.props.dataKey
      }), this.props.showTargetControls && /*#__PURE__*/React.createElement(PickListControls, {
        list: this.props.target,
        selection: targetSelection,
        onReorder: this.onTargetReorder,
        className: "p-picklist-target-controls",
        dataKey: this.props.dataKey
      }));
    }
  }]);

  return PickList;
}(Component);

_defineProperty(PickList, "defaultProps", {
  id: null,
  source: null,
  target: null,
  sourceHeader: null,
  targetHeader: null,
  style: null,
  className: null,
  sourceStyle: null,
  targetStyle: null,
  sourceSelection: null,
  targetSelection: null,
  showSourceControls: true,
  showTargetControls: true,
  metaKeySelection: true,
  tabIndex: 0,
  dataKey: null,
  itemTemplate: null,
  onChange: null,
  onMoveToSource: null,
  onMoveAllToSource: null,
  onMoveToTarget: null,
  onMoveAllToTarget: null,
  onSourceSelectionChange: null,
  onTargetSelectionChange: null
});

export { PickList };
