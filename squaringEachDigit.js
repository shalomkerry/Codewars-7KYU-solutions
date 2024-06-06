// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
  let array = `${num}`.split("");
  let squares = array.map((element) => Math.pow(+element, 2));
  let nums = squares.join("");
  return +nums;
}
