function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const fitnessIncrementPerWalk = 4;
    const maxFitnessLevel = 10;
    this.fitness <= 6 ? this.fitness += fitnessIncrementPerWalk : this.fitness += (maxFitnessLevel - this.fitness);
};

Pet.prototype.feed = function() {
    const hungerDecrementPerFeed = 3;
    this.hunger >= 3 ? this.hunger -= hungerDecrementPerFeed : this.hunger -= this.hunger;
};


Pet.prototype.checkUp = function() {
    const minimumDesiredFitness = 3;
    const maximumDesiredHunger = 5;
    return (this.fitness <= minimumDesiredFitness && this.hunger < maximumDesiredHunger ? "I need a walk":
    this.hunger >= maximumDesiredHunger && this.fitness > minimumDesiredFitness ? "I am hungry":
    this.hunger >= maximumDesiredHunger && this.fitness <= minimumDesiredFitness ? "I am hungry AND I need a walk": "I feel great!");
};

//Pet.prototype.checkUp = function() {
    //const minimumDesiredFitness = 3;
    //const maximumDesiredHunger = 5
    //if (this.fitness <= minimumDesiredFitness && this.hunger < maximumDesiredHunger) {
        //return "I need a walk";
    //} else if (this.hunger >= maximumDesiredHunger && this.fitness > minimumDesiredFitness) {
        //return "I am hungry";
    //} else if (this.hunger >= maximumDesiredHunger && this.fitness <= minimumDesiredFitness) {
        //return "I am hungry AND I need a walk";
    //} else {
        //return "I feel great!";
    //}
//}
    
module.exports = Pet;