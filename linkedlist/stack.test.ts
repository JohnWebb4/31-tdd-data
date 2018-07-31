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

  test("can push to stack", () => {
    // Create stack
    const stack = new Stack();

    // Push value
    expect(stack.push(1)).toBe(1);
    expect(stack.tail.value).toBe(1);

    // Push value
    expect(stack.push(2)).toBe(2);
    expect(stack.tail.value).toBe(2);

    // Push value
    expect(stack.push(3)).toBe(3);
    expect(stack.tail.value).toBe(3);
  });

  test("can pop from stack", () => {
    // Create stack
    const stack = new Stack();

    // Push value
    stack.push(1);

    // Pop value
    expect(stack.pop()).toBe(1);
    expect(stack.head).toBe(null);
    expect(stack.tail).toBe(null);

    // Push value
    stack.push(2);
    expect(stack.head.value).toBe(2);

    // Push value
    stack.push(3);
    expect(stack.tail.value).toBe(3);

    // Push value
    stack.push(4);
    expect(stack.tail.value).toBe(4);

    // Pop all values
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);

    // test empty list
    expect(stack.head).toBe(null);
    expect(stack.tail).toBe(null);
  });
});
