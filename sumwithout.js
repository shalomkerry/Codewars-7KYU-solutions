function sum() {
  let total = 0;
  for (let i in arguments) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3));
