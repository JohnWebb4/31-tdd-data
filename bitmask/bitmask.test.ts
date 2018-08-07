import { checkBit, clearBit, leastSignificant, setBit, toggleBit} from "./bitmask";

describe("Bitmask", () => {
  describe("Check bit", () => {
    test("is a function", () => {
      expect(checkBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof checkBit(0, 0)).toBe("number");
    });

    test("returns checked bit", () => {
      expect(checkBit(0, 0)).toEqual(0);
      expect(checkBit(1, 1)).toEqual(0);
      expect(checkBit(2, 1)).toEqual(2);
    });
  });

  describe("Clear bit", () => {
    test("is a function", () => {
      expect(clearBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof clearBit(0, 0)).toBe("number");
    });

    test("clears bit", () => {
      expect(clearBit(1, 0)).toBe(0);
      expect(clearBit(2, 0)).toBe(2);
      expect(clearBit(3, 1)).toEqual(1);
    });
  });

  describe("Least significant bit", () => {
    test("is a function", () => {
      expect(leastSignificant).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof leastSignificant(0)).toBe("number");
    });

    test("returns least significant bit", () => {
      expect(leastSignificant(0)).toEqual(0);
      expect(leastSignificant(1)).toEqual(1);
      expect(leastSignificant(10)).toEqual(2);
    });
  });

  describe("Set bit", () => {
    test("is a function", () => {
      expect(setBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof setBit(1, 0)).toBe("number");
    });

    test("sets bit", () => {
      expect(setBit(1, 0)).toEqual(1);
      expect(setBit(1, 1)).toEqual(3);
    });
  });

  describe("Toggle bit", () => {
    test("is a function", () => {
      expect(toggleBit).toBeInstanceOf(Function);
    });

    test("returns a number", () => {
      expect(typeof toggleBit(0, 0)).toBe("number");
    });

    test("returns toggled bit", () => {
      expect(toggleBit(0, 0)).toEqual(1);
      expect(toggleBit(1, 0)).toEqual(0);
      expect(toggleBit(2, 0)).toEqual(3);
    });
  });
});
