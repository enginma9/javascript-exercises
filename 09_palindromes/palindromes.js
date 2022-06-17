const palindromes = function (givenString) {
  let cleaned = givenString.replace(/[^a-z0-9]/gi, ''); // regex to remove any non-alphanumeric characters
  let testString = cleaned.toLowerCase();
  stringLength = testString.length;
  fromEnd = stringLength - 1;
  for(i=0;i<stringLength;i++){
    if(testString[i] == testString[fromEnd]){
      fromEnd--;
      continue;
    }else{
      return false;
    }

  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
