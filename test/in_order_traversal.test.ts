import { inOrderTraversal, TreeNode } from "../src/in_order_traversal";

describe("inOrderTraversal", () => {
  it("should return an empty array for an empty tree", () => {
    expect(inOrderTraversal(null)).toEqual([]);
  });

  it("should return a single element array for a tree with one node", () => {
    const node = new TreeNode(1);
    expect(inOrderTraversal(node)).toEqual([1]);
  });

  it("should return a sorted array for a balanced tree", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(inOrderTraversal(root)).toEqual([1, 2, 3]);
  });

  it("should return a sorted array for an unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(inOrderTraversal(root)).toEqual([3, 2, 1]);
  });

  it("should return a sorted array with duplicates for a tree with duplicate values", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(inOrderTraversal(root)).toEqual([1, 2, 2]);
  });
});
