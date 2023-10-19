(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background: lightgray;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  /* font-family: 'Bebas Neue', cursive; */
}

.water-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

h3 {
  text-align: center;
}

button {
  margin-inline: auto;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding-block: 18px;
  padding-inline: 18px;
}

.player-1,
.player-2 {
  display: grid;
  grid-template-rows: repeat(10, 60px);
  grid-template-columns: repeat(10, 60px);
}

.player-1 {
  margin-right: 15px;
}

.square {
  position: relative;
  border: 1px solid #000;
  /* width: 60px; */
  /* height: 60px; */
}

.highlight {
  background: lightblue;
}

.highlight-error {
  background: red;
}

.game-title {
  font-family: 'Big Shoulders Stencil Text', cursive;
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 0.25rem;
  text-align: center;
  margin-block: 1.5rem;
}

.container {
  margin-inline: auto;
}

.placing-ship {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
}

footer {
  padding-block: 1rem;
}

footer p {
  text-align: center;
  font-size: 1.25rem;
}

.hide {
  display: none;
}

.ship-sunk {
  text-align: center;
}

.rect{
  min-height: 60px;
  padding-block: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB;wEACsE;EACtE,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB;wEACsE;EACtE,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kDAAkD;EAClD,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB","sourcesContent":["body {\n  background: lightgray;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  /* font-family: 'Bebas Neue', cursive; */\n}\n\n.water-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\nh3 {\n  text-align: center;\n}\n\nbutton {\n  margin-inline: auto;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding-block: 18px;\n  padding-inline: 18px;\n}\n\n.player-1,\n.player-2 {\n  display: grid;\n  grid-template-rows: repeat(10, 60px);\n  grid-template-columns: repeat(10, 60px);\n}\n\n.player-1 {\n  margin-right: 15px;\n}\n\n.square {\n  position: relative;\n  border: 1px solid #000;\n  /* width: 60px; */\n  /* height: 60px; */\n}\n\n.highlight {\n  background: lightblue;\n}\n\n.highlight-error {\n  background: red;\n}\n\n.game-title {\n  font-family: 'Big Shoulders Stencil Text', cursive;\n  font-size: 5rem;\n  font-weight: 900;\n  letter-spacing: 0.25rem;\n  text-align: center;\n  margin-block: 1.5rem;\n}\n\n.container {\n  margin-inline: auto;\n}\n\n.placing-ship {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 1.5rem;\n}\n\nfooter {\n  padding-block: 1rem;\n}\n\nfooter p {\n  text-align: center;\n  font-size: 1.25rem;\n}\n\n.hide {\n  display: none;\n}\n\n.ship-sunk {\n  text-align: center;\n}\n\n.rect{\n  min-height: 60px;\n  padding-block: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/boardSquare.js":
/*!****************************!*\
  !*** ./src/boardSquare.js ***!
  \****************************/
/***/ ((module) => {

class Square {
  static createBoard(player) {
    const playerBoard = document.createElement('div');
    playerBoard.classList.add(player);

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const square = document.createElement('div');
        square.dataset.x = x;
        square.dataset.y = y;
        square.dataset.index = y * 10 + x;
        square.classList.add('square');
        square.style.gridRow = `${y + 1}/span 1`;
        square.style.gridColumn = `${x + 1}/span 1`;
        playerBoard.appendChild(square);
      }
    }
    return playerBoard;
  }

  static findSquare(boardClass, position) {
    return document.querySelector(
      `.${boardClass} [data-index="${position.x + position.y * 10}"]`,
      false
    );
  }

  static parse(square) {
    const x = parseInt(square.dataset.x, 10);
    const y = parseInt(square.dataset.y, 10);
    return { x, y };
  }

  static highLightSquares(position, direction, length, handle) {
    const X = position.x;
    const Y = position.y;

    if (direction === 'x') {
      if (X + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let x = X; x < X + length && x < 10; x++) {
        handle(x, Y);
      }
    } else if (direction === 'y') {
      if (Y + length > 10) {
        handle(X, Y, 'highlight-error');
        return;
      }
      // eslint-disable-next-line no-plusplus
      for (let y = Y; y < Y + length && y < 10; y++) {
        handle(X, y);
      }
    }
  }
}

module.exports = Square;


/***/ }),

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Square = __webpack_require__(/*! ../boardSquare */ "./src/boardSquare.js");

function Boards() {
  const content = document.querySelector('#content');
  const waterContainer = document.createElement('div');

  waterContainer.classList.add('water-container');
  waterContainer.appendChild(Square.createBoard('player-1'));
  waterContainer.appendChild(Square.createBoard('player-2'));
  content.appendChild(waterContainer);
}

module.exports = Boards;


/***/ }),

/***/ "./src/components/gameState.js":
/*!*************************************!*\
  !*** ./src/components/gameState.js ***!
  \*************************************/
/***/ ((module) => {

function GameState() {
  const gameStatus = document.querySelector('#game-status');
  /* let botThinking = true; */

  let thinking = false;
  const isThinking = () => thinking;
  return {
    thinking: async (ms) => {
      gameStatus.innerHTML = 'bot turns';
      await new Promise((resolve) => {
        setTimeout(() => {
          gameStatus.innerHTML = 'player 1 turns';
          thinking = false;
          resolve();
        }, ms);
      });
    },
    isThinking,
  };
}

module.exports = GameState;


/***/ }),

/***/ "./src/components/icon.js":
/*!********************************!*\
  !*** ./src/components/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Carrier = __webpack_require__(/*! ./icons/battleship */ "./src/components/icons/battleship.js");
const Battleship = __webpack_require__(/*! ./icons/battleship */ "./src/components/icons/battleship.js");
const Destroyer = __webpack_require__(/*! ./icons/destroyer */ "./src/components/icons/destroyer.js");
const Submarine = __webpack_require__(/*! ./icons/submarine */ "./src/components/icons/submarine.js");
const Patrol = __webpack_require__(/*! ./icons/patrol */ "./src/components/icons/patrol.js");

function shipIconComponent() {
  const shipIcons = {
    Battleship,
    Destroyer,
    Submarine,
    Patrol,
    Carrier,
  };

  return function (metadata) {
    const { x, y } = metadata.position;
    const { postion, name, ...props } = metadata;
    const imgContainer = document.createElement('div');

    const renderSvg = shipIcons[name];
    const svg = renderSvg(props);

    imgContainer.style.zIndex = 2;
    imgContainer.style.gridRow = `${y + 1} /span 1`;
    imgContainer.style.gridColumn = `${x + 1} /span ${metadata.length}`;
    if (metadata.axis === 'y') {
      imgContainer.style.gridRow = `${y + 1} /span ${metadata.length}`;
      imgContainer.style.gridColumn = `${x + 1} /span 1`;
    }

    imgContainer.innerHTML = svg;
    return imgContainer;
  };
}

exports.renderIcon = shipIconComponent();


/***/ }),

/***/ "./src/components/icons/battleship.js":
/*!********************************************!*\
  !*** ./src/components/icons/battleship.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function battleship(props) {
  const { axis, sunk } = props;
  return `<svg
xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' 
viewBox="${axis === 'x' ? '0 0 302 98' : '0 0 98 302'}" 
fill="${sunk === false ? 'grey' : 'skyblue'}" 
preserveAspectRatio='none'><path transform="${
  axis === 'y' ? 'rotate(90, 49, 49)' : ''
}" d='M215 6.5c-.2 1.1-.2 2.3-.1 2.7 0 .4.3 2.5.7 4.7.6 3.4.4 4.1-1 4.1-1.3 0-1.6.5-1.1 2 .4 1.4.2 2-.8 2s-1.5 1.1-1.5 3.2c-.1 1.8-.9 5.8-2 8.8-1.8 5.2-2.1 5.5-5.5 5.8-2.8.2-3.6.8-3.9 2.5-.2 1.2-1 2.3-1.9 2.5-1.2.2-2.4-2.6-5.5-13.3L188.5 18h-4.2c-6.1 0-6.9 1.4-7.8 12.7-1 14.8-.8 14.3-7 14.3-4.8 0-5.4.3-5.8 2.2-.4 2-.4 1.9-.6-.5-.1-2-.6-2.7-2.1-2.7-1.4 0-2-.7-2-2.1 0-1.5-.5-2-2.2-1.7-1.6.2-2.2.9-2 2 .2 1-.2 1.8-.8 1.8-.5 0-1 1.1-1 2.5 0 2.4-.3 2.5-5.4 2.5-4.9 0-5.5.2-5.8 2.2-.2 1.5-1.1 2.4-2.5 2.6-1.5.2-2.3 1-2.3 2.3 0 1.8-.9 1.9-23.2 1.9-12.8 0-23.9-.4-24.7-.9-2.2-1.4 2-4.7 7.4-5.7 5-.9 6.9-2.9 4-4-.9-.4-2.1 0-2.8 1-.9 1.3-2.4 1.7-5.7 1.4-6.5-.5-6.4-2.8.2-2.9 8.1-.2 2-1.7-6.7-1.7-8.4 0-14.9 1.5-7.2 1.7 5.4.1 6 1.2 1.7 2.8-1.9.7-3 1.8-3 3.1 0 2.1 2.2 4.5 3.4 3.7.3-.3.2 0-.3.6-.5.7-5 .9-12.7.6-6.6-.3-13.5-.6-15.4-.6-2.7-.1-3.1-.3-2-1.1.8-.5 2.7-1 4.2-1 1.7 0 3.1-.8 3.8-2 .8-1.5 2.1-2 5.5-2 4.6 0 6.5-1.4 4.6-3.3-.9-.9-1.6-.8-3.1.1-2.4 1.4-11 1.6-11 .2 0-.6 2-1 4.5-1s4.5-.5 4.5-1c0-1.3-20.7-1.3-21.5-.1-.3.6 1.6 1.1 4.2 1.3 4.7.3 4.7.4 2 1.6-1.5.6-3 1.9-3.4 2.8-.7 2 1 5 2.7 4.6.6-.1.9.2.5.8-.3.5-3.7 1-7.6 1H33v2.9c0 2.4.5 3 2.5 3.3 1.4.2 2.5.7 2.5 1.3 0 .6-5.7 1.1-14.5 1.3-8 .1-14.5.6-14.5 1 0 .5.7 3.1 1.5 6 1.9 6.3 5.7 10.9 11 13.3 3.8 1.8 9.9 1.9 131 1.9h127l1.7-6.4c1.7-6.5 8.3-21.1 9.9-22.2 2.9-1.8-.5-2.4-13-2.4-11.7 0-14-.2-14.5-1.6-.9-2.4-.9-2.4 4.2-2.5l4.7-.2-6-.8c-10.6-1.6-13-1.7-15.2-1.2-2.2.5-3.3 3.3-1.3 3.3.6 0 1 .7 1 1.5 0 1.2-1.3 1.5-5.5 1.5H240v-5.3c0-7.3-1-12.7-2.4-12.7-.7 0-1-1.4-.8-4l.4-4h-4.6c-4.7 0-8.1 1.3-10.2 3.9-.9 1.2-1.3.5-1.9-3.6-.4-2.9-.4-6.1 0-7.2.4-1.4-.1-3.1-1.4-5-1.3-1.8-2.1-4.6-2.2-7.3 0-2.3-.4-5.2-.9-6.3l-.9-2-.1 2z' />
</svg>`;
};


/***/ }),

/***/ "./src/components/icons/destroyer.js":
/*!*******************************************!*\
  !*** ./src/components/icons/destroyer.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = function destroyer(props) {
  const { axis, sunk } = props;
  return `<svg
xmlns='http://www.w3.org/2000/svg'
width='100%'
height='100%'
viewBox="${axis === 'x' ? '0 0 153 69' : '0 0 69 153'}"
fill="${sunk === false ? 'grey' : 'skyblue'}"
preserveAspectRatio='none'
><path transform="${
  axis === 'y' ? 'rotate(90, 35, 35)' : ''
}" d='M53.6 20.4c-.5 2-1.3 2.5-4.4 2.8l-3.7.3-1 9.2c-.5 5-1.3 9.5-1.7 9.8-.4.4-2.5.4-4.7 0-3.9-.6-4.1-.9-4.1-4.1 0-2.8-.4-3.5-2.6-4-1.4-.4-3-.2-3.7.5-.6.6-2.5 1.1-4.2 1.2l-3 .1 3.3.9c1.9.6 3.2 1.6 3.2 2.6 0 1.4-1.2 1.5-10.5.9-5.8-.4-10.5-.5-10.5-.2s2.8 4.1 6.2 8.6l6.1 8h58.2c32.1 0 59.7-.3 61.4-.6 2.7-.6 3.1-1.1 3.1-3.8 0-2.6.5-3.4 2.7-4.2 2.5-.9 2.6-1 .9-2.6-1.1-1.2-3.3-1.8-6.2-1.8-4.2 0-5.9-1.2-3.1-2.3.6-.3.3-.6-.8-.7-1.7-.2-1.6-.3.5-.9 2.1-.7 1.7-.9-2.7-1.5-6.1-.9-7.3-.4-7.3 3 0 2.3-.2 2.4-7.5 2.4s-7.5-.1-7.5-2.5c0-2 .5-2.5 2.6-2.5 4.6 0 2-2.5-2.9-2.8-4.4-.3-4.7-.5-4.7-3.1 0-1.7-.7-3.1-1.6-3.5-2.5-1-6.2-.7-7 .5-.3.6-1.9.9-3.5.7-1.5-.3-2.6-.1-2.3.4.3.4 1.3.8 2.2.9 1.4 0 1.3.2-.3.9-1.7.7-1.7.9-.2.9.9.1 1.7.6 1.7 1.1 0 .7-2.2 1-5.7.8l-5.8-.3-.7-4.4c-.4-2.4-.9-4.5-1.1-4.7-.1-.2-2.2-.4-4.6-.6l-4.3-.3-1.7 5.3c-.9 3-2 5.3-2.5 5.3s-2-3.7-3.3-8.2c-1.3-4.5-2.6-8.6-2.9-9.1-.3-.4-2-.8-3.9-.8-2.6 0-3.4.5-3.9 2.4z'/></svg>`;
};


/***/ }),

/***/ "./src/components/icons/patrol.js":
/*!****************************************!*\
  !*** ./src/components/icons/patrol.js ***!
  \****************************************/
/***/ ((module) => {

module.exports = function patrol(props) {
  const { axis, sunk } = props;
  return `<svg
xmlns='http://www.w3.org/2000/svg'
width='100%'
height='100%'
viewBox="${axis === 'x' ? '0 0 112 60' : '0 0 60 112'}"
fill="${sunk === false ? 'grey' : 'skyblue'}"
preserveAspectRatio='none' > <path transform="${
  axis === 'y' ? 'rotate(90, 30, 30)' : ''
}" d='M59.9 6.7c0 .4 0 5.9.1 12 .1 9.3-.1 11.3-1.3 11.3-.8 0-1.7-.7-2.1-1.5-.9-2.5-8-1.9-11 .9-1.5 1.3-2.6 2.8-2.6 3.5 0 .8-4.9 1.1-16.5 1.1H10l.1 4.2c0 2.4.8 7.2 1.7 10.8l1.7 6.5 38.9.3c28.7.2 39.2-.1 40.3-1 1.4-1.1 8.7-13.2 9.9-16.2.5-1.3-.4-1.6-5.5-1.6h-6L90 32.9c-.7-2.3-.9-5.1-.6-6.2.3-1.3-.1-2.1-1.5-2.4-1-.3-1.9-1.3-1.9-2.2-.1-1.4-.2-1.4-1.4.1-1.7 2.3-9.6 2.5-9.6.3 0-.9-1-1.5-2.7-1.6l-2.8-.1 3-.7 3-.6-4.3-1.3c-5.1-1.6-6.2-1-6.2 2.9 0 1.7-.7 3.8-1.6 4.6-1.4 1.5-1.5.7-1.3-8.7.2-7.4 0-10.5-.9-10.8-.7-.2-1.2 0-1.3.5z'/>
</svg>`;
};


/***/ }),

/***/ "./src/components/icons/shotMarker.js":
/*!********************************************!*\
  !*** ./src/components/icons/shotMarker.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function shotMarker(isHit) {
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="${isHit ? 'red' : 'black'}"/>
</svg >`;
};


/***/ }),

/***/ "./src/components/icons/submarine.js":
/*!*******************************************!*\
  !*** ./src/components/icons/submarine.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = function submarine(props) {
  const { axis, sunk } = props;
  return `<svg
xmlns='http://www.w3.org/2000/svg'
width='100%'
height='100%'
viewBox="${axis === 'x' ? '0 0 302 98' : '0 0 98 302'}"
fill="${sunk === false ? 'grey' : 'skyblue'}"
preserveAspectRatio='none'>
<path transform="${
  axis === 'y' ? 'rotate(90, 49, 49)' : ''
}" d='M147.3 20.7l.2 4.8-5.1-.3c-6.1-.4-6.9.4-7.8 7.8-.4 3-.9 7-1.2 8.7l-.6 3.3h-11.9c-7.4 0-12-.4-12.5-1.1-.4-.7-2.2-.9-4.8-.5-2.2.3-4.9.6-5.8.5-2.7-.1-10.6 0-12.5.1-1 0-3.3-.2-5.1-.6-1.9-.4-4.3-.2-5.5.4-1.2.6-4.8 1.3-8 1.6-7.7.6-13.8 4.2-16.5 9.7-1.2 2.3-1.9 4.6-1.6 5.1.3.4 49.8.8 110.1.8h109.5l-.6-2.7c-.5-1.7-.3-2.9.6-3.5 1.1-.6 1-1-.1-1.7-.9-.6-1.1-1.8-.7-3.5.6-2.5.5-2.6-3.9-2.6H259V30h-17.9l-1.5 5.2c-.8 2.9-2.1 7.4-2.8 10-1.3 5.2-1.7 5.4-9 4.2-2.8-.5-3.8-1.1-3.8-2.5 0-1.6-.8-1.9-5.1-1.9-3.5 0-5.5.5-6.3 1.5-1 1.4-2.4 1.4-10.1.6-5-.5-15.4-1.3-23.2-1.6l-14.2-.7-6.2-9.4c-4.1-6.3-6.8-9.4-8-9.4-1.6 0-1.9-.8-1.9-5 0-2.8-.4-5-1-5-.5 0-.9 2.1-.7 4.7z' />
</svg>`;
};


/***/ }),

/***/ "./src/components/rotateAxis.js":
/*!**************************************!*\
  !*** ./src/components/rotateAxis.js ***!
  \**************************************/
/***/ ((module) => {

function RotateAxis() {
  const rotateAxis = document.querySelector('#rotate-axis');
  let direction = 'x';
  rotateAxis.onclick = () => {
    direction = direction === 'x' ? 'y' : 'x';
  };
  const getDirection = () => direction;
  return getDirection;
}

module.exports = RotateAxis;


/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { BotPlayer } = __webpack_require__(/*! ./player */ "./src/player.js");
const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");

class GameController {
  player1Water = new Gameboard();

  player2Water = new Gameboard();

  botPlayer = new BotPlayer(this.player2Water);

  constructor() {
    this.botPlayer.placeShips();
  }

  addShip(ship, startPosition, dir) {
    return this.player1Water.addShip(ship, startPosition, dir);
  }

  play(position) {
    const { x, y } = position;
    /* get move from human */
    const marker = this.player2Water.receiveAttack(x, y);
    if (marker !== -1) {
      this.botPlayer.shot(this.#handleShot);
    }

    return { human: { isHit: marker === 'x' }, bot: this.botPlayer.lastShot };
    /* then make a move for a bot */
  }

  #handleShot = (x, y) => this.player1Water.receiveAttack(x, y);

  isGameOver() {
    return this.player2Water.allShipsSunk() || this.player1Water.allShipsSunk();
  }

  winner() {
    if (this.isGameOver()) {
      if (this.player1Water.allShipsSunk()) return 'player1';
      return 'player2';
    }
    return null;
  }

  /* Code smell: The easist way to restart the game might just
   * be making a new game object, the problem with that will be when
   * you want to keep scores. */
  restart() {
    this.player1Water.clear();
    this.player1Water.clear();
    /*  clear boards, clear bot state */
  }

  /* Code smell: might not need to send back the whole boad but a mapped version
   *  this is solely for tracking back the moves, right.
   * */
  get board1() {
    return this.player1Water;
  }

  get board2() {
    return this.player2Water;
  }
}

module.exports = GameController;


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {

class Gameboard {
  #ships = [];

  #board = [];

  constructor() {
    this.#createdboard();
  }

  addShip(ship, startPosition, direction) {
    if (!this.#isPositionAvailable(startPosition, direction, ship.length())) {
      return false;
    }

    const X = startPosition.x;
    const Y = startPosition.y;

    this.#ships.push(ship);
    if (direction === 'x') {
      for (let x = X; x < X + ship.length(); x++) {
        this.#board[x][Y] = { shot: null, ship };
      }
    } else if (direction === 'y') {
      for (let y = Y; y < Y + ship.length(); y++) {
        this.#board[X][y] = { shot: null, ship };
      }
    }
    return true;
  }

  allShipsSunk() {
    let isAllShipSunk = true;
    this.#ships.forEach((ship) => {
      if (!ship.isSunk()) isAllShipSunk = false;
    });
    return isAllShipSunk;
  }

  shipSunk(position) {
    const { x, y } = position;
    return this.#board[x][y].ship?.isSunk() || false;
  }

  getBoard = () => this.#board;

  get ships() {
    return this.#ships;
  }

  receiveAttack(x, y) {
    const square = this.#board[x][y];
    if (square.shot) return -1;

    if (square.ship) {
      square.shot = 'x';
      square.ship.hit();
      return square.shot;
    }

    square.shot = 'o';
    return square.shot;
  }

  #isPositionAvailable(startPosition, direction, length) {
    const X = startPosition.x;
    const Y = startPosition.y;

    if (direction === 'x') {
      if (X + length >= 10) return false;

      for (let x = X; x < X + length; x++) {
        if (this.#board[x][Y].ship) return false;
      }
    } else if (direction === 'y') {
      if (Y + length >= 10) return false;

      for (let y = Y; y < Y + length; y++) {
        if (this.#board[X][y].ship) return false;
      }
    }
    return true;
  }

  #createdboard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push({ shot: null, ship: null });
      }
      this.#board.push(row);
    }
  }

  clearBoard() {
    this.#ships = [];
    this.#board = [];
    this.#createdboard();
  }
}

module.exports = Gameboard;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
const ScreenController = __webpack_require__(/*! ./screenController */ "./src/screenController.js");

const screenController = new ScreenController();
screenController.play();


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const { Ship, ShipLength } = __webpack_require__(/*! ./ship */ "./src/ship.js");

class BotPlayer {
  #shotHistory = [];

  #lastShot = {};

  constructor(myWater) {
    /* The problem is that a board has record of the ship position */
    /* this.board = getBoard; */
    this.myWater = myWater;
    this.#lastShot = {
      x: null,
      y: null,
      isHit: false,
    };
    this.#createShotHistoryBoard();
  }

  clearHistory() {
    this.#shotHistory = [];
    this.#createShotHistoryBoard();
  }

  placeShips() {
    const directions = ['x', 'y'];

    Object.entries(ShipLength).forEach((value) => {
      const ship = new Ship(value[1], value[0]);
      const direction = directions[Math.floor(Math.random() * 2)];
      let x;
      let y;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      } while (!this.myWater.addShip(ship, { x, y }, direction));
    });
  }

  #createShotHistoryBoard() {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(null);
      }
      this.#shotHistory.push(row);
    }
  }

  get lastShot() {
    return this.#lastShot;
  }

  shot(handleShot) {
    let isShotValid = false;
    let x;
    let y;
    const board = this.#shotHistory;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      if (!board[x][y]) {
        isShotValid = true;
        this.#lastShot = {
          x,
          y,
          isHit: handleShot(x, y) === 'x',
        };
        board[x][y] = true;
      }
    } while (!isShotValid);
    this.#shotHistory[x][y] = this.#lastShot.isHit ? 'x' : 'y';
  }
}

exports.BotPlayer = BotPlayer;


/***/ }),

/***/ "./src/screenController.js":
/*!*********************************!*\
  !*** ./src/screenController.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const GameController = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
const Square = __webpack_require__(/*! ./boardSquare */ "./src/boardSquare.js");
const SplashScreen = __webpack_require__(/*! ./splashScreen */ "./src/splashScreen.js");
const shotMarker = __webpack_require__(/*! ./components/icons/shotMarker */ "./src/components/icons/shotMarker.js");
const Boards = __webpack_require__(/*! ./components/board */ "./src/components/board.js");
const State = __webpack_require__(/*! ./components/gameState */ "./src/components/gameState.js");

class ScreenController {
  game = new GameController();

  #botThinking = false;

  constructor() {
    Boards();
    this.player2Squares = document.querySelectorAll('.player-2 .square');
    this.splashScreen = new SplashScreen(this.game);
    this.splashScreen.show();
  }

  play() {
    const { isThinking, thinking } = State();

    this.player2Squares.forEach((square) => {
      square.addEventListener('click', async () => {
        // ensures that player1 cannot play twice when the bot is thinking
        if (isThinking()) return;

        const position = Square.parse(square);
        const shot = this.game.play(position);

        square.innerHTML = shotMarker(shot.human.isHit);
        await thinking(800);
        const botShot = shot.bot;

        const botSquareShot = Square.findSquare('player-1', {
          x: botShot.x,
          y: botShot.y,
        });
        botSquareShot.innerHTML = shotMarker(botShot.isHit);
      });
    });
  }
}

module.exports = ScreenController;


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

/* Code-smell: this is poluting global scope. */
const ShipLength = {
  Carrier: 5,
  Battleship: 4,
  Patrol: 3,
  Submarine: 3,
  Destroyer: 2,
};

class Ship {
  #name;

  #length;

  #hit;

  constructor(length, name) {
    this.#name = name;
    this.#length = length;
    this.#hit = 0;
  }

  get name() {
    return this.#name;
  }

  length() {
    return this.#length;
  }

  hit() {
    this.#hit += 1;
  }

  isSunk() {
    return this.#hit >= this.#length;
  }
}

exports.Ship = Ship;
exports.ShipLength = ShipLength;


/***/ }),

/***/ "./src/splashScreen.js":
/*!*****************************!*\
  !*** ./src/splashScreen.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Square = __webpack_require__(/*! ./boardSquare */ "./src/boardSquare.js");
const { renderIcon } = __webpack_require__(/*! ./components/icon */ "./src/components/icon.js");
const RotateAxis = __webpack_require__(/*! ./components/rotateAxis */ "./src/components/rotateAxis.js");
const { ShipLength, Ship } = __webpack_require__(/*! ./ship */ "./src/ship.js");

class SplashScreen {
  shipNames = Object.keys(ShipLength);

  shipNumber = 0;

  player1Squares = document.querySelectorAll('.player-1 .square');

  player2Board = document.querySelector('.player-2');

  shipName = document.querySelector('.ship-name');

  constructor(game) {
    this.getDirection = RotateAxis();
    this.game = game;
    this.player2Board.classList.add('hide');
    this.handleAddShip = this.handleAddShip.bind(this);
  }

  show() {
    this.player1Squares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        const position = Square.parse(square);
        const name = this.shipNames[this.shipNumber];
        Square.highLightSquares(
          position,
          this.getDirection(),
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.add(className);
          }
        );
      });

      square.addEventListener('mouseleave', () => {
        const position = Square.parse(square);
        const name = this.shipNames[this.shipNumber];
        Square.highLightSquares(
          position,
          this.getDirection(),
          ShipLength[name],
          (x, y, className = 'highlight') => {
            document
              .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
              .classList.remove(className);
          }
        );
      });

      square.addEventListener('click', this.handleAddShip);
    });
  }

  handleAddShip(event) {
    const position = Square.parse(event.target);
    let name = this.shipNames[this.shipNumber];
    this.shipName.innerHTML = name;

    const ship = new Ship(ShipLength[name], name);
    if (this.game.addShip(ship, position, this.getDirection())) {
      const imgMetadata = {
        length: ShipLength[name],
        position,
        axis: this.getDirection(),
        sunk: ship.isSunk(),
        name,
      };
      const player1Water = document.querySelector('.player-1');
      player1Water.appendChild(renderIcon(imgMetadata));

      // redudently unhilight the squares (of ship length) before shipNumber is incremented
      // below. Because once shipNumber changes, the ship length we can access with this
      // value will also change, resulting in some squares not getting unhilighted in
      // mouseleave eventhandler.
      Square.highLightSquares(
        position,
        this.getDirection(),
        ShipLength[name],
        (x, y, className = 'highlight') => {
          document
            .querySelector(`.player-1 [data-index="${y * 10 + x}"]`)
            .classList.remove(className);
        }
      );

      this.shipNumber += 1;

      name = this.shipNames[this.shipNumber];
      this.shipName.innerHTML = name;

      // after adding all 5 ships, do:
      if (this.shipNumber === 5) {
        // 1. hide and show ui for adding ship and enemy board, respectively.
        SplashScreen.hideElement('rotate-axis');
        SplashScreen.hideElement('ship-sunk');

        document.getElementById('game-status').innerHTML = 'player 1 turn';
        this.player2Board.classList.remove('hide');

        // 2. remove click event listner for adding ships in every square.
        this.player1Squares.forEach((square) => {
          square.removeEventListener('click', this.handleAddShip);
        });
      }
    }
  }

  static hideElement(id) {
    document.getElementById(id).classList.add('hide');
  }
}

module.exports = SplashScreen;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ib2FyZFNxdWFyZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2dhbWVTdGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaWNvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvYmF0dGxlc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvZGVzdHJveWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvY29tcG9uZW50cy9pY29ucy9wYXRyb2wuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2ljb25zL3Nob3RNYXJrZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wb25lbnRzL2ljb25zL3N1Ym1hcmluZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NvbXBvbmVudHMvcm90YXRlQXhpcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JlZW5Db250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NwbGFzaFNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC8qIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7ICovXG59XG5cbi53YXRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ibG9jazogMThweDtcbiAgcGFkZGluZy1pbmxpbmU6IDE4cHg7XG59XG5cbi5wbGF5ZXItMSxcbi5wbGF5ZXItMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA2MHB4KTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDYwcHgpO1xufVxuXG4ucGxheWVyLTEge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5zcXVhcmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIC8qIHdpZHRoOiA2MHB4OyAqL1xuICAvKiBoZWlnaHQ6IDYwcHg7ICovXG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG59XG5cbi5oaWdobGlnaHQtZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdCaWcgU2hvdWxkZXJzIFN0ZW5jaWwgVGV4dCcsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJsb2NrOiAxLjVyZW07XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xufVxuXG4ucGxhY2luZy1zaGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbn1cblxuZm9vdGVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hpcC1zdW5rIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVjdHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgcGFkZGluZy1ibG9jazogMTBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7d0VBQ3NFO0VBQ3RFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CO3dFQUNzRTtFQUN0RSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0RBQWtEO0VBQ2xELGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLFxcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gIC8qIGZvbnQtZmFtaWx5OiAnQmViYXMgTmV1ZScsIGN1cnNpdmU7ICovXFxufVxcblxcbi53YXRlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmgzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctYmxvY2s6IDE4cHg7XFxuICBwYWRkaW5nLWlubGluZTogMThweDtcXG59XFxuXFxuLnBsYXllci0xLFxcbi5wbGF5ZXItMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDYwcHgpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDYwcHgpO1xcbn1cXG5cXG4ucGxheWVyLTEge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uc3F1YXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICAvKiB3aWR0aDogNjBweDsgKi9cXG4gIC8qIGhlaWdodDogNjBweDsgKi9cXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxufVxcblxcbi5oaWdobGlnaHQtZXJyb3Ige1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICBmb250LWZhbWlseTogJ0JpZyBTaG91bGRlcnMgU3RlbmNpbCBUZXh0JywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ibG9jazogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxufVxcblxcbi5wbGFjaW5nLXNoaXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNoaXAtc3VuayB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZWN0e1xcbiAgbWluLWhlaWdodDogNjBweDtcXG4gIHBhZGRpbmctYmxvY2s6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBTcXVhcmUge1xuICBzdGF0aWMgY3JlYXRlQm9hcmQocGxheWVyKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwbGF5ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKHBsYXllcik7XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDEwOyB5KyspIHtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMTA7IHgrKykge1xuICAgICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3F1YXJlLmRhdGFzZXQueCA9IHg7XG4gICAgICAgIHNxdWFyZS5kYXRhc2V0LnkgPSB5O1xuICAgICAgICBzcXVhcmUuZGF0YXNldC5pbmRleCA9IHkgKiAxMCArIHg7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdzcXVhcmUnKTtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmdyaWRSb3cgPSBgJHt5ICsgMX0vc3BhbiAxYDtcbiAgICAgICAgc3F1YXJlLnN0eWxlLmdyaWRDb2x1bW4gPSBgJHt4ICsgMX0vc3BhbiAxYDtcbiAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9XG5cbiAgc3RhdGljIGZpbmRTcXVhcmUoYm9hcmRDbGFzcywgcG9zaXRpb24pIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtib2FyZENsYXNzfSBbZGF0YS1pbmRleD1cIiR7cG9zaXRpb24ueCArIHBvc2l0aW9uLnkgKiAxMH1cIl1gLFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlKHNxdWFyZSkge1xuICAgIGNvbnN0IHggPSBwYXJzZUludChzcXVhcmUuZGF0YXNldC54LCAxMCk7XG4gICAgY29uc3QgeSA9IHBhcnNlSW50KHNxdWFyZS5kYXRhc2V0LnksIDEwKTtcbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH1cblxuICBzdGF0aWMgaGlnaExpZ2h0U3F1YXJlcyhwb3NpdGlvbiwgZGlyZWN0aW9uLCBsZW5ndGgsIGhhbmRsZSkge1xuICAgIGNvbnN0IFggPSBwb3NpdGlvbi54O1xuICAgIGNvbnN0IFkgPSBwb3NpdGlvbi55O1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3gnKSB7XG4gICAgICBpZiAoWCArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIGhhbmRsZShYLCBZLCAnaGlnaGxpZ2h0LWVycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgICAgZm9yIChsZXQgeCA9IFg7IHggPCBYICsgbGVuZ3RoICYmIHggPCAxMDsgeCsrKSB7XG4gICAgICAgIGhhbmRsZSh4LCBZKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAoWSArIGxlbmd0aCA+IDEwKSB7XG4gICAgICAgIGhhbmRsZShYLCBZLCAnaGlnaGxpZ2h0LWVycm9yJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgICAgZm9yIChsZXQgeSA9IFk7IHkgPCBZICsgbGVuZ3RoICYmIHkgPCAxMDsgeSsrKSB7XG4gICAgICAgIGhhbmRsZShYLCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTcXVhcmU7XG4iLCJjb25zdCBTcXVhcmUgPSByZXF1aXJlKCcuLi9ib2FyZFNxdWFyZScpO1xuXG5mdW5jdGlvbiBCb2FyZHMoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCB3YXRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIHdhdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dhdGVyLWNvbnRhaW5lcicpO1xuICB3YXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChTcXVhcmUuY3JlYXRlQm9hcmQoJ3BsYXllci0xJykpO1xuICB3YXRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChTcXVhcmUuY3JlYXRlQm9hcmQoJ3BsYXllci0yJykpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHdhdGVyQ29udGFpbmVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZHM7XG4iLCJmdW5jdGlvbiBHYW1lU3RhdGUoKSB7XG4gIGNvbnN0IGdhbWVTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZS1zdGF0dXMnKTtcbiAgLyogbGV0IGJvdFRoaW5raW5nID0gdHJ1ZTsgKi9cblxuICBsZXQgdGhpbmtpbmcgPSBmYWxzZTtcbiAgY29uc3QgaXNUaGlua2luZyA9ICgpID0+IHRoaW5raW5nO1xuICByZXR1cm4ge1xuICAgIHRoaW5raW5nOiBhc3luYyAobXMpID0+IHtcbiAgICAgIGdhbWVTdGF0dXMuaW5uZXJIVE1MID0gJ2JvdCB0dXJucyc7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBnYW1lU3RhdHVzLmlubmVySFRNTCA9ICdwbGF5ZXIgMSB0dXJucyc7XG4gICAgICAgICAgdGhpbmtpbmcgPSBmYWxzZTtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIG1zKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgaXNUaGlua2luZyxcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lU3RhdGU7XG4iLCJjb25zdCBDYXJyaWVyID0gcmVxdWlyZSgnLi9pY29ucy9iYXR0bGVzaGlwJyk7XG5jb25zdCBCYXR0bGVzaGlwID0gcmVxdWlyZSgnLi9pY29ucy9iYXR0bGVzaGlwJyk7XG5jb25zdCBEZXN0cm95ZXIgPSByZXF1aXJlKCcuL2ljb25zL2Rlc3Ryb3llcicpO1xuY29uc3QgU3VibWFyaW5lID0gcmVxdWlyZSgnLi9pY29ucy9zdWJtYXJpbmUnKTtcbmNvbnN0IFBhdHJvbCA9IHJlcXVpcmUoJy4vaWNvbnMvcGF0cm9sJyk7XG5cbmZ1bmN0aW9uIHNoaXBJY29uQ29tcG9uZW50KCkge1xuICBjb25zdCBzaGlwSWNvbnMgPSB7XG4gICAgQmF0dGxlc2hpcCxcbiAgICBEZXN0cm95ZXIsXG4gICAgU3VibWFyaW5lLFxuICAgIFBhdHJvbCxcbiAgICBDYXJyaWVyLFxuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAobWV0YWRhdGEpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IG1ldGFkYXRhLnBvc2l0aW9uO1xuICAgIGNvbnN0IHsgcG9zdGlvbiwgbmFtZSwgLi4ucHJvcHMgfSA9IG1ldGFkYXRhO1xuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgcmVuZGVyU3ZnID0gc2hpcEljb25zW25hbWVdO1xuICAgIGNvbnN0IHN2ZyA9IHJlbmRlclN2Zyhwcm9wcyk7XG5cbiAgICBpbWdDb250YWluZXIuc3R5bGUuekluZGV4ID0gMjtcbiAgICBpbWdDb250YWluZXIuc3R5bGUuZ3JpZFJvdyA9IGAke3kgKyAxfSAvc3BhbiAxYDtcbiAgICBpbWdDb250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9IGAke3ggKyAxfSAvc3BhbiAke21ldGFkYXRhLmxlbmd0aH1gO1xuICAgIGlmIChtZXRhZGF0YS5heGlzID09PSAneScpIHtcbiAgICAgIGltZ0NvbnRhaW5lci5zdHlsZS5ncmlkUm93ID0gYCR7eSArIDF9IC9zcGFuICR7bWV0YWRhdGEubGVuZ3RofWA7XG4gICAgICBpbWdDb250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9IGAke3ggKyAxfSAvc3BhbiAxYDtcbiAgICB9XG5cbiAgICBpbWdDb250YWluZXIuaW5uZXJIVE1MID0gc3ZnO1xuICAgIHJldHVybiBpbWdDb250YWluZXI7XG4gIH07XG59XG5cbmV4cG9ydHMucmVuZGVySWNvbiA9IHNoaXBJY29uQ29tcG9uZW50KCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhdHRsZXNoaXAocHJvcHMpIHtcbiAgY29uc3QgeyBheGlzLCBzdW5rIH0gPSBwcm9wcztcbiAgcmV0dXJuIGA8c3ZnXG54bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIFxudmlld0JveD1cIiR7YXhpcyA9PT0gJ3gnID8gJzAgMCAzMDIgOTgnIDogJzAgMCA5OCAzMDInfVwiIFxuZmlsbD1cIiR7c3VuayA9PT0gZmFsc2UgPyAnZ3JleScgOiAnc2t5Ymx1ZSd9XCIgXG5wcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz48cGF0aCB0cmFuc2Zvcm09XCIke1xuICBheGlzID09PSAneScgPyAncm90YXRlKDkwLCA0OSwgNDkpJyA6ICcnXG59XCIgZD0nTTIxNSA2LjVjLS4yIDEuMS0uMiAyLjMtLjEgMi43IDAgLjQuMyAyLjUuNyA0LjcuNiAzLjQuNCA0LjEtMSA0LjEtMS4zIDAtMS42LjUtMS4xIDIgLjQgMS40LjIgMi0uOCAycy0xLjUgMS4xLTEuNSAzLjJjLS4xIDEuOC0uOSA1LjgtMiA4LjgtMS44IDUuMi0yLjEgNS41LTUuNSA1LjgtMi44LjItMy42LjgtMy45IDIuNS0uMiAxLjItMSAyLjMtMS45IDIuNS0xLjIuMi0yLjQtMi42LTUuNS0xMy4zTDE4OC41IDE4aC00LjJjLTYuMSAwLTYuOSAxLjQtNy44IDEyLjctMSAxNC44LS44IDE0LjMtNyAxNC4zLTQuOCAwLTUuNC4zLTUuOCAyLjItLjQgMi0uNCAxLjktLjYtLjUtLjEtMi0uNi0yLjctMi4xLTIuNy0xLjQgMC0yLS43LTItMi4xIDAtMS41LS41LTItMi4yLTEuNy0xLjYuMi0yLjIuOS0yIDIgLjIgMS0uMiAxLjgtLjggMS44LS41IDAtMSAxLjEtMSAyLjUgMCAyLjQtLjMgMi41LTUuNCAyLjUtNC45IDAtNS41LjItNS44IDIuMi0uMiAxLjUtMS4xIDIuNC0yLjUgMi42LTEuNS4yLTIuMyAxLTIuMyAyLjMgMCAxLjgtLjkgMS45LTIzLjIgMS45LTEyLjggMC0yMy45LS40LTI0LjctLjktMi4yLTEuNCAyLTQuNyA3LjQtNS43IDUtLjkgNi45LTIuOSA0LTQtLjktLjQtMi4xIDAtMi44IDEtLjkgMS4zLTIuNCAxLjctNS43IDEuNC02LjUtLjUtNi40LTIuOC4yLTIuOSA4LjEtLjIgMi0xLjctNi43LTEuNy04LjQgMC0xNC45IDEuNS03LjIgMS43IDUuNC4xIDYgMS4yIDEuNyAyLjgtMS45LjctMyAxLjgtMyAzLjEgMCAyLjEgMi4yIDQuNSAzLjQgMy43LjMtLjMuMiAwLS4zLjYtLjUuNy01IC45LTEyLjcuNi02LjYtLjMtMTMuNS0uNi0xNS40LS42LTIuNy0uMS0zLjEtLjMtMi0xLjEuOC0uNSAyLjctMSA0LjItMSAxLjcgMCAzLjEtLjggMy44LTIgLjgtMS41IDIuMS0yIDUuNS0yIDQuNiAwIDYuNS0xLjQgNC42LTMuMy0uOS0uOS0xLjYtLjgtMy4xLjEtMi40IDEuNC0xMSAxLjYtMTEgLjIgMC0uNiAyLTEgNC41LTFzNC41LS41IDQuNS0xYzAtMS4zLTIwLjctMS4zLTIxLjUtLjEtLjMuNiAxLjYgMS4xIDQuMiAxLjMgNC43LjMgNC43LjQgMiAxLjYtMS41LjYtMyAxLjktMy40IDIuOC0uNyAyIDEgNSAyLjcgNC42LjYtLjEuOS4yLjUuOC0uMy41LTMuNyAxLTcuNiAxSDMzdjIuOWMwIDIuNC41IDMgMi41IDMuMyAxLjQuMiAyLjUuNyAyLjUgMS4zIDAgLjYtNS43IDEuMS0xNC41IDEuMy04IC4xLTE0LjUuNi0xNC41IDEgMCAuNS43IDMuMSAxLjUgNiAxLjkgNi4zIDUuNyAxMC45IDExIDEzLjMgMy44IDEuOCA5LjkgMS45IDEzMSAxLjloMTI3bDEuNy02LjRjMS43LTYuNSA4LjMtMjEuMSA5LjktMjIuMiAyLjktMS44LS41LTIuNC0xMy0yLjQtMTEuNyAwLTE0LS4yLTE0LjUtMS42LS45LTIuNC0uOS0yLjQgNC4yLTIuNWw0LjctLjItNi0uOGMtMTAuNi0xLjYtMTMtMS43LTE1LjItMS4yLTIuMi41LTMuMyAzLjMtMS4zIDMuMy42IDAgMSAuNyAxIDEuNSAwIDEuMi0xLjMgMS41LTUuNSAxLjVIMjQwdi01LjNjMC03LjMtMS0xMi43LTIuNC0xMi43LS43IDAtMS0xLjQtLjgtNGwuNC00aC00LjZjLTQuNyAwLTguMSAxLjMtMTAuMiAzLjktLjkgMS4yLTEuMy41LTEuOS0zLjYtLjQtMi45LS40LTYuMSAwLTcuMi40LTEuNC0uMS0zLjEtMS40LTUtMS4zLTEuOC0yLjEtNC42LTIuMi03LjMgMC0yLjMtLjQtNS4yLS45LTYuM2wtLjktMi0uMSAyeicgLz5cbjwvc3ZnPmA7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZXN0cm95ZXIocHJvcHMpIHtcbiAgY29uc3QgeyBheGlzLCBzdW5rIH0gPSBwcm9wcztcbiAgcmV0dXJuIGA8c3ZnXG54bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG53aWR0aD0nMTAwJSdcbmhlaWdodD0nMTAwJSdcbnZpZXdCb3g9XCIke2F4aXMgPT09ICd4JyA/ICcwIDAgMTUzIDY5JyA6ICcwIDAgNjkgMTUzJ31cIlxuZmlsbD1cIiR7c3VuayA9PT0gZmFsc2UgPyAnZ3JleScgOiAnc2t5Ymx1ZSd9XCJcbnByZXNlcnZlQXNwZWN0UmF0aW89J25vbmUnXG4+PHBhdGggdHJhbnNmb3JtPVwiJHtcbiAgYXhpcyA9PT0gJ3knID8gJ3JvdGF0ZSg5MCwgMzUsIDM1KScgOiAnJ1xufVwiIGQ9J001My42IDIwLjRjLS41IDItMS4zIDIuNS00LjQgMi44bC0zLjcuMy0xIDkuMmMtLjUgNS0xLjMgOS41LTEuNyA5LjgtLjQuNC0yLjUuNC00LjcgMC0zLjktLjYtNC4xLS45LTQuMS00LjEgMC0yLjgtLjQtMy41LTIuNi00LTEuNC0uNC0zLS4yLTMuNy41LS42LjYtMi41IDEuMS00LjIgMS4ybC0zIC4xIDMuMy45YzEuOS42IDMuMiAxLjYgMy4yIDIuNiAwIDEuNC0xLjIgMS41LTEwLjUuOS01LjgtLjQtMTAuNS0uNS0xMC41LS4yczIuOCA0LjEgNi4yIDguNmw2LjEgOGg1OC4yYzMyLjEgMCA1OS43LS4zIDYxLjQtLjYgMi43LS42IDMuMS0xLjEgMy4xLTMuOCAwLTIuNi41LTMuNCAyLjctNC4yIDIuNS0uOSAyLjYtMSAuOS0yLjYtMS4xLTEuMi0zLjMtMS44LTYuMi0xLjgtNC4yIDAtNS45LTEuMi0zLjEtMi4zLjYtLjMuMy0uNi0uOC0uNy0xLjctLjItMS42LS4zLjUtLjkgMi4xLS43IDEuNy0uOS0yLjctMS41LTYuMS0uOS03LjMtLjQtNy4zIDMgMCAyLjMtLjIgMi40LTcuNSAyLjRzLTcuNS0uMS03LjUtMi41YzAtMiAuNS0yLjUgMi42LTIuNSA0LjYgMCAyLTIuNS0yLjktMi44LTQuNC0uMy00LjctLjUtNC43LTMuMSAwLTEuNy0uNy0zLjEtMS42LTMuNS0yLjUtMS02LjItLjctNyAuNS0uMy42LTEuOS45LTMuNS43LTEuNS0uMy0yLjYtLjEtMi4zLjQuMy40IDEuMy44IDIuMi45IDEuNCAwIDEuMy4yLS4zLjktMS43LjctMS43LjktLjIuOS45LjEgMS43LjYgMS43IDEuMSAwIC43LTIuMiAxLTUuNy44bC01LjgtLjMtLjctNC40Yy0uNC0yLjQtLjktNC41LTEuMS00LjctLjEtLjItMi4yLS40LTQuNi0uNmwtNC4zLS4zLTEuNyA1LjNjLS45IDMtMiA1LjMtMi41IDUuM3MtMi0zLjctMy4zLTguMmMtMS4zLTQuNS0yLjYtOC42LTIuOS05LjEtLjMtLjQtMi0uOC0zLjktLjgtMi42IDAtMy40LjUtMy45IDIuNHonLz48L3N2Zz5gO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGF0cm9sKHByb3BzKSB7XG4gIGNvbnN0IHsgYXhpcywgc3VuayB9ID0gcHJvcHM7XG4gIHJldHVybiBgPHN2Z1xueG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xud2lkdGg9JzEwMCUnXG5oZWlnaHQ9JzEwMCUnXG52aWV3Qm94PVwiJHtheGlzID09PSAneCcgPyAnMCAwIDExMiA2MCcgOiAnMCAwIDYwIDExMid9XCJcbmZpbGw9XCIke3N1bmsgPT09IGZhbHNlID8gJ2dyZXknIDogJ3NreWJsdWUnfVwiXG5wcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJyA+IDxwYXRoIHRyYW5zZm9ybT1cIiR7XG4gIGF4aXMgPT09ICd5JyA/ICdyb3RhdGUoOTAsIDMwLCAzMCknIDogJydcbn1cIiBkPSdNNTkuOSA2LjdjMCAuNCAwIDUuOS4xIDEyIC4xIDkuMy0uMSAxMS4zLTEuMyAxMS4zLS44IDAtMS43LS43LTIuMS0xLjUtLjktMi41LTgtMS45LTExIC45LTEuNSAxLjMtMi42IDIuOC0yLjYgMy41IDAgLjgtNC45IDEuMS0xNi41IDEuMUgxMGwuMSA0LjJjMCAyLjQuOCA3LjIgMS43IDEwLjhsMS43IDYuNSAzOC45LjNjMjguNy4yIDM5LjItLjEgNDAuMy0xIDEuNC0xLjEgOC43LTEzLjIgOS45LTE2LjIuNS0xLjMtLjQtMS42LTUuNS0xLjZoLTZMOTAgMzIuOWMtLjctMi4zLS45LTUuMS0uNi02LjIuMy0xLjMtLjEtMi4xLTEuNS0yLjQtMS0uMy0xLjktMS4zLTEuOS0yLjItLjEtMS40LS4yLTEuNC0xLjQuMS0xLjcgMi4zLTkuNiAyLjUtOS42LjMgMC0uOS0xLTEuNS0yLjctMS42bC0yLjgtLjEgMy0uNyAzLS42LTQuMy0xLjNjLTUuMS0xLjYtNi4yLTEtNi4yIDIuOSAwIDEuNy0uNyAzLjgtMS42IDQuNi0xLjQgMS41LTEuNS43LTEuMy04LjcuMi03LjQgMC0xMC41LS45LTEwLjgtLjctLjItMS4yIDAtMS4zLjV6Jy8+XG48L3N2Zz5gO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hvdE1hcmtlcihpc0hpdCkge1xuICByZXR1cm4gYDxzdmcgd2lkdGg9XCI0OFwiIGhlaWdodD1cIjQ4XCIgdmlld0JveD1cIjAgMCA0OCA0OFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuPGNpcmNsZSBjeD1cIjI0XCIgY3k9XCIyNFwiIHI9XCIyNFwiIGZpbGw9XCIke2lzSGl0ID8gJ3JlZCcgOiAnYmxhY2snfVwiLz5cbjwvc3ZnID5gO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3VibWFyaW5lKHByb3BzKSB7XG4gIGNvbnN0IHsgYXhpcywgc3VuayB9ID0gcHJvcHM7XG4gIHJldHVybiBgPHN2Z1xueG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xud2lkdGg9JzEwMCUnXG5oZWlnaHQ9JzEwMCUnXG52aWV3Qm94PVwiJHtheGlzID09PSAneCcgPyAnMCAwIDMwMiA5OCcgOiAnMCAwIDk4IDMwMid9XCJcbmZpbGw9XCIke3N1bmsgPT09IGZhbHNlID8gJ2dyZXknIDogJ3NreWJsdWUnfVwiXG5wcmVzZXJ2ZUFzcGVjdFJhdGlvPSdub25lJz5cbjxwYXRoIHRyYW5zZm9ybT1cIiR7XG4gIGF4aXMgPT09ICd5JyA/ICdyb3RhdGUoOTAsIDQ5LCA0OSknIDogJydcbn1cIiBkPSdNMTQ3LjMgMjAuN2wuMiA0LjgtNS4xLS4zYy02LjEtLjQtNi45LjQtNy44IDcuOC0uNCAzLS45IDctMS4yIDguN2wtLjYgMy4zaC0xMS45Yy03LjQgMC0xMi0uNC0xMi41LTEuMS0uNC0uNy0yLjItLjktNC44LS41LTIuMi4zLTQuOS42LTUuOC41LTIuNy0uMS0xMC42IDAtMTIuNS4xLTEgMC0zLjMtLjItNS4xLS42LTEuOS0uNC00LjMtLjItNS41LjQtMS4yLjYtNC44IDEuMy04IDEuNi03LjcuNi0xMy44IDQuMi0xNi41IDkuNy0xLjIgMi4zLTEuOSA0LjYtMS42IDUuMS4zLjQgNDkuOC44IDExMC4xLjhoMTA5LjVsLS42LTIuN2MtLjUtMS43LS4zLTIuOS42LTMuNSAxLjEtLjYgMS0xLS4xLTEuNy0uOS0uNi0xLjEtMS44LS43LTMuNS42LTIuNS41LTIuNi0zLjktMi42SDI1OVYzMGgtMTcuOWwtMS41IDUuMmMtLjggMi45LTIuMSA3LjQtMi44IDEwLTEuMyA1LjItMS43IDUuNC05IDQuMi0yLjgtLjUtMy44LTEuMS0zLjgtMi41IDAtMS42LS44LTEuOS01LjEtMS45LTMuNSAwLTUuNS41LTYuMyAxLjUtMSAxLjQtMi40IDEuNC0xMC4xLjYtNS0uNS0xNS40LTEuMy0yMy4yLTEuNmwtMTQuMi0uNy02LjItOS40Yy00LjEtNi4zLTYuOC05LjQtOC05LjQtMS42IDAtMS45LS44LTEuOS01IDAtMi44LS40LTUtMS01LS41IDAtLjkgMi4xLS43IDQuN3onIC8+XG48L3N2Zz5gO1xufTtcbiIsImZ1bmN0aW9uIFJvdGF0ZUF4aXMoKSB7XG4gIGNvbnN0IHJvdGF0ZUF4aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm90YXRlLWF4aXMnKTtcbiAgbGV0IGRpcmVjdGlvbiA9ICd4JztcbiAgcm90YXRlQXhpcy5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGRpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ3gnID8gJ3knIDogJ3gnO1xuICB9O1xuICBjb25zdCBnZXREaXJlY3Rpb24gPSAoKSA9PiBkaXJlY3Rpb247XG4gIHJldHVybiBnZXREaXJlY3Rpb247XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUm90YXRlQXhpcztcbiIsImNvbnN0IHsgQm90UGxheWVyIH0gPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3QgR2FtZWJvYXJkID0gcmVxdWlyZSgnLi9nYW1lYm9hcmQnKTtcblxuY2xhc3MgR2FtZUNvbnRyb2xsZXIge1xuICBwbGF5ZXIxV2F0ZXIgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgcGxheWVyMldhdGVyID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gIGJvdFBsYXllciA9IG5ldyBCb3RQbGF5ZXIodGhpcy5wbGF5ZXIyV2F0ZXIpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm90UGxheWVyLnBsYWNlU2hpcHMoKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCwgc3RhcnRQb3NpdGlvbiwgZGlyKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyMVdhdGVyLmFkZFNoaXAoc2hpcCwgc3RhcnRQb3NpdGlvbiwgZGlyKTtcbiAgfVxuXG4gIHBsYXkocG9zaXRpb24pIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHBvc2l0aW9uO1xuICAgIC8qIGdldCBtb3ZlIGZyb20gaHVtYW4gKi9cbiAgICBjb25zdCBtYXJrZXIgPSB0aGlzLnBsYXllcjJXYXRlci5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgIGlmIChtYXJrZXIgIT09IC0xKSB7XG4gICAgICB0aGlzLmJvdFBsYXllci5zaG90KHRoaXMuI2hhbmRsZVNob3QpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGh1bWFuOiB7IGlzSGl0OiBtYXJrZXIgPT09ICd4JyB9LCBib3Q6IHRoaXMuYm90UGxheWVyLmxhc3RTaG90IH07XG4gICAgLyogdGhlbiBtYWtlIGEgbW92ZSBmb3IgYSBib3QgKi9cbiAgfVxuXG4gICNoYW5kbGVTaG90ID0gKHgsIHkpID0+IHRoaXMucGxheWVyMVdhdGVyLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cbiAgaXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIyV2F0ZXIuYWxsU2hpcHNTdW5rKCkgfHwgdGhpcy5wbGF5ZXIxV2F0ZXIuYWxsU2hpcHNTdW5rKCk7XG4gIH1cblxuICB3aW5uZXIoKSB7XG4gICAgaWYgKHRoaXMuaXNHYW1lT3ZlcigpKSB7XG4gICAgICBpZiAodGhpcy5wbGF5ZXIxV2F0ZXIuYWxsU2hpcHNTdW5rKCkpIHJldHVybiAncGxheWVyMSc7XG4gICAgICByZXR1cm4gJ3BsYXllcjInO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qIENvZGUgc21lbGw6IFRoZSBlYXNpc3Qgd2F5IHRvIHJlc3RhcnQgdGhlIGdhbWUgbWlnaHQganVzdFxuICAgKiBiZSBtYWtpbmcgYSBuZXcgZ2FtZSBvYmplY3QsIHRoZSBwcm9ibGVtIHdpdGggdGhhdCB3aWxsIGJlIHdoZW5cbiAgICogeW91IHdhbnQgdG8ga2VlcCBzY29yZXMuICovXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5wbGF5ZXIxV2F0ZXIuY2xlYXIoKTtcbiAgICB0aGlzLnBsYXllcjFXYXRlci5jbGVhcigpO1xuICAgIC8qICBjbGVhciBib2FyZHMsIGNsZWFyIGJvdCBzdGF0ZSAqL1xuICB9XG5cbiAgLyogQ29kZSBzbWVsbDogbWlnaHQgbm90IG5lZWQgdG8gc2VuZCBiYWNrIHRoZSB3aG9sZSBib2FkIGJ1dCBhIG1hcHBlZCB2ZXJzaW9uXG4gICAqICB0aGlzIGlzIHNvbGVseSBmb3IgdHJhY2tpbmcgYmFjayB0aGUgbW92ZXMsIHJpZ2h0LlxuICAgKiAqL1xuICBnZXQgYm9hcmQxKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXllcjFXYXRlcjtcbiAgfVxuXG4gIGdldCBib2FyZDIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheWVyMldhdGVyO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR2FtZUNvbnRyb2xsZXI7XG4iLCJjbGFzcyBHYW1lYm9hcmQge1xuICAjc2hpcHMgPSBbXTtcblxuICAjYm9hcmQgPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiNjcmVhdGVkYm9hcmQoKTtcbiAgfVxuXG4gIGFkZFNoaXAoc2hpcCwgc3RhcnRQb3NpdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCF0aGlzLiNpc1Bvc2l0aW9uQXZhaWxhYmxlKHN0YXJ0UG9zaXRpb24sIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgoKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBYID0gc3RhcnRQb3NpdGlvbi54O1xuICAgIGNvbnN0IFkgPSBzdGFydFBvc2l0aW9uLnk7XG5cbiAgICB0aGlzLiNzaGlwcy5wdXNoKHNoaXApO1xuICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgZm9yIChsZXQgeCA9IFg7IHggPCBYICsgc2hpcC5sZW5ndGgoKTsgeCsrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW3hdW1ldID0geyBzaG90OiBudWxsLCBzaGlwIH07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICd5Jykge1xuICAgICAgZm9yIChsZXQgeSA9IFk7IHkgPCBZICsgc2hpcC5sZW5ndGgoKTsgeSsrKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkW1hdW3ldID0geyBzaG90OiBudWxsLCBzaGlwIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgYWxsU2hpcHNTdW5rKCkge1xuICAgIGxldCBpc0FsbFNoaXBTdW5rID0gdHJ1ZTtcbiAgICB0aGlzLiNzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIXNoaXAuaXNTdW5rKCkpIGlzQWxsU2hpcFN1bmsgPSBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaXNBbGxTaGlwU3VuaztcbiAgfVxuXG4gIHNoaXBTdW5rKHBvc2l0aW9uKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSBwb3NpdGlvbjtcbiAgICByZXR1cm4gdGhpcy4jYm9hcmRbeF1beV0uc2hpcD8uaXNTdW5rKCkgfHwgZmFsc2U7XG4gIH1cblxuICBnZXRCb2FyZCA9ICgpID0+IHRoaXMuI2JvYXJkO1xuXG4gIGdldCBzaGlwcygpIHtcbiAgICByZXR1cm4gdGhpcy4jc2hpcHM7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICBjb25zdCBzcXVhcmUgPSB0aGlzLiNib2FyZFt4XVt5XTtcbiAgICBpZiAoc3F1YXJlLnNob3QpIHJldHVybiAtMTtcblxuICAgIGlmIChzcXVhcmUuc2hpcCkge1xuICAgICAgc3F1YXJlLnNob3QgPSAneCc7XG4gICAgICBzcXVhcmUuc2hpcC5oaXQoKTtcbiAgICAgIHJldHVybiBzcXVhcmUuc2hvdDtcbiAgICB9XG5cbiAgICBzcXVhcmUuc2hvdCA9ICdvJztcbiAgICByZXR1cm4gc3F1YXJlLnNob3Q7XG4gIH1cblxuICAjaXNQb3NpdGlvbkF2YWlsYWJsZShzdGFydFBvc2l0aW9uLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgIGNvbnN0IFggPSBzdGFydFBvc2l0aW9uLng7XG4gICAgY29uc3QgWSA9IHN0YXJ0UG9zaXRpb24ueTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09ICd4Jykge1xuICAgICAgaWYgKFggKyBsZW5ndGggPj0gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgeCA9IFg7IHggPCBYICsgbGVuZ3RoOyB4KyspIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3hdW1ldLnNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3knKSB7XG4gICAgICBpZiAoWSArIGxlbmd0aCA+PSAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCB5ID0gWTsgeSA8IFkgKyBsZW5ndGg7IHkrKykge1xuICAgICAgICBpZiAodGhpcy4jYm9hcmRbWF1beV0uc2hpcCkgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gICNjcmVhdGVkYm9hcmQoKSB7XG4gICAgY29uc3Qgcm93cyA9IDEwO1xuICAgIGNvbnN0IGNvbHVtbnMgPSAxMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgICByb3cucHVzaCh7IHNob3Q6IG51bGwsIHNoaXA6IG51bGwgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLiNib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJCb2FyZCgpIHtcbiAgICB0aGlzLiNzaGlwcyA9IFtdO1xuICAgIHRoaXMuI2JvYXJkID0gW107XG4gICAgdGhpcy4jY3JlYXRlZGJvYXJkKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XG4iLCJyZXF1aXJlKCcuL2Nzcy9zdHlsZS5jc3MnKTtcbmNvbnN0IFNjcmVlbkNvbnRyb2xsZXIgPSByZXF1aXJlKCcuL3NjcmVlbkNvbnRyb2xsZXInKTtcblxuY29uc3Qgc2NyZWVuQ29udHJvbGxlciA9IG5ldyBTY3JlZW5Db250cm9sbGVyKCk7XG5zY3JlZW5Db250cm9sbGVyLnBsYXkoKTtcbiIsImNvbnN0IHsgU2hpcCwgU2hpcExlbmd0aCB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNsYXNzIEJvdFBsYXllciB7XG4gICNzaG90SGlzdG9yeSA9IFtdO1xuXG4gICNsYXN0U2hvdCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKG15V2F0ZXIpIHtcbiAgICAvKiBUaGUgcHJvYmxlbSBpcyB0aGF0IGEgYm9hcmQgaGFzIHJlY29yZCBvZiB0aGUgc2hpcCBwb3NpdGlvbiAqL1xuICAgIC8qIHRoaXMuYm9hcmQgPSBnZXRCb2FyZDsgKi9cbiAgICB0aGlzLm15V2F0ZXIgPSBteVdhdGVyO1xuICAgIHRoaXMuI2xhc3RTaG90ID0ge1xuICAgICAgeDogbnVsbCxcbiAgICAgIHk6IG51bGwsXG4gICAgICBpc0hpdDogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLiNjcmVhdGVTaG90SGlzdG9yeUJvYXJkKCk7XG4gIH1cblxuICBjbGVhckhpc3RvcnkoKSB7XG4gICAgdGhpcy4jc2hvdEhpc3RvcnkgPSBbXTtcbiAgICB0aGlzLiNjcmVhdGVTaG90SGlzdG9yeUJvYXJkKCk7XG4gIH1cblxuICBwbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbJ3gnLCAneSddO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoU2hpcExlbmd0aCkuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcCh2YWx1ZVsxXSwgdmFsdWVbMF0pO1xuICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgICBsZXQgeDtcbiAgICAgIGxldCB5O1xuICAgICAgZG8ge1xuICAgICAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgfSB3aGlsZSAoIXRoaXMubXlXYXRlci5hZGRTaGlwKHNoaXAsIHsgeCwgeSB9LCBkaXJlY3Rpb24pKTtcbiAgICB9KTtcbiAgfVxuXG4gICNjcmVhdGVTaG90SGlzdG9yeUJvYXJkKCkge1xuICAgIGNvbnN0IHJvd3MgPSAxMDtcbiAgICBjb25zdCBjb2x1bW5zID0gMTA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgcm93LnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLiNzaG90SGlzdG9yeS5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGxhc3RTaG90KCkge1xuICAgIHJldHVybiB0aGlzLiNsYXN0U2hvdDtcbiAgfVxuXG4gIHNob3QoaGFuZGxlU2hvdCkge1xuICAgIGxldCBpc1Nob3RWYWxpZCA9IGZhbHNlO1xuICAgIGxldCB4O1xuICAgIGxldCB5O1xuICAgIGNvbnN0IGJvYXJkID0gdGhpcy4jc2hvdEhpc3Rvcnk7XG4gICAgZG8ge1xuICAgICAgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBpZiAoIWJvYXJkW3hdW3ldKSB7XG4gICAgICAgIGlzU2hvdFZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jbGFzdFNob3QgPSB7XG4gICAgICAgICAgeCxcbiAgICAgICAgICB5LFxuICAgICAgICAgIGlzSGl0OiBoYW5kbGVTaG90KHgsIHkpID09PSAneCcsXG4gICAgICAgIH07XG4gICAgICAgIGJvYXJkW3hdW3ldID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IHdoaWxlICghaXNTaG90VmFsaWQpO1xuICAgIHRoaXMuI3Nob3RIaXN0b3J5W3hdW3ldID0gdGhpcy4jbGFzdFNob3QuaXNIaXQgPyAneCcgOiAneSc7XG4gIH1cbn1cblxuZXhwb3J0cy5Cb3RQbGF5ZXIgPSBCb3RQbGF5ZXI7XG4iLCJjb25zdCBHYW1lQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZ2FtZUNvbnRyb2xsZXInKTtcbmNvbnN0IFNxdWFyZSA9IHJlcXVpcmUoJy4vYm9hcmRTcXVhcmUnKTtcbmNvbnN0IFNwbGFzaFNjcmVlbiA9IHJlcXVpcmUoJy4vc3BsYXNoU2NyZWVuJyk7XG5jb25zdCBzaG90TWFya2VyID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL2ljb25zL3Nob3RNYXJrZXInKTtcbmNvbnN0IEJvYXJkcyA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9ib2FyZCcpO1xuY29uc3QgU3RhdGUgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvZ2FtZVN0YXRlJyk7XG5cbmNsYXNzIFNjcmVlbkNvbnRyb2xsZXIge1xuICBnYW1lID0gbmV3IEdhbWVDb250cm9sbGVyKCk7XG5cbiAgI2JvdFRoaW5raW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQm9hcmRzKCk7XG4gICAgdGhpcy5wbGF5ZXIyU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItMiAuc3F1YXJlJyk7XG4gICAgdGhpcy5zcGxhc2hTY3JlZW4gPSBuZXcgU3BsYXNoU2NyZWVuKHRoaXMuZ2FtZSk7XG4gICAgdGhpcy5zcGxhc2hTY3JlZW4uc2hvdygpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICBjb25zdCB7IGlzVGhpbmtpbmcsIHRoaW5raW5nIH0gPSBTdGF0ZSgpO1xuXG4gICAgdGhpcy5wbGF5ZXIyU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgICAgLy8gZW5zdXJlcyB0aGF0IHBsYXllcjEgY2Fubm90IHBsYXkgdHdpY2Ugd2hlbiB0aGUgYm90IGlzIHRoaW5raW5nXG4gICAgICAgIGlmIChpc1RoaW5raW5nKCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFNxdWFyZS5wYXJzZShzcXVhcmUpO1xuICAgICAgICBjb25zdCBzaG90ID0gdGhpcy5nYW1lLnBsYXkocG9zaXRpb24pO1xuXG4gICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBzaG90TWFya2VyKHNob3QuaHVtYW4uaXNIaXQpO1xuICAgICAgICBhd2FpdCB0aGlua2luZyg4MDApO1xuICAgICAgICBjb25zdCBib3RTaG90ID0gc2hvdC5ib3Q7XG5cbiAgICAgICAgY29uc3QgYm90U3F1YXJlU2hvdCA9IFNxdWFyZS5maW5kU3F1YXJlKCdwbGF5ZXItMScsIHtcbiAgICAgICAgICB4OiBib3RTaG90LngsXG4gICAgICAgICAgeTogYm90U2hvdC55LFxuICAgICAgICB9KTtcbiAgICAgICAgYm90U3F1YXJlU2hvdC5pbm5lckhUTUwgPSBzaG90TWFya2VyKGJvdFNob3QuaXNIaXQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTY3JlZW5Db250cm9sbGVyO1xuIiwiLyogQ29kZS1zbWVsbDogdGhpcyBpcyBwb2x1dGluZyBnbG9iYWwgc2NvcGUuICovXG5jb25zdCBTaGlwTGVuZ3RoID0ge1xuICBDYXJyaWVyOiA1LFxuICBCYXR0bGVzaGlwOiA0LFxuICBQYXRyb2w6IDMsXG4gIFN1Ym1hcmluZTogMyxcbiAgRGVzdHJveWVyOiAyLFxufTtcblxuY2xhc3MgU2hpcCB7XG4gICNuYW1lO1xuXG4gICNsZW5ndGg7XG5cbiAgI2hpdDtcblxuICBjb25zdHJ1Y3RvcihsZW5ndGgsIG5hbWUpIHtcbiAgICB0aGlzLiNuYW1lID0gbmFtZTtcbiAgICB0aGlzLiNsZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy4jaGl0ID0gMDtcbiAgfVxuXG4gIGdldCBuYW1lKCkge1xuICAgIHJldHVybiB0aGlzLiNuYW1lO1xuICB9XG5cbiAgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy4jaGl0ICs9IDE7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2hpdCA+PSB0aGlzLiNsZW5ndGg7XG4gIH1cbn1cblxuZXhwb3J0cy5TaGlwID0gU2hpcDtcbmV4cG9ydHMuU2hpcExlbmd0aCA9IFNoaXBMZW5ndGg7XG4iLCJjb25zdCBTcXVhcmUgPSByZXF1aXJlKCcuL2JvYXJkU3F1YXJlJyk7XG5jb25zdCB7IHJlbmRlckljb24gfSA9IHJlcXVpcmUoJy4vY29tcG9uZW50cy9pY29uJyk7XG5jb25zdCBSb3RhdGVBeGlzID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL3JvdGF0ZUF4aXMnKTtcbmNvbnN0IHsgU2hpcExlbmd0aCwgU2hpcCB9ID0gcmVxdWlyZSgnLi9zaGlwJyk7XG5cbmNsYXNzIFNwbGFzaFNjcmVlbiB7XG4gIHNoaXBOYW1lcyA9IE9iamVjdC5rZXlzKFNoaXBMZW5ndGgpO1xuXG4gIHNoaXBOdW1iZXIgPSAwO1xuXG4gIHBsYXllcjFTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci0xIC5zcXVhcmUnKTtcblxuICBwbGF5ZXIyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyLTInKTtcblxuICBzaGlwTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLW5hbWUnKTtcblxuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgdGhpcy5nZXREaXJlY3Rpb24gPSBSb3RhdGVBeGlzKCk7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnBsYXllcjJCb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgdGhpcy5oYW5kbGVBZGRTaGlwID0gdGhpcy5oYW5kbGVBZGRTaGlwLmJpbmQodGhpcyk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMucGxheWVyMVNxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IFNxdWFyZS5wYXJzZShzcXVhcmUpO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5zaGlwTmFtZXNbdGhpcy5zaGlwTnVtYmVyXTtcbiAgICAgICAgU3F1YXJlLmhpZ2hMaWdodFNxdWFyZXMoXG4gICAgICAgICAgcG9zaXRpb24sXG4gICAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgICBTaGlwTGVuZ3RoW25hbWVdLFxuICAgICAgICAgICh4LCB5LCBjbGFzc05hbWUgPSAnaGlnaGxpZ2h0JykgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItMSBbZGF0YS1pbmRleD1cIiR7eSAqIDEwICsgeH1cIl1gKVxuICAgICAgICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBTcXVhcmUucGFyc2Uoc3F1YXJlKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuc2hpcE5hbWVzW3RoaXMuc2hpcE51bWJlcl07XG4gICAgICAgIFNxdWFyZS5oaWdoTGlnaHRTcXVhcmVzKFxuICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgIHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgICAgU2hpcExlbmd0aFtuYW1lXSxcbiAgICAgICAgICAoeCwgeSwgY2xhc3NOYW1lID0gJ2hpZ2hsaWdodCcpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLTEgW2RhdGEtaW5kZXg9XCIke3kgKiAxMCArIHh9XCJdYClcbiAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRTaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUFkZFNoaXAoZXZlbnQpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFNxdWFyZS5wYXJzZShldmVudC50YXJnZXQpO1xuICAgIGxldCBuYW1lID0gdGhpcy5zaGlwTmFtZXNbdGhpcy5zaGlwTnVtYmVyXTtcbiAgICB0aGlzLnNoaXBOYW1lLmlubmVySFRNTCA9IG5hbWU7XG5cbiAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoU2hpcExlbmd0aFtuYW1lXSwgbmFtZSk7XG4gICAgaWYgKHRoaXMuZ2FtZS5hZGRTaGlwKHNoaXAsIHBvc2l0aW9uLCB0aGlzLmdldERpcmVjdGlvbigpKSkge1xuICAgICAgY29uc3QgaW1nTWV0YWRhdGEgPSB7XG4gICAgICAgIGxlbmd0aDogU2hpcExlbmd0aFtuYW1lXSxcbiAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIGF4aXM6IHRoaXMuZ2V0RGlyZWN0aW9uKCksXG4gICAgICAgIHN1bms6IHNoaXAuaXNTdW5rKCksXG4gICAgICAgIG5hbWUsXG4gICAgICB9O1xuICAgICAgY29uc3QgcGxheWVyMVdhdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllci0xJyk7XG4gICAgICBwbGF5ZXIxV2F0ZXIuYXBwZW5kQ2hpbGQocmVuZGVySWNvbihpbWdNZXRhZGF0YSkpO1xuXG4gICAgICAvLyByZWR1ZGVudGx5IHVuaGlsaWdodCB0aGUgc3F1YXJlcyAob2Ygc2hpcCBsZW5ndGgpIGJlZm9yZSBzaGlwTnVtYmVyIGlzIGluY3JlbWVudGVkXG4gICAgICAvLyBiZWxvdy4gQmVjYXVzZSBvbmNlIHNoaXBOdW1iZXIgY2hhbmdlcywgdGhlIHNoaXAgbGVuZ3RoIHdlIGNhbiBhY2Nlc3Mgd2l0aCB0aGlzXG4gICAgICAvLyB2YWx1ZSB3aWxsIGFsc28gY2hhbmdlLCByZXN1bHRpbmcgaW4gc29tZSBzcXVhcmVzIG5vdCBnZXR0aW5nIHVuaGlsaWdodGVkIGluXG4gICAgICAvLyBtb3VzZWxlYXZlIGV2ZW50aGFuZGxlci5cbiAgICAgIFNxdWFyZS5oaWdoTGlnaHRTcXVhcmVzKFxuICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgdGhpcy5nZXREaXJlY3Rpb24oKSxcbiAgICAgICAgU2hpcExlbmd0aFtuYW1lXSxcbiAgICAgICAgKHgsIHksIGNsYXNzTmFtZSA9ICdoaWdobGlnaHQnKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLTEgW2RhdGEtaW5kZXg9XCIke3kgKiAxMCArIHh9XCJdYClcbiAgICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuc2hpcE51bWJlciArPSAxO1xuXG4gICAgICBuYW1lID0gdGhpcy5zaGlwTmFtZXNbdGhpcy5zaGlwTnVtYmVyXTtcbiAgICAgIHRoaXMuc2hpcE5hbWUuaW5uZXJIVE1MID0gbmFtZTtcblxuICAgICAgLy8gYWZ0ZXIgYWRkaW5nIGFsbCA1IHNoaXBzLCBkbzpcbiAgICAgIGlmICh0aGlzLnNoaXBOdW1iZXIgPT09IDUpIHtcbiAgICAgICAgLy8gMS4gaGlkZSBhbmQgc2hvdyB1aSBmb3IgYWRkaW5nIHNoaXAgYW5kIGVuZW15IGJvYXJkLCByZXNwZWN0aXZlbHkuXG4gICAgICAgIFNwbGFzaFNjcmVlbi5oaWRlRWxlbWVudCgncm90YXRlLWF4aXMnKTtcbiAgICAgICAgU3BsYXNoU2NyZWVuLmhpZGVFbGVtZW50KCdzaGlwLXN1bmsnKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1zdGF0dXMnKS5pbm5lckhUTUwgPSAncGxheWVyIDEgdHVybic7XG4gICAgICAgIHRoaXMucGxheWVyMkJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICAgICAgICAvLyAyLiByZW1vdmUgY2xpY2sgZXZlbnQgbGlzdG5lciBmb3IgYWRkaW5nIHNoaXBzIGluIGV2ZXJ5IHNxdWFyZS5cbiAgICAgICAgdGhpcy5wbGF5ZXIxU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZFNoaXApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaGlkZUVsZW1lbnQoaWQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3BsYXNoU2NyZWVuO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9