// https://www.codewars.com/kata/5519e930cd82ff8a9a000216/train/javascriptc
let decimal = 21;
let binary = "";
while (decimal > 0) {
  if (decimal & 1) {
    binary = "1" + binary;
  } else {
    binary = "0" + binary;
  }
  decimal = decimal >> 1;
}
let array = binary.split("");
console.log(array);

let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] == "1") {
    count += 1;
  }
}
console.log(count);
