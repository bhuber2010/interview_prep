
var numArray = [3, 7, 8, 9]

// strange way //
function mutiplyNums(nA, curr, i, arr) {
  var count = 0;
  var sum = 1;
  while (count < arr.length) {
    if (count !== i) {
      sum *= arr[count]
    }
    count++
  }
  nA.push(sum)
  return nA
}

var result = numArray.reduce(mutiplyNums, [])

console.log(result);

// map then reduce //

function multiNum(cur, i, arr) {
  return arr.reduce((prod, cP, j) => {
    if (j != i) {
      prod *= cP
    }
    return prod
  }, 1)
}

var result2 = numArray.map(multiNum)

console.log(result2);
