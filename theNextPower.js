// https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript
function nextPower(num, pow) {
  if (val == 1) {
    return 2 ** pow;
  }
  for (let i = 0; i <= num; i++) {
    if (i ** pow > num) {
      return i ** pow;
    }
  }
}
