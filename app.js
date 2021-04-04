const render = document.querySelector(".root");

const chooseMode = (arg) => {
  if (arg === "textCalc") {
    // render.style.opacity = "0.5";
    textBasedCalculator();
  } else {
    GUI();
  }
};

const GUI = () => {
  const html = `<div class="container">
      <h1>Fx-2021ES</h1>
      <div class="display">
        <span class="pressed"></span>
        <span class="active"></span>
      </div>
      <div class="keys">
        <button value="1" class="key">1</button>
        <button value="2" class="key">2</button>
        <button value="3" class="key">3</button>
        <button value="4" class="key">4</button>
        <button value="+" class="operator add">+</button>
        <button value="5" class="key">5</button>
        <button value="6" class="key">6</button>
        <button value="7" class="key">7</button>
        <button value="8" class="key">8</button>
        <button value="-" class="operator subtract">-</button>
        <button value="9" class="key">9</button>
        <button value="0" class="key">0</button>
        <button value="." class="key decimal">.</button>
        <button value="/" class="operator divide">/</button>
        <button value="*" class="operator multiply">&times;</button>
        <button value="c" class="deleteAll">C</button>
        <button value="=" class="operator equal">=</button>
      </div>
    </div>`;

  render.innerHTML = html;

  //Display Variables
  const key = document.querySelectorAll(".key");
  const pressed = document.querySelector(".pressed");
  const active = document.querySelector(".active");

  //Operations
  const operators = document.querySelectorAll(".operator");
  const deleteAll = document.querySelector(".deleteAll");
  const equal = document.querySelector(".equal");

  //Inputs

  let displayVal = "0";
  let pendingVal, arg1, action, arg2;

  //Default:
  active.innerText = "0";

  //Functions
  //
  //

  // This updates the display for the calculator
  updateDisplayVal = (e) => {
    var btnValue = e.target.value;
    if (displayVal === "0") {
      displayVal = "";
    }

    if (btnValue === ".") {
      if (displayVal.split(".").length > 1) {
        return;
      }
    }

    displayVal += btnValue;
    active.innerText = displayVal;
  };

  //
  // This clears everything on the calculator, from display to internal variables
  //

  clearAll = () => {
    arg1 = 0;
    arg2 = 0;
    active.innerText = "0";
    pressed.innerText = "";
    displayVal = "0";
    pendingVal = "";
  };

  //THis does the main calculations depending on the chosen operators
  //
  calculate = (arg1, action, arg2) => {
    switch (action) {
      case "add":
        displayVal = arg1 + arg2;
        active.innerText = displayVal;
        break;
      case "subtract":
        displayVal = arg1 - arg2;
        active.innerText = displayVal;
        break;
      case "multiply":
        displayVal = arg1 * arg2;
        active.innerText = displayVal;
        break;
      case "divide":
        displayVal = arg1 / arg2;
        active.innerText = displayVal;
        break;
      default:
        break;
    }
  };

  //This lays the ground work for the performing of the calculate function
  ////
  ////
  performOperation = (e) => {
    var operator = e.target.value;

    switch (operator) {
      case "+":
        pendingVal = displayVal;
        displayVal = "0";
        pressed.innerText = pendingVal;
        active.innerText = displayVal;
        arg1 = parseFloat(pendingVal);
        action = "add";
        break;
      case "-":
        pendingVal = displayVal;
        displayVal = "0";
        pressed.innerText = pendingVal;
        active.innerText = displayVal;
        arg1 = parseFloat(pendingVal);
        action = "subtract";
        break;
      case "*":
        pendingVal = displayVal;
        displayVal = "0";
        pressed.innerText = pendingVal;
        active.innerText = displayVal;
        arg1 = parseFloat(pendingVal);
        action = "multiply";
        break;
      case "/":
        pendingVal = displayVal;
        displayVal = "0";
        pressed.innerText = pendingVal;
        active.innerText = displayVal;
        arg1 = parseFloat(pendingVal);
        action = "divide";
        break;
      case "=":
        pressed.innerText = "";
        arg2 = parseFloat(displayVal);
        calculate(arg1, action, arg2);
        action = "";
        break;
      default:
        break;
    }
  };

  //Eventlisteners
  //
  //

  key.forEach((key) => {
    key.addEventListener("click", (e) => {
      updateDisplayVal(e);
    });
  });

  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      performOperation(e);
    });
  });

  deleteAll.addEventListener("click", clearAll);
};

//
//Text Based
//
//

const textBasedCalculator = () => {
  // program for a simple calculator
  let result, number1, number2, number3;

  // take the operator input
  const operator = prompt(
    "Enter operator ( either +, -, *, square root or / ): "
  );

  // take the operand input
  if (operator === "square root") {
    number3 = parseFloat(prompt("Enter number: "));
  } else {
    number1 = parseFloat(prompt("Enter first number: "));
    number2 = parseFloat(prompt("Enter second number: "));
  }

  switch (operator) {
    case "+":
      result = number1 + number2;
      alert(`${number1} + ${number2} = ${result}`);
      break;

    case "-":
      result = number1 - number2;
      alert(`${number1} - ${number2} = ${result}`);
      break;

    case "*":
      result = number1 * number2;
      alert(`${number1} * ${number2} = ${result}`);
      break;

    case "/":
      result = number1 / number2;
      alert(`${number1} / ${number2} = ${result}`);
      break;
    case "square root":
      result = number3 ** 0.5;
      alert(`Square root of ${number3} is : ${result}`);
      break;

    default:
      alert("Invalid operator");
      break;
  }
};
