"use strict";

function add(x) {
  return function aa(y) {
    if(typeof y !== 'undefined') {
      x = x + y;
      return aa
    }else{
      return x
    }
  }
}

console.log(add(2)());
console.log(add(2)(4)());
console.log(add(2)(4)(6)());
