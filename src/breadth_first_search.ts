class GraphBFS {
  private adjacencyList: Map<number, Set<number>> = new Map();

  addEdge(vertex: number, neighbor: number) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, new Set());
    }
    this.adjacencyList.get(vertex)!.add(neighbor);
  }

  bfs(start: number): number[] {
    const visited = new Set<number>();
    const queue = [start];
    const result: number[] = [];

    if (!this.adjacencyList.has(start)) {
      return []; // Return an empty array if the start vertex is not in the graph
    }

    while (queue.length > 0) {
      const vertex = queue.shift()!;
      if (!visited.has(vertex)) {
        visited.add(vertex);
        result.push(vertex);
        queue.push(...(this.adjacencyList.get(vertex) || []));
      }
    }

    return result;
  }
}

const graphBFS = new GraphBFS();
graphBFS.addEdge(1, 2);
graphBFS.addEdge(1, 3);
graphBFS.addEdge(2, 4);
graphBFS.addEdge(3, 5);
console.log(graphBFS.bfs(1));

export default GraphBFS;
