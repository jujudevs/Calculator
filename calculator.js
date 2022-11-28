let firstOperand = 0;
let secondOperand = 0;
let currentOperation = null;
let shouldResetScreen = false;


const add = function() { 
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  
      
  };


const subtract = function(x, y) {  
    return x - y;
  
   
      
  };

  const sum = function(array) { 
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum; 
      
  };

  
const multiply = function(x,y){
    return x * y;
}


const divide = function(x, y) { 
    return x / y;
  
  }; 

  const operate = function(operator, x, y){
    if (operator === "+"){
      return add(x, y);
    }
    else if (operator === "-"){
      return subtract(x, y);
    }
    else if (operator === "*"){
      return multiply(x, y);
    }
    else if (operator === "/"){
      return divide(x, y);
    }
  }
    
  const clearButton = document.getElementById("clear");
  const lastOperationScreen = document.getElementById("lastOperation");
  const currentOperationScreen = document.getElementById("currentOperation");
  const numberButtons = document.querySelectorAll('[data-number]');
  const operationButtons = document.querySelectorAll('[data-operator]');
  const equalsButton = document.getElementById("equals");
  const decimalButton = document.getElementById("decimal");
  const deleteButton = document.getElementById("backspace");

  
  deleteButton.addEventListener("click", deleteNumber);
  function deleteNumber(){
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0, -1);
  }

  decimalButton.addEventListener("click", addDecimal);
  function addDecimal(){
    if (currentOperationScreen.textContent.includes(".")){
      return;
    }
    currentOperationScreen.textContent += ".";
  }

 

  equalsButton.addEventListener("click", compute);
  function compute(){
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperationScreen.innerText === "0" && currentOperation === "/"){
      alert("You can't divide by 0");
      return;
    }
    secondOperand = parseFloat(currentOperationScreen.innerText);
    currentOperationScreen.innerText = roundNumber(operate(currentOperation, firstOperand, secondOperand));
    lastOperationScreen.innerText = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    currentOperation = null;
  }

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
      chooseOperation(button.innerText);
    })
  })
  function chooseOperation(operation){
    if (currentOperation !== null) {
      compute();
    }
    currentOperation = operation;
    firstOperand = parseFloat(currentOperationScreen.innerText);
    lastOperationScreen.innerText = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
  }

  
  function roundNumber(number){
    return Math.round(number * 1000) / 1000;
  }

  


clearButton.addEventListener("click", clear);
function clear(){
    lastOperationScreen.textContent = "";
    currentOperationScreen.textContent = "0";
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
  };

 numberButtons.forEach((button) => 
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number){
  if (currentOperationScreen.textContent === "0" || shouldResetScreen) 
    resetScreen();
    currentOperationScreen.textContent += number;
}

function resetScreen(){
  currentOperationScreen.textContent = "";
  shouldResetScreen = false;
}




   
  