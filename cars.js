// I know this is just a syntactic sugar for `function Car(...` but it
// looks nice.
//
// I was going to declare it as an arrow function but that approach felt
// like a "car constructor" function rather than a blueprint...
class Car {
  constructor({ color, wheels = 4, doors = 4, engine = 'ABC Engine' } = {}) {
    Object.assign(this, {
      // Maybe I should have put each on of them in a separate line and
      // end `engine,` with a comma, so that `git blame` can work in a
      // per-line basis?
      color, wheels, doors, engine
    });
  }
}


// For the "car models" I'm using object composition. Basically I'm avoiding class
// inheritance. However, since they're all cars (and not "similar" entities), maybe
// class inheritance wouldn't have been so bad?
//
// Also:
// - The functions return a string cause I wanted to test their invokation
// - I know the function's names aren't verb+noun (like `runGps`) but I'm
//   following what the email said

// Maybe I should have called `Object.assign({}, { sateliteRadio() {} }` to maintain
// consistency? I felt it would have been confusing at first sight.
const ExModel = {
  sateliteRadio() {
    return 'sateliteRadio';
  }
};

const LxModel = Object.assign({
    gps() {
      return 'gps';
    }
  },
  ExModel
);

const FxModel = Object.assign({
    driveAssist() {
      return 'driveAssist';
    }
  },
  ExModel,
  LxModel
);


// I designed the factory's public API to have a method for every type of
// car that it can produce. It provides a way for static checkers and IDEs
// to autocomplete and improves readability, so I picked it over an approach
// like `newModel('ex', 'green')`. Also it avoids adding overhead code like
// a `switch()` or a `this.models[model](color)` in order to find the right one.
const CarFactory = {
  newBaseModel(color) {
    return new Car({ color });
  },

  newExModel(color) {
    return Object.assign(this.newBaseModel(color), ExModel);
  },

  newLxModel(color) {
    return Object.assign(this.newBaseModel(color), LxModel);
  },

  newFxModel(color) {
    return Object.assign(this.newBaseModel(color), FxModel);
  },
};

module.exports.Car = Car;
module.exports.CarFactory = CarFactory;
