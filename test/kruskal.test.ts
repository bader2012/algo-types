import Kruskal from "../src/kruskal";

describe("Kruskal.kruskalMST", () => {
  it("should return 0 for empty graph", () => {
    const kruskal = new Kruskal(0);
    expect(kruskal.kruskalMST()).toEqual(0);
  });

  it("should return 0 for graph with self-loops", () => {
    const kruskal = new Kruskal(1);
    kruskal.addEdge(0, 0, 0);
    expect(kruskal.kruskalMST()).toEqual(0);
  });

  it("should return correct MST weight for simple graph", () => {
    const kruskal = new Kruskal(4);
    kruskal.addEdge(0, 1, 10);
    kruskal.addEdge(0, 2, 6);
    kruskal.addEdge(0, 3, 5);
    kruskal.addEdge(1, 3, 15);
    kruskal.addEdge(2, 3, 4);
    expect(kruskal.kruskalMST()).toEqual(19); // Expected MST weight
  });

  // it("should return correct MST weight for graph with cycles", () => {
  //   const kruskal = new Kruskal(5);
  //   kruskal.addEdge(0, 1, 1);
  //   kruskal.addEdge(1, 2, 4);
  //   kruskal.addEdge(2, 3, 5);
  //   kruskal.addEdge(3, 4, 8);
  //   kruskal.addEdge(4, 0, 7); // Forms a cycle
  //   expect(kruskal.kruskalMST()).toEqual(22); // Expected MST weight without the cycle
  // });
});
