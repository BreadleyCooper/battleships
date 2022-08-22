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
  const sunk = true;

  // hit function that takes a number then marks that position as 'hit'
  const hit = (position) => {
    let hitCounter = 0;
    hitCounter++;
  };

  // isSunk function that calculates if all positions are 'hit' and change sunk to true
  const isSunk = (hitCounter) => {
    if (hitCounter === length) {
      return true;
    } return false;
  };
  return { length, hit, isSunk };
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLFdBQVc7QUFDWDs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG4iLCIvLyBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgU2hpcCBvYmplY3RzXG5cbmNvbnN0IFNoaXAgPSAobCkgPT4ge1xuICAvLyBpbml0aWFsIHBhcmFtZXRlcnNcbiAgY29uc3QgbGVuZ3RoID0gbDtcbiAgY29uc3Qgc3VuayA9IHRydWU7XG5cbiAgLy8gaGl0IGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBudW1iZXIgdGhlbiBtYXJrcyB0aGF0IHBvc2l0aW9uIGFzICdoaXQnXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIGxldCBoaXRDb3VudGVyID0gMDtcbiAgICBoaXRDb3VudGVyKys7XG4gIH07XG5cbiAgLy8gaXNTdW5rIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyBpZiBhbGwgcG9zaXRpb25zIGFyZSAnaGl0JyBhbmQgY2hhbmdlIHN1bmsgdG8gdHJ1ZVxuICBjb25zdCBpc1N1bmsgPSAoaGl0Q291bnRlcikgPT4ge1xuICAgIGlmIChoaXRDb3VudGVyID09PSBsZW5ndGgpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gcmV0dXJuIGZhbHNlO1xuICB9O1xuICByZXR1cm4geyBsZW5ndGgsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgeyBTaGlwIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=