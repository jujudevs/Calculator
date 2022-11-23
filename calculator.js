let firstOperand = 0;
let secondOperand = 0;
let currentOperation = null;


const add = function() { // add every number in the array
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  
      
  };


const subtract = function(x, y) {  // subtract y from x
    return x - y;
  
   
      
  };

  const sum = function(array) { // computes the sum of an array of many numbers 
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum; 
      
  };

  
const multiply = function(x,y){
    return x * y;
}


const divide = function(x, y) { // divide x by y
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


clearButton.addEventListener("click", clear);

 numberButtons.forEach((button) => 
  button.addEventListener("click", () => appendNumber(button.textContent))
);

function appendNumber(number){
  if (currentOperationScreen.textContent === "0"){
    currentOperationScreen.textContent = number;
  }
  else{ 
    currentOperationScreen.textContent += number;
  }
}




function clear(){
    lastOperationScreen.textContent = "";
    currentOperationScreen.textContent = "0";
    firstOperand = '';
    secondOperand = '';
    //currentOperation = null;
  };
   
  //git test