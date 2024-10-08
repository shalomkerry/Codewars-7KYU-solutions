// https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript
function shorterReverseLonger(a, b) {
  let longer = a.length > b.length ? a : a.length == b.length ? a : b;
  let shorter = a == longer ? b : a;
  return shorter + longer.split("").reverse().join("") + shorter;
}
