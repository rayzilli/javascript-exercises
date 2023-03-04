const fibonacci = function(number) {
    let num1 =0;
    let num2= 1;
    let newNumber;
    if (number <0){
        return "OOPS"
    }
    for (let i=2 ; i<= number; i++){
        newNumber = num1+num2;
        num1 = num2;
        num2 = newNumber;
    }
    return newNumber; 
};
 console.log(fibonacci(7));

// Do not edit below this line
module.exports = fibonacci;
