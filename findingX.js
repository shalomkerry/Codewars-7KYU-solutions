// https://www.codewars.com/kata/5777fe3f355edbf0a5000d11/train/javascript
const xMarksTheSpot = (input) => {
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] == "x") {
        result.push([i, j]);
      }
    }
  }
  return result.length != 1 ? [] : result[0];
};
console.log(xMarksTheSpot(["o", "x"], ["o", "o"]));
