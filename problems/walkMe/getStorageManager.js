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
