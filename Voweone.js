// https://www.codewars.com/kata/580751a40b5a777a200000a1/solutions/javascript
function vowelOne(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let array = s.split("");

  let modified = array.map((elem) => {
    if (vowels.includes(elem)) {
      elem = "1";
    } else {
      elem = "0";
    }
    return elem;
  });
  return modified.join("");
}
