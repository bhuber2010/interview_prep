var counter = (function(){
  var i = 0;

  return {
    get: function(){
      return i;
    },
    set: function( val ){
      i = val;
      return i;
    },
    increment: function() {
      return ++i;
    }
  };
}());

// `counter` is an object with properties, which in this case happen to be
// methods.

console.log(counter.get()); // 0
console.log(counter.set(3));
console.log(counter.increment()); // 4
console.log(counter.increment()); // 5
console.log(counter.get()); // 5
