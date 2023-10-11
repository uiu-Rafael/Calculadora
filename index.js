let equation = "";
let errorMessage = false;
const maxDisplayLength = 9; // Defina o limite máximo de caracteres no visor

const display = document.getElementById('display');
const displayValue = document.getElementById("display-value");

function getValue(value) {
  if (equation.length < maxDisplayLength) {
    equation += value;
    displayValue.innerHTML = equation;
  }
}

function handleDelete() {
  equation = equation.slice(0, -1);
  displayValue.innerHTML = equation || "0";
}

function handleReset() {
  equation = "";
  displayValue.innerHTML = "0";
}

function getResult() {
  if (equation.length === 0) return;

  try {
    const result = eval(equation);
    equation = String(result);
    displayValue.innerHTML = result;
  } catch (error) {
    document.getElementById("display-error-message").style.display = "inline-block";
  }
}

document.addEventListener('keydown', function(event) {
  const tecla = event.key;
  const calculatorRegex = /[0-9+\-*/().]/;

  if (calculatorRegex.test(tecla)) {
    document.getElementById(tecla).focus();
    getValue(tecla);
  } else if (tecla === "Backspace") {
    document.getElementById("<").focus();
    handleDelete();
  } else if (tecla === "=") {
    document.getElementById("=").focus();
    getResult();
  }
});
