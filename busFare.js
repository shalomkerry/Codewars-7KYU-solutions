// https://www.codewars.com/kata/5bce125d3bb2adff0d000245/train/javascript
function londonCityHacker(jounrey) {
  let result = 0;
  return `£${jounrey
    .map((v, i) => (isNaN(v) ? ((result = 0), 2.4) : (result = 1.5 - result)))
    .reduce((v, w) => v + w)}`;
}
console.log(londonCityHacker([1, "ethiopia", "we", 2, 3]));
