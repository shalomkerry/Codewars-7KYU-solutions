// https://www.codewars.com/kata/5412509bd436bd33920011bc/javascript
function censor(word) {
  if (word.length <= 4) return word;
  return "#".repeat(word.length - 4) + word.slice(-4);
}
console.log(censor("ethiopian"));
