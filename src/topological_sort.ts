function topologicalSort(
  vertices: number,
  edges: [number, number][]
): number[] {
  const inDegree = new Array(vertices).fill(0);
  const adjacencyList = new Map<number, number[]>();
  const queue: number[] = [];
  const result: number[] = [];

  for (const [source, destination] of edges) {
    if (!adjacencyList.has(source)) adjacencyList.set(source, []);
    adjacencyList.get(source)!.push(destination);
    inDegree[destination]++;
  }

  for (let i = 0; i < vertices; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const vertex = queue.shift()!;
    result.push(vertex);

    for (const neighbor of adjacencyList.get(vertex) || []) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === vertices ? result : []; // Check for cycles
}

const vertices = 6;
const edges: [number, number][] = [
  [5, 2],
  [5, 0],
  [4, 0],
  [4, 1],
  [2, 3],
  [3, 1],
];
console.log(topologicalSort(vertices, edges));

export { topologicalSort };
