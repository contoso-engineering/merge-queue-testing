import { strictEqual } from 'assert';
import { calculate } from '../lib.js'

describe('lib', () => {
  describe('#calculate', () => {
    it('two numbers', function() {
      strictEqual(calculate(1, 1), 2);      
    });
  });
});

