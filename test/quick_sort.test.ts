import { quickSort } from "../src/quick_sort";

describe("quickSort", () => {
  it("should return an empty array for an empty input", () => {
    expect(quickSort([])).toEqual([]);
  });

  it("should return a single element array for a single element input", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it("should return an already sorted array for an already sorted input", () => {
    expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an unsorted array with multiple elements", () => {
    expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  });

  it("should sort an array with duplicate elements", () => {
    expect(quickSort([5, 3, 3, 4, 2])).toEqual([2, 3, 3, 4, 5]);
  });

  it("should sort an array with negative numbers", () => {
    expect(quickSort([-5, -4, -3, -2, -1])).toEqual([-5, -4, -3, -2, -1]);
  });

  it("should sort an array with large numbers", () => {
    expect(quickSort([1000, 2000, 3000, 4000, 5000])).toEqual([
      1000, 2000, 3000, 4000, 5000,
    ]);
  });
});
