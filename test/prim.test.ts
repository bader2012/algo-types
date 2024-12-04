import primAlgorithm from "../src/prim";

describe("primAlgorithm", () => {
  it("should return 0 for empty graph", () => {
    const graph: number[][] = [];
    expect(primAlgorithm(graph)).toBe(0);
  });

  it("should return 0 for graph with single node", () => {
    const graph: number[][] = [[0]];
    expect(primAlgorithm(graph)).toBe(0);
  });

  it("should return correct total weight for graph with multiple nodes and edges", () => {
    const graph: number[][] = [
      [0, 2, 0, 6, 0],
      [2, 0, 3, 8, 5],
      [0, 3, 0, 0, 7],
      [6, 8, 0, 0, 9],
      [0, 5, 7, 9, 0],
    ];
    expect(primAlgorithm(graph)).toBe(16);
  });

  it("should return correct total weight for graph with disconnected nodes", () => {
    const graph: number[][] = [
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 0, 0, 3],
      [0, 0, 3, 0],
    ];
    expect(primAlgorithm(graph)).toBe(5);
  });

  it("should return correct total weight for graph with cycles", () => {
    const graph: number[][] = [
      [0, 2, 0, 6],
      [2, 0, 3, 0],
      [0, 3, 0, 5],
      [6, 0, 5, 0],
    ];
    expect(primAlgorithm(graph)).toBe(10);
  });

  it("should throw error for graph with negative weight edges", () => {
    const graph: number[][] = [
      [0, -2, 0, 6],
      [2, 0, 3, 0],
      [0, 3, 0, 5],
      [6, 0, 5, 0],
    ];
    expect(() => primAlgorithm(graph)).toThrow(
      "Negative weight edges are not supported"
    );
  });
});
