
// classes es6
class Dog {
  constructor() {
    this.sound = "woof"
  }
  talk(){
    console.log(this.sound);
  }
}

const sniffles = new Dog();
sniffles.talk() // "woof"

// factory function
const dog = () => {
  const sound = 'woof'
  return {
    talk: () => console.log(sound)
  }
}

const reeser = dog();
reeser.talk(); // "woof"
