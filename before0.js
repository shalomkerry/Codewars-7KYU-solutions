// https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript
function houseNumbersSum(inputArray) {

    let array = [];
    
    let index = inputArray.indexOf(0);
    if(index==0){
      return 0
    }
    for(let i = 0; i<index;i++){
      array.push(inputArray[i])
    }
    return array.reduce((a,b)=>a+b);
  }