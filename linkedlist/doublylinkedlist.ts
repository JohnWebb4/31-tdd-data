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
   * Get value at index (return undefined if index is not out of bounds)
   * @param index Index in linked list
   * @returns Value at index
   */
  public get(index: number): any {
    // Count index
    let currentIndex = 0;

    // Set current node to head
    let node = this.head;

    try {
      while (currentIndex < index) {
        // Go to next node
        node = node.next;

        // Increment index counter
        currentIndex += 1;
      }

      // Return node value
      return node.value;
    } catch (e) {
      // If index out of range, return undefined
      return undefined;
    }

  }

  /**
   * Insert value into doubly linked list
   * @param value Value to insert
   * @param index Index to insert at (Defaults to tail)
   * @returns Value inserted
   */
  public insert(value: any, index?: number): any {
    if (index < 0) {
      throw new Error("Index must be greater than or equal to zero");
    }

    // Create node
    const doubleNode = new DoubleNode(value);

    // If empty list
    if (this.head === null && this.tail === null) {
      // Assign head and tail
      this.head = doubleNode;
      this.tail = doubleNode;

      return value;
    }

    // If no index
    if (index === undefined) {
      // Add to tail
      this.tail.next = doubleNode;
      doubleNode.prev = this.tail;
      this.tail = doubleNode;

      return value;
    }

    // If inserting at head
    if (index === 0) {
      // Add to head
      doubleNode.next = this.head;
      this.head.prev = doubleNode;
      this.head = doubleNode;

      return value;
    }

    // If index, add to index
    try {
      let currentIndex = 0;
      let node = this.head;

      while (currentIndex < index - 1) {
        // Get next node
        node = node.next;
        currentIndex += 1;
      }

      // Insert double node
      doubleNode.next = node.next;

      if (node.next !== null) {
        // If there is a next element
        // Assign previous to inserted value
        node.next.prev = doubleNode;
      }

      node.next = doubleNode;
      doubleNode.prev = node;

      return value;
    } catch (e) {
      // Alert index is out of bounds
      throw new RangeError("Index is out of bounds");
    }
  }

  /**
   * Remove value from doubly linked list
   * If no index is provided, removes from tail
   * @param index Index to remove from
   * @returns Value removed
   */
  public remove(index?: number): any {
    if (index === undefined) {
      // Remove from tail
      if (this.tail) {
        // If non-empty list remove tail
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail) {
          // If still non-empty list
          // set tail next to null
          this.tail.next = null;
        } else {
          // If empty list
          // update head
          this.head = null;
        }

        return value;
      } else {
        // Empty list return undefined
        return undefined;
      }
    } else if (this.head === null && this.tail === null) {
      // Removing from empty list
      // return undefined
      return undefined;
    } else if (index === 0 && this.head === this.tail) {
      // Removing element from
      // a one element list
      const value = this.head.value;

      this.head = null;
      this.tail = null;

      return value;
    } else if (index === 0) {
      // Removing head
      const value = this.head.value;

      this.head = this.head.next;
      this.head.prev = null;

      return value;
    }

    // Go to node at index
    let currentIndex = 0;
    let node = this.head;

    try {
      while (currentIndex < index) {
        // Till at index
        // go to next node
        node = node.next;
        currentIndex += 1;
      }

      if (node === this.tail) {
        // Removing from tail
        const value = this.tail.value;

        this.tail = this.tail.prev;
        this.tail.next = null;

        return value;
      }

      // Removing from an
      // intermediate node
      node.prev.next = node.next;
      node.next.prev = node.prev;

      // Return value
      return node.value;
    } catch (e) {
      // If could not find index
      // return undefined
      return undefined;
    }
  }

  /**
   * Get index of first occurrence of value in doubly linked list.
   * Returns -1 is not in list
   * @param value Value to search for
   * @returns Index of first occurrence in list or -1 if not in list
   */
  public search(value: any): number {
    // Declare index and node
    let index = 0;
    let node = this.head;

    while (node !== null) {
      // Search list for value
      if (node.value === value) {
        // If found first occurrence return index
        return index;
      }

      // Otherwise go to next node
      node = node.next;
      index += 1;
    }

    // End of list and not found
    // Return -1
    return -1;
  }
}

export {
  DoublyLinkedList,
};
