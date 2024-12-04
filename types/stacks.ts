class Stack<T> {
    private items: T[] = [];
    push(item: T) {
        this.items.push(item);
    }
    pop(): T | undefined {
        return this.items.pop();
    }
    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

let stack = new Stack<number>();
stack.push(10);
stack.push(20);
console.log(stack.pop());  // Output: 20