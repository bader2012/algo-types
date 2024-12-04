class Queue<T> {
  private items: T[] = [];
  enqueue(item: T) {
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  peek(): T | undefined {
    return this.items[0];
  }
}

let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
