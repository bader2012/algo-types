import floydWarshall from "../src/floyd_warshall";

describe("floydWarshall", () => {
  it("should return an empty graph for an empty input", () => {
    const graph: number[][] = [];
    expect(floydWarshall(graph)).toEqual([]);
  });

  it("should return a graph with single node", () => {
    const graph: number[][] = [[0]];
    expect(floydWarshall(graph)).toEqual([[0]]);
  });

  // it("should return the shortest path matrix for a graph with multiple nodes and edges", () => {
  //   const graph: number[][] = [
  //     [0, 3, Infinity, 5],
  //     [2, 0, Infinity, 4],
  //     [Infinity, 1, 0, Infinity],
  //     [Infinity, Infinity, 2, 0],
  //   ];
  //   const expected: number[][] = [
  //     [0, 3, 4, 5],
  //     [2, 0, 3, 4],
  //     [5, 1, 0, 5],
  //     [7, 3, 2, 0],
  //   ];
  //   expect(floydWarshall(graph)).toEqual(expected);
  // });

  it("should return a graph with disconnected nodes", () => {
    const graph: number[][] = [
      [0, Infinity, Infinity],
      [Infinity, 0, Infinity],
      [Infinity, Infinity, 0],
    ];
    expect(floydWarshall(graph)).toEqual([
      [0, Infinity, Infinity],
      [Infinity, 0, Infinity],
      [Infinity, Infinity, 0],
    ]);
  });

  it("should return a graph with cycles", () => {
    const graph: number[][] = [
      [0, 1, Infinity],
      [Infinity, 0, 1],
      [1, Infinity, 0],
    ];
    const expected: number[][] = [
      [0, 1, 2],
      [2, 0, 1],
      [1, 2, 0],
    ];
    expect(floydWarshall(graph)).toEqual(expected);
  });
});
