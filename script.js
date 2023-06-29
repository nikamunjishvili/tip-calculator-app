const tipButton = document.querySelectorAll("button");
const tipBillInput = document.querySelector(".bill_div input");
const numberOfPeopleInput = document.querySelector(".number_people input");
const tipAmountInput = document.querySelector(".child .price span");
const tipTotaltInput = document.querySelector(".child_2 .price span");
const resetButton = document.querySelector(".reset");

function tipCalculate() {
  const bill = parseFloat(tipBillInput.value);
  const numberPeople = parseInt(numberOfPeopleInput.value);

  if (!isNaN(bill) && !isNaN(numberPeople) && numberPeople > 0) {
    const billSelected = parseFloat(this.textContent.replace("%", "")) / 100;
    const billPerPerson = (bill * billSelected) / numberPeople;
    const totalPerPerson = bill / numberPeople + billPerPerson;

    tipAmountInput.textContent = "$" + billPerPerson.toFixed(2);
    tipTotaltInput.textContent = "$" + totalPerPerson.toFixed(2);
  }
}

tipButton.forEach((button) => {
  button.addEventListener("click", tipCalculate);
});

function resetCalculator() {
  tipBillInput.textContent = "";
  numberOfPeopleInput.textContent = "";
  tipAmountInput.textContent = "$0.00";
  tipTotaltInput.textContent = "$0.00";
}

resetButton.addEventListener("click", resetCalculator);
