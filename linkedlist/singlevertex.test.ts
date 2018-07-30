import { SingleVertex } from "./singlevertex";

describe("Single Vertex", () => {
  test("is a class", () => {
    expect(SingleVertex).toBeInstanceOf(Function);
  });

  test("can create vertex", () => {
    // Create vertex with no next
    const vertex0 = new SingleVertex(0);

    expect(vertex0.value).toBe(0);
    expect(vertex0.next).toBe(null);

    // Create another vertex pointing to vertex0
    const vertex1 = new SingleVertex(1, vertex0);

    expect(vertex1.value).toBe(1);
    expect(vertex1.next).toBe(vertex0);
  });
});
