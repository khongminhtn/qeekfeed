/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/widget/components/Buttons.ts":
/*!******************************************!*\
  !*** ./src/widget/components/Buttons.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FeedbackButton: () => (/* binding */ FeedbackButton),\n/* harmony export */   SubmitButton: () => (/* binding */ SubmitButton)\n/* harmony export */ });\n/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ \"./src/widget/components/Form.ts\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader */ \"./src/widget/components/Loader.ts\");\n\n\nfunction FeedbackButton() {\n    let button = document.createElement(\"button\");\n    button.innerHTML = \"Feedback\";\n    button.id = \"qeekfeed-feedback-button\";\n    button.onclick = () => (0,_Loader__WEBPACK_IMPORTED_MODULE_1__.Loader)(_Form__WEBPACK_IMPORTED_MODULE_0__.Form);\n    return button;\n}\nfunction SubmitButton() {\n    let button = document.createElement(\"button\");\n    button.innerHTML = \"Thank you!\";\n    button.id = \"qeekfeed-feedback-button-submit\";\n    return button;\n}\n\n\n//# sourceURL=webpack:///./src/widget/components/Buttons.ts?");

/***/ }),

/***/ "./src/widget/components/Form.ts":
/*!***************************************!*\
  !*** ./src/widget/components/Form.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: () => (/* binding */ Form)\n/* harmony export */ });\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ \"./src/widget/states.ts\");\n/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Buttons */ \"./src/widget/components/Buttons.ts\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader */ \"./src/widget/components/Loader.ts\");\n/* harmony import */ var _assets_arrow_right_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/arrow-right.png */ \"./src/widget/assets/arrow-right.png\");\n\n\n\n// @ts-ignore\n\nfunction Form() {\n    // intialize elements\n    let form = document.createElement(\"div\");\n    form.id = \"qeekfeed-feedback-form\";\n    let textarea = document.createElement(\"textarea\");\n    textarea.placeholder = \"How can we make this better for you?\";\n    let img = document.createElement(\"img\");\n    img.src = _assets_arrow_right_png__WEBPACK_IMPORTED_MODULE_3__;\n    img.width = 15;\n    img.height = 15;\n    img.onclick = () => {\n        (0,_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader)(_Buttons__WEBPACK_IMPORTED_MODULE_1__.SubmitButton);\n        // remove widget\n        setTimeout(() => {\n            let states = (0,_states__WEBPACK_IMPORTED_MODULE_0__.getStates)();\n            states.widget.remove();\n            (0,_states__WEBPACK_IMPORTED_MODULE_0__.updateStates)(states);\n        }, 1000);\n    };\n    // add input and button\n    form.appendChild(textarea);\n    form.appendChild(img);\n    return form;\n}\n\n\n//# sourceURL=webpack:///./src/widget/components/Form.ts?");

/***/ }),

/***/ "./src/widget/components/Loader.ts":
/*!*****************************************!*\
  !*** ./src/widget/components/Loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Loader: () => (/* binding */ Loader)\n/* harmony export */ });\n/* harmony import */ var _functionalities_boundaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functionalities/boundaries */ \"./src/widget/functionalities/boundaries.ts\");\n/* harmony import */ var _functionalities_positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functionalities/positioning */ \"./src/widget/functionalities/positioning.ts\");\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states */ \"./src/widget/states.ts\");\n\n\n\nfunction Loader(component) {\n    //  render the component\n    let states = (0,_states__WEBPACK_IMPORTED_MODULE_2__.getStates)();\n    var element = component();\n    states.widget.innerHTML = \"\";\n    states.widget.appendChild(element);\n    // reposition widget\n    (0,_functionalities_boundaries__WEBPACK_IMPORTED_MODULE_0__.updateBoundaries)();\n    states.startX = states.widget.offsetLeft;\n    states.startY = states.widget.offsetTop;\n    let newX = Math.max(0, Math.min(states.startX, window.innerWidth - states.widget.offsetWidth));\n    let newY = Math.max(0, Math.min(states.startY, window.innerHeight - states.widget.offsetHeight));\n    (0,_states__WEBPACK_IMPORTED_MODULE_2__.updateStates)(states);\n    (0,_functionalities_positioning__WEBPACK_IMPORTED_MODULE_1__.setWidgetPosition)(newX, newY);\n}\n\n\n//# sourceURL=webpack:///./src/widget/components/Loader.ts?");

/***/ }),

/***/ "./src/widget/functionalities/boundaries.ts":
/*!**************************************************!*\
  !*** ./src/widget/functionalities/boundaries.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateBoundaries: () => (/* binding */ updateBoundaries)\n/* harmony export */ });\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ \"./src/widget/states.ts\");\n\nfunction updateBoundaries() {\n    let states = (0,_states__WEBPACK_IMPORTED_MODULE_0__.getStates)();\n    states.maxX = window.innerWidth - states.widget.offsetWidth;\n    states.maxY = window.innerHeight - states.widget.offsetHeight;\n    (0,_states__WEBPACK_IMPORTED_MODULE_0__.updateStates)(states);\n}\n\n\n//# sourceURL=webpack:///./src/widget/functionalities/boundaries.ts?");

/***/ }),

/***/ "./src/widget/functionalities/drag.ts":
/*!********************************************!*\
  !*** ./src/widget/functionalities/drag.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDragFunctionality: () => (/* binding */ addDragFunctionality)\n/* harmony export */ });\n/* harmony import */ var _boundaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boundaries */ \"./src/widget/functionalities/boundaries.ts\");\n/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./positioning */ \"./src/widget/functionalities/positioning.ts\");\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states */ \"./src/widget/states.ts\");\n\n\n\nfunction addDragFunctionality() {\n    let states = (0,_states__WEBPACK_IMPORTED_MODULE_2__.getStates)();\n    states.widget.addEventListener(\"mousedown\", dragStart);\n    document.addEventListener(\"mousemove\", dragging);\n    document.addEventListener(\"mouseup\", dragEnd);\n    function dragStart(e) {\n        // Initiate dragging and calculate the offset from the mouse to the widget's top-left corner\n        states = (0,_states__WEBPACK_IMPORTED_MODULE_2__.getStates)();\n        states.isDragging = true;\n        states.startX = e.clientX - states.widget.offsetLeft;\n        states.startY = e.clientY - states.widget.offsetTop;\n        (0,_states__WEBPACK_IMPORTED_MODULE_2__.updateStates)(states);\n    }\n    function dragging(e) {\n        states = (0,_states__WEBPACK_IMPORTED_MODULE_2__.getStates)();\n        if (states.isDragging) {\n            e.preventDefault();\n            // Update boundaries to account for any size changes\n            (0,_boundaries__WEBPACK_IMPORTED_MODULE_0__.updateBoundaries)();\n            // Calculate new position based on mouse movement\n            let newX = e.clientX - states.startX;\n            let newY = e.clientY - states.startY;\n            // Constrain new position within boundaries\n            // This ensures the widget stays within the viewport, even when resized\n            newX = Math.max(0, Math.min(newX, window.innerWidth - states.widget.offsetWidth));\n            newY = Math.max(0, Math.min(newY, window.innerHeight - states.widget.offsetHeight));\n            (0,_positioning__WEBPACK_IMPORTED_MODULE_1__.setWidgetPosition)(newX, newY);\n        }\n        (0,_states__WEBPACK_IMPORTED_MODULE_2__.updateStates)(states);\n    }\n    function dragEnd() {\n        // Stop dragging operation\n        states = (0,_states__WEBPACK_IMPORTED_MODULE_2__.getStates)();\n        states.isDragging = false;\n        (0,_states__WEBPACK_IMPORTED_MODULE_2__.updateStates)(states);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/widget/functionalities/drag.ts?");

/***/ }),

/***/ "./src/widget/functionalities/positioning.ts":
/*!***************************************************!*\
  !*** ./src/widget/functionalities/positioning.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setInitialPosition: () => (/* binding */ setInitialPosition),\n/* harmony export */   setWidgetPosition: () => (/* binding */ setWidgetPosition)\n/* harmony export */ });\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../states */ \"./src/widget/states.ts\");\n\nfunction setWidgetPosition(x, y) {\n    let states = (0,_states__WEBPACK_IMPORTED_MODULE_0__.getStates)();\n    x = Math.max(0, Math.min(x, states.maxX));\n    y = Math.max(0, Math.min(y, states.maxY));\n    states.widget.style.left = x + 'px';\n    states.widget.style.top = y + 'px';\n    (0,_states__WEBPACK_IMPORTED_MODULE_0__.updateStates)(states);\n}\nfunction setInitialPosition() {\n    let states = (0,_states__WEBPACK_IMPORTED_MODULE_0__.getStates)();\n    const x = 20;\n    const y = window.innerHeight - states.widget.offsetHeight - 20;\n    setWidgetPosition(x, y);\n    (0,_states__WEBPACK_IMPORTED_MODULE_0__.updateStates)(states);\n}\n\n\n//# sourceURL=webpack:///./src/widget/functionalities/positioning.ts?");

/***/ }),

/***/ "./src/widget/states.ts":
/*!******************************!*\
  !*** ./src/widget/states.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStates: () => (/* binding */ getStates),\n/* harmony export */   states: () => (/* binding */ states),\n/* harmony export */   updateStates: () => (/* binding */ updateStates)\n/* harmony export */ });\nlet states = {\n    widget: document.createElement('div'),\n    isDragging: false,\n    startX: 0,\n    startY: 0,\n    maxY: 0,\n    maxX: 0\n};\nlet updateStates = (newStates) => {\n    states = Object.assign({}, newStates);\n};\nlet getStates = () => {\n    return states;\n};\n\n\n//# sourceURL=webpack:///./src/widget/states.ts?");

/***/ }),

/***/ "./src/widget/widget.ts":
/*!******************************!*\
  !*** ./src/widget/widget.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functionalities_boundaries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionalities/boundaries */ \"./src/widget/functionalities/boundaries.ts\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Buttons */ \"./src/widget/components/Buttons.ts\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Loader */ \"./src/widget/components/Loader.ts\");\n/* harmony import */ var _functionalities_drag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functionalities/drag */ \"./src/widget/functionalities/drag.ts\");\n/* harmony import */ var _functionalities_positioning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functionalities/positioning */ \"./src/widget/functionalities/positioning.ts\");\n/* harmony import */ var _states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./states */ \"./src/widget/states.ts\");\n\n\n\n\n\n\nfunction createWidget() {\n    // initialize widget\n    _states__WEBPACK_IMPORTED_MODULE_5__.states.widget.style.position = 'fixed';\n    _states__WEBPACK_IMPORTED_MODULE_5__.states.widget.style.zIndex = '9999';\n    document.body.appendChild(_states__WEBPACK_IMPORTED_MODULE_5__.states.widget);\n    // boundaries setups\n    (0,_functionalities_boundaries__WEBPACK_IMPORTED_MODULE_0__.updateBoundaries)();\n    window.addEventListener('resize', () => (0,_functionalities_boundaries__WEBPACK_IMPORTED_MODULE_0__.updateBoundaries)());\n    // drag setups\n    (0,_functionalities_drag__WEBPACK_IMPORTED_MODULE_3__.addDragFunctionality)();\n    (0,_functionalities_positioning__WEBPACK_IMPORTED_MODULE_4__.setInitialPosition)();\n    // initial \n    (0,_components_Loader__WEBPACK_IMPORTED_MODULE_2__.Loader)(_components_Buttons__WEBPACK_IMPORTED_MODULE_1__.FeedbackButton);\n}\ncreateWidget();\n\n\n//# sourceURL=webpack:///./src/widget/widget.ts?");

/***/ }),

/***/ "./src/widget/assets/arrow-right.png":
/*!*******************************************!*\
  !*** ./src/widget/assets/arrow-right.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/arrow-right.png\";\n\n//# sourceURL=webpack:///./src/widget/assets/arrow-right.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/widget/widget.ts");
/******/ 	
/******/ })()
;