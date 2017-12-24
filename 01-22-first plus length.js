// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false ).

var x1 = [1,2,3,4,5];
var x2 = ['what?',2,3,4,5];
var x3 = [false,2,3,4,5];


function firstlength(xx) {
    var yy = 0;
    yy = xx[0] + xx.length;
    return yy;
}

console.log(firstlength(x1));
console.log(firstlength(x2));
console.log(firstlength(x3));