function fifo(n, referenceList) {
  let result = Array(n).fill(-1),
    position = 0;
  for (let i of referenceList) {
    if (!result.includes(i)) {
      result[position] = i;
      position = (position + 1) % n;
    }
  }
  return result;
}

console.log(fifo(3, [1, 2, 3, 4]));
