// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/train/javascript
function stantonMeasure(a) {
  return a.filter(
    (element) => element == a.filter((elment2) => elment2 == 1).length
  ).length;
}
console.log(stantonMeasure([1, 1, 2, 2, 3, 4]));
