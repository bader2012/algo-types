function topologicalSort(
  vertices: number,
  edges: [number, number][]
): number[] {
  const inDegree = new Array(vertices).fill(0);
  const adjList = new Map<number, number[]>();
  const queue: number[] = [];
  const result: number[] = [];

  console.log('inDegree', inDegree);
  console.log('adjList', adjList);

  for (const [u, v] of edges) {
    if (!adjList.has(u)) adjList.set(u, []);
    adjList.get(u)!.push(v);
    inDegree[v]++;
  }

  console.log('inDegree', inDegree);
  console.log('adjList', adjList);

  for (let i = 0; i < vertices; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  console.log('queue', queue);

  while (queue.length > 0) {
    const vertex = queue.shift()!;
    result.push(vertex);

    console.log('vertex', vertex);

    for (const neighbor of adjList.get(vertex) || []) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }

    console.log('inDegree', inDegree);
    console.log('queue', queue);
  }

  console.log('result', result);

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
