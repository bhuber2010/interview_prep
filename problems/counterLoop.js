"use strict";

var elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var fns = [];

// The issue case setup
//
// for(var i = 0; i < elements.length; i++) {
//   var el = elements[i];
//   fns.push(function() {
//      console.log(el);
//   });
// }
//
// fns[4]();

// Example issue number two
//
// for(var i = 0; i < elements.length; i++) {
//   fns.push(function() {
//     console.log(i);
//   })
// }
//
// fns[2]();


for(var i = 0; i < elements.length; i++) {
  (function(i){
    fns.push(function() {
      console.log(i);
    })
  })(i)
}

fns[6]();
