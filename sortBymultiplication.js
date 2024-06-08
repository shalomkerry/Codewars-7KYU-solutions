// https://www.codewars.com/kata/58e0cb3634a3027180000040/train/javascript
function sortlike(array) {
  let value = [];
  for (let i = 0; i < array.length; i++) {
    value.push({ value: array[i], result: array[i] * (i + 1) });
  }
  let sorted = value.sort((a, b) => a.result - b.result);
  sorted = value.map((x) => x.value);
  return sorted;
}
console.log(sortlike([23, 2, 3, 4, 5]));
