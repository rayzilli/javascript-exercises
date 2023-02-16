const convertToCelsius = function(temp) {
  let conversion  = (temp-32) * 5/9;
  let roundNumber = Math.round(conversion*10)/10
  return roundNumber;
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * 9/5) + 32;
  let roundNumber = Math.round(conversion*10)/10
  return roundNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
