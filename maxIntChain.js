// https://www.codewars.com/kata/631082840289bf000e95a334/train/javascript
function maxIntChain(n) {
  return Math.ceil((n / 2 + 1) * (n / 2 - 1));
}
console.log(maxIntChain(6));
