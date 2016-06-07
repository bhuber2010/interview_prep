'use strict';

function increment(input) {return input + 1};
function decrement(input) {return input - 1};
function double(input) {return input * 2};
function halve(input) {return input / 2};


let initial_value = 1;

const pipeline = [
  increment,
  double,
  decrement
];

const final_value = pipeline.reduce((acc, fn) => {
  console.log(acc, fn.name);
  return fn(acc);
}, initial_value)

console.log("Final:", final_value);
