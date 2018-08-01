class DoubleNode {
  /**
   * Value of node
   */
  public value: any;

  /**
   * Link to next node
   */
  public next: DoubleNode;

  /**
   * Link to previous node
   */
  public prev: DoubleNode;

  /**
   * Create a Double Node
   * @param value Value of node
   * @param next Link to next node
   * @param prev Link to previous node
   */
  constructor(value: any, next: DoubleNode = null, prev: DoubleNode = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export {
  DoubleNode,
};
