function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError("number greater than 12 or less than 0");
  }
  if (n == 0) {
    return 1;
  }

  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.reduce((a, b) => a * b);
}
