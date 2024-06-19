// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
const isIsogram = (string) =>
  new Set(string.toLowerCase()).size == string.length;
