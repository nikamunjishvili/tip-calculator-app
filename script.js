const tipButton = document.querySelectorAll("#button");
const tipBillInput = document.querySelector(".bill_div input");
const numberOfPeopleInput = document.querySelector(".number_people input");
const tipAmountInput = document.querySelector(".child .price span");
const tipTotaltInput = document.querySelector(".child_2 .price span");
const resetButton = document.querySelector(".reset");

function tipCalculate(){
    const bill = parseFloat(tipBillInput.value);
    const numberPeople = parseInt(numberOfPeopleInput.value);
}