/**
 * A singly linked vertex which points to
 * the next vertex value
 */
class SingleNode {
  /**
   * The vertex value
   */
  public value: any;

  /**
   * Reference to next vertex
   */
  public next: SingleNode;

  /**
   * Create a new singly linked vertex
   * @param value Value of vertex
   * @param next Reference to next vertex
   */
  constructor(value: any, next: any = null) {
    // Set values
    this.value = value;
    this.next = next;
  }
}

export { SingleNode };
