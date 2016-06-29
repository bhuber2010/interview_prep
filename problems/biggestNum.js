function biggest(nums) {
  let sorted = [];
  nums.forEach((num, i, array) => {
    if (sorted.length === 0) {
      sorted.push(num);
    } else if (num.toString().length > 1) {
      
    }
  })

};

var test1 = biggest([1,2,3]);
var test2 = biggest([3, 30, 34, 5, 9]);
var test3 = biggest([3, 50, 34, 4, 9]);

console.log(test1 === "321");
console.log(test2 === "9534330");
console.log(test3 === "9504343");
