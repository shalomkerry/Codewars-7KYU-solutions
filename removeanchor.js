let num = 120;
let array = num.toString().split("");
let sum = 0;
array.every((element) => (sum += Math.pow(+element, 2)));
console.log(sum);
