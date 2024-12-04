class Dijkstra {
  private adjacencyList: Map<number, { vertex: number; weight: number }[]> =
    new Map();

  addEdge(vertex: number, neighbor: number, weight: number) {
    if (weight < 0) {
      throw new Error("Negative weight edges are not supported");
    }
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
    this.adjacencyList.get(vertex)!.push({ vertex: neighbor, weight });
  }

  shortestPath(start: number): Map<number, number> {
    if (!this.adjacencyList.size) {
      return new Map(); // Return an empty map if the graph is empty
    }

    const distances = new Map<number, number>();
    const pq: [number, number][] = []; // [vertex, distance]
    pq.push([start, 0]);

    this.adjacencyList.forEach((_, key) => distances.set(key, Infinity));
    distances.set(start, 0);

    while (pq.length > 0) {
      pq.sort((a, b) => a[1] - b[1]); // Sort to get the node with the smallest distance
      const [currentVertex, currentDistance] = pq.shift()!;
      if (currentDistance > distances.get(currentVertex)!) continue; // Skip if already processed

      for (const { vertex: neighbor, weight } of this.adjacencyList.get(
        currentVertex
      ) || []) {
        const newDistance = currentDistance + weight;

        if (newDistance < distances.get(neighbor)!) {
          distances.set(neighbor, newDistance);
          pq.push([neighbor, newDistance]);
        }
      }
    }

    // Exclude disconnected vertices
    return new Map([...distances].filter(([_, dist]) => dist !== Infinity));
  }
}

const dijkstra = new Dijkstra();
dijkstra.addEdge(1, 2, 4);
dijkstra.addEdge(1, 3, 1);
dijkstra.addEdge(3, 2, 2);
dijkstra.addEdge(2, 4, 1);
console.log(dijkstra.shortestPath(1));

export default Dijkstra;
