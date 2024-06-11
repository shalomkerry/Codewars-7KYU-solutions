// https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript
function bubblesortOnce(a) {
  let result = [...a];
  for (let i = 0; i < a.length; i++) {
    if (result[i] > result[i + 1]) {
      [result[i], result[i + 1]] = [result[i + 1], result[i]];
    }
  }
  return result;
}
