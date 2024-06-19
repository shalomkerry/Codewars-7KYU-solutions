// https://www.codewars.com/kata/59afff65f1c8274f270020f5/train/javascript
function spinningRings(inner, outer) {
  let status = [];
  let beginning = inner;
  let last = outer;
  let bool = true;
  while (bool) {
    status.push[(inner - 1, outer + 1)];
    if (inner == 0) {
      inner == beginning;
    } else if (outer == 0) {
      last == inner;
    }
    for (let i in status) {
      if (i[0] == i[1]) {
        bool = false;
      }
      return status.length;
    }
  }
}
console.log(spinningRings(2, 5));
