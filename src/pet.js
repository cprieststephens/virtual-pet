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
    if (this.fitness <= 6) {
        this.fitness += fitnessIncrementPerWalk;
    } else {this.fitness += (maxFitnessLevel - this.fitness);
    };
};

module.exports = Pet;