// Sum to One Digit
// Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1 , because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1 .

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// The Array.from() method creates a new Array instance from an array-like or iterable object.

function sumToOne(num) {
    var tempNum =  Array.from(String(num), Number);
    var sum = 0;
    for (i=0; i<tempNum.length; i++) {
        sum += tempNum[i];
    }
    console.log('['+tempNum+'] = '+sum);
    if (sum <= 1) {
        return 1;
    } else {
        return sumToOne(sum);
    }
}
console.log(sumToOne(928));