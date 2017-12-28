// Most Significant Digit
// If you already know who Ada Lovelace is, that’s great! In a History of Science, she is significant . Given number of any size, return the most significant digit. If you already know what strings are, that’s great! However, don’t use them here . Hint: use WHILE to bring the most significant digit into range where you can use the friendly modulus operator ( % ). The most significant digit is the leftmost non-zero digit of a number. Given 12345 , return 1 . Given 67.89 , return 6 . Given 0.00987 , return 9 .
// Second: handle negative num values as well, doing what you think is appropriate.

function MostSignDigit(num) {
    LastNum = num;
    while (LastNum > 10) {
        tempNum = LastNum % 10;
        NewNum = Math.floor((LastNum - tempNum)/10);
        LastNum = NewNum;
        console.log(NewNum);
    }
    console.log('Result: '+LastNum);
}
// MostSignDigit(12345);
// MostSignDigit(67.89);


function MostSignDigit2(num) {
    var LastNum = num;
    var tempNum = 0;
    var NewNum = 0;
    if (num >= 10) {
        while (LastNum >= 10) {
            tempNum = LastNum % 10;
            NewNum = Math.floor((LastNum - tempNum)/10);
            LastNum = NewNum;
            // console.log(NewNum);
        }
    }
    if (num >= 1 && num < 10) {
        LastNum = Math.floor(num);
    }
    if (num > 0 && num < 1) {
        while (Math.floor(LastNum%10) == 0) {
            LastNum *= 10;
        }
        LastNum = Math.floor(LastNum);
    }

    console.log('Result: '+LastNum);
}
// MostSignDigit2(12345);
// MostSignDigit2(67.89);
// MostSignDigit2(7.89);
// MostSignDigit2(0.00987);

function MostSignDigit3(num) {
    var LastNum = 0;
    var tempNum = 0;
    var NewNum = 0;
    if (num < 0) {
        LastNum = num * -1;
        num *= -1;
    } else {
        LastNum = num;
    }
    if (num >= 10) {
        while (LastNum >= 10) {
            tempNum = LastNum % 10;
            NewNum = Math.floor((LastNum - tempNum)/10);
            LastNum = NewNum;
            // console.log(NewNum);
        }
    }
    if (num >= 1 && num < 10) {
        LastNum = Math.floor(num);
    }
    if (num > 0 && num < 1) {
        while (Math.floor(LastNum%10) == 0) {
            LastNum *= 10;
        }
        LastNum = Math.floor(LastNum);
    }

    console.log('Result: '+LastNum);
}
MostSignDigit3(12345);
MostSignDigit3(67.89);
MostSignDigit3(7.89);
MostSignDigit3(0.00987);
MostSignDigit3(-12345);
MostSignDigit3(-67.89);
MostSignDigit3(-7.89);
MostSignDigit3(-0.00987);