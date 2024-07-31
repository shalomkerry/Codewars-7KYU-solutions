// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript
function pattern(n) {
  var output = "";
  if (n == 1) return "1";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      output += i;
    }
    if (i < n) {
      output += "\n";
    }
  }
  return output;
}
