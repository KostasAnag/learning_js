import costSum from "./helpers.js";

console.log("Hello world");
const mayExpences = {
  cost: 400,
  expenses: [
    { name: "dei", cost: 200 },
    { name: "super", cost: 300 },
  ],
};
const mayCosts = mayExpences.expenses.map((expence) => expence.cost);

// monthlyCosts are the individual object costs summed
// sumCosts is the given total cost

function isEqual(monthlyCosts, sumCosts) {
  if (monthlyCosts === sumCosts) {
    return true;
  }
  return false;
}
console.log(
  "checking for sum equality:",
  isEqual(costSum(mayCosts), mayExpences.cost)
);

//console.log(costSum(mayCosts));
const div = document.createElement("div");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const names = data.map((user) => {
      const p = document.createElement("p");
      p.textContent = user.email;
      p.style = "color:red;"
      div.append(p);
    });
});

document.body.append(div);
console.log("when do i run?");
