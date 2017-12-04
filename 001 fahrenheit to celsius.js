var fDegrees = 0;

function fahrenheitToCelsius(fDegrees) {
    var cDegrees = 0;
    
    cDegrees = (fDegrees - 32) * (5/9);
    
    return cDegrees;
}

console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(100));