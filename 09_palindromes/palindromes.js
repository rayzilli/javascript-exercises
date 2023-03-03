const palindromes = function (word) {
    let regex = /[^A-Z a-z]/g;
    let removePunctuation = word.replace(regex,"").toLowerCase(); 
    reverseWord = removePunctuation.split("").reverse().join("").replaceAll(",","").replaceAll(" ","");
   originalWord = removePunctuation.replaceAll(",","").replaceAll(" ","");

    if (originalWord === reverseWord){
        return true;
    }
    else{
        return false; 
    }
};

// Do not edit below this line
module.exports = palindromes;
