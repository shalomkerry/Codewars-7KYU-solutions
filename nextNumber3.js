// https://www.codewars.com/kata/56abc5e63c91630882000057/train/javascript
function nextNumb(val) {
  for (let i = val + 1; i < 9999999999; i++) {
    if (
      new Set([...String(i)]).size == [...String(i)].length &&
      i % 2 &&
      i % 3 == 0
    ) {
      return i;
    }
  }
  return "There is no possible number that fulfills those requirements";
}
console.log(nextNumb(12));
