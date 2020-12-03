function buildNumbers() {
  for (let i = 0; i < 1001; i++) {
    let newNumberRadio = document.createElement("input");
    let newNumberRadioLabel = document.createElement("label");
    let rnd;

    do {
      rnd = Math.floor(Math.random() * 1001);
    } while (usedNumbers.includes(rnd));
    usedNumbers.push(rnd);

    newNumberRadio.type = "radio";
    newNumberRadio.name = "number";
    newNumberRadio.value = rnd;

    newNumberRadioLabel.for = rnd;
    newNumberRadioLabel.innerHTML = rnd;

    form.appendChild(newNumberRadio);
    form.appendChild(newNumberRadioLabel);
    form.appendChild(document.createElement("br"));
  }
}

function buildOperators() {
  let operators = ["+", "-", "*", "/"];

  for (let i = 0; i < 5; i++) {
    let newOperator = document.createElement("input");
    let newOperatorLabel = document.createElement("label");

    newOperator.type = "radio";
    newOperator.name = "operator";
    newOperator.value = operators[i];

    newOperatorLabel.for = operators[i];
    newOperatorLabel.innerHTML = operators[i];
  }
}

let form = document.querySelector("#numbersForm");
let usedNumbers = [];

buildNumbers();
