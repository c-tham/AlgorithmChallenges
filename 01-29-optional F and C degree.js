// Celsius to Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
// (optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value.


var cDegrees = 0;
var fDegrees = 0;

function celsiusToFahrenheit(cDegrees) {
    var fDegrees = 0;
    
    fDegrees = (cDegrees * (9/5) + 32);
    
    return fDegrees;
}

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = 0;
    
    cDegrees = (fDegrees - 32) * (5/9);
    
    return cDegrees;
}

for (x=200; x>-200; x--) {
    cc = celsiusToFahrenheit(x);
    ff = fahrenheitToCelsius(x);
    if (cc == ff) {
        console.log('celsius is '+cc+' = fahrenheit is '+ff);
    }
    // console.log(cc+' '+ff);
}
