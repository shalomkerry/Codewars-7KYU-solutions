// https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript
function testit(s) {
  let count = 0;
  let array = s.split(" ");
  console.log(array);
  for (let i = 0; i <= array.length - 1; i++) {
    if (array.length == 1) {
      let words = array.join("");
      console.log(words);
      if (words.length > 4) {
        for (let j = 0; j < words.length; j++) {
          if (words[j].match(/[r]/)) {
            count += 1;
          }
          return count;
        }
      }
      for (let j = 0; j <= words.length - 1; j++) {
        if (words[j].match(/[Ww]/)) {
          count += 1;
        }
        return count;
      }
    }
    if (array[i].match(/^[Ww]/)) {
      count += 1;
    }
  }
  return count;
}
