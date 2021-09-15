import { calculate } from '../lib.js'

describe('lib', () => {
  describe('#calculate', () => {
    it('two numbers', () => {
      return calculate(1, 1) == 2;
    });
  });
});

