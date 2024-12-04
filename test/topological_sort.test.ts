import { topologicalSort } from "../src/topological_sort";

describe("topologicalSort", () => {
  it("should return an empty array for an empty graph", () => {
    expect(topologicalSort(0, [])).toEqual([]);
  });

  it("should return the correct order for a simple graph", () => {
    expect(
      topologicalSort(4, [
        [0, 1],
        [1, 2],
        [2, 3],
      ])
    ).toEqual([0, 1, 2, 3]);
  });

  it("should return an empty array for a graph with cycles", () => {
    const vertices = 4;
    const edges: [number, number][] = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ];
    expect(topologicalSort(vertices, edges)).toEqual([]);
  });

  it("should return an empty array for a graph with cycles", () => {
    expect(
      topologicalSort(4, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [0, 3],
      ])
    ).toEqual([]);
  });

  it("should return the correct order for a graph with disconnected vertices", () => {
    expect(
      topologicalSort(5, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
      ])
    ).toEqual([0, 1, 2, 3, 4]);
  });

  it("should return an empty array for a graph with self-loops", () => {
    const vertices = 2;
    const edges: [number, number][] = [
      [0, 1],
      [1, 1],
    ];
    expect(topologicalSort(vertices, edges)).toEqual([]);
  });
});
