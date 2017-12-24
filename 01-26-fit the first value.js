// Fit the First Value
// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!" ; if value at [0] is less than array’s length, print "Too small!" ; otherwise print "Just right!" .

var x1 = [2,1];
var x2 = [4,1,1];
var x3 = [2,1,1];

function fitfirst (xx) {
    if (xx[0] == xx.length) {
        console.log('Just right');
    } else if (xx[0] > xx.length) {
        console.log('Too big!');
    } else {
        console.log('Too small!');
    }
}

fitfirst(x3);
fitfirst(x2);
fitfirst(x1);