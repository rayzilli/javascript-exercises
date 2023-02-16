const sumAll = function(startNumber,endNumber) {
    if (startNumber > endNumber){
        
    }
    let totalSum = startNumber; 
    for (let i = startNumber + 1; i <= endNumber; i++){
     totalSum += i;
    }
   return totalSum; 
};

// Do not edit below this line
module.exports = sumAll;
