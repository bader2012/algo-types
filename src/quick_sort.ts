function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = arr.filter(
    (el, index) => el <= pivot && index !== arr.length - 1
  );
  const right = arr.filter((el) => el > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));

export { quickSort };
