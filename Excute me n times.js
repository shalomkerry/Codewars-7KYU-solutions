// https://www.codewars.com/kata/5b2b4836b6989d207700005b/train/javascript
async function execute(action, nTimes) {
  let result = [];
  for (let i = 0; i < nTimes; i++) {
    result.push(action());
  }
  await Promise.all(result);
}
