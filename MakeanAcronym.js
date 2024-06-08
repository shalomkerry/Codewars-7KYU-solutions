// https://www.codewars.com/kata/57a60bad72292d3e93000a5a/train/javascript
function toAcronym(inp) {
  // return inp.split(' ').reduce((a,b,index,arr)=>
  //   a=a[0]+b[0])
  let array = inp.split(" ");
  let firstLet = [];
  for (let i = 0; i < array.length; i++) {
    firstLet.push(array[i][0]);
  }
  return firstLet.map((x) => x.toUpperCase()).join("");
}
