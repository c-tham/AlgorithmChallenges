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