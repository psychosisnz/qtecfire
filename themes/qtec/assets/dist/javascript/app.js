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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Scroll to TOP icon Visuals animation
$(window).scroll(function () {
  if ($(this).scrollTop() > $(this).height()) {
    $('.up-top-icon').addClass('active');
  } else {
    $('.up-top-icon').removeClass('active');
  }
});
// Scroll to TOP on CLICK
$('.up-top-icon').click(function () {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 'slow', 'swing');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\n@import 'base/hero-image';\r\n                         ^\r\n      Invalid CSS after \"...se/hero-image';\": expected 1 selector or at-rule, was \"<<<<<<< HEAD\"\r\n      in C:\\wamp64\\www\\qtec\\themes\\qtec\\assets\\sass\\app.scss (line 5, column 27)\n    at runLoaders (C:\\wamp64\\www\\qtec\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\wamp64\\www\\qtec\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\wamp64\\www\\qtec\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\wamp64\\www\\qtec\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\wamp64\\www\\qtec\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.<anonymous> (C:\\wamp64\\www\\qtec\\node_modules\\async\\dist\\async.js:2257:31)\n    at Object.callback (C:\\wamp64\\www\\qtec\\node_modules\\async\\dist\\async.js:958:16)\n    at options.error (C:\\wamp64\\www\\qtec\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);