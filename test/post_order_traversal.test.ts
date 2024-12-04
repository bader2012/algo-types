import { postOrderTraversal, TreeNode } from "../src/post_order_traversal";

describe("postOrderTraversal", () => {
  it("should return an empty array for an empty tree", () => {
    expect(postOrderTraversal(null)).toEqual([]);
  });

  it("should return a single element array for a tree with one node", () => {
    const node = new TreeNode(1);
    expect(postOrderTraversal(node)).toEqual([1]);
  });

  it("should return a sorted array for a balanced tree", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    expect(postOrderTraversal(root)).toEqual([1, 3, 2]);
  });

  it("should return a sorted array for an unbalanced tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.left.left = new TreeNode(3);
    expect(postOrderTraversal(root)).toEqual([3, 2, 1]);
  });

  it("should return a sorted array with duplicates for a tree with duplicate values", () => {
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    expect(postOrderTraversal(root)).toEqual([1, 2, 2]);
  });
});
