// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE 

var x = 0;

while (x <= 60000) {
    if (x%6 == 0) {
        console.log(x);
    }
    x++;
}