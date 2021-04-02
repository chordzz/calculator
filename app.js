//Display Variables
const key = document.querySelectorAll(".key");
const pressed = document.querySelector(".pressed");
const active = document.querySelector(".active");

//Operations
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const multiply = document.querySelector(".multiply");
// const divide = document.querySelector(".divide");
const operators = document.querySelectorAll(".operator");
const deleteAll = document.querySelector(".deleteAll");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");

//Inputs

let displayVal = "0";
let pendingVal, arg1, action, arg2;

//Functions
//
//

// This updates the display for the calculator
updateDisplayVal = (e) => {
  var btnValue = e.target.value;
  if (displayVal === "0") {
    displayVal = "";
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
      // evalStringArray.push(pendingVal);
      // evalStringArray.push("+");
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
      // evalStringArray.push(pendingVal);
      // evalStringArray.push("-");
      break;
    case "*":
      pendingVal = displayVal;
      displayVal = "0";
      pressed.innerText = pendingVal;
      active.innerText = displayVal;
      arg1 = parseFloat(pendingVal);
      action = "multiply";
      // active.innerText = displayVal;
      // evalStringArray.push(pendingVal);
      // evalStringArray.push("*");
      break;
    case "/":
      pendingVal = displayVal;
      displayVal = "0";
      pressed.innerText = pendingVal;
      active.innerText = displayVal;
      arg1 = parseFloat(pendingVal);
      action = "divide";
      // active.innerText = displayVal;
      // evalStringArray.push(pendingVal);
      // evalStringArray.push("/");
      break;
    case "=":
      // evalStringArray.push(displayVal);
      // var evaluation = eval(evalStringArray.join(" "));
      // displayVal = evaluation + "";
      //active.innerText = displayVal;
      // evalStringArray = []; // clear the array
      pressed.innerText = "";
      arg2 = parseFloat(displayVal);
      calculate(arg1, action, arg2);
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

// key.addEventListener("click", calculate);
// active.textContent = "0";

// function calculate(event) {
//   let evtKey = event.target.value;
//   if (active.textContent === "0") {
//     console.log("no input");
//   }
//   console.log(event.target.value);
// }

// let pressedKeys;
// let temp = "";
// let solution = 0;
// let operandTemp = 0;

// // active.textContent = "0";

// key.addEventListener("click", (e) => {
// //   let eventKeyValue = e.target.value;
// //   // active.textContent = "";
// //   if (eventKeyValue) {
// //     if (
// //       eventKeyValue !== "+" &&
// //       eventKeyValue !== "-" &&
// //       eventKeyValue !== "/" &&
// //       eventKeyValue !== "*" &&
// //       eventKeyValue !== "="
// //     ) {
// //       pressedKey = eventKeyValue;
// //       active.textContent += pressedKey;
// //     }

// //     switch (eventKeyValue) {
// //       case "+":
// //         action = "add";
// //         pressed.textContent = active.textContent;
// //         operand1 = parseInt(active.textContent);
// //         active.textContent = "";

// //     }
// //   }
// // });

// // key.addEventListener("click", (e) => {
// //   if (e.target.value) {
// //     if (
// //       e.target.value !== "+" &&
// //       e.target.value !== "-" &&
// //       e.target.value !== "/" &&
// //       e.target.value !== "*" &&
// //       e.target.value !== "="
// //     ) {
// //       pressedKeys = e.target.value;
// //       active.innerHTML += pressedKeys;
// //       temp += pressedKeys;
// //       operandTemp = parseInt(temp);
// //       console.log("operandTemp : " + operandTemp);
// //       console.log(" solution: " + solution);
// //     } else {
// //       switch (e.target.value) {
// //         case "+":
// //           active.innerHTML = "";
// //           pressed.innerHTML = temp;
// //           solution += operandTemp;
// //           temp = "";
// //           break;
// //         case "-":
// //           active.innerHTML = "";
// //           pressed.innerHTML = temp;
// //           solution = operandTemp;
// //           temp = "";
// //           break;
// //         case "=":
// //           solution += operandTemp;
// //           pressed.innerHTML = "";
// //           active.innerHTML = solution;
// //           break;
// //         default:
// //           console.log("test");
// //       }
// //     }

// //     // pressed.innerHTML += pressedKeys;
// //   }

// //   //   display.active.innerHTML += pressed;
// // });
