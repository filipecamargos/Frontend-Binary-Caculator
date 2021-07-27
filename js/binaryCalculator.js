let firstSet = "";
let secondSet = "";
let toggleSet = false;
let operation = "";

//btn0 A button expressing binary digit
document.getElementById("btn0").addEventListener("click", () => {
  if (toggleSet == false) {
    firstSet += 0;
  } else {
    secondSet += 0;
  }
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});

//btn1 A button expressing binary digit
document.getElementById("btn1").addEventListener("click", () => {
  if (toggleSet == false) {
    firstSet += 1;
  } else {
    secondSet += 1;
  }
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});

//btnClr A button to clear the contents of res
function clearValue() {
  firstSet = "";
  secondSet = "";
  toggleSet = false;
  operation = "";
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
}

document.getElementById('btnClr').addEventListener('click', clearValue);

//=
document.getElementById("btnEql").addEventListener("click", () => {
  let result = 0;
  let firstSetParsed = parseInt(firstSet, 2);
  let SecondSetParsed = parseInt(secondSet, 2);

  switch (operation) {
    case "+":
      result = firstSetParsed + SecondSetParsed;
      break;
    case "-":
      result = firstSetParsed - SecondSetParsed;
      break;
    case "*":
      result = firstSetParsed * SecondSetParsed;
      break;
    case "/":
      result = firstSetParsed / SecondSetParsed;
      break;
  }

  document.getElementById('res').innerHTML = (result >>> 0).toString(2);
});

//+
document.getElementById("btnSum").addEventListener("click", () => {
  toggleSet = true;
  operation = "+";
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});

//-
document.getElementById("btnSub").addEventListener("click", () => {
  toggleSet = true;
  operation = "-";
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});

//*
document.getElementById("btnMul").addEventListener("click", () => {
  toggleSet = true;
  operation = "*";
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});

/// divsion
document.getElementById("btnDiv").addEventListener("click", () => {
  toggleSet = true;
  operation = "/";
  document.getElementById('res').innerHTML = firstSet + operation +secondSet;
});
