const MINIMUM_AGE = 0;
const MINIMUM_HUNGER = 0;
const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = MINIMUM_AGE;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        const MAXIMUM_AGE = 30;
        const MAXIMUM_HUNGER = 10;
        const MINIMUM_FITNESS = 0;
        return this.age < MAXIMUM_AGE && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    }
  };

Pet.prototype.growUp = function() {
    const AGE_INCREMENT = 1;
    const HUNGER_INCREMENT = 5;
    const FITNESS_DECREMENT = 3;
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.age += AGE_INCREMENT;
    this.hunger += HUNGER_INCREMENT;
    this.fitness -= FITNESS_DECREMENT;
};

Pet.prototype.walk = function() {
    const FITNESS_INCREMENT_PER_WALK = 4;
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.fitness <= MAXIMUM_FITNESS - FITNESS_INCREMENT_PER_WALK ? this.fitness += FITNESS_INCREMENT_PER_WALK : this.fitness = MAXIMUM_FITNESS;
};

Pet.prototype.feed = function() {
    const HUNGER_DECREMENT_PER_FEED = 3;
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.hunger >= HUNGER_DECREMENT_PER_FEED ? this.hunger -= HUNGER_DECREMENT_PER_FEED : this.hunger = MINIMUM_HUNGER;
};

Pet.prototype.checkUp = function() {
    if (!this.isAlive) return "Your pet is no longer alive :(";

    const MINIMUM_DESIRED_FITNESS = 3;
    const checkFitness = this.fitness <= MINIMUM_DESIRED_FITNESS;
    const MAXIMUM_DESIRED_HUNGER = 5;
    const checkHunger = this.hunger >= MAXIMUM_DESIRED_HUNGER;
    const hungryString = "I am hungry";
    const walkString = "I need a walk";

    if (checkFitness && checkHunger) return `${hungryString} AND ${walkString}`;
    if (checkFitness) return walkString;
    if (checkHunger) return hungryString;
    return "I feel great!";
};

Pet.prototype.adoptChild = function(child) {
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.children.push(child);
};

Pet.prototype.haveBaby = function(childName) {
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    const child = new Pet(childName);
    this.children.push(child);
};
    
module.exports = Pet;

