import { DoubleNode } from "./doublenode";

class DoublyLinkedList {
  /**
   * Head (Beginning) of list
   */
  public head: DoubleNode = null;

  /**
   * Tail (End) of list
   */
  public tail: DoubleNode = null;

  /**
   * Create a doubly linked list
   * @param initialValue Initial value for list
   */
  constructor(initialValue?: any) {
    if (initialValue !== undefined) {
      // If initial value assign value
      const vertex = new DoubleNode(initialValue);

      // Assign head and tail
      this.head = vertex;
      this.tail = vertex;
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
   * Insert value into doubly linked list
   * @param value Value to insert
   * @param index Index to insert at (Defaults to tail)
   * @returns Value inserted
   */
  public insert(value: any, index?: number): any {
    return 0;
  }

  /**
   * Remove value from doubly linked list
   * If no index is provided, removes from tail
   * @param index Index to remove from
   * @returns Value removed
   */
  public remove(index?: number): any {
    return 0;
  }

  /**
   * Get index of first occurrence of value in doubly linked list.
   * Returns -1 is not in list
   * @param value Value to search for
   * @returns Index of first occurrence in list or -1 if not in list
   */
  public search(value: any): number {
    return 0;
  }
}

export {
  DoublyLinkedList,
};
