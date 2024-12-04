import Dijkstra from "../src/dijkstra";

describe("Dijkstra shortestPath", () => {
  it("should return empty map for empty graph", () => {
    const dijkstra = new Dijkstra();
    expect(dijkstra.shortestPath(0)).toEqual(new Map());
  });

  it("should return single vertex map for single vertex graph", () => {
    const dijkstra = new Dijkstra();
    dijkstra.addEdge(0, 0, 0); // Self-loop with weight 0
    expect(dijkstra.shortestPath(0)).toEqual(new Map([[0, 0]]));
  });

  it("should return correct shortest distances for graph with multiple vertices and edges", () => {
    const dijkstra = new Dijkstra();
    dijkstra.addEdge(0, 1, 4);
    dijkstra.addEdge(0, 2, 2);
    dijkstra.addEdge(1, 3, 1);
    dijkstra.addEdge(2, 3, 3);
    expect(dijkstra.shortestPath(0)).toEqual(
      new Map([
        [0, 0],
        [1, 4],
        [2, 2],
        [3, 5],
      ])
    );
  });

  it("should throw error for graph with negative weight edges", () => {
    const dijkstra = new Dijkstra();
    expect(() => dijkstra.addEdge(0, 1, -1)).toThrow(
      "Negative weight edges are not supported"
    );
  });

  it("should return correct shortest distances for graph with disconnected vertices", () => {
    const dijkstra = new Dijkstra();
    dijkstra.addEdge(0, 1, 4);
    dijkstra.addEdge(2, 3, 2);
    expect(dijkstra.shortestPath(0)).toEqual(
      new Map([
        [0, 0],
        [1, 4],
        [2, Infinity], // Unreachable vertex should be Infinity
        [3, Infinity], // Unreachable vertex should be Infinity
      ])
    );
  });

  it("should return correct shortest distances for graph with cycles", () => {
    const dijkstra = new Dijkstra();
    dijkstra.addEdge(0, 1, 4);
    dijkstra.addEdge(1, 2, 2);
    dijkstra.addEdge(2, 0, 1); // This creates a cycle
    expect(dijkstra.shortestPath(0)).toEqual(
      new Map([
        [0, 0],
        [1, 4],
        [2, 6], // Even though there is a cycle, Dijkstra's algorithm works here
      ])
    );
  });
});
