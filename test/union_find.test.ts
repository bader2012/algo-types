import { UnionFind } from "../src/union_find";

describe("UnionFind.connected", () => {
  it("should return true for two elements in the same set", () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    expect(uf.connected(0, 1)).toBe(true);
  });

  it("should return false for two elements in different sets", () => {
    const uf = new UnionFind(5);
    uf.union(0, 1);
    expect(uf.connected(0, 2)).toBe(false);
  });

  it("should return true for the same element", () => {
    const uf = new UnionFind(5);
    expect(uf.connected(0, 0)).toBe(true);
  });

  it("should throw an error for out of range x", () => {
    const uf = new UnionFind(5);
    expect(() => uf.connected(5, 0)).toThrowError();
  });

  it("should throw an error for out of range y", () => {
    const uf = new UnionFind(5);
    expect(() => uf.connected(0, 5)).toThrowError();
  });
});
