// Extract-o-matic
// Create the extractDigit(num,digitNum) function that given a number and a digit number, returns the numeral value of that digit. 0 represents the ones digit, 1 represents the tens digit, etc. Given (1824,2) , return 8 . Given (1824,0) , return 4 . Given (1824,7) , return 0 .
// Second: handle negative digitNum values, where -1 represents tenths digit (0.x), -2 represents hundredths digit (0.0x), etc. Given (123.45,-1) , return 4 .
// Third: handle negative num values as well, doing what you think is appropriate.

function extractDigit(num,digitNum) {
    var tens = 10;
    if (digitNum < 1) {
        digitNum = 1;
        tens = 1;
    }
    for (i=1; i<digitNum; i++) {
        tens *= 10;
    }
    firstValue = Math.trunc((num/tens)%(10*digitNum));
    // console.log(firstValue);
    theValue = firstValue%10;
    console.log(theValue);
}
// extractDigit(1824,2);
// extractDigit(1824,0);
// extractDigit(1824,7);

function extractDigit2(num,digitNum) {
    var tens = 10;
    if (digitNum == 0) {
        digitNum = 1;
        tens = 1;
    }
    var tempNum = digitNum;
    if (digitNum < 0) {
        tempNum *= -1;
    }
    for (i=1; i<tempNum; i++) {
        tens *= 10;
    }
    if (digitNum > 0) {
        firstValue = Math.trunc((num/tens)%(10*digitNum));
    } else {
        firstValue = Math.trunc((num*tens)%(10*digitNum));
    }
    
    // console.log(firstValue);
    theValue = firstValue%10;
    console.log(theValue);
}
// extractDigit2(1824.35,2);
// extractDigit2(1824.35,0);
// extractDigit2(1824.35,7);
// extractDigit2(1824.35,-1);
// extractDigit2(1824.35,-2);

function extractDigit3(num,digitNum) {
    var tens = 10;
    if (digitNum == 0) {
        digitNum = 1;
        tens = 1;
    }
    var tempNum = digitNum;
    if (digitNum < 0) {
        tempNum *= -1;
    }
    for (i=1; i<tempNum; i++) {
        tens *= 10;
    }
    if (digitNum > 0) {
        firstValue = Math.trunc((num/tens)%(10*digitNum));
    } else {
        firstValue = Math.trunc((num*tens)%(10*digitNum));
    }
    
    // console.log(firstValue);
    theValue = firstValue%10;
    console.log(theValue);
}
extractDigit3(-1824.35,2);
extractDigit3(-1824.35,0);
extractDigit3(-1824.35,7);
extractDigit3(-1824.35,-1);
extractDigit3(-1824.35,-2);