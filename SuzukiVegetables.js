// https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/javascript
function sortVegetables(string) {
  let Veggies = [
    "cabbage",
    "carrot",
    "celery",
    "cucumber",
    "mushroom",
    "onion",
    "pepper",
    "potato",
    "tofu",
    "turnip",
  ];
  let store = string.split(" ");
  let finalVeggies = [];
  let sortedVeggies = [];
  const data = (name, quantity) => {
    finalVeggies.push({ name: name, quantity: quantity });
  };
  const itemCounter = (value, index) => {
    return value.filter((x) => x == index).length;
  };
  store.forEach((x) => {
    if (Veggies.includes(x)) {
      sortedVeggies.push(x);
    }
  });
  sortedVeggies.forEach((x, index, arr) => {
    data(x, itemCounter(arr, x));
  });
  let uniqueVeggies = finalVeggies.filter(
    (value, index, self) =>
      index ===
      self.findIndex(
        (obj) => obj.name === value.name && obj.quantity === value.quantity
      )
  );
  uniqueVeggies.sort((a, b) => {
    if (a.quantity === b.quantity) {
      return b.name.localeCompare(a.name);
    }
    return b.quantity - a.quantity;
  });
  let finalAnswer = [];
  uniqueVeggies.forEach((element) => {
    finalAnswer.push([element.quantity, element.name]);
  });

  console.log(finalAnswer);
}
sortVegetables(
  "potato tofu cucumber cabbage turnip pepper onion carrot celery mushroom potato tofu cucumber cabbage"
);
