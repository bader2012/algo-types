/**
 * Performs a binary search on a sorted array to find the index of a target value.
 *
 * @param arr - A sorted array of numbers to search within.
 * @param target - The number to search for in the array.
 * @returns The index of the target in the array, or -1 if the target is not found.
 */
function binarySearch(arr: number[], target: number): number {
  let low = 0,
    high = arr.length - 1;
  let result = -1; // Track the first occurrence

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      result = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 3));

export default binarySearch;
