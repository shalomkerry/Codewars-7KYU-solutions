// https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  let ar = arr.slice().reverse();
  let number = ar.reduce((a, c, i) => {
    a += c * Math.pow(2, i);
    return a;
  }, 0);
  return number;
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
