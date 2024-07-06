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
