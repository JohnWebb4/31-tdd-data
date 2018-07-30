import { LinkedList } from "./linkedlist";

/**
 * A Queue structure
 * First in First Out (FIFO)
 */
class Queue extends LinkedList {
  /**
   * Create a queue
   * @param initialValue Initial value of linked list
   */
  constructor(initialValue?: any) {
    // Create linked list with initial value
    super(initialValue);
  }

  /**
   * Add value to queue
   * @param value Value to add
   * @returns Value added
   */
  public enqueue(value: any): any {
    return 0;
  }

  /**
   * Remove value from queue
   * @returns Value removed
   */
  public dequeue(): any {
    return 0;
  }
}

export { Queue };
