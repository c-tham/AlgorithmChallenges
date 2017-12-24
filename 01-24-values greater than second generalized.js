// Values Greater than Second, Generalized
// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2 nd value. Print how many values this is. What will you do if the array is only one element long?

var x1 = [1,3,5,7,9,13];
var x2 = [1];

function valuesecond(xx) {
    var yy = xx[1];
    var count = 0;
    var newX = [];

    for (var zz=0; zz<xx.length; zz++) {
        if (xx[zz] > yy) {
            console.log(xx[zz]);
            newX.push(xx[zz]);
            count++
        }
    }
    console.log('Total number which greater than '+yy+' is '+count);
    return newX
}

console.log(valuesecond(x1));
console.log(valuesecond(x2));