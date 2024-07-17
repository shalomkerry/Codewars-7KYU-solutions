function dayOfTheWeek(date) {
  let time = new Date(date.split("/").reverse().join("-"));
  return time.toLocaleString("en-us", { weekday: "long" });
}
console.log(dayOfTheWeek("17/07/2024"));
