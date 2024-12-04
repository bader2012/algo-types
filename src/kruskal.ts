class Kruskal {
  edges: { u: number; v: number; weight: number }[];
  parent: number[];

  constructor(size: number) {
    this.edges = [];
    this.parent = Array.from({ length: size }, (_, i) => i);
  }

  addEdge(u: number, v: number, weight: number) {
    this.edges.push({ u, v, weight });
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); // Path compression
    }
    return this.parent[x];
  }

  union(x: number, y: number): void {
    this.parent[this.find(x)] = this.find(y);
  }

  kruskalMST(): number {
    this.edges.sort((a, b) => a.weight - b.weight);
    let totalWeight = 0;

    for (const { u, v, weight } of this.edges) {
      if (this.find(u) !== this.find(v)) {
        totalWeight += weight;
        this.union(u, v);
      }
    }

    return totalWeight;
  }
}

const kruskal = new Kruskal(5);
kruskal.addEdge(0, 1, 10);
kruskal.addEdge(0, 2, 6);
kruskal.addEdge(0, 3, 5);
kruskal.addEdge(1, 3, 15);
kruskal.addEdge(2, 3, 4);
console.log(kruskal.kruskalMST()); // Output: Total weight of MST

export default Kruskal;
