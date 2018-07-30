import { LinkedList } from "./linkedlist";

describe("Linked List", () => {
  test("is a class", () => {
    expect(LinkedList).toBeInstanceOf(Function);
  });

  test("has get, insert, remove and search", () => {
    expect(LinkedList.prototype.get).toBeInstanceOf(Function);
    expect(LinkedList.prototype.insert).toBeInstanceOf(Function);
    expect(LinkedList.prototype.remove).toBeInstanceOf(Function);
    expect(LinkedList.prototype.search).toBeInstanceOf(Function);
  });

  test("can create linked list", () => {
    // Create list
    const list = new LinkedList(0);

    // Test head and tail
    expect(list.head.value).toBe(0);
    expect(list.head.next).toBe(null);
    expect(list.head).toBe(list.tail);

    // Create empty list
    const emptyList = new LinkedList();

    // Test no initial value
    expect(emptyList.head).toBe(null);
    expect(emptyList.tail).toBe(null);
  });
});
