// https://www.codewars.com/kata/560a4962c0cc5c2a16000068/train/javascript
function eqSumPowdig(hMax, exp) {
    let answer = [];
    let sum = 0;
    for(let i = 100; i<=hMax;i++){
      let nums= i.toString().split("");
  let sum = 0;
  nums.every((element) => (sum += Math.pow(+element, exp)));
      if(sum==i){
        answer.push(i)
      }
    }
    return answer
  }