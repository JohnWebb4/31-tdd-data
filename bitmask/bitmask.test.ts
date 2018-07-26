import { setBit } from './bitmask';

describe('bitmask', () => {
  describe('set bit', () => {
    it('should be a function', () => {
      expect(setBit).toBeInstanceOf(Function); 
    });

    it('should return array', () => {
      expect(setBit([0], 0)).toBeInstanceOf(Array);
    });

    it('should set bit', () => {
      expect(setBit([0, 1, 1, 0], 3)).toEqual([1, 1, 1, 0]);
      expect(setBit([0, 0, 0, 0], 1)).toEqual([0, 0, 1, 0]);
    });
  });
});