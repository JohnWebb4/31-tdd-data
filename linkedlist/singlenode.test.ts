import { SingleNode } from "./singlenode";

describe("Single Vertex", () => {
  test("is a class", () => {
    expect(SingleNode).toBeInstanceOf(Function);
  });

  test("can create vertex", () => {
    // Create node with no next
    const node0 = new SingleNode(0);

    expect(node0.value).toBe(0);
    expect(node0.next).toBe(null);

    // Create another node pointing to node0
    const node1 = new SingleNode(1, node0);

    expect(node1.value).toBe(1);
    expect(node1.next).toBe(node0);
  });
});
