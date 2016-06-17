"use strict";

function Quoter(items) {
  this.items = items;
}

Quoter.prototype.getQuote = function(quantity) {
  let np = "Your order cannot be fulfilled, try lower quantity";

  if (this.items.length === 0) {
    return np;
  }

  let totalAvailableItems = this.items.reduce((sum, item, i) => {
    sum = sum + item.quantity;
    return sum
  }, 0)

  if (totalAvailableItems < quantity) {
    return np;
  }

  let quote = quoteCompile(this.items, quantity);

  return `Your best quote for ${quantity} items is ${quote.toFixed(2)}`

}

function quoteCompile(items, quantity){
  let bestItem = bestItemFinder(items, quantity);
  let unitPrice = bestItem.unitPrice || 0;
  let currentQuantity = quantity > bestItem.quantity ? bestItem.quantity : quantity;
  let sum = currentQuantity * unitPrice;
  quantity -= currentQuantity;
  console.log(`${currentQuantity} at ${unitPrice}`);
  if (quantity <= 0) {
    return sum
  } else {
    return sum + quoteCompile(items, quantity)
  }
}

function bestItemFinder(array, quantity){
  let bestItem = null;
  let biIndex = null;
  if (array.length === 0 || quantity === 0) return 0;
  array.forEach((item, i, arr) => {
    if (bestItem) {
      if (item.unitMargin >= bestItem.unitMargin) {
        if (item.unitMargin === bestItem.unitMargin && item.unitPrice > bestItem.unitPrice) {
          bestItem = item
          biIndex = i
        } else if (item.unitMargin > bestItem.unitMargin) {
          bestItem = item
          biIndex = i
        }
      }
    } else {
      bestItem = item
      biIndex = i
    }
  })
  array.splice(biIndex, 1)
  return bestItem
}

// var quoter = new Quoter([{quantity: 10, unitPrice: 100, unitMargin: 1}, {quantity: 10, unitPrice: 110, unitMargin: 1.1}]);
// var quoter = new Quoter([]);
// var quoter = new Quoter([{quantity: 10, unitPrice: 100, unitMargin: 1.1}, {quantity: 10, unitPrice: 110, unitMargin: 1}]);
var quoter = new Quoter([{quantity: 10, unitPrice: 300, unitMargin: 1}, {quantity: 10, unitPrice: 130, unitMargin: 3}, {quantity: 10, unitPrice: 120, unitMargin: 2}]);


console.log(quoter.getQuote(10));
