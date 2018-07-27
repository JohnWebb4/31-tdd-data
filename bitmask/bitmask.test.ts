import { checkBit, setBit } from './bitmask';

describe('bitmask', () => {
  describe('check bit', () => {
    it('should be a function', () => {
      expect(checkBit).toBeInstanceOf(Function);
    });

    it('should return a number', () => {
      expect(typeof checkBit(0, 0)).toBe('number');
    });
  });

  describe('set bit', () => {
    it('should be a function', () => {
      expect(setBit).toBeInstanceOf(Function); 
    });

    it('should return number', () => {
      expect(typeof setBit(1, 0)).toBe('number');
    });

    it('should set bit', () => {
      expect(setBit(1, 0)).toEqual(1);
      expect(setBit(1, 1)).toEqual(3);
    });
  });
});