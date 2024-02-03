const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 2.4, 5.7)).to.equal(8);
      expect(calculateNumber('SUM', 1.2, 3.8)).to.equal(5);
      expect(calculateNumber('SUM', -2.4, -5.7)).to.equal(-8);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the result of subtracting rounded b from a', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
      expect(calculateNumber('SUBTRACT', -5, -2)).to.equal(-3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the result of dividing rounded a by rounded b', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
      expect(calculateNumber('DIVIDE', -10, -2)).to.equal(5);
    });

    it('should return "Error" if rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', -5, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      expect(() => calculateNumber('INVALID', 2, 3)).to.throw('Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.');
    });
  });
});
