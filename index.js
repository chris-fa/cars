const cars = require('./cars');

const Car = cars.Car;
const CarFactory = cars.CarFactory;

// 1. Using the factory pattern, quickly write an app that will output
// cars, each one with 4 doors, 4 wheels, and a motor, but they differ
// in the color. Cars should follow a blueprint.
console.log('Problem 1');

['cyan', 'blue', 'purple', 'brown'].forEach(color => {
  const car = CarFactory.newBaseModel(color);

  console.log(`A ${car.color} car with ${car.wheels} wheels, ${car.doors} doors, and a ${car.engine} engine was constructed`);
});

// 2.Extend the factory so that we can provide different models of the
// same car: EX, LX, and FX. The EX car includes a satellite radio
// function (can be pseudo), the LX includes everything the EX has plus
// GPS function (can be pseudo), and the FX includes everything the LX
// and EX has, plus it has a drive assist function (can be pseudo).
// If no model is given to the factory, it should provide the base model
// we just described.
console.log('------------');
console.log('Problem 2');

const exCar = CarFactory.newExModel('red');
console.log(`EX model Satelite Radio: ${exCar.sateliteRadio()}`);
delete exCar; // No real reason, just because

const lxCar = CarFactory.newLxModel('blue');
console.log(`LX model Satelite Radio: ${lxCar.sateliteRadio()}`);
console.log(`LX model GPS: ${lxCar.gps()}`);
delete lxCar;

const fxCar = CarFactory.newFxModel('yellow');
console.log(`FX model Satelite Radio: ${fxCar.sateliteRadio()}`);
console.log(`FX model GPS: ${fxCar.gps()}`);
console.log(`FX model Drive Assist: ${fxCar.driveAssist()}`);


// 3. Refactor the following code the simplest way you can think of:
// if (someVariable === true) {
//  return doSomething();
// } else {
//  return doNothing();
// }
console.log('------------');
console.log('Problem 3');

const doSomething = () => console.log('Do something');
const doNothing = () => console.log('Do nothing');

// If by `doNothing()` you meant to say nothing is actually done (an empty else statement)
const problemNumber3_EmptyElseBlock = someVariable => someVariable === true && doSomething();
console.log('---Empty---');
problemNumber3_EmptyElseBlock(true);  // This prints
problemNumber3_EmptyElseBlock(false); // This doesn't print

// If you meant "execute different functions based on a conditional statement"
const problemNumber3_NonEmptyElseBlock = someVariable => someVariable === true ? doSomething() : doNothing();
console.log('---Non Empty---');
problemNumber3_NonEmptyElseBlock(true); // This prints
problemNumber3_NonEmptyElseBlock(false); // This also prints

// Since you used a === rather than a ==, I'm assuming the specification is for the conditional
// not to be a "truthy value" but to be "true". For that reason, and the fact that `doSomething()` doesn't
// necesarily return a truthy value, I chose a ternary operator rather than writing an expression like
// `someVariable && doSomething() || doNothing();`
