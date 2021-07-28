let firstSet = "";
let secondSet = "";
let toggleSet = false;
let operation = "";

//display values on the caculator
function display() {
  document.getElementById('res').innerHTML = firstSet + operation + secondSet;
}

//Set the values clicked
function setValues(valueClicked) {
  if (toggleSet == false) {
    firstSet += valueClicked;
  } else {
    secondSet += valueClicked;
  }

  display();
}

//btn0 A button expressing binary digit
document.getElementById("btn0").addEventListener("click", () => { setValues(0)});

//btn1 A button expressing binary digit
document.getElementById("btn1").addEventListener("click", () => {setValues(1)});

//btnClr A button to clear the contents of res
function clearValue() {
  firstSet = "";
  secondSet = "";
  toggleSet = false;
  operation = "";
  
  display();
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

  //display the result
  document.getElementById('res').innerHTML = (result >>> 0).toString(2);
});

//set operator
function setOperator(operator) {
  toggleSet = true;
  operation = operator;
}

//+
document.getElementById("btnSum").addEventListener("click", () => {
  setOperator('+')
  display();
});

//-
document.getElementById("btnSub").addEventListener("click", () => {
  setOperator('-')
  display();
});

//*
document.getElementById("btnMul").addEventListener("click", () => {
  setOperator('*')
  display();
});

/// divsion
document.getElementById("btnDiv").addEventListener("click", () => {
  setOperator('/')
  display();
});
