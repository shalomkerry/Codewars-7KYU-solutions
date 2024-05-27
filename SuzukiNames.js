// https://www.codewars.com/kata/5701800886306a876a001031/train/javascript
function lineupStudents(students) {
  let array = students.split(" ");
  array.sort((a, b) => {
    if (a.length === b.length) {
      return b.localeCompare(a);
    }
    return b.length - a.length;
  });
  console.log(array);
}
let string =
  "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi";
lineupStudents(string);
