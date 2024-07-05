function split(x) {
  let total = 0,
    count = 0;
  for (const i in x) {
    count++;
    total += x[i];
  }
  let average = total / count;
  for (const i in x) {
    x[i] = +(x[i] - average).toFixed(2);
  }
  return x;
}
