function maximalProduct(arr) {
  return Math.max(
    ...arr.map(
      (_, i) =>
        arr.filter((_, j) => (j + 1) % (i + 1) === 0).reduce((a, b) => a * b),
      1
    )
  );
}
console.log(maximalProduct([1, 2, 0, 5]));
