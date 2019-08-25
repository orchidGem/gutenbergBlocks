/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "./src/card.js":
/*!*********************!*\
  !*** ./src/card.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput;
var PanelBody = wp.components.PanelBody;
registerBlockType('laura/card', {
  title: 'Card',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/cards'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },
  // custom attributes
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a'
    },
    icon: {
      type: 'string',
      default: null
    },
    content: {
      source: 'html',
      selector: 'p'
    },
    cta: {
      source: 'html',
      selector: 'span'
    },
    customClasses: {
      type: 'object',
      default: {}
    },
    customStyles: {
      type: 'object',
      default: {}
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var customClasses = attributes.customClasses;
    return {
      'data-column-size': 'col-md-4'
    };
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        icon = _props$attributes.icon,
        content = _props$attributes.content,
        cta = _props$attributes.cta,
        url = _props$attributes.url,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "sisense-block-card  sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(value) {
        setAttributes({
          icon: value.sizes.full.url
        });
      },
      value: icon,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          style: {
            cursor: 'pointer'
          },
          src: icon ? icon : 'https://via.placeholder.com/150',
          onClick: open
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "p",
      placeholder: "Description",
      value: content,
      onChange: function onChange(value) {
        setAttributes({
          content: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      tagName: "span",
      placeholder: "CTA Text",
      value: cta,
      onChange: function onChange(value) {
        setAttributes({
          cta: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(URLInput, {
      className: "url",
      value: url,
      onChange: function onChange(value) {
        return setAttributes({
          url: value
        });
      }
    }));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles,
        icon = _props$attributes2.icon,
        content = _props$attributes2.content,
        cta = _props$attributes2.cta,
        url = _props$attributes2.url;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      className: "card",
      href: url
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "icon"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: icon
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: content
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "span",
      value: cta,
      className: "cta"
    }));
  }
});

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Tooltip = _wp$components.Tooltip,
    Dashicon = _wp$components.Dashicon,
    Button = _wp$components.Button;
var Fragment = wp.element.Fragment;
registerBlockType('laura/cards', {
  title: 'Cards',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },
  // custom attributes
  attributes: {
    customClasses: {
      type: 'object',
      default: {}
    },
    customStyles: {
      type: 'object',
      default: {}
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function addBlock() {
      var newBlock = createBlock('laura/card');
      var block = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
      wp.data.dispatch('core/editor').insertBlock(newBlock, block[0].innerBlocks.length, clientId);
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      style: {
        marginBottom: '20px'
      },
      onClick: addBlock,
      className: "components-button is-button is-default is-large"
    }, "Add Card")))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "sisense-block-cards sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "blockTitle"
    }, "Cards", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Tooltip, {
      text: "Add Card"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      onClick: addBlock
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "plus"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: [['laura/card']],
      allowedBlocks: ['laura/card']
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "content-deck"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/child.js":
/*!**********************!*\
  !*** ./src/child.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('laura/child', {
  // built-in attributes
  title: 'Child',
  description: 'Child element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/parent'],
  edit: function edit(props) {
    var className = props.className;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "child element")];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "child element");
  }
});

/***/ }),

/***/ "./src/column.js":
/*!***********************!*\
  !*** ./src/column.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundOptions */ "./src/components/BackgroundOptions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody;

registerBlockType('laura/column', {
  title: 'Column',
  description: 'Column element',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },
  // custom attributes
  attributes: {
    bkgColor: {
      type: 'string',
      default: null
    },
    bkgImg: {
      type: 'string',
      default: ''
    },
    bkgImgOpacity: {
      type: 'number',
      default: 10
    },
    alignment: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        hasBkgImg: false,
        hasBkgImgOpacity: false,
        bkgColor: false,
        alignment: false,
        size: 'col-md-12'
      }
    },
    customStyles: {
      type: 'object',
      default: {
        bkgImg: null
      }
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var customClasses = attributes.customClasses;
    return {
      'data-column-size': customClasses.size
    };
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        alignment = _props$attributes.alignment,
        bkgColor = _props$attributes.bkgColor,
        bkgImg = _props$attributes.bkgImg,
        bkgImgOpacity = _props$attributes.bkgImgOpacity,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes;

    function changeAlignment(alignment) {
      var newClass = _objectSpread({}, customClasses);

      newClass.alignment = "text-".concat(alignment);
      setAttributes({
        alignment: alignment,
        customClasses: newClass
      });
    }

    function changeBkgColor(value) {
      setAttributes({
        customClasses: value.newClass,
        bkgColor: value.newColor
      });
    }

    function changeBkgImg(value) {
      setAttributes({
        bkgImg: value.imageUrl,
        customClasses: value.newClass,
        customStyles: value.newStyles
      });
    }

    function changeBkgImgOpacity(value) {
      setAttributes({
        bkgImgOpacity: value.rangeNumber,
        customClasses: value.newClass
      });
    }

    function changeSize(value) {
      var newClass = _objectSpread({}, customClasses);

      newClass.size = value;
      setAttributes({
        customClasses: newClass
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Column Sizes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Column Size",
      value: customClasses.size,
      options: [{
        value: "col-md-1",
        label: "1/12"
      }, {
        value: "col-md-2",
        label: "2/12"
      }, {
        value: "col-md-3",
        label: "3/12 (25%)"
      }, {
        value: "col-md-4",
        label: "4/12"
      }, {
        value: "col-md-5",
        label: "5/12"
      }, {
        value: "col-md-6",
        label: "6/12 (50%)"
      }, {
        value: "col-md-7",
        label: "7/12"
      }, {
        value: "col-md-8",
        label: "8/12"
      }, {
        value: "col-md-9",
        label: "9/12 (75%)"
      }, {
        value: "col-md-10",
        label: "10/12"
      }, {
        value: "col-md-11",
        label: "11/12"
      }, {
        value: "col-md-12",
        label: "12/12 (100%)"
      }],
      onChange: function onChange(value) {
        return changeSize(value);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bkgColor: bkgColor,
      handleBkgColorChange: function handleBkgColorChange(bkgColor) {
        return changeBkgColor(bkgColor);
      },
      bkgImg: bkgImg,
      handleBkgImgChange: function handleBkgImgChange(bkgImg) {
        return changeBkgImg(bkgImg);
      },
      bkgImgOpacity: bkgImgOpacity,
      handleBkgImgOpacityChange: function handleBkgImgOpacityChange(bkgImgOpacity) {
        return changeBkgImgOpacity(bkgImgOpacity);
      },
      customStyles: customStyles,
      customClasses: customClasses
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(bkgImg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: "sisense-block-column sisense-layout-block ".concat(customClasses.size)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "blockTitle"
    }, "Column"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    classes = "".concat(classes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/components/BackgroundOptions.js":
/*!*********************************************!*\
  !*** ./src/components/BackgroundOptions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$editor = wp.editor,
    ColorPalette = _wp$editor.ColorPalette,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    RangeControl = _wp$components.RangeControl;

var BackgroundOptions = function BackgroundOptions(props) {
  var customStyles = props.customStyles,
      customClasses = props.customClasses;

  function updateBackgroundImage(value) {
    var image = value !== "" ? value.sizes.full.url : "";

    var newStyles = _objectSpread({}, customStyles);

    newStyles.bkgImg = image !== "" ? "background-image: url(".concat(image, ")") : null;

    var newClass = _objectSpread({}, customClasses);

    newClass.hasBkgImg = image !== "" ? 'has-bkg-img' : false;

    if (image === "") {
      newClass.hasBkgImgOpacity = false;
    }

    return {
      imageUrl: image,
      newStyles: newStyles,
      newClass: newClass
    };
  }

  function updateBkgImgOpacity(value) {
    var newClass = _objectSpread({}, customClasses);

    newClass.hasBkgImgOpacity = value !== 10 ? "has-bkg-img-opacity-".concat(value) : false;
    return {
      rangeNumber: value,
      newClass: newClass
    };
  }

  function updateBackgroundColor(newColor) {
    var colorLibrary = {
      "#000000": "bg-black",
      "#FFFFFF": "bg-white",
      "#ffcb05": "bg-yellow"
    };
    var colorClass = newColor !== undefined ? colorLibrary[newColor] : false;

    var newClass = _objectSpread({}, customClasses);

    newClass.bkgColor = colorClass;
    return {
      newColor: newColor !== undefined ? newColor : null,
      newClass: newClass
    };
  }

  return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: "Background Options"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "Background Color"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ColorPalette, {
    value: props.bkgColor,
    onChange: function onChange(value) {
      return props.handleBkgColorChange(updateBackgroundColor(value));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("hr", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", null, "Background Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(MediaUpload, {
    type: "image",
    onSelect: function onSelect(value) {
      return props.handleBkgImgChange(updateBackgroundImage(value));
    },
    render: function render(_ref) {
      var open = _ref.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
        onClick: open,
        className: "components-button is-button is-default is-large"
      }, props.bkgImage ? "Replace Image" : "Select Image");
    }
  }), props.bkgImg ? [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
    style: {
      'display': 'block',
      'marginTop': '10px'
    },
    className: "components-button is-link is-destructive",
    onClick: function onClick(value) {
      return props.handleBkgImgChange(updateBackgroundImage(""));
    }
  }, "Remove Image"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("br", null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
    beforeIcon: "arrow-left-alt2",
    afterIcon: "arrow-right-alt2",
    label: "Background Image Opacity",
    value: props.bkgImgOpacity,
    onChange: function onChange(value) {
      return props.handleBkgImgOpacityChange(updateBkgImgOpacity(value));
    },
    min: 1,
    max: 10
  })] : '')];
};

/* harmony default export */ __webpack_exports__["default"] = (BackgroundOptions);

/***/ }),

/***/ "./src/container.js":
/*!**************************!*\
  !*** ./src/container.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundOptions */ "./src/components/BackgroundOptions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    RadioControl = _wp$components.RadioControl,
    PanelBody = _wp$components.PanelBody;

registerBlockType('laura/container', {
  title: 'Container',
  description: 'Container element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/section'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },
  // custom attributes
  attributes: {
    bkgColor: {
      type: 'string',
      default: null
    },
    bkgImg: {
      type: 'string',
      default: ''
    },
    bkgImgOpacity: {
      type: 'number',
      default: 10
    },
    alignment: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        hasBkgImg: false,
        hasBkgImgOpacity: false,
        bkgColor: false,
        alignment: false,
        widthSize: 'container'
      }
    },
    customStyles: {
      type: 'object',
      default: {
        bkgImg: null
      }
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        alignment = _props$attributes.alignment,
        bkgColor = _props$attributes.bkgColor,
        bkgImg = _props$attributes.bkgImg,
        bkgImgOpacity = _props$attributes.bkgImgOpacity,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function changeAlignment(alignment) {
      var newClass = _objectSpread({}, customClasses);

      newClass.alignment = "text-".concat(alignment);
      setAttributes({
        alignment: alignment,
        customClasses: newClass
      });
    }

    function changeBkgColor(value) {
      setAttributes({
        customClasses: value.newClass,
        bkgColor: value.newColor
      });
    }

    function changeBkgImg(value) {
      setAttributes({
        bkgImg: value.imageUrl,
        customClasses: value.newClass,
        customStyles: value.newStyles
      });
    }

    function changeBkgImgOpacity(value) {
      setAttributes({
        bkgImgOpacity: value.rangeNumber,
        customClasses: value.newClass
      });
    }

    function changeWidthSize(value) {
      var newClass = _objectSpread({}, customClasses);

      newClass.widthSize = value;
      setAttributes({
        customClasses: newClass
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Width Settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RadioControl, {
      label: "Width Size",
      selected: customClasses.widthSize,
      options: [{
        label: "Fixed Width",
        value: "container"
      }, {
        label: "Full Width",
        value: "container-fluid"
      }],
      onChange: function onChange(value) {
        return changeWidthSize(value);
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      onClick: function onClick() {
        var newBlock = createBlock('laura/row');
        var container = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
        wp.data.dispatch('core/editor').insertBlock(newBlock, container[0].innerBlocks.length, clientId);
      },
      className: "components-button is-button is-default is-large"
    }, "Add Row"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bkgColor: bkgColor,
      handleBkgColorChange: function handleBkgColorChange(bkgColor) {
        return changeBkgColor(bkgColor);
      },
      bkgImg: bkgImg,
      handleBkgImgChange: function handleBkgImgChange(bkgImg) {
        return changeBkgImg(bkgImg);
      },
      bkgImgOpacity: bkgImgOpacity,
      handleBkgImgOpacityChange: function handleBkgImgOpacityChange(bkgImgOpacity) {
        return changeBkgImgOpacity(bkgImgOpacity);
      },
      customStyles: customStyles,
      customClasses: customClasses
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(bkgImg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: "sisense-block-container sisense-layout-block ".concat(customClasses.widthSize)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "blockTitle"
    }, "Container"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: [['laura/row']],
      allowedBlocks: ['laura/row']
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      onClick: function onClick() {
        var newBlock = createBlock('laura/row');
        var container = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
        wp.data.dispatch('core/editor').insertBlock(newBlock, container[0].innerBlocks.length, clientId);
      },
      className: "components-button is-primary is-button is-default is-large btn-add"
    }, "Add Row"))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/content-tab.js":
/*!****************************!*\
  !*** ./src/content-tab.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip,
    Dashicon = _wp$components.Dashicon;
registerBlockType('laura/content-tab', {
  title: 'Content tab',
  description: 'Content tab',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/content-tabs'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },
  // custom attributes
  attributes: {
    icon: {
      type: 'string',
      default: null
    },
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {}
    },
    customStyles: {
      type: 'object',
      default: {}
    }
  },
  getEditWrapperProps: function getEditWrapperProps(attributes) {
    var customClasses = attributes.customClasses;
    return {
      'data-column-size': 'col-md-6'
    };
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        title = _props$attributes.title,
        description = _props$attributes.description,
        icon = _props$attributes.icon,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function addBlock() {
      var newBlock = createBlock('laura/column');
      var block = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
      wp.data.dispatch('core/editor').insertBlock(newBlock, block[0].innerBlocks.length, clientId);
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      isDefault: true,
      onClick: addBlock
    }, "Add Column"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "sisense-block-content-tab  sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "blockTitle"
    }, "Content Tab", Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Tooltip, {
      text: "Add Column"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      style: {
        float: 'right',
        marginTop: '5px'
      },
      onClick: addBlock
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Dashicon, {
      icon: "plus"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "tab"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: function onSelect(value) {
        setAttributes({
          icon: value.sizes.full.url
        });
      },
      value: icon,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          src: icon ? icon : 'https://via.placeholder.com/150',
          onClick: open
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      format: "string",
      tagName: "h3",
      placeholder: "Title",
      value: title,
      onChange: function onChange(value) {
        setAttributes({
          title: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      format: "string",
      tagName: "p",
      placeholder: "Description",
      value: description,
      onChange: function onChange(value) {
        setAttributes({
          description: value
        });
      }
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      style: {
        display: 'none !important'
      },
      template: [['laura/column', {
        customClasses: {
          size: 'col-md-6'
        }
      }, [['core/heading', {
        level: 3,
        placeholder: 'Enter heading'
      }], ['core/paragraph', {
        fontSize: 'large',
        placeholder: 'Enter sub-heading'
      }], ['core/paragraph']]], ['laura/column', {
        customClasses: {
          size: 'col-md-6'
        }
      }]],
      allowedBlocks: ['laura/column']
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    classes = "row ".concat(classes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/content-tabs.js":
/*!*****************************!*\
  !*** ./src/content-tabs.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var Fragment = wp.element.Fragment;
registerBlockType('laura/content-tabs', {
  title: 'Content Tabs',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },
  // custom attributes
  attributes: {
    numTabsPerRow: {
      type: 'string',
      default: "3"
    },
    customClasses: {
      type: 'object',
      default: {}
    },
    customStyles: {
      type: 'object',
      default: {}
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        numTabsPerRow = _props$attributes.numTabsPerRow,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      style: {
        marginBottom: '20px'
      },
      onClick: function onClick() {
        var newBlock = createBlock('laura/content-tab');
        var block = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
        wp.data.dispatch('core/editor').insertBlock(newBlock, block[0].innerBlocks.length, clientId);
      },
      className: "components-button is-button is-default is-large"
    }, "Add Content Tab")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
      label: "Number of Tabs per Row",
      value: numTabsPerRow,
      options: [{
        value: "3",
        label: "3 in a row"
      }, {
        value: "4",
        label: "4 in a row"
      }],
      onChange: function onChange(value) {
        return setAttributes({
          numTabsPerRow: value
        });
      }
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "sisense-block-content-tabs  sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "blockTitle"
    }, "Content Tabs"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: [['laura/content-tab']],
      allowedBlocks: ['laura/content-tab']
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    classes = "row ".concat(classes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/cta.js":
/*!********************!*\
  !*** ./src/cta.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls,
    ColorPalette = _wp$editor.ColorPalette;
var PanelBody = wp.components.PanelBody; // same as writing
// import register from wp.blocks;

registerBlockType('laura/custom-cta', {
  // built-in attributes
  title: 'Call to Action',
  description: 'Block to generate custom call to action',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    titleColor: {
      type: 'string',
      default: 'black'
    },
    body: {
      type: 'string',
      source: 'html',
      selector: 'p'
    }
  },
  // built-in functions
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body;

    function onChangeTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function onChangeBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function onTitleColorChange(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Font Color Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Select a Title Color:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ColorPalette, {
      value: titleColor,
      onChange: onTitleColorChange
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "cta-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "h2",
      placeholder: "Your CTA Title",
      value: title,
      onChange: onChangeTitle,
      style: {
        color: titleColor
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your CTA Description",
      value: body,
      onChange: onChangeBody
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var title = attributes.title,
        titleColor = attributes.titleColor,
        body = attributes.body;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      class: "cta-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", {
      style: {
        color: titleColor
      }
    }, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RichText.Content, {
      tagName: "p",
      value: body
    }));
  }
});

/***/ }),

/***/ "./src/customAttributes/index.js":
/*!***************************************!*\
  !*** ./src/customAttributes/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress Dependencies
 */
var __ = wp.i18n.__;
var addFilter = wp.hooks.addFilter;
var Fragment = wp.element.Fragment;
var InspectorAdvancedControls = wp.editor.InspectorAdvancedControls;
var createHigherOrderComponent = wp.compose.createHigherOrderComponent;
/**
 * Add custom attribute for mobile visibility.
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */

function addAttributes(settings) {
  if (typeof settings.attributes !== 'undefined') {
    settings.attributes = Object.assign(settings.attributes, {
      advancedAttributes: {
        type: 'string'
      }
    });
  }

  return settings;
}
/**
 * Add mobile visibility controls on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */


var withAdvancedControls = createHigherOrderComponent(function (BlockEdit) {
  return function (props) {
    var name = props.name,
        attributes = props.attributes,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;
    var advancedAttributes = attributes.advancedAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockEdit, props), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorAdvancedControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
      htmlFor: "advancedAttributes"
    }, "Advanced Attributes"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: advancedAttributes,
      placeholder: "data-custom=a data-test=ie",
      onChange: function onChange(e) {
        return setAttributes({
          advancedAttributes: e.target.value
        });
      }
    })));
  };
}, 'withAdvancedControls');
/**
 * Add custom element class in save element.
 *
 * @param {Object} extraProps     Block element.
 * @param {Object} blockType      Blocks object.
 * @param {Object} attributes     Blocks attributes.
 *
 * @return {Object} extraProps Modified block element.
 */

function applyExtraClass(extraProps, blockType, attributes) {
  var advancedAttributes = attributes.advancedAttributes;

  if (typeof advancedAttributes !== 'undefined') {
    var attrsArray = advancedAttributes.split(" ");
    attrsArray.forEach(function (attr) {
      var attrArray = attr.split("=");
      extraProps["".concat(attrArray[0])] = attrArray[1];
    });
  }

  return extraProps;
} //add filters


addFilter('blocks.registerBlockType', 'editorskit/custom-attributes', addAttributes);
addFilter('editor.BlockEdit', 'editorskit/custom-advanced-control', withAdvancedControls);
addFilter('blocks.getSaveContent.extraProps', 'editorskit/applyExtraClass', applyExtraClass);
addFilter('blocks.getSaveContent.extraProps', 'editorskit/applyExtraClass', applyExtraClass);

/***/ }),

/***/ "./src/dynamicBlock.js":
/*!*****************************!*\
  !*** ./src/dynamicBlock.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType('laura/dynamic', {
  // built-in attributes
  title: 'Dynamic',
  description: 'Dynamic',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    categories: {
      type: 'object'
    },
    selectedCategory: {
      type: 'string'
    },
    postsPerPage: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className; // fetch all categories

    if (!props.attributes.categories) {
      wp.apiFetch({
        url: '/wp-json/wp/v2/categories'
      }).then(function (categories) {
        props.setAttributes({
          categories: categories
        });
      });
    }

    if (!props.attributes.categories) {
      return 'Loading...';
    }

    if (props.attributes.categories && props.attributes.categories.length === 0) {
      return 'No categories found. please add some';
    }

    function updateCategory(e) {
      props.setAttributes({
        selectedCategory: e.target.value
      });
    }

    function updatePostsPerPage(e) {
      console.log('update posts per page');
      props.setAttributes({
        postsPerPage: e.target.value
      });
      console.log(props.attributes);
    }

    console.log(props.attributes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Post Category"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("select", {
      onChange: updateCategory,
      value: props.attributes.selectedCategory
    }, props.attributes.categories.map(function (category) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("option", {
        value: category.id
      }, category.name);
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, "Posts Per Page"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      placeholder: "Posts per Page",
      type: "text",
      onChange: updatePostsPerPage,
      value: props.attributes.postsPerPage
    }));
  },
  save: function save(props) {
    return null;
  }
});

/***/ }),

/***/ "./src/dynamicBlockWithInnerBlocks.js":
/*!********************************************!*\
  !*** ./src/dynamicBlockWithInnerBlocks.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType('laura/dynamicinner', {
  // built-in attributes
  title: 'Dynamic Block with Inner Blocks',
  description: 'Dynamic',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    title: {
      type: 'string'
    }
  },
  edit: function edit(props) {
    var className = props.className;

    function updateTitle(e) {
      props.setAttributes({
        title: e.target.value
      });
    }

    console.log(props.attributes);
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        'border': '1px solid black'
      },
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
      type: "text",
      value: props.attributes.title,
      onChange: updateTitle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/hero-banner.js":
/*!****************************!*\
  !*** ./src/hero-banner.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InnerBlocks = _wp$editor.InnerBlocks,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload;
var PanelBody = wp.components.PanelBody;
registerBlockType('laura/hero-banner', {
  // built-in attributes
  title: 'Hero Banner',
  description: 'Hero Banner',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {
    backgroundImage: {
      type: 'string',
      default: ''
    }
  },
  edit: function edit(props) {
    var className = props.className;

    function updateBackgroundImage(image) {
      props.setAttributes({
        backgroundImage: image.sizes.full.url
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
      title: 'Background Settings'
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, "Background Image:")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(MediaUpload, {
      onSelect: updateBackgroundImage,
      type: "image",
      value: props.attributes.backgroundImage,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          onClick: open,
          className: "components-button is-button is-default is-large"
        }, "Upload Image!");
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        border: '1px solid black',
        backgroundImage: "url(".concat(props.attributes.backgroundImage, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, null))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/image-group.js":
/*!****************************!*\
  !*** ./src/image-group.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType('laura/image-group', {
  title: 'Image Group',
  icon: 'images-alt',
  category: 'common',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },
  // custom attributes
  attributes: {
    customClasses: {
      type: 'object',
      default: {
        style: ''
      }
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "sisense-block-image-group ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      template: [['core/image'], ['core/image'], ['core/image']],
      allowedBlocks: ['core/image']
    }))];
  },
  save: function save(props) {
    var customClasses = props.attributes.customClasses;
    var classes = Object.values(customClasses).filter(Boolean).join(" ");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image-group ".concat(classes)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _customAttributes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customAttributes/index */ "./src/customAttributes/index.js");
/* harmony import */ var _cta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cta */ "./src/cta.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section */ "./src/section.js");
/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child */ "./src/child.js");
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parent */ "./src/parent.js");
/* harmony import */ var _dynamicBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicBlock */ "./src/dynamicBlock.js");
/* harmony import */ var _dynamicBlockWithInnerBlocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamicBlockWithInnerBlocks */ "./src/dynamicBlockWithInnerBlocks.js");
/* harmony import */ var _hero_banner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hero-banner */ "./src/hero-banner.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./container */ "./src/container.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./row */ "./src/row.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./column */ "./src/column.js");
/* harmony import */ var _content_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content-tab */ "./src/content-tab.js");
/* harmony import */ var _content_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content-tabs */ "./src/content-tabs.js");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./card */ "./src/card.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _link_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./link-button */ "./src/link-button.js");
/* harmony import */ var _image_group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./image-group */ "./src/image-group.js");


















/***/ }),

/***/ "./src/link-button.js":
/*!****************************!*\
  !*** ./src/link-button.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button;
registerBlockType('laura/link-button', {
  title: 'Link Button',
  icon: 'format-image',
  category: 'common',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },
  // custom attributes
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      attribute: 'href',
      selector: 'a'
    },
    text: {
      type: 'string',
      default: null
    },
    target: {
      type: 'string'
    },
    rel: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        style: ''
      }
    },
    customStyles: {
      type: 'object',
      default: {}
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        url = _props$attributes.url,
        text = _props$attributes.text,
        target = _props$attributes.target,
        rel = _props$attributes.rel,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function updateButtonStyle(value) {
      var newClass = _objectSpread({}, customClasses);

      newClass.style = value;
      setAttributes({
        customClasses: newClass
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Style"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isDefault: true,
      style: {
        backgroundColor: '#ffcb05',
        border: '1px solid black',
        margin: '2px'
      },
      onClick: function onClick() {
        updateButtonStyle("");
      }
    }, "Default"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isDefault: true,
      style: {
        backgroundColor: 'black',
        color: 'white',
        margin: '2px',
        border: '1px solid black'
      },
      onClick: function onClick() {
        updateButtonStyle("btn-black");
      }
    }, "Black"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isDefault: true,
      style: {
        backgroundColor: 'white',
        border: '1px solid black',
        margin: '2px'
      },
      onClick: function onClick() {
        updateButtonStyle("btn-white");
      }
    }, "White"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isDefault: true,
      style: {
        backgroundColor: 'transparent',
        border: '1px solid black',
        margin: '2px'
      },
      onClick: function onClick() {
        updateButtonStyle("btn-trans");
      }
    }, "Transparent w/Black Border"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      isDefault: true,
      style: {
        backgroundColor: 'transparent',
        border: '1px solid black',
        margin: '2px'
      },
      onClick: function onClick() {
        updateButtonStyle("btn-transparent-white");
      }
    }, "Transparent w/White Border")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: "Attributes"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Target",
      value: target,
      options: [{
        value: "",
        label: ""
      }, {
        value: "_blank",
        label: "_blank"
      }, {
        value: "_parent",
        label: "_parent"
      }, {
        value: "_self",
        label: "_self"
      }, {
        value: "_top",
        label: "_top"
      }],
      onChange: function onChange(value) {
        setAttributes({
          target: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      label: "Rel",
      value: rel,
      options: [{
        value: "",
        label: ""
      }, {
        value: "alternate",
        label: "alternate"
      }, {
        value: "author",
        label: "author"
      }, {
        value: "bookmark",
        label: "bookmark"
      }, {
        value: "external",
        label: "external"
      }, {
        value: "help",
        label: "help"
      }, {
        value: "license",
        label: "license"
      }, {
        value: "next",
        label: "next"
      }, {
        value: "nofollow",
        label: "nofollow"
      }, {
        value: "noreferrer",
        label: "noreferrer"
      }, {
        value: "noopener",
        label: "noopener"
      }, {
        value: "prev",
        label: "prev"
      }, {
        value: "search",
        label: "search"
      }, {
        value: "tag",
        label: "tag"
      }],
      onChange: function onChange(value) {
        setAttributes({
          rel: value
        });
      }
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "sisense-block-link-button ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, {
      className: "action-btn ".concat(customClasses.style),
      tagName: "a",
      placeholder: "Link Text",
      value: text,
      onChange: function onChange(value) {
        setAttributes({
          text: value
        });
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(URLInput, {
      className: "url",
      value: url,
      isFullWidth: true,
      hasBorder: true,
      onChange: function onChange(value) {
        return setAttributes({
          url: value
        });
      }
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles,
        url = _props$attributes2.url,
        text = _props$attributes2.text,
        target = _props$attributes2.target,
        rel = _props$attributes2.rel;
    var classes = Object.values(customClasses).filter(Boolean).join(" ");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
      tagName: "a",
      className: "action-btn ".concat(classes),
      href: url,
      value: text,
      target: target,
      rel: rel
    });
  }
});

/***/ }),

/***/ "./src/parent.js":
/*!***********************!*\
  !*** ./src/parent.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var registerBlockType = wp.blocks.registerBlockType;
var InnerBlocks = wp.editor.InnerBlocks;
registerBlockType('laura/parent', {
  // built-in attributes
  title: 'Parent',
  description: 'Parent element',
  icon: 'format-image',
  category: 'layout',
  // custom attributes
  attributes: {},
  edit: function edit(props) {
    var className = props.className;
    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        'border': '1px solid black'
      },
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks, {
      allowedBlocks: ['laura/child', 'core/image']
    }))];
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/row.js":
/*!********************!*\
  !*** ./src/row.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundOptions */ "./src/components/BackgroundOptions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _wp$blocks = wp.blocks,
    registerBlockType = _wp$blocks.registerBlockType,
    createBlock = _wp$blocks.createBlock;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;
var _wp$components = wp.components,
    RadioControl = _wp$components.RadioControl,
    PanelBody = _wp$components.PanelBody;

registerBlockType('laura/row', {
  title: 'Row',
  description: 'Row element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/container'],
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false,
    inserter: false
  },
  // custom attributes
  attributes: {
    bkgColor: {
      type: 'string',
      default: null
    },
    bkgImg: {
      type: 'string',
      default: ''
    },
    bkgImgOpacity: {
      type: 'number',
      default: 10
    },
    alignment: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        hasBkgImg: false,
        hasBkgImgOpacity: false,
        bkgColor: false,
        alignment: false
      }
    },
    customStyles: {
      type: 'object',
      default: {
        bkgImg: null
      }
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        alignment = _props$attributes.alignment,
        bkgColor = _props$attributes.bkgColor,
        bkgImg = _props$attributes.bkgImg,
        bkgImgOpacity = _props$attributes.bkgImgOpacity,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    function changeAlignment(alignment) {
      var newClass = _objectSpread({}, customClasses);

      newClass.alignment = "text-".concat(alignment);
      setAttributes({
        alignment: alignment,
        customClasses: newClass
      });
    }

    function changeBkgColor(value) {
      setAttributes({
        customClasses: value.newClass,
        bkgColor: value.newColor
      });
    }

    function changeBkgImg(value) {
      setAttributes({
        bkgImg: value.imageUrl,
        customClasses: value.newClass,
        customStyles: value.newStyles
      });
    }

    function changeBkgImgOpacity(value) {
      setAttributes({
        bkgImgOpacity: value.rangeNumber,
        customClasses: value.newClass
      });
    }

    function addColumn() {}

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bkgColor: bkgColor,
      handleBkgColorChange: function handleBkgColorChange(bkgColor) {
        return changeBkgColor(bkgColor);
      },
      bkgImg: bkgImg,
      handleBkgImgChange: function handleBkgImgChange(bkgImg) {
        return changeBkgImg(bkgImg);
      },
      bkgImgOpacity: bkgImgOpacity,
      handleBkgImgOpacityChange: function handleBkgImgOpacityChange(bkgImgOpacity) {
        return changeBkgImgOpacity(bkgImgOpacity);
      },
      customStyles: customStyles,
      customClasses: customClasses
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      onClick: function onClick() {
        var newBlock = createBlock('laura/column');
        var row = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
        wp.data.dispatch('core/editor').insertBlock(newBlock, row[0].innerBlocks.length, clientId);
      },
      className: "components-button is-button is-default is-large"
    }, "Add Column")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(bkgImg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: "sisense-block-row  sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "blockTitle"
    }, "Row"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: [['laura/column'], ['laura/column']],
      allowedBlocks: ['laura/column']
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("button", {
      onClick: function onClick() {
        var newBlock = createBlock('laura/column');
        var row = wp.data.select('core/block-editor').getBlocksByClientId(clientId);
        wp.data.dispatch('core/editor').insertBlock(newBlock, row[0].innerBlocks.length, clientId);
      },
      className: "components-button is-primary is-button is-default is-large btn-add"
    }, "Add Column"))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    classes = "row ".concat(classes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "./src/section.js":
/*!************************!*\
  !*** ./src/section.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BackgroundOptions */ "./src/components/BackgroundOptions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;

registerBlockType('laura/section', {
  title: 'Section',
  description: 'Section element',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false,
    className: false
  },
  // custom attributes
  attributes: {
    bkgColor: {
      type: 'string',
      default: null
    },
    bkgImg: {
      type: 'string',
      default: ''
    },
    bkgImgOpacity: {
      type: 'number',
      default: 10
    },
    alignment: {
      type: 'string'
    },
    customClasses: {
      type: 'object',
      default: {
        hasBkgImg: false,
        hasBkgImgOpacity: false,
        bkgColor: false,
        alignment: false
      }
    },
    customStyles: {
      type: 'object',
      default: {
        bkgImg: null
      }
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        alignment = _props$attributes.alignment,
        bkgColor = _props$attributes.bkgColor,
        bkgImg = _props$attributes.bkgImg,
        bkgImgOpacity = _props$attributes.bkgImgOpacity,
        customClasses = _props$attributes.customClasses,
        customStyles = _props$attributes.customStyles,
        className = props.className,
        setAttributes = props.setAttributes;

    function changeAlignment(alignment) {
      var newClass = _objectSpread({}, customClasses);

      newClass.alignment = "text-".concat(alignment);
      setAttributes({
        alignment: alignment,
        customClasses: newClass
      });
    }

    function changeBkgColor(value) {
      setAttributes({
        customClasses: value.newClass,
        bkgColor: value.newColor
      });
    }

    function changeBkgImg(value) {
      setAttributes({
        bkgImg: value.imageUrl,
        customClasses: value.newClass,
        customStyles: value.newStyles
      });
    }

    function changeBkgImgOpacity(value) {
      setAttributes({
        bkgImgOpacity: value.rangeNumber,
        customClasses: value.newClass
      });
    }

    return [Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, {
      style: {
        marginBottom: '40px;'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_BackgroundOptions__WEBPACK_IMPORTED_MODULE_2__["default"], {
      bkgColor: bkgColor,
      handleBkgColorChange: function handleBkgColorChange(bkgColor) {
        return changeBkgColor(bkgColor);
      },
      bkgImg: bkgImg,
      handleBkgImgChange: function handleBkgImgChange(bkgImg) {
        return changeBkgImg(bkgImg);
      },
      bkgImgOpacity: bkgImgOpacity,
      handleBkgImgOpacityChange: function handleBkgImgOpacityChange(bkgImgOpacity) {
        return changeBkgImgOpacity(bkgImgOpacity);
      },
      customStyles: customStyles,
      customClasses: customClasses
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        backgroundImage: "url(".concat(bkgImg, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: "sisense-block-section sisense-layout-block ".concat(className)
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "blockTitle"
    }, "Section"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: [['laura/container']]
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    if (styles.length === 0) styles = false;
    if (classes.lenth === 0) classes = false;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: false,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
  }
});

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map