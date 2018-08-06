import { Deque } from "./deque";

describe("Dedeque", () => {
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
    expect(deque.insertHead(0)).toBe(0);
    expect(deque.head.value).toBe(0);
    expect(deque.tail).toBe(deque.head);

    // Insert into one element deque
    expect(deque.insertHead(1)).toBe(1);
    expect(deque.head.value).toBe(1);
    expect(deque.tail.value).toBe(0);

    // Insert into muti-element deque
    expect(deque.insertHead(2)).toBe(2);
    expect(deque.head.value).toBe(2);
    expect(deque.head.next.value).toBe(1);
    expect(deque.tail.value).toBe(0);
  });

  test("can insert at tail", () => {
    // Insert into empty deque
    const deque = new Deque();
    expect(deque.insertTail(0)).toBe(0);
    expect(deque.head.value).toBe(0);
    expect(deque.tail).toBe(deque.head);

    // Insert into one element deque
    expect(deque.insertTail(1)).toBe(1);
    expect(deque.head.value).toBe(0);
    expect(deque.tail.value).toBe(1);

    // Insert into multi-element deque
    expect(deque.insertTail(2)).toBe(2);
    expect(deque.head.value).toBe(0);
    expect(deque.head.next.value).toBe(1);
    expect(deque.tail.value).toBe(2);
  });

  test("can remove from head", () => {
    // Remove from empty deque
    const deque = new Deque();
    expect(deque.removeHead()).toBe(undefined);
    expect(deque.head).toBe(null);
    expect(deque.tail).toBe(null);

    // Remove from one element deque
    deque.insertHead(0);
    expect(deque.removeHead()).toBe(0);
    expect(deque.head).toBe(null);
    expect(deque.tail).toBe(null);

    // Remove from multi-element deque
    deque.insertTail(0);
    deque.insertTail(1);
    expect(deque.removeHead()).toBe(0);
    expect(deque.head.value).toBe(1);
    expect(deque.tail).toBe(deque.head);
  });

  test("can remove from tail", () => {
    // Remove from empty deque
    const deque = new Deque();
    expect(deque.removeTail()).toBe(undefined);
    expect(deque.head).toBe(null);
    expect(deque.tail).toBe(null);

    // Remove from one element deque
    deque.insertHead(0);
    expect(deque.removeTail()).toBe(0);
    expect(deque.head).toBe(null);
    expect(deque.tail).toBe(null);

    // Remove from multi-element deque
    deque.insertTail(0);
    deque.insertTail(1);
    expect(deque.removeTail()).toBe(1);
    expect(deque.head.value).toBe(0);
    expect(deque.tail).toBe(deque.head);
  });
});
