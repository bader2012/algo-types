class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  head: Node<T> | null = null;

  append(data: T) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

let list = new LinkedList<number>();
list.append(10);
list.append(20);
console.log(list.head?.data); // Output: 10
