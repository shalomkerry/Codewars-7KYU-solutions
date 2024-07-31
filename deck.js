// https://www.codewars.com/kata/630647be37f67000363dff04/solutions/javascript?filter=me&sort=best_practice&invalids=false
function pattern(deck) {
  let final = [];
  while (deck.length > 1) {
    final.push(deck.shift());
    deck.push(deck.shift());
  }
  console.log(deck, final);
  return final.concat(deck);
}
console.log(pattern(deck));
