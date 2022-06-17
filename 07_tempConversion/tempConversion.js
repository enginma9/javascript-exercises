const ftoc = function(farenheit) {
  let middle = (farenheit - 32 ) * 5 / 9;
  let result = mRound(middle);
  return result;
};

const ctof = function(celsius) {
  let middle = celsius * 9/5 + 32;
  let result = mRound(middle);
  return result;
};

function mRound(notRoundNumber){
  return (Math.round( notRoundNumber * 10 ) / 10);
};

function fRound(notRoundNumber){
  let desiredNumber = parseFloat(notRoundNumber.toFixed(1));
  return desiredNumber;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
