// https://www.codewars.com/kata/53daa9e5af55c184db00025f/train/javascript
function isPrime(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) {
      array.push(i);
    }
  }
  return array.length == 2 ? true : false;
}
