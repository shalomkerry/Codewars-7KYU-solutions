// https://www.codewars.com/kata/5826f54cc60c7e5266000baf/train/javascript
function minimumPerimeter(area) {
  let factors = [];
  for (let i = 1; i <= area; i++) {
    if (area % i == 0) {
      factors.push([i, area / i]);
    }
  }
  let all = factors.slice(factors.length / 2);
  const minSum = Math.min(...all.map((pairs) => pairs[0] + pairs[1]));
  let answer = all.filter((pairs) => pairs[0] + pairs[1] == minSum);
  let firstNumber = answer[0][0];
  let seconNumber = answer[0][1];
  return (firstNumber + seconNumber) * 2;
}
console.log(minimumPerimeter(45));
console.log(Math.sqrt(45));
