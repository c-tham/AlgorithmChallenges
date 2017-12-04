var xx = [5,9];
var yy = 0;

function print_return(x) {
    console.log(x[0]);
    return x[1];
}

yy = print_return(xx);
console.log(yy);