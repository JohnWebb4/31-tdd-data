import { Queue } from "./queue";

describe("Queue", () => {
  test("is a class", () => {
    expect(Queue).toBeInstanceOf(Function);
  });

  test("has enqueue and dequeue", () => {
    expect(Queue.prototype.enqueue).toBeInstanceOf(Function);
    expect(Queue.prototype.dequeue).toBeInstanceOf(Function);
  });

  test("creates a queue", () => {
    // Create with initial value
    const queue = new Queue(0);

    expect(queue.head.value).toBe(0);
    expect(queue.head.next).toBe(null);
    expect(queue.tail).toBe(queue.head);
  });

  test("enqueus items", () => {
    // Create queue
    const queue = new Queue();

    // Enqueue
    expect(queue.enqueue(1)).toBe(1);
    expect(queue.head.value).toBe(1);
    expect(queue.tail.value).toBe(1);

    // Enqueue
    expect(queue.enqueue(2)).toBe(2);
    expect(queue.head.value).toBe(1);
    expect(queue.tail.value).toBe(2);

    // Enqueue
    expect(queue.enqueue(3)).toBe(3);
    expect(queue.head.value).toBe(1);
    expect(queue.tail.value).toBe(3);
  });

  test("dequeue items", () => {
    // Create dequeue
    const queue = new Queue();

    // Dequeue empy queue
    expect(queue.dequeue()).toBe(undefined);

    // Enqueue
    queue.enqueue(1);

    // Dequeue
    expect(queue.dequeue()).toBe(1);
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);

    // Enqueue two and three
    queue.enqueue(2);
    queue.enqueue(3);

    // Dequeue two and three
    expect(queue.dequeue()).toBe(2);
    expect(queue.tail.value).toBe(3);
    expect(queue.dequeue()).toBe(3);
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);
  });
});
