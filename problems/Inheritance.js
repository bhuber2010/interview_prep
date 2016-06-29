require('node-monkey').start({})

// one method

function Bear(type){
  this.type = type;
}
Bear.prototype.growl = () => console.log("grrrr")

function Grizzly(){
  Bear.call(this, "grizzly")
}

Grizzly.prototype = Object.create(Bear.prototype)

const grizzly = new Grizzly()
const polar = new Bear("polar")

// console.log(grizzly, polar);


// another method

function Bear2(type){
  this.type = type;
  this.legs = 4;
}
Bear2.prototype.growl = () => console.log("grrrr")

function Grizzly2() {
  this.size = "large"
}
Grizzly2.prototype = new Bear2("grizzly");
Grizzly2.prototype.growl = () => console.log("Im a Grizzly... grrrr");

const grizzly2 = new Grizzly2()
const polar2 = new Bear2("polar")

console.log("Grizzly: ", grizzly2.growl());

console.log("Polar: ", polar2);
