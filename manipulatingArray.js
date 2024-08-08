// let array = [100, 200, 300];
// let num = 230;
// let news = [];

// for (let i = 0; i < array.length; i++) {
//   let first = array.slice(0, i + 1).reduce((a, b) => a + b);
//   news.push(first);
// }
// let closest = news[0];
// let smallest = Math.abs(num - closest);
// for (value of news) {
//   let currentdiff = Math.abs(value - num);
//   if (currentdiff < smallest) {
//     smallest = currentdiff;
//     closest = value;
//   }
// }
// console.log(news, closest);
// console.log(news.indexOf(closest));
/*
My Attempt above
*/

//https://www.codewars.com/kata/5cb05eee03c3ff002153d4ef/train/javascript
function getSectionIdFromScroll(scrollY, sizes, sum = 0) {
  return sizes.findIndex((element) => (sum += element) > scrollY);
}
