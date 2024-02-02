const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 2.4, 5.7), 8);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.8), 5);
      assert.strictEqual(calculateNumber('SUM', -2.4, -5.7), -8);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the result of subtracting rounded b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.4), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 3.8, 1.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', -5.7, -2.4), -3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the result of dividing rounded a by rounded b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
      assert.strictEqual(calculateNumber('DIVIDE', 8, 4), 2);
      assert.strictEqual(calculateNumber('DIVIDE', -10, -2), 5);
    });

    it('should return "Error" if rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', -5, 0), 'Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for an invalid type', () => {
      assert.throws(() => calculateNumber('INVALID', 2, 3), {
        message: 'Invalid type. Supported types are SUM, SUBTRACT, and DIVIDE.'
      });
    });
  });
});
