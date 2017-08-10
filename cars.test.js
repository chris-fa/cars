const cars = require('./cars');
const Car = cars.Car;
const CarFactory = cars.CarFactory;

const expect = require('chai').expect;

describe('CarFactory', () => {
  describe('#newBaseModel', () => {
    it('Returns a basic Car', () => {
      const expectedProperties = [
        'color', 'wheels', 'doors', 'engine'
      ];

      const car = CarFactory.newBaseModel('blue');
      const actualProperties = Object.keys(car);

      expect(car).to.be.an.instanceof(Car);
      expect(car.color).to.equal('blue');
      expect(car.wheels).to.equal(4);
      expect(car.doors).to.equal(4);
      expect(car.engine).to.equal('ABC Engine');

      expect(actualProperties).to.have.all.members(expectedProperties);
    });
  });

  describe('#newExModel', () => {
    it('Returns an EX model', () => {
      const expectedProperties = [
        'color', 'wheels', 'doors', 'engine', 'sateliteRadio'
      ];

      const car = CarFactory.newExModel('green');
      const actualProperties = Object.keys(car);

      expect(car).to.be.an.instanceof(Car);
      expect(car.color).to.equal('green');
      expect(car.wheels).to.equal(4);
      expect(car.doors).to.equal(4);
      expect(car.engine).to.equal('ABC Engine');
      expect(car.sateliteRadio()).to.equal('sateliteRadio');

      expect(actualProperties).to.have.all.members(expectedProperties);
    });
  });

  describe('#newLxModel', () => {
    it('Returns an LX model', () => {
      const expectedProperties = [
        'color', 'wheels', 'doors', 'engine', 'sateliteRadio', 'gps'
      ];

      const car = CarFactory.newLxModel('red');
      const actualProperties = Object.keys(car);

      expect(car).to.be.an.instanceof(Car);
      expect(car.color).to.equal('red');
      expect(car.wheels).to.equal(4);
      expect(car.doors).to.equal(4);
      expect(car.engine).to.equal('ABC Engine');
      expect(car.sateliteRadio()).to.equal('sateliteRadio');
      expect(car.gps()).to.equal('gps');

      expect(actualProperties).to.have.all.members(expectedProperties);
    });
  });

  describe('#newFxModel', () => {
    it('Returns an FX model', () => {
      const expectedProperties = [
        'color', 'wheels', 'doors', 'engine', 'sateliteRadio', 'gps', 'driveAssist'
      ];

      const car = CarFactory.newFxModel('yellow');
      const actualProperties = Object.keys(car);

      expect(car).to.be.an.instanceof(Car);
      expect(car.color).to.equal('yellow');
      expect(car.wheels).to.equal(4);
      expect(car.doors).to.equal(4);
      expect(car.engine).to.equal('ABC Engine');
      expect(car.sateliteRadio()).to.equal('sateliteRadio');
      expect(car.gps()).to.equal('gps');
      expect(car.driveAssist()).to.equal('driveAssist');

      expect(actualProperties).to.have.all.members(expectedProperties);
    });
  });
});
