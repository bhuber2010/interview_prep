function hash(string) {
  var hash = 7
  var letters = "acdfgilmnoprstuw"
  for(var i = 0; i < string.length; i++){
	   hash = (hash * 23 + letters.indexOf(string[i]));
  }
  return hash
}


function unhash(num) {
  var letters = "acdfgilmnoprstuw"
  var word = [];

  while (num > 7) {
    var i = -1;
    while (i < 16) {
      var previous = (num - i) / 23;
      if (previous % 1 === 0 && i !== -1) {
        word.unshift(letters[i])
        num = previous;
        break
      }
      i += 1;
    }
  }
  return word.join('');
}

var test = "tortilla" == unhash(hash("tortilla"));
console.log(test);

// hash("tortilla");
// unhash(593846452632);

console.log(unhash(292681030017238));
