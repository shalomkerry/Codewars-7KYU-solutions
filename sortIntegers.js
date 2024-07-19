// https://www.codewars.com/kata/5885b5d2b632089dc30000cc/train/javascript
function dayoftheWeek(array) {
  return array.every((element, index) => element < array[index + 1]);
}
