const removeFromArray = function(aList) {
  console.log("Original list: " + aList);
  let args = Array.prototype.slice.call(arguments, 1);
  console.log("Arguments: " + args);
  let argLength = args.length;
  console.log("Number of arguments: " + argLength);
  var newList = [];
  for(i=0;i<argLength;i++){
    let listLength = aList.length;
    for(j=0;j<listLength;j++){ //
      var index = aList.indexOf(args[i]);
      if (index !== -1) {
        aList.splice(index, 1);
      }
    }
  }
  console.log("Final: " + aList);
  return aList;
};

// Do not edit below this line
module.exports = removeFromArray;
