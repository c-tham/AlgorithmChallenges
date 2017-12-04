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
