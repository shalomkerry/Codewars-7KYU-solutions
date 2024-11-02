// https://www.codewars.com/kata/638244fb08da6c61361d2c40/solutions/javascript?filter=me&sort=best_practice&invalids=false

function findWaldo(crowd) {
  // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)
  let y = 0,
    x = 0;
  let waldo = "";
  let array = [...crowd.map((ele) => ele.split("")).join("")];
  array.sort();

  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1] && array[i] !== array[i - 1]) {
      waldo = array[i];
    }
  }
  for (let i = 0; i < crowd.length; i++) {
    for (let j = 0; j < crowd[i].length; j++) {
      if (crowd[i][j].includes(waldo)) {
        y = i;
        x = j;
      }
    }
  }
  return [y, x];
}
