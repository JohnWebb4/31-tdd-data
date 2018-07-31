import { LinkedList } from "./linkedlist";

/**
 * A Stack class
 * First in Last Out (FILO)
 */
class Stack extends LinkedList {
  /**
   * Size of stack
   */
  public size: number;

  /**
   * Create a stack
   * @param initialValue Initial value of stack
   */
  constructor(initialValue?: any) {
    // Create linked list with initial value
    super(initialValue);

    // Set size to 1 if initial value, else 0
    this.size = initialValue !== undefined ? 1 : 0;
  }

  /**
   * Remove value from stack
   * @returns Value removed
   */
  public pop(): any {
    // Remove at head
    const value = this.remove(this.size - 1);

    // Decrement size
    this.size -= 1;

    // Return value
    return value;
  }

  /**
   * Add value to stack
   * @param value Value to add
   * @returns Value added to stack
   */
  public push(value: any): any {
    // Insert value
    this.insert(value);

    // Increment size
    this.size += 1;

    // Return value
    return value;
  }
}

export { Stack };
