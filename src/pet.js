function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function() {
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const fitnessIncrementPerWalk = 4;
    const maximumFitnessLevel = 10;
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.fitness <= 6 ? this.fitness += fitnessIncrementPerWalk : this.fitness += (maximumFitnessLevel - this.fitness);
};

Pet.prototype.feed = function() {
    const hungerDecrementPerFeed = 3;
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.hunger >= 3 ? this.hunger -= hungerDecrementPerFeed : this.hunger -= this.hunger;
};

Pet.prototype.checkUp = function() {
    const minimumDesiredFitness = 3;
    const maximumDesiredHunger = 5;
    return !this.isAlive ? "Your pet is no longer alive :(" :
    this.fitness <= minimumDesiredFitness && this.hunger < maximumDesiredHunger ? "I need a walk":
    this.hunger >= maximumDesiredHunger && this.fitness > minimumDesiredFitness ? "I am hungry":
    this.hunger >= maximumDesiredHunger && this.fitness <= minimumDesiredFitness ? "I am hungry AND I need a walk": 
    "I feel great!";
};

Pet.prototype.adoptChild = function(child) {
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    this.children.push(child);
};

Pet.prototype.haveBaby = function(childName) {
    if (!this.isAlive) throw new Error("Your pet is no longer alive :(");
    const child = new Pet(childName);
    this.children[0] = child;
};
    
module.exports = Pet;