import { DoublyLinkedList } from "./doublylinkedlist";

describe("DoublyLinkedList", () => {
  test("is a class", () => {
    // Test psuedoclassical constructor
    expect(DoublyLinkedList).toBeInstanceOf(Function);

    // Test inherited functions
    expect(DoublyLinkedList.prototype.get).toBeInstanceOf(Function);
    expect(DoublyLinkedList.prototype.insert).toBeInstanceOf(Function);
    expect(DoublyLinkedList.prototype.remove).toBeInstanceOf(Function);
    expect(DoublyLinkedList.prototype.search).toBeInstanceOf(Function);

    // Create empty list
    const emptyList = new DoublyLinkedList();

    // Test list
    expect(emptyList.head).toBe(null);
    expect(emptyList.tail).toBe(null);

    // Create list with initail value
    const list = new DoublyLinkedList(1);

    // Test list
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
  });
});
