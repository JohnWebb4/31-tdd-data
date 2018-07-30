import { LinkedList } from "./linkedlist";

/**
 * A Stack class
 * First in Last Out (FILO)
 */
class Stack extends LinkedList {
  /**
   * Create a stack
   * @param initialValue Initial value of stack
   */
  constructor(initialValue?: any) {
    // Create linked list with initial value
    super(initialValue);
  }

  /**
   * Remove value from stack
   * @returns Value removed
   */
  public pop(): any {
    return 0;
  }

  /**
   * Add value to stack
   * @param value Value to add
   * @returns Value added to stack
   */
  public push(value: any): any {
    return 0;
  }
}

export { Stack };
