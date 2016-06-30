// inheritance

function MurderRobot() {
  return {
    drive: () => console.log("Driving"),
    kill: () => console.log("Killing")
  }
}

function CleaningRobot() {
  return {
    drive: () => console.log("Driving"),
    clean: () => console.log("Cleaning")
  }
}

function Animal() {
  return {
    poop: () => console.log("Pooping")
  }
}

function Dog() {
  this.bark = () => console.log("Barking");
}
Dog.prototype = new Animal();

const reeser = new Dog()

function Cat() {
  this.meow = () => console.log("Meowing");
}
Cat.prototype = new Animal();

console.log(reeser.poop());


// composition with factory funcitons

const barker = (state) => ({
  bark: () => console.log("Woof, I am " + state.name)
})

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed,
  getPosition: () => state.position,
  getSpeed: () => state.speed,
  setSpeed: (speed) => state.speed = speed
})

const killer = (state) => ({
  kill: () => console.log("I will kill: " + state.toKill)
})

barker({name: "Reese"}).bark();

const murderRobotDog = (name) => {
  let state = {
    name,
    speed: 100,
    position: 0,
    toKill: "Wait! I dont kill"
  }

  let accessor = {
    getName: () => console.log(state.name)
  }

  return Object.assign(accessor, barker(state), driver(state), killer(state))
}

const rmd = murderRobotDog("MRD");

console.log(rmd);
