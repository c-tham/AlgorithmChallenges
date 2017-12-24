// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum , highNum , mult , print multiples of mult from highNum down to lowNum , using a FOR . For (2,9,3) , print 963 (on successive lines).

var lowNum = 2;
var highNum = 9;
var mult = 3;

for (x=highNum; x>=lowNum; x=x-mult) {
    console.log(x);
}