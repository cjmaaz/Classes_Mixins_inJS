class Mammals {
  constructor(species) {
    this.species = species;
  }
  breathe() {
    return `Hi, I belogs to ${this.species} species and I can breathe`;
  }
  walk() {
    return `Hi, I belogs to ${this.species} species and I can walk`;
  }
}

class Dog extends Mammals {
  constructor(species, name) {
    super(species);
    this.legs = 4;
    this.name = name;
  }
  aboutMe() {
    return `Hi, I am ${this.name} and I have ${this.legs} legs and belongs to ${this.species} species`;
  }
}

class Human extends Mammals {
  constructor(species, name) {
    super(species);
    this.legs = 2;
    this.name = name;
  }
  aboutMe() {
    return `Hi, I am ${this.name} and I have ${this.legs} legs and belongs to ${this.species} species`;
  }
}

let tommy = new Dog('labrador', 'Tommy');
let john = new Human('Homo Sapiens', 'John');

console.log(tommy.breathe());
console.log(tommy.walk());
console.log(tommy.aboutMe());

console.log(john.breathe());
console.log(john.walk());
console.log(john.aboutMe());