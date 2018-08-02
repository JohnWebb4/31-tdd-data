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

  test("can insert values", () => {
    // Create list
    const doublyLinkedList = new DoublyLinkedList();

    // Test no elements
    expect(doublyLinkedList.head).toBe(null);
    expect(doublyLinkedList.tail).toBe(null);

    // Insert first element
    doublyLinkedList.insert(0);

    // Expert inserted value
    expect(doublyLinkedList.head.value).toBe(0);
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.head.next).toBe(null);
    expect(doublyLinkedList.tail).toBe(doublyLinkedList.head);

    // Insert elements at tail
    doublyLinkedList.insert(1);

    // Test list
    expect(doublyLinkedList.head.value).toBe(0);
    expect(doublyLinkedList.head.next.value).toBe(1);
    expect(doublyLinkedList.tail.value).toBe(1);
    expect(doublyLinkedList.tail.prev.value).toBe(0);
    expect(doublyLinkedList.tail.next).toBe(null);

    // Insert element at tail
    doublyLinkedList.insert(3);

    // Test list
    expect(doublyLinkedList.head.value).toBe(0);
    expect(doublyLinkedList.head.next.value).toBe(1);
    expect(doublyLinkedList.tail.value).toBe(3);
    expect(doublyLinkedList.tail.prev.value).toBe(1);
    expect(doublyLinkedList.tail.next).toBe(null);

    // Insert element at tail
    doublyLinkedList.insert(4);

    // Test list
    expect(doublyLinkedList.head.value).toBe(0);
    expect(doublyLinkedList.head.next.value).toBe(1);
    expect(doublyLinkedList.tail.value).toBe(4);
    expect(doublyLinkedList.tail.prev.value).toBe(3);
    expect(doublyLinkedList.tail.prev.prev.value).toBe(1);
    expect(doublyLinkedList.tail.next).toBe(null);

    // Insert at index
    doublyLinkedList.insert(2, 1);

    // Test list
    expect(doublyLinkedList.head.value).toBe(0);
    expect(doublyLinkedList.head.next.value).toBe(1);
    expect(doublyLinkedList.head.next.next.value).toBe(2);
    expect(doublyLinkedList.tail.value).toBe(4);
    expect(doublyLinkedList.tail.prev.value).toBe(3);
    expect(doublyLinkedList.tail.prev.prev.value).toBe(2);
  });
});
