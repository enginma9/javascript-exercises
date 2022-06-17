const reverseString = function(thisString) {
  iLength = thisString.length;
  thatString = "";
  for(i=iLength-1;i>=0;i--){
    thatString = thatString + thisString[i];
  }
  console.log( thatString );
  return thatString;
};

// Do not edit below this line
module.exports = reverseString;
