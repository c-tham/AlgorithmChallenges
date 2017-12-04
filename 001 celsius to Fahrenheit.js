var cDegrees = 0;

function celsiusToFahrenheit(cDegrees) {
    var fDegrees = 0;
    
    fDegrees = (cDegrees * (9/5) + 32);
    
    return fDegrees;
}

console.log(celsiusToFahrenheit(-17.78));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(37.78));