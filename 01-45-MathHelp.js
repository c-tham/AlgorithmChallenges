// Math Help
// Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just snorts in his general direction).

function mathHelp(m,b) {
    for (x=-10;x<11;x++) {
        var y = (m*x)+b
        console.log(' '+y+' = ('+m+' * '+x+') + '+b+' -> ('+x+','+y+')');
    }
}

mathHelp(2,4);
