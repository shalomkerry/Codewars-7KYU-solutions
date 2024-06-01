// https://www.codewars.com/kata/54f2f335cb9d99e8530008d7/train/javascript
function span(arr, predicate) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i])) break;
  }

  return [arr.slice(0, i), arr.slice(i)];
}
