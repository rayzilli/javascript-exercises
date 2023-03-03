const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2; 
};

const sum = function(calculator) {
   const totalSum = calculator.reduce((a, b) => a + b, 0);
   return totalSum 
};

const multiply = function(calculator) {
  const totalMultiply = calculator.reduce((a,b)=> a * b);
  return totalMultiply 

};

const power = function(number,exponential) {
  const powerTotal = number ** exponential;
  return powerTotal; 
	
};

const factorial = function(number) {
  let total = number;
  if (number ===0){
    return 1; 
  }
  while (number > 1){
  number --;
  total = total * number;
  }
	return total; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
