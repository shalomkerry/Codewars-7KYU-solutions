// https://www.codewars.com/kata/6376bbc66f2ae900343b7010/train/javascript
function showTime(open, close, length) {
  let array = [];
  if (open > close) {
    close += 24;
  }
  for (let i = open * 60; i + length <= close * 60; i += length + 15) {
    array.push([Math.floor((i / 60) % 24), i % 60]);
  }
  console.log(array);
}
