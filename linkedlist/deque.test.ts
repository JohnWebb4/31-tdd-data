import { Deque } from "./deque";

describe("Dequeue", () => {
  test("can create deque", () => {
    // Test class
    expect(Deque).toBeInstanceOf(Function);

    // Test prototype funtions
    expect(Deque.prototype.insertHead).toBeInstanceOf(Function);
    expect(Deque.prototype.insertTail).toBeInstanceOf(Function);
    expect(Deque.prototype.removeHead).toBeInstanceOf(Function);
    expect(Deque.prototype.removeTail).toBeInstanceOf(Function);

    // Create deque with no initial value
    const emptyDeque = new Deque();
    expect(emptyDeque.head).toBe(null);
    expect(emptyDeque.tail).toBe(null);

    // Create deque with initial value
    const deque = new Deque(1);
    expect(deque.head.value).toBe(1);
    expect(deque.tail.value).toBe(1);
  });

  test("can insert at head", () => {
    // Insert into empty deque
    const deque = new Deque();
    deque.insertHead(0);
    expect(deque.head.value).toBe(0);
    expect(deque.tail).toBe(deque.head);

    // Insert into one element list
    deque.insertHead(1);
    expect(deque.head.value).toBe(1);
    expect(deque.tail.value).toBe(0);

    // Insert into muti-element list
    deque.insertHead(2);
    expect(deque.head.value).toBe(2);
    expect(deque.head.next.value).toBe(1);
    expect(deque.tail.value).toBe(0);
  });

  test("can insert at tail", () => {
    // Insert into empty queue
    const deque = new Deque();
    deque.insertTail(0);
    expect(deque.head.value).toBe(0);
    expect(deque.tail).toBe(deque.head);

    // Insert into one element list
    deque.insertTail(1);
    expect(deque.head.value).toBe(0);
    expect(deque.tail.value).toBe(1);

    // Insert into multi-element list
    deque.insertTail(2);
    expect(deque.head.value).toBe(0);
    expect(deque.head.next.value).toBe(1);
    expect(deque.tail.value).toBe(2);
  });
});
