class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = this.right = null;
  }
}

function inOrderTraversal(node: TreeNode | null): number[] {
  if (!node) return [];
  return [
    ...inOrderTraversal(node.left),
    node.value,
    ...inOrderTraversal(node.right),
  ];
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(inOrderTraversal(root));

export { TreeNode, inOrderTraversal };
