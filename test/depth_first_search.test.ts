import GraphDFS from "../src/depth_first_search";

describe("GraphDFS.dfs", () => {
  it("should return an empty array for an empty graph", () => {
    const graph = new GraphDFS();
    expect(graph.dfs(1)).toEqual([]);
  });

  it("should return a single node for a graph with a single node", () => {
    const graph = new GraphDFS();
    graph.addEdge(1, 1);
    expect(graph.dfs(1)).toEqual([1]);
  });

  it("should return all nodes in the correct order for a graph with multiple nodes and edges", () => {
    const graph = new GraphDFS();
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    expect(graph.dfs(1)).toEqual([1, 2, 4, 3, 5]);
  });

  it("should return all nodes in the correct order for a graph with cycles", () => {
    const graph = new GraphDFS();
    graph.addEdge(1, 2);
    graph.addEdge(2, 3);
    graph.addEdge(3, 1);
    expect(graph.dfs(1)).toEqual([1, 2, 3]);
  });

  it("should return an empty array for a start node that is not in the graph", () => {
    const graph = new GraphDFS();
    graph.addEdge(1, 2);
    expect(graph.dfs(3)).toEqual([]);
  });
});
