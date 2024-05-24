// https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript

function modifyMultiply(string, loc, num) {
  let array = string.split(" ");
  let word = array[loc];
  let words = Array(num).fill(word).join("-");
  return words;
}
modifyMultiply("shalom badeg shalemo", 2, 5);
