function reverseLetter(str) {
  let se = str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
  return se;
}
