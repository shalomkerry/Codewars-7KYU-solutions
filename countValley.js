// https://www.codewars.com/kata/5da9973d06119a000e604cb6/train/javascript
function countValley(s) {
  let result = 0,
    level = 0;
  for (let i of s) {
    if (i == "U" && level == -1) {
      result++;
    }
    if (i != "F") {
      if (i == "U") {
        level++;
      } else {
        level--;
      }
    }
  }
  return result;
}
console.log(countValley("UFFDDFDUDFUFU"));
