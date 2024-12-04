class GraphDFS {
  private adjacencyList: Map<number, number[]> = new Map();

  addEdge(vertex: number, neighbor: number) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
    this.adjacencyList.get(vertex)!.push(neighbor);
  }

  dfs(
    start: number,
    visited = new Set<number>(),
    result: number[] = []
  ): number[] {
    // Return an empty array if the start node is not in the graph
    if (!this.adjacencyList.has(start)) {
      return [];
    }

    if (!visited.has(start)) {
      visited.add(start);
      result.push(start);

      // Iterate over neighbors in the order they were added
      for (const neighbor of this.adjacencyList.get(start) || []) {
        this.dfs(neighbor, visited, result);
      }
    }

    return result;
  }
}

const graphDFS = new GraphDFS();
graphDFS.addEdge(1, 2);
graphDFS.addEdge(1, 3);
graphDFS.addEdge(2, 4);
graphDFS.addEdge(3, 5);
console.log(graphDFS.dfs(1));

export default GraphDFS;
