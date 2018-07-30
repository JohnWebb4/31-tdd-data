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

  test("can create linked list", () => {
    // Create list
    const list = new LinkedList(0);

    // Test head and tail
    expect(list.head.value).toBe(0);
    expect(list.head.next).toBe(null);
    expect(list.head).toBe(list.tail);

    // Create empty list
    const emptyList = new LinkedList();

    // Test no initial value
    expect(emptyList.head).toBe(null);
    expect(emptyList.tail).toBe(null);
  });

  test("can insert values", () => {
    // Create list
    const list = new LinkedList();

    // Insert first value
    list.insert(0);

    // Test
    expect(list.head.value).toBe(0);
    expect(list.tail.value).toBe(0);

    // Insert some more
    list.insert(1);

    // Test
    expect(list.head.value).toBe(0);
    expect(list.tail.value).toBe(1);

    // Insert some more
    list.insert(3);

    // Test
    expect(list.head.value).toBe(0);
    expect(list.tail.value).toBe(3);

    // Insert at index
    list.insert(2, 2);

    expect(list.head.next.next.value).toBe(2);
    expect(list.tail.value).toBe(3);

    // Insert at head
    list.insert(-1, 0);

    expect(list.head.value).toBe(-1);
    expect(list.head.next.value).toBe(0);

    // Create new list
    const newList = new LinkedList();

    // Add different data types
    newList.insert(0);
    newList.insert("String");
    newList.insert([1]);
    newList.insert(true);
    newList.insert({ test: true});

    // Test inserted different data types
    expect(newList.head.value).toBe(0);
    expect(newList.head.next.value).toBe("String");
    expect(newList.head.next.next.value).toEqual([1]);
    expect(newList.head.next.next.next.value).toBe(true);
    expect(newList.head.next.next.next.next.value).toEqual({ test: true });
  });

  test("can get value at index", () => {
    // Create linked list
    const list = new LinkedList();

    // Test getting value in empty list
    expect(list.get(0)).toBe(undefined);

    // Insert value
    list.insert(0);

    // Test can get value
    expect(list.get(0)).toBe(0);

    // Test can't get value out of range
    expect(list.get(1)).toBe(undefined);

    // Insert some more
    list.insert(1);
    list.insert("String");
    list.insert([]);

    // Test can get values
    expect(list.get(1)).toBe(1);
    expect(list.get(2)).toBe("String");
    expect(list.get(3)).toEqual([]);
  });
});
