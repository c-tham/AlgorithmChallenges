// Messy Math Mashup
// Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num , except for the following special cases of our count value:
// If current count (not num ) is evenly divisible by 3, don’t add to sum ; skip to the next count ;
// Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;
// Regardless of the above, if current count is exactly 1/3 of num , return -1 immediately.
// For example, if given num is 4 , return 7 . If given num is 8 , return 34 . If given num is 15 , return -1 .

function messyMath(num) {
    var sum = 0;
    for (i=0; i<=num; i++) {
        if (i%3 == 0) {
            // do nothing
            // console.log(i+' = a = '+sum);
        } else if ( i%7 == 0) {
            sum += (i+i);
            // console.log(i+' = b = '+sum);
        } else if (i == (num/3)) {
            sum = -1;
            break;
            // console.log(i+' = c = '+sum);
        } else {
            sum += i;
            // console.log(i+' = d = '+sum);
        }
    }
    console.log(sum);
}
messyMath(4);
messyMath(8);
messyMath(15);