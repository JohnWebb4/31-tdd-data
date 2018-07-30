import { SingleNode } from "./singlenode";

/**
 * A Singly Linked List
 */
class LinkedList {
  /**
   * Beginning of linked list
   */
  public head: SingleNode;

  /**
   * End of linked list
   */
  public tail: SingleNode;

  /**
   * Create a linked list
   * @param initialValue Optional initial value
   */
  constructor(initialValue?: any) {
    if (initialValue !== undefined) {
      // If given an initial value,
      // Create vertex
      const vertex = new SingleNode(initialValue);
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
    if (index < 0) {
      throw new Error("Index must be greater than or equal to zero");
    }

    // Declare current node
    let node = this.head;

    // Create index counter
    let indexCount = 0;

    try {
      while (indexCount < index) {
        node = node.next;
        indexCount += 1;
      }

      return node.value;
    } catch (e) {
      // Could not read to index,
      // value return undefined
      return undefined;
    }
  }

  /**
   * Insert value into linked list
   * @param value Value to insert
   * @param index Index to insert at (Defaults to tail)
   * @returns Value inserted
   */
  public insert(value: any, index?: number): any {
    // Create vertex
    const vertex = new SingleNode(value);

    if (this.head === null && this.tail === null) {
      // If empty list, insert into list
      this.head = vertex;
      this.tail = vertex;

      // Return value
      return value;
    }

    if (index === undefined) {
      // If no index, add to tail
      this.tail.next = vertex;
      this.tail = vertex;

      // Return value
      return value;
    }

    if (index < 0) {
      // Invalid index, throw error
      throw new Error("Index must be greater than or equal to zero");
    }

    if (index === 0) {
      // If inserting at head, insert
      vertex.next = this.head;
      this.head = vertex;

      // Return value
      return value;
    }

    // Else loop to index
    let node = this.head;
    let posCount = 0;

    while (posCount < index - 1 && node.next !== null) {
      // Loop through linked list till at index or at end of list
      node = node.next;
      posCount += 1;
    }

    // Add to list
    const nextNode = node.next;
    node.next = vertex;
    vertex.next = nextNode;

    // Return value
    return value;
  }

  /**
   * Remove value from list
   * @param index Index to remove from
   * @throws if index if out of range
   * @returns Value removed
   */
  public remove(index: number): any {
    if (index < 0) {
      // if invalid index, throw error
      throw new Error("Index must be greater than or equal to zero");
    }

    // Declare previous node
    let prevNode = null;

    // Declare current node
    let node = this.head;

    // Declare index count
    let indexCount = 0;

    try {
      while (indexCount < index) {
        // Update node and previous node
        prevNode = node;
        node = node.next;

        // Update index count
        indexCount += 1;
      }

      if (node === this.head && node === this.tail) {
          // If head is tail, this is on element list
          // make empty list
          this.head = null;
          this.tail = null;

          // Return value
          return node.value;
      } else if (node === this.head) {
        // If head, move head forward
        // Declare previous head
        const prevHead = this.head;

        // Update head
        this.head = this.head.next;

        // Return value of head
        return prevHead.value;
      } else if (node === this.tail) {
        // If at tail, go to previous node
        this.tail = prevNode;
      }

      // Remove node
      prevNode.next = node.next;

      // Return node value
      return node.value;
    } catch (e) {
      // Index is out of range, throw error
      throw new Error("Index is out of range");
    }
  }

  /**
   * Get index of first occurrence of value in linked list.
   * Returns -1 is not in list
   * @param value Value to search for
   * @returns Index of first occurrence in list or -1 if not in list
   */
  public search(value: any): number {
    let node = this.head;
    let index = 0;

    try {
      while (node.value !== value) {
        node = node.next;
        index += 1;
      }

      // Found value in list,
      // return index
      return index;
    } catch (e) {
      // Could not find value in list
      // Return -1
      return -1;
    }
  }
}

// Export
export { LinkedList };
