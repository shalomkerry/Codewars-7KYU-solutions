// https://www.codewars.com/kata/62b76a4f211432636c05d0a9/train/javascript
function guessthecard(audience) {
  let array = [...Array(21)].map((a, idx) => idx + 1),
    cards = [[], [], []],
    count = 0;
  const deal = () =>
    array.forEach((element, index) => cards[index % 3].push(element));
  const stack = () => {
    let row = audience.getInput(cards);
    row == 0
      ? (array = cards[1].concat(cards[0]).concat(cards[2]))
      : row == 1
      ? (array = cards[0].concat(cards[1]).concat(concat(cards[2])))
      : (array = cards[0].concat(cards[2]).concat(cards[1]));
    cards = [[], [], []];
  };
  while (count < 3) {
    deal();
    stack();
    count++;
  }
  return array[10];
}
