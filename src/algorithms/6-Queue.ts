type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  public length: number;

  constructor() {}

  enqueue(item: T): void {}

  dequeue(): T | undefined {}

  peek(): T | undefined {}
}
