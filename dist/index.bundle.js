"use strict";
(self["webpackChunkbattleships"] = self["webpackChunkbattleships"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");



/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
// Factory function that creates the Ship objects

const Ship = (l) => {
  // initial parameters
  const length = l;
  let hitCounter = 0;


  // hit function that takes a number then marks that position as 'hit'
  const hit = () => hitCounter++;

  // isSunk function that calculates if all positions are 'hit' and change sunk to true
  const isSunk = () => {
    if (hitCounter >= length) {
      return true;
    } return false;
  };

  const getHitCounter = () => hitCounter;

  return {
    length, hit, isSunk, getHitCounter,
  };
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcEZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcEZhY3RvcnknO1xuIiwiLy8gRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdGhlIFNoaXAgb2JqZWN0c1xuXG5jb25zdCBTaGlwID0gKGwpID0+IHtcbiAgLy8gaW5pdGlhbCBwYXJhbWV0ZXJzXG4gIGNvbnN0IGxlbmd0aCA9IGw7XG4gIGxldCBoaXRDb3VudGVyID0gMDtcblxuXG4gIC8vIGhpdCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgbnVtYmVyIHRoZW4gbWFya3MgdGhhdCBwb3NpdGlvbiBhcyAnaGl0J1xuICBjb25zdCBoaXQgPSAoKSA9PiBoaXRDb3VudGVyKys7XG5cbiAgLy8gaXNTdW5rIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyBpZiBhbGwgcG9zaXRpb25zIGFyZSAnaGl0JyBhbmQgY2hhbmdlIHN1bmsgdG8gdHJ1ZVxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgaWYgKGhpdENvdW50ZXIgPj0gbGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBnZXRIaXRDb3VudGVyID0gKCkgPT4gaGl0Q291bnRlcjtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgaGl0LCBpc1N1bmssIGdldEhpdENvdW50ZXIsXG4gIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=