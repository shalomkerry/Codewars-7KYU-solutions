// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript
function ballTest(s, r) {
  let crack = [...r.slice(0, s)].filter((element) => element == "x").length;
  if (s <= 0) {
    return false;
  }
  if (s >= r.length) {
    return true;
  } else {
    return ballTest(s - crack - 1, r.slice(s));
  }
}
