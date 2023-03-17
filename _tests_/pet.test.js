const Pet = require('../src/pet');

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });
  it("has an initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
  it("has an initial hunger of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.hunger).toEqual(0);
  });
  it("has an initial fitness of 10", () => {
    const pet = new Pet("Fido");
    expect(pet.fitness).toEqual(10);
  });
  it("sets the children property as an empty array", () => {
    const pet = new Pet ("Fido");
    expect(pet.children).toEqual([]);
  })
});

describe("isAlive", () => {
    it("returns false if fitness is less than or equal to 0", () => {
      const pet = new Pet("Fido");
      pet.fitness = 0;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false)
    });
    it("returns false if hunger is greater than or equal to 10", () => {
      const pet = new Pet("Fido");
      pet.hunger = 10;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false)
    });
    it("returns false if age is greater than or equal to 30", () => {
      const pet = new Pet("Fido");
      pet.age = 30;
      pet.isAlive;
      expect(pet.isAlive).toEqual(false)
    });
    it("returns true if fitness is greater than 0, hunger is less than 10 and age is less than 30", () => {
      const pet = new Pet("Fido");
      pet.fitness = 9;
      pet.hunger = 5;
      pet.age = 14;
      expect(pet.isAlive).toEqual(true)
    });
  });

describe("growUp", () => {
  it("throws the exception 'Your pet is no longer alive:(' if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");

    pet.hunger = 10;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");

    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it("increments the hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it("decrements the fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("throws the exception 'Your pet is no longer alive:(' if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    
    pet.hunger = 10;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    
    pet.age = 30;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
  it("increments the fitness by 4 when the fitness level is less than or equal to 6", () => {
    const pet = new Pet("Fido");
    pet.fitness = 6;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it("increments the fitness by (10-fitness level) when the fitness level is greater than 6", () => {
    const pet = new Pet("Fido");
    pet.fitness = 7;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("throws the exception 'Your pet is no longer alive:(' if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
        
    pet.hunger = 10;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
        
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("decrements the hunger by 3 when the hunger level is greater than or equal to 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 9;
    pet.feed();
    expect(pet.hunger).toEqual(6);
  });
  it("decrements the hunger level by the value of the hunger level if less than 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe("checkUp", () => {
  it("returns 'Your pet is no longer alive :(' if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(");

    pet.hunger = 10;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(");

    pet.age = 30;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("Your pet is no longer alive :(");
  });
  it("returns 'I need a walk' when fitness is less than or equal to 3 and hunger is less than 5", () => {
    const pet = new Pet("Fido");
    pet.fitness = 3;
    pet.hunger = 2;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I need a walk");
  });
  it("returns 'I am hungry' when hunger is greater than or equal to 5 and fitness is greater than 3", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am hungry")
  });
  it("returns 'I am hungry AND I need a walk when the fitness is less than or equal to 3 and the hunger is greater than or equal to 5", () => {
    const pet = new Pet("Fido");
    pet.fitness = 3;
    pet.hunger = 5;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk")
  });
  it("returns 'I feel great' when fitness is greater than 3 and hunger is less than 5", () => {
    const pet = new Pet("Fido");
    pet.fitness = 4;
    pet.hunger = 4;
    pet.checkUp();
    expect(pet.checkUp()).toEqual("I feel great!")
  });
});

describe("adoptChild", () => {
  it("adds child object to parent object's children array", () => {
    const parent = new Pet("Parent");
    const child = new Pet("Child");
    parent.adoptChild(child);
    expect(parent.children).toEqual([child]);
  });
});

