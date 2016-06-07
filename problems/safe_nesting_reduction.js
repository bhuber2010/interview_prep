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
  const paths = [
    "parents.dad.name",
    "parents.mom.name"
  ];

  const names = paths.map(function(path){
    return path.split(".").reduce(function(obj, field, i, path){
      if (obj) {
        return obj[field];
      }
      return `No ${path[i - 1]}`;
    }, dog)
  })

  return `${names[0]}, ${names[1]}`;
}

dogs.forEach(dog => console.log(`${dog.name}: Parents names: ${parentsName(dog)}`))
