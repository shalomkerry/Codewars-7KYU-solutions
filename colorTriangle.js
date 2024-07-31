// let string = "RGBGG";
// let array = string.split("");
// let as = [];
// function triangleCreator(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     let first = array[i];
//     let second = array[i + 1];
//     if (first == "R") {
//       switch (second) {
//         case "B":
//           as.push("G");
//           break;
//         case "G":
//           as.push("B");
//           break;
//         default:
//           as.push("R");
//       }
//     }
//     if (first == "G") {
//       switch (second) {
//         case "B":
//           as.push("R");
//           break;
//         case "R":
//           as.push("B");
//           break;
//         default:
//           as.push("G");
//       }
//     }
//     if (first == "B") {
//       switch (second) {
//         case "R":
//           as.push("G");
//           break;
//         case "G":
//           as.push("R");
//           break;
//         default:
//           as.push("B");
//       }
//     }
//   }
//   array = as;
//   if (array.length > 1) {
//     return triangleCreator(array);
//   } else {
//     return as;
//   }
// }
// console.log(triangleCreator(array));
// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript
function color(row) {
  let result = "";
  if (row.length == 1) {
    result = row;
  }
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      return row[i];
    } else {
      result += "RGB".replace(row[i], "").replace(row[i + 1], "");
    }
  }
  if (result.length > 1) {
    return color(result);
  } else {
    return result;
  }
}
console.log(color("RGB"));
