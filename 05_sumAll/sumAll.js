const sumAll = function(a,b) {
  if(Number.isInteger(a) && Number.isInteger(b) && a >=0 && b>=0){ // I don't like having to return error on negative, but the spec.js test requires it...
    let lower = 0;
    let higher = 0;
    if(a>b){
      lower = b;
      higher = a;
    };
    if(b>a){
      lower = a;
      higher = b;
    };
    let space = higher - lower;
    let total = lower;
    for(i=0;i<space;i++){
      total = total + ++lower;
    }
    return total;
  }else{return "ERROR";}
}

// Do not edit below this line
module.exports = sumAll;
