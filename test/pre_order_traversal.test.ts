import { preOrderTraversal, TreeNode } from "../src/pre_order_traversal";

describe("preOrderTraversal", () => {
  it("should return an empty array for an empty tree", () => {
    expect(preOrderTraversal(null)).toEqual([]);
  });

  it("should return a single element array for a single node tree", () => {
    const node = new TreeNode(1);
    expect(preOrderTraversal(node)).toEqual([1]);
  });

  it("should return a correct array for a balanced binary tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    expect(preOrderTraversal(root)).toEqual([1, 2, 3]);
  });

  it("should return a correct array for an unbalanced binary tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(preOrderTraversal(root)).toEqual([1, 2, 3]);
  });

  it("should return a correct array for a tree with duplicate values", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(2);
    expect(preOrderTraversal(root)).toEqual([1, 2, 2]);
  });
});
