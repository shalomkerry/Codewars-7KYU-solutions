// https://www.codewars.com/kata/58844f1a76933b1cd0000023/train/javascript
function killKthBit(n, k) {
  let num = n;
  let array = num.toString(2).split("");
  console.log(array);
  let bit = array[array.length - k];
  if (bit == "1") {
    array[array.length - k] = "0";
    let string = array.join("");

    num = parseInt(string, 2);
    return num;
  }
  return num;
}
console.log(killKthBit(37, 3));
