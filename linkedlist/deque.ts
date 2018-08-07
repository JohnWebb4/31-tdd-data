import { DoublyLinkedList } from "./doublylinkedlist";

/**
 * A Doubly Linked Queue.
 * Elements may be added
 * or removed from the
 * head or tail.
 */
class Deque extends DoublyLinkedList {
  /**
   * Create Doubly Linked Queue (Deque)
   * @param initialValue (Optional) Initial value for deque
   */
  constructor(initialValue?: any) {
    // If initial value pass to super
    // otherwise call super
    if (initialValue !== undefined) {
      super(initialValue);
    } else {
      super();
    }
  }

  /**
   * Insert value to head of deque
   * @param value Value to insert
   * @returns Value inserted
   */
  public insertHead(value: any): any {
    return this.insert(value, 0);
  }

  /**
   * Insert value to head of deque
   * @param value Value to insert
   * @returns Value inserted
   */
  public insertTail(value: any): any {
    return this.insert(value);
  }

  /**
   * Remove value from head of deque
   * @returns Value at head
   */
  public removeHead(): any {
    return this.remove(0);
  }

  /**
   * Remove value from tail of deque
   * @returns Value at tail
   */
  public removeTail(): any {
    return this.remove();
  }

}

export {
  Deque,
};
