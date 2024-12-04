class Graph {
  private adjList: Map<string, string[]> = new Map();

  addVertex(vertex: string) {
    this.adjList.set(vertex, []);
  }

  addEdge(vertex: string, edge: string) {
    this.adjList.get(vertex)?.push(edge);
  }

  printGraph() {
    this.adjList.forEach((edges, vertex) => {
      console.log(`${vertex} -> ${edges.join(", ")}`);
    });
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B");
graph.printGraph(); // Output: A -> B
