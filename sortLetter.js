// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
function solve(s) {
  let array = s.split("");
  let upperCase = array.filter((e) => /^[A-Z]+$/.test(e));
  let lowerCase = array.filter((e) => /[a-z]+/.test(e));
  let number = array.filter((e) => /[0-9]+/.test(e));
  let special = array.filter((e) => /[^0-9a-zA-Z]+/.test(e));
  return [upperCase.length, lowerCase.length, number.length, special.length];
}
solve("AbA&232 ");
