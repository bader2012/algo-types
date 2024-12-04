class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = this.right = null;
  }
}

function postOrderTraversal(node: TreeNode | null): number[] {
  if (!node) return [];
  return [
    ...postOrderTraversal(node.left),
    ...postOrderTraversal(node.right),
    node.value,
  ];
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(postOrderTraversal(root));

export { TreeNode, postOrderTraversal };
