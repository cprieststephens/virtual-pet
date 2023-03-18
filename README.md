# Virtual Pet

I buit this project using JavaScript as a project for Command Shift bootcamp. I wrote the unit tests using Jest. 

Features:
- Users can create a virtual pet and give it a name.
- The pet ages and becomes hungrier and less fit.
- Users can walk, feed and talk to their pet.
- The pet can adopt a child or have a baby.
- The pet dies once it reaches 30 days old or doesn't receive enough food or exercise.

## Getting started

### Clone this repository
- Create a fork of this repo.
- Clone your copy of the repo using the command: `git clone git@github.com:*your-github-username*/*repo-name*.git`

### Install the project dependencies

Use the command `npm install` to download the project's dependencies and create a node_modules folder. 

### Running the tests

Use the command `npm run test` to run the Jest tests for this project.

### How to play

- To open the Node REPL from your terminal, type `node` and press `return`.
- Return `const Pet = require('./src/pet');` to access the file where project's code is stored.
- To create and name your pet return `const *objectName* = new Pet("*petName*");` e.g. `const pet = new Pet("Fido");`
- To make your pet older return `*objectName*.growUp();` e.g. `pet.growUp();`. This also makes it hungrier and less fit.
- To check if your pet needs feeding or walking return `*objectName*.checkUp();` e.g. `pet.checkUp();`. Your pet will return a message to let you know what it needs. 
- To feed your pet return `*objectName*.feed();` e.g. `pet.feed();`.
- To walk your pet return `*objectName*.walk();` e.g. `pet.walk();`.
- Keep checking in with your pet as it will die without enough food and exercise or once it reaches 30.
- Your pet can also have children. The first way to do this is to create and name a second pet by returning `const *childObjectName* = new Pet("*childPetName*");` e.g. `const child = new Pet("Daisy");` followed by `*objectName*.adoptChild(*childObjectName*);` e.g. `pet.adoptChild(child);`. If you return the name of your first pet object e.g. `pet;`, its `children` array should contain the new pet you created.
- The second way is to return `*objectName*.haveBaby(*"childPetName"*);` e.g `pet.haveBaby("Billy");`. Again, you should see the new pet in its parent's `children` array.
- To exit the Node REPL use `ctrl` + `d`.

Author: Camilla Priest-Stephens with guidance from Command Shift. 