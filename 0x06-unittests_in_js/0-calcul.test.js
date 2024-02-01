const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(2.4, 5.7), 8);
    assert.strictEqual(calculateNumber(1.2, 3.8), 5);
    assert.strictEqual(calculateNumber(-2.4, -5.7), -8);
  });

  it('should handle edge cases', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
    assert.strictEqual(calculateNumber(0.1, 0.9), 1);
    assert.strictEqual(calculateNumber(-0.1, -0.9), -1);
  });
});
