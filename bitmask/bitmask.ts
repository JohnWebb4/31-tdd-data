/**
 * Set a bit at the index on
 * @param bits Array of bits
 * @param bitIndex Index of bit to set on
 * @returns New array with bit at index set
 */
const setBit = (bits: number, bitIndex: number): number => {
  // Create filter
  const filter = 1 << bitIndex;

  // Filter and return
  return bits | filter;
};

/**
 * Check a bit is set
 * @param bits Bit array to check
 * @param bitIndex Bit index to check
 * @return Value if bit is set
 */
const checkBit = (bits: number, bitIndex: number): number => {
  // Create filter
  const filter = 1 << bitIndex;

  // Filter and return
  return bits & filter;
};

export {
  checkBit,
  setBit,
};
