function inOrderTraversal(node: TreeNode | null): number[] {
    if (!node) return [];
    return [...inOrderTraversal(node.left), node.value, ...inOrderTraversal(node.right)];
}

console.log(inOrderTraversal(root));