// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript
function inAscOrder(arr) {
  if (arr.length == 0 || arr.length == 1) return true;
  let sorted = arr.slice().sort((a, b) => a - b);
  if (arr.toString() === sorted.toString()) {
    return true;
  }
  console.log(sorted);
  return false;
}
