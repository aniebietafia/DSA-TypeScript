interface LinkedList<T> {
  get length(): number;
  inserAt(item: T, index: number): void;
  remove(item: T): T | undefined;
  append(item: T): void;
  prepend(item: T): void;
  get(index: number): T | undefined;
}
