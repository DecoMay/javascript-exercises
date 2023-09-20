const add = function(firstNum, secondNum) {
	return firstNum + secondNum;
};

const subtract = function(firstNum, secondNum) {
	return firstNum - secondNum;
};

const sum = function(numberArray) {
  let result = 0;
  numberArray.forEach((item) => result += item);
  return result;
};

const multiply = function(numberArray) {
  let result = 1;
  numberArray.forEach((item) => result *= item)
  return result;
};

const power = function(num, pow) {
	let result = num;
  for (let i = 0; i < pow - 1; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
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
