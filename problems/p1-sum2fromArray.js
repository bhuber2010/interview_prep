
export function sumArray(array, expectedSum) {
  var values = {
    sum: [],
    subtract: [],
    multiply: []
  };
  var isPossible = array.reduce((result, num, i) => {
    var testArray = array.slice(i);
    testArray.splice(testArray.indexOf(num), 1);
    var currentValue = false;
    if (testArray.length !== 0) {
      currentValue = testArray.reduce((result2, num2, j) => {
        if (num + num2 === expectedSum) {
          values.sum.push(`${num} + ${num2} = ${expectedSum}`);
        };
        if (num * num2 === expectedSum) {
          values.multiply.push(`${num} * ${num2} = ${expectedSum}`);
        };
        if (num - num2 === expectedSum) {
          values.subtract.push(`${num} - ${num2} = ${expectedSum}`);
        };
        if (num2 - num === expectedSum) {
          values.subtract.push(`${num2} - ${num} = ${expectedSum}`);
        };
        if (values.sum.length !== 0 || values.multiply.length !== 0 || values.subtract.length !== 0) {
          return true
        } else {
          return result2 === true ? true : false;
        }
      }, false)
    }
    return result === true ? true : currentValue;
  }, false)
  return isPossible ? values : isPossible;
}
