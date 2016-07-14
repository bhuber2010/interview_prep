"use strict";


class getStorageManager {
  constructor(storeName) {
    this.storeName = storeName;
    this.store = {};
    this.browserStore = JSON.parse(localStorage.getItem(this.storeName));
    if(!this.browserStore){
      localStorage.setItem(storeName, JSON.stringify(this.store))
    } else {
      this.store = this.browserStore
    }
  }

  set(key, value, expiry) {
    var newStore = {};
    newStore[key] = value;
    this.store = JSON.parse(localStorage.getItem(this.storeName));
    newStore = Object.assign(this.store, newStore)
    localStorage.setItem(this.storeName, JSON.stringify(newStore));
    this.store = newStore;
    if (expiry) {
      setTimeout(() => {
        this.remove(key)
      }, expiry * 1000)
    }
  }

  get(key) {
    var result;
    var wmObj = JSON.parse(localStorage.getItem(this.storeName));
    result = wmObj[key] || undefined;
    return result;
  }

  remove(key) {
    var currStore = JSON.parse(localStorage.getItem(this.storeName));
    delete currStore[key];
    localStorage.setItem(this.storeName, JSON.stringify(currStore));
    this.store = currStore;
  }

  setProperty(key , property, value, expiry) {
    var result = this.get(key)
    if (result == "undefined") {
      result = undefined;
    }
    console.log("Our result is: ", result)
    switch (typeof result) {
      case "object":
        result[property] = value;
        return this.set(key, result, expiry)
        break;

      case "undefined":
        var obj = {};
        obj[property] = value;
        return this.set(key, obj, expiry)
        break;

      default:
        throw new Error(`The key ${key} is not an object. This won't work!`)

    }
  }

}

var walkMeStorage =  new getStorageManager("walkMe")

console.log(walkMeStorage.set(1, "hello", 2));
console.log(walkMeStorage.set(2, "second"));
console.log(walkMeStorage.set("three", "third"));
// console.log(walkMeStorage.store);
// console.log(walkMeStorage.remove(2));
// console.log(walkMeStorage.store);

walkMeStorage.setProperty(4, "objProperty1", 1) // sets 4 as an object
walkMeStorage.setProperty(4, "objProperty2", 2) // adds to the 4 object

setTimeout(function(){
  console.log("1 should be gone now: ", walkMeStorage.get(1))
}, 4000);                         // should return undefined

walkMeStorage.setProperty(2, "objProperty2", 2) // error as 2 is a string
