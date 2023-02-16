const sumAll = function(startNumber,endNumber) {

    if (typeof startNumber === "string" || typeof endNumber === "string"){
        return "ERROR"
    }
    else if (isNaN(startNumber) || isNaN(endNumber)){
        return "ERROR"
    }
    
    else if(startNumber < 0 || endNumber < 0){
        return "ERROR"
    }

    else  if(startNumber > endNumber){
        let totalSum = endNumber; 
    for (let i = endNumber + 1; i <= startNumber; i++){
     totalSum += i;
    }
   return totalSum; 
    }

    else{
    let totalSum = startNumber; 
    for (let i = startNumber + 1; i <= endNumber; i++){
     totalSum += i;
    }
       return totalSum; 
}
};

// Do not edit below this line
module.exports = sumAll;
