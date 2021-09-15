const assert = require('assert');
const lib = require('../lib');

describe('lib', () => {
  describe('#calculate', () => {
    it('two numbers', function() {
      assert.strictEqual(lib.calculate(1, 1), 2);      
    });
  });
});

