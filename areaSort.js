// https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript
function sortArea(array) {
  let rectangleArray = array.filter((x) => Array.isArray(x));
  let circleArray = array.filter((x) => !Array.isArray(x));
  let rectangleArea = rectangleArray.map((subArr) =>
    subArr.reduce((acc, number) => acc * number, 1)
  );
  let circleArea = circleArray.map((x) => Math.PI * Math.pow(x, 2));
  let arrays = rectangleArea.concat(circleArea);
  arrays = arrays.map((x) => Math.floor(x));

  console.log(arrays.sort((a, b) => a - b));
}
sortArea([[4, 6], 1.23, 3.444, [1.342, 3.212]]);
