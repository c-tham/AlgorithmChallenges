// Fahrenheit to Celsius
// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32 .

var fDegrees = 0;

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = 0;
    
    cDegrees = (fDegrees - 32) * (5/9);
    
    return cDegrees;
}

console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(100));