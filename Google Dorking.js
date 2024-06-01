// https://www.codewars.com/kata/62cb487e43b37a5829ab5752/train/javascript
const isValid = (query) =>
  query.match(/\w+(?=:)/g).every((e) => FILTERS.includes(e));
