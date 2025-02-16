const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

let currentinput = "";
let previousinput = "";
let operator = "";

function calculateResult(num1, operator, num2) {
  let result = 0;
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 === 0 ? "Error: can't deivide by zero" : num1 / num2;
      break;
    default:
      result = "invalid operator";
  }
  return result;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "C") {
      display.value = "";
      currentinput = "";
      operator = "";
      previousinput = "";
    } else if (btn.innerText === "=") {
      if (previousinput !== "" && operator !== "" && currentinput !== "") {
        display.value = calculateResult(previousinput, operator, currentinput);
        // if any further calu
        currentinput=display.value;
        previousinput="";
        operator="";
      }
    } else {
      if (!isNaN(btn.innerText)) {
        currentinput += btn.innerText;
        display.value += currentinput;
      }
      if (["+", "-", "*", "/"].includes(btn.innerText) && currentinput !== "") {
        // ensure no operator select before a number
        operator = btn.innerText;
        display.value += operator;
        previousinput = currentinput;
        currentinput = "";
      }
      //   display.value += btn.innerText;
    }
  });
});
