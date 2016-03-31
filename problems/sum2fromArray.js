
export function sumArray(array, expectedSum) {
  return array.reduce((result, num, i) => {
    var testArray = array.slice(i);
    testArray.splice(testArray.indexOf(num), 1);
    var currentValue = false;
    if (testArray.length !== 0) {
      currentValue = testArray.reduce((result2, num2, j) => {
        // console.log(num, num2, num+num2);
        if (num + num2 === expectedSum) {
          return true;
        } else {
          return result2 === true ? true : false;
        }
      }, testArray[0])
    }
    return result === true ? true : currentValue;
  }, false)
}
