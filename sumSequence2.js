// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
function getSum(a, b) {
  if (a == b) return a;
  let array = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      array.push(i);
    }
  } else {
    for (let i = b; i <= a; i++) {
      array.push(i);
    }
  }
  return array.reduce((a, b) => a + b);
}
