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
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");

    pet.hunger = 10;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");

    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });
  it("increases age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });
  it("increases hunger by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });
  it("decreases fitness by 3", () => {
    const pet = new Pet("Fido");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe("walk", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    
    pet.hunger = 10;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
    
    pet.age = 30;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });
  it("increases fitness by 4 when the fitness level is less than or equal to 6", () => {
    const pet = new Pet("Fido");
    pet.fitness = 6;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
  it("increases fitness up to a maximum value of 10 when the fitness level is greater than 6", () => {
    const pet = new Pet("Fido");
    pet.fitness = 7;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe("feed", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
        
    pet.hunger = 10;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
        
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("decreases hunger by 3 when hunger is greater than or equal to 3", () => {
    const pet = new Pet("Fido");
    pet.hunger = 9;
    pet.feed();
    expect(pet.hunger).toEqual(6);
  });
  it("decreases hunger to minimum value of 0 if hunger is less than 3", () => {
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
  it("returns 'I am hungry AND I need a walk' when fitness is less than or equal to 3 and hunger is greater than or equal to 5", () => {
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
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
            
    pet.hunger = 10;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
            
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("adds child object to parent object's children array", () => {
    const pet = new Pet("Fido");
    const baby = new Pet("Daisy");
    pet.adoptChild(baby);
    expect(pet.children).toEqual([{ name: "Daisy", age: 0, hunger: 0, fitness: 10, children: [] }]);
  });
});

describe("haveBaby", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");
    pet.fitness = 0;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
            
    pet.hunger = 10;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
            
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("creates child object inside existing pet objects's children array", () => {
    const pet = new Pet("Fido");
    pet.haveBaby("Billy");
    expect(pet.children).toEqual([{ name: "Billy", age: 0, hunger: 0, fitness: 10, children: [] }]);
  });
});

