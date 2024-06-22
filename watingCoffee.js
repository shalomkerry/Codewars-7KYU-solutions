// https://www.codewars.com/kata/6167e70fc9bd9b00565ffa4e/train/javascript
const barista = (coffee) =>
  coffee
    .sort((a, b) => a - b)
    .reduce(
      (prev, current, index) =>
        prev + current * (coffee.length - index) + 2 * index,
      0
    );

console.log(barista([1, 2]));
