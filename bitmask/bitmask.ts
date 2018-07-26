/**
 * Set a bit at the index on
 * @param bits Array of bits
 * @param bitIndex Index of bit to set on
 * @returns New array with bit at index set
 */
const setBit = (bits: number[], bitIndex: number): number[] => {
  const newBits = bits.slice();

  newBits[newBits.length - bitIndex - 1] = 1;

  return newBits;
};

export {
  setBit,
}