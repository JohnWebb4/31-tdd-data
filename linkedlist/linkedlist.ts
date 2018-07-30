import { SingleVertex } from "./singlevertex";

/**
 * A Singly Linked List
 */
class LinkedList {
  /**
   * Beginning of linked list
   */
  public head: SingleVertex;

  /**
   * End of linked list
   */
  public tail: SingleVertex;

  /**
   * Create a linked list
   * @param initialValue Optional initial value
   */
  constructor(initialValue?: any) {
    if (initialValue !== undefined) {
      // If given an initial value,
      // Create vertex
      const vertex = new SingleVertex(initialValue);
      // Assign to head and tail
      this.head = vertex;
      this.tail = vertex;
    } else {
      // No initial value
      // Create empty head and tail
      this.head = null;
      this.tail = null;
    }
  }

  /**
   * Get value at index
   * @param index Index in linked list
   * @returns Value at index
   */
  public get(index: number): any {
    return 0;
  }

  /**
   * Insert value into linked list
   * @param value Value to insert
   * @param index Index to insert at (Defaults to tail)
   * @returns Index inserted at
   */
  public insert(value: any, index?: number): number {
    return 0;
  }

  /**
   * Remove value from list
   * @param index Index to remove from
   * @returns Value removed
   */
  public remove(index: number): any {
    return 0;
  }

  /**
   * Get index of first occurrence of value in linked list.
   * Returns -1 is not in list
   * @param value Value to search for
   * @returns Index of first occurrence in list or -1 if not in list
   */
  public search(value: any): number {
    return 0;
  }
}

// Export
export { LinkedList };
