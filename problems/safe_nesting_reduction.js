'use strict';

const Reese = {
  name: "Reeser",
  breed: "Chow/Lab mix",
  parents: {
    dad: {
      name: "Brian"
    }
  }
}

const Sasha = {
  name: "Sasha",
  breed: "Chow mix",
  parents: {
    dad: {
      name: "Curt"
    },
    mom: {
      name: "Katie"
    }
  }
}

const Polo = {
  name: "Polo",
  breed: "Lab",
  parents: {
    dad: {
      name: "Amar"
    },
    mom: {
      name: "Rashmi"
    }
  }
}

const dogs = [Reese, Sasha, Polo];

function parentsName(dog) {
  let dad = "parents.dad.name".split(".").reduce(function(obj, field, i, path){
    if (obj) {
      return obj[field];
    }
    return `No ${path[i - 1]}`;
  }, dog)

  let mom = "parents.mom.name".split(".").reduce(function(obj, field, i, path){
    if (obj) {
      return obj[field];
    }
    return `No ${path[i - 1]}`;
  }, dog)

  return `${dad}, ${mom}`;
}

dogs.forEach(dog => console.log(`${dog.name}: Parents names: ${parentsName(dog)}`))
