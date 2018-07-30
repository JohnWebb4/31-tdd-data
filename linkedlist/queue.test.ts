import { Queue } from "./queue";

describe("Queue", () => {
  test("is a class", () => {
    expect(Queue).toBeInstanceOf(Function);
  });

  test("has enqueue and dequeue", () => {
    expect(Queue.prototype.enqueue).toBeInstanceOf(Function);
    expect(Queue.prototype.dequeue).toBeInstanceOf(Function);
  });
});
