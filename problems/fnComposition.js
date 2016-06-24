"use strict";

function compose() {

  let z = (z) => z;

  let funs = Array.from(arguments);

  let comps = funs.reduceRight((comp, fn, i, arr) => {
    console.log(fn(comp))
    return fn(comp)
  }, z)

  return comps;
}

var addOne = (a) => a + 1;
var subtractOne = (a) => a - 1;
var multiByTwo = (a) => a * 2;
var divByTwo = (a) => a / 2;

let cool = compose(addOne, subtractOne, multiByTwo)

cool(6)
