// https://www.codewars.com/kata/5d50e3914861a500121e1958/train/javascript
function addLetters(array) {
  return String.fromCharCode(
    (array.reduce((prev, cur) => prev + cur.charCodeAt(0) - 96, 0 + 25) % 26) +
      97
  );
}
let array = ["a", "b"];
console.log(addLetters(array));
