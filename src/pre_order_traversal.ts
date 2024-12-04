class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = this.right = null;
  }
}

function preOrderTraversal(node: TreeNode | null): number[] {
  if (!node) return [];
  return [
    node.value,
    ...preOrderTraversal(node.left),
    ...preOrderTraversal(node.right),
  ];
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preOrderTraversal(root));

export { TreeNode, preOrderTraversal };
