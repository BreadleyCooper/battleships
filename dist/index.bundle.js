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
    let sunk = false;
    if (hitCounter >= length) {
      sunk = true;
    } return sunk === false;
  };
  // returns the hitcounter variable for use outside of this factory
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFDOzs7Ozs7Ozs7Ozs7Ozs7QUNBckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwRmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwRmFjdG9yeSc7XG4iLCIvLyBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0aGUgU2hpcCBvYmplY3RzXG5cbmNvbnN0IFNoaXAgPSAobCkgPT4ge1xuICAvLyBpbml0aWFsIHBhcmFtZXRlcnNcbiAgY29uc3QgbGVuZ3RoID0gbDtcbiAgbGV0IGhpdENvdW50ZXIgPSAwO1xuXG4gIC8vIGhpdCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgbnVtYmVyIHRoZW4gbWFya3MgdGhhdCBwb3NpdGlvbiBhcyAnaGl0J1xuICBjb25zdCBoaXQgPSAoKSA9PiBoaXRDb3VudGVyKys7XG5cbiAgLy8gaXNTdW5rIGZ1bmN0aW9uIHRoYXQgY2FsY3VsYXRlcyBpZiBhbGwgcG9zaXRpb25zIGFyZSAnaGl0JyBhbmQgY2hhbmdlIHN1bmsgdG8gdHJ1ZVxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgbGV0IHN1bmsgPSBmYWxzZTtcbiAgICBpZiAoaGl0Q291bnRlciA+PSBsZW5ndGgpIHtcbiAgICAgIHN1bmsgPSB0cnVlO1xuICAgIH0gcmV0dXJuIHN1bmsgPT09IGZhbHNlO1xuICB9O1xuICAvLyByZXR1cm5zIHRoZSBoaXRjb3VudGVyIHZhcmlhYmxlIGZvciB1c2Ugb3V0c2lkZSBvZiB0aGlzIGZhY3RvcnlcbiAgY29uc3QgZ2V0SGl0Q291bnRlciA9ICgpID0+IGhpdENvdW50ZXI7XG5cbiAgcmV0dXJuIHtcbiAgICBsZW5ndGgsIGhpdCwgaXNTdW5rLCBnZXRIaXRDb3VudGVyLFxuICB9O1xufTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9