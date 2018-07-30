import { Stack } from "./stack";

describe("Stack", () => {
  test("is a class", () => {
    expect(Stack).toBeInstanceOf(Function);
  });

  test("has push and pop", () => {
    expect(Stack.prototype.pop).toBeInstanceOf(Function);
    expect(Stack.prototype.push).toBeInstanceOf(Function);
  });
});
