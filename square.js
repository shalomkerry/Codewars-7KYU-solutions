// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript
function square(num) {
  return ("+".repeat(num) + "\n").repeat(num).trim();
}
let string = "+";
let news = "";

function generateShape(integer) {
  let news = "";
  for (let i = 0; i < integer; i++) {
    for (let i = 0; i < integer; i++) {
      news += "+";
    }
    if (i < integer - 1) {
      news += "\n";
    }
  }

  return news;
}
