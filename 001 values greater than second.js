var x = [1,3,5,7,9,13];

function valuesecond(xx) {
    var yy = xx[1];
    var count = 0;

    for (var zz=0; zz<xx.length; zz++) {
        if (xx[zz] > yy) {
            console.log(xx[zz]);
            count++
        }
    }
    console.log('Total number which greater than '+yy+' is '+count);
}

valuesecond(x);