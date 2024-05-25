// https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5/train/javascript

function sortArea(array) {
  let shapeswithArea = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      let rectangleArea = element.reduce((acc, number) => acc * number);
      shapeswithArea.push({ shape: element, area: rectangleArea });
    } else {
      let circleArea = Math.PI * Math.pow(element, 2);
      shapeswithArea.push({ shape: element, area: circleArea });
    }
    shapeswithArea.sort((a, b) => a.area - b.area);
  });
  console.log(shapeswithArea.map((item) => item.shape));
}
sortArea([[4, 6], [1, 3], 2, 3, 10, [5, 7]]);
