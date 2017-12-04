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
