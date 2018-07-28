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

/**
 * Clear bit at index
 * @param bits Bit array to clear
 * @param bitIndex Bit index to clear
 * @returns Value of bit array
 */
const clearBit = (bits: number, bitIndex: number): number => {
  // Create filter
  const filter = ~(1 << bitIndex);

  // Filter and return
  return bits & filter;
};

/**
 * Get least significant bit
 * @param bits Bit array to check
 * @returns Value of least significant bit
 */
const leastSignificant = (bits: number): number => {
  // Create filter
  const filter = ~bits + 1;

  // Filter and return
  return bits & filter;
};

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
 * Toggle bit
 * @param bits Bit array
 * @param bitIndex Bit index to toggle
 */
const toggleBit = (bits: number, bitIndex: number): number => {
  // Create filter
  const filter = 1 << bitIndex;

  // Filter an return
  return bits ^ filter;
};

export {
  checkBit,
  clearBit,
  leastSignificant,
  setBit,
  toggleBit,
};

