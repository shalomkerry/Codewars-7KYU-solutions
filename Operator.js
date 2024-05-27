// https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
      break;
    case "multiply":
      return a * b;
      break;
    case "divide":
      return a / b;
      break;
    default:
      return a - b;
  }
}
