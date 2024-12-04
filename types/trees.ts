class TreeNode<T> {
    value: T;
    children: TreeNode<T>[] = [];

    constructor(value: T) {
        this.value = value;
    }

    addChild(node: TreeNode<T>) {
        this.children.push(node);
    }
}

let root = new TreeNode(1);
let child1 = new TreeNode(2);
let child2 = new TreeNode(3);
root.addChild(child1);
root.addChild(child2);
console.log(root.value);  // Output: 1