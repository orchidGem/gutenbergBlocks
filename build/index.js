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

var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;

registerBlockType('laura/container', {
  title: 'Container',
  description: 'Container element',
  icon: 'format-image',
  category: 'layout',
  supports: {
    anchor: true,
    html: false,
    reusable: false
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
        border: '5px dashed #cbcbcb',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      allowedBlocks: ['core/paragraph']
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    classes = "container ".concat(classes);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: styles
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks.Content, null));
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cta */ "./src/cta.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section */ "./src/section.js");
/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child */ "./src/child.js");
/* harmony import */ var _parent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parent */ "./src/parent.js");
/* harmony import */ var _dynamicBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamicBlock */ "./src/dynamicBlock.js");
/* harmony import */ var _dynamicBlockWithInnerBlocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamicBlockWithInnerBlocks */ "./src/dynamicBlockWithInnerBlocks.js");
/* harmony import */ var _hero_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-banner */ "./src/hero-banner.js");
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./container */ "./src/container.js");









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

var TEMPLATE = [['core/paragraph', {
  placeholder: 'write text here'
}], ['laura/container']];
registerBlockType('laura/section', {
  title: 'Section',
  description: 'Section element',
  icon: 'format-image',
  category: 'layout',
  parent: ['laura/section'],
  supports: {
    anchor: true,
    html: false,
    reusable: false
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
        border: '5px dashed #cbcbcb',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      className: className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AlignmentToolbar, {
      value: alignment,
      onChange: changeAlignment
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerBlocks, {
      template: TEMPLATE
    }))];
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        customClasses = _props$attributes2.customClasses,
        customStyles = _props$attributes2.customStyles;
    var styles = Object.values(customStyles).toString(),
        classes = Object.values(customClasses).filter(Boolean).join(" ");
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: classes,
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