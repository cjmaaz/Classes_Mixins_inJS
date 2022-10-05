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

const SocialClass = superclass =>
  class SocialClass extends superclass {
    constructor(classType, species, name) {
      super(species, name);
      this.classType = classType;
    }
    classInfo() {
      return `Hi I am ${this.name} and I belong to ${this.classType} social class.`;
    }
  };

class ClassedHuman extends SocialClass(Human) {
  constructor(classType, species, name) {
    super(classType, species, name);
  }
}

let tommy = new Dog('labrador', 'Tommy');
let john = new Human('Homo Sapiens', 'John');

let adam = new ClassedHuman('Working', 'Homo Sapiens', 'John');
console.log(adam.breathe());
console.log(adam.aboutMe());
console.log(adam.classInfo());