// https://www.codewars.com/kata/585c50e75d0930e6a7000336/solutions/javascript?filter=me&sort=best_practice&invalids=false
function isCoprime(x, y) {
  let firstFactors = [];
  let commons = [];
  for (let i = 1; i <= y; i++) {
    if (x % i == 0) {
      firstFactors.push(i);
    }
  }
  for (let i = 1; i <= y; i++) {
    if (y % i == 0 && firstFactors.includes(i)) {
      commons.push(i);
    }
  }
  return commons.length > 1 ? false : true;
}
