"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumArray = sumArray;
function sumArray(array, expectedSum) {
  return array.reduce(function (result, num, i) {
    var testArray = array.slice();
    testArray.splice(array.indexOf(num), 1);
    var currentValue = testArray.reduce(function (result2, num2, j) {
      // console.log(num, num2, num+num2);
      if (num + num2 === expectedSum) {
        return true;
      } else {
        return result2 === true ? true : false;
      }
    }, testArray[0]);
    return result === true ? true : currentValue;
  }, false);
}
