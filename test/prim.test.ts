function primAlgorithm(graph: number[][]): number {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    const minEdge = new Array(n).fill(Infinity);
    let totalWeight = 0;

    minEdge[0] = 0;

    for (let i = 0; i < n; i++) {
        let u = -1;

        for (let v = 0; v < n; v++) {
            if (!visited[v] && (u === -1 || minEdge[v] < minEdge[u])) {
                u = v;
            }
        }

        visited[u] = true;
        totalWeight += minEdge[u];

        for (let v = 0; v < n; v++) {
            if (!visited[v] && graph[u][v] !== 0 && graph[u][v] < minEdge[v]) {
                minEdge[v] = graph[u][v];
            }
        }
    }

    return totalWeight;
}

const graphPrim = [
    [0, 2, 0, 6, 0],
    [2, 0, 3, 8, 5],
    [0, 3, 0, 0, 7],
    [6, 8, 0, 0, 9],
    [0, 5, 7, 9, 0],
];
console.log(primAlgorithm(graphPrim)); // Output: Total weight of MST