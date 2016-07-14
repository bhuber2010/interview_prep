"use strict";

var localStorage;

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
}

class getStorageManager {
  constructor() {
    this.store = new LocalStorage('./storage');
  }

  set(key , value, expiry) {
    this.store.setItem(key, value);
    if (expiry) {
      setTimeout(() => {
        this.store.removeItem(key)
      }, expiry * 2000)
    }
  }

  get(key) {
    var result = this.store.getItem(key);
    if(result === null) result = undefined
    return result
  }

  remove(key) {
    this.store.removeItem(key);
  }

  setProperty(key , property, value, expiry) {
    var result = this.get(key)
    if (result == "undefined") {
      result = undefined;
    }
    switch (typeof result) {
      case "object":
        result.property = value;
        return this.set(key, result, expiry)
        break;

      case "undefined":
        var obj = {property: value}
        return this.set(key, obj, expiry)
        break;

      default:
        throw new Error(`The key ${key} is not an object. This won't work!`)

    }
  }

}

var walkMeStorage =  new getStorageManager()

// walkMeStorage.set(1, "test1", 5)
// walkMeStorage.set(2, "test2")
//
// console.log(walkMeStorage);
//
// console.log(walkMeStorage.get(1)); // return "test1"
// console.log(walkMeStorage.get(2)); // return "test2"
// console.log(walkMeStorage.remove(2)); // removes 2: "test2"
// console.log(walkMeStorage.get(2)); // should return undefined
//
// setTimeout(function(){
//   console.log(walkMeStorage.get(1))
// }, 4000);                         // should return undefined

walkMeStorage.setProperty(11, "objKey", "Value1", 5);

console.log(walkMeStorage.get(11));
console.log("Typeof line81: ", walkMeStorage.get(11));
walkMeStorage.setProperty(11, "objKey2", "Value2");

var get5 = walkMeStorage.get(11);
for (var prop in get5) {
  console.log(prop);
}

setTimeout(function(){
  console.log(walkMeStorage.get(11));
}, 8000)
