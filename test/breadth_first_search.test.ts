import GraphBFS from "../src/breadth_first_search";

describe("GraphBFS bfs", () => {
  it("should return empty array for empty graph", () => {
    const graph = new GraphBFS();
    expect(graph.bfs(0)).toEqual([]);
  });

  it("should return empty array if start vertex is not in graph", () => {
    const graph = new GraphBFS();
    graph.addEdge(1, 2);
    expect(graph.bfs(0)).toEqual([]);
  });

  it("should return single vertex for single vertex graph", () => {
    const graph = new GraphBFS();
    graph.addEdge(0, 0);
    expect(graph.bfs(0)).toEqual([0]);
  });

  it("should return all vertices in correct order for graph with multiple vertices and edges", () => {
    const graph = new GraphBFS();
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    expect(graph.bfs(0)).toEqual([0, 1, 2, 3, 4]);
  });

  it("should return only connected vertices for graph with disconnected vertices", () => {
    const graph = new GraphBFS();
    graph.addEdge(0, 1);
    graph.addEdge(2, 3);
    expect(graph.bfs(0)).toEqual([0, 1]);
  });

  it("should return all vertices in correct order for graph with cycles", () => {
    const graph = new GraphBFS();
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);
    expect(graph.bfs(0)).toEqual([0, 1, 2]);
  });
});
