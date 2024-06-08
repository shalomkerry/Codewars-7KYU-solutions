function findLowestInt(k) {
  let k2 = k + 1;
  for (let i = 10; i < 1000000000; i++) {
    let num1 = k * i;
    let num2 = k2 * i;
    let array1 = num1.toString().split("").sort();
    let array2 = num2.toString().split("").sort();
    function areTheArray(arr, arr2) {
      return arr.every((value, index) => value === arr2[index]);
    }
    if (areTheArray(array1, array2)) {
      return i;
    }
  }
}

console.log(findLowestInt(100));
