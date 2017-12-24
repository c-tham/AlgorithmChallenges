// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?


var x = [];

function countdown (yy) {
    var xx = [];

    for (var y=yy; y>=0 ; y--) {
        xx.push(y);
    }

    return xx;
}

x = countdown(10);

console.log(x);
console.log(x.length);
