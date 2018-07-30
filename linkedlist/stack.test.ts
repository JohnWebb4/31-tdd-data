import { Stack } from "./stack";

describe("Stack", () => {
  test("is a class", () => {
    expect(Stack).toBeInstanceOf(Function);
  });

  test("has push and pop", () => {
    expect(Stack.prototype.pop).toBeInstanceOf(Function);
    expect(Stack.prototype.push).toBeInstanceOf(Function);
  });

  test("creates a stack", () => {
    // Create with initial value
    const stack = new Stack(0);

    // Test stack
    expect(stack.head.value).toBe(0);
    expect(stack.head.next).toBe(null);
    expect(stack.tail).toBe(stack.head);

    // Create empty stack
    const emptyStack = new Stack();

    // Test empty stack
    expect(emptyStack.head).toBe(null);
    expect(emptyStack.tail).toBe(null);
  });
});