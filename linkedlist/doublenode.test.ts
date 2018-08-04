import { DoubleNode } from "./doublenode";

describe("DoubleNode", () => {
  test("is a class", () => {
    expect(DoubleNode).toBeInstanceOf(Function);
  });

  test("can create double node", () => {
    // Create first node
    const node0 = new DoubleNode(0);

    // Test first node
    expect(node0.value).toBe(0);
    expect(node0.next).toBe(null);
    expect(node0.prev).toBe(null);

    // Create second node
    const node1 = new DoubleNode(1, null, node0);

    // Create third node
    const node2 = new DoubleNode(2, node1, node0);

    // Test third node
    expect(node2.value).toBe(2);
    expect(node2.next).toBe(node1);
    expect(node2.prev).toBe(node0);

    // Test getting values from previous and next
    expect(node2.next.value).toBe(1);
    expect(node2.prev.value).toBe(0);
  });
});
