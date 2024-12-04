import binarySearch from "../src/binary_search";

describe("binarySearch", () => {
  it("should return -1 for an empty array", () => {
    expect(binarySearch([], 5)).toBe(-1);
  });

  it("should find the target at the beginning of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  it("should find the target at the end of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  it("should find the target in the middle of the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 when the target is not found in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should find the target in an array with duplicate elements", () => {
    expect(binarySearch([1, 2, 2, 3, 4, 5], 2)).toBe(1);
  });

  it("should find the target in an array with negative numbers", () => {
    expect(binarySearch([-5, -4, -3, -2, -1], -3)).toBe(2);
  });

  it("should find the target in an array with large numbers", () => {
    expect(binarySearch([1000, 2000, 3000, 4000, 5000], 3000)).toBe(2);
  });
});
