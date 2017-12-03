var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

var x = param2;

while (x<=param3) {
    if (x%param1 == 0) {
        if (x != param4) {
            console.log(x);
        }
    }
    x++;
} 