import { setBit } from './bitmask';

describe('bitmask', () => {
  describe('set bit', () => {
    it('should be a function', () => {
      expect(setBit).toBeInstanceOf(Function); 
    });

    it('should return array', () => {
      expect(typeof setBit(1, 0)).toBe('number');
    });

    it('should set bit', () => {
      expect(setBit(1, 0)).toEqual(1);
      expect(setBit(1, 1)).toEqual(3);
    });
  });
});