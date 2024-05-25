// https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }

  let array = [];
  while (begin <= end) {
    array.push(begin);
    begin += step;
  }
  console.log(array);

  return array.reduce((a, b) => a + b);
};
