import bubbleSort from "../src/bubble_sort";
describe("bubbleSort", () => {
  it("should sort an empty array", () => {
    const arr: number[] = [];
    expect(bubbleSort(arr)).toEqual([]);
  });

  it("should sort a single element array", () => {
    const arr = [1];
    expect(bubbleSort(arr)).toEqual([1]);
  });

  it("should sort an array of two elements", () => {
    const arr = [2, 1];
    expect(bubbleSort(arr)).toEqual([1, 2]);
  });

  it("should sort an array of multiple elements", () => {
    const arr = [5, 3, 8, 4, 2];
    expect(bubbleSort(arr)).toEqual([2, 3, 4, 5, 8]);
  });

  it("should sort an array of already sorted elements", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
  });

  it("should sort an array with duplicate elements", () => {
    const arr = [5, 3, 3, 4, 2];
    expect(bubbleSort(arr)).toEqual([2, 3, 3, 4, 5]);
  });

  it("should sort an array with negative numbers", () => {
    const arr = [-5, -4, -3, -2, -1];
    expect(bubbleSort(arr)).toEqual([-5, -4, -3, -2, -1]);
  });

  it("should sort an array with large numbers", () => {
    const arr = [1000, 2000, 3000, 4000, 5000];
    expect(bubbleSort(arr)).toEqual([1000, 2000, 3000, 4000, 5000]);
  });
});
