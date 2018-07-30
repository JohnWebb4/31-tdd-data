/**
 * A singly linked vertex which points to
 * the next vertex value
 */
class SingleVertex {
  /**
   * The vertex value
   */
  public value: any;

  /**
   * Reference to next vertex
   */
  public next: SingleVertex;

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

export { SingleVertex };
