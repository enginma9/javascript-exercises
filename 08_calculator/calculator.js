const add = function(numberGiven1,numberGiven2) {
  return (numberGiven1 + numberGiven2);
};

const subtract = function(numberGiven1,numberGiven2) {
  return (numberGiven1 - numberGiven2);
};

const sum = function(numbersGiven) {
  total = 0;
  aLength = numbersGiven.length;
  for(i=0;i<aLength;i++){
    total+=numbersGiven[i];
  };
  return total;
};

const multiply = function(numbersGiven) {
  let givenLength = numbersGiven.length;
  let currentNumber = 1;
  for( i = 0; i < givenLength; i++){
    currentNumber = currentNumber * numbersGiven[i];
  }
  return currentNumber;
};

const power = function(numberGiven, powerOf) {
  return numberGiven ** powerOf;
};

const factorial = function(numberGiven) {
  if (numberGiven < 0){
    return "ERROR";
  }else if(numberGiven == 0){
    return 1;
  }else{
    return (numberGiven * factorial(numberGiven - 1));
  }
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
