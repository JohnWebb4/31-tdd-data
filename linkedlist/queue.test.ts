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
});
