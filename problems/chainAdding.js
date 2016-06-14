"use strict";

function add(n){
  // Let the currying begin!
  return (x) => {
    if (x) {
      return n + x
    } else {
      return n
    }
  }
}

console.log(add(2)(4));
