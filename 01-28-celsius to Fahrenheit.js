// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.

var cDegrees = 0;

function celsiusToFahrenheit(cDegrees) {
    var fDegrees = 0;
    
    fDegrees = (cDegrees * (9/5) + 32);
    
    return fDegrees;
}

console.log(celsiusToFahrenheit(-17.78));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(37.78));