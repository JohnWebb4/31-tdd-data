import { LinkedList } from "./linkedlist";

describe("Linked List", () => {
  test("is a class", () => {
    expect(LinkedList).toBeInstanceOf(Function);
  });

  test("has get, insert, remove and search", () => {
    expect(LinkedList.prototype.get).toBeInstanceOf(Function);
    expect(LinkedList.prototype.insert).toBeInstanceOf(Function);
    expect(LinkedList.prototype.remove).toBeInstanceOf(Function);
    expect(LinkedList.prototype.search).toBeInstanceOf(Function);
  });
});
