// Array: Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.
// Second: don’t use nested loops.

function removeNegative(arr) {
    var tempArr = [];
    for (i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            tempArr.push(arr[i]);
        } 
    }
    arr = tempArr;
    return arr;
}
// console.log(removeNegative([1,-1,2,-2,3,-3]))
// console.log(removeNegative([-11,-1,2,-2,3,-3]))
// --------------------------------------------

// Array: Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7] , return "Kate" . If array is too short, return null .

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length - 2];
    }
}
// console.log(secondToLast([42,true,4,"Kate",7]))
// --------------------------------------------

// Array: Nth-to-Last
// Return the element that is N-from-array’s-end. Given ([5,2,3,6,4,9,7],3) , return 4 . If the array is too short, return null .

function nToLast(arr,num) {
    if (arr.length > num) {
        return arr[arr.length - num];
    } else {
        return null;
    }
}
// console.log(nToLast([5,2,3,6,4,9,7],3))
// --------------------------------------------

// Array: Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7] , return 7 . If the array is too short, return null .

function secondLargest(arr) {
    var min = 0, max = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } 
        if (arr[i] > min && arr[i] < max) {
            min = arr[i];
        }
    }
    return min;
}
// console.log(secondLargest([42,9,1,4,Math.PI,7,8]));
// --------------------------------------------

// Array: Nth-Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N , return the N th-largest element, where (N-1) elements are larger. Return null if needed.

function nLargest(arr,n) {
    console.log(arr);
    var tempArr = arr;
    var max = 0, idx = 0;
    for (x=0; x<n; x++) {
        for (y=0; y<tempArr.length; y++) {
            if (tempArr[y] > max) {
                max = tempArr[y];
                idx = y;
            }
        }
        tempArr[idx] = null;
        // console.log(tempArr);
        if (x<n-1) {
            max = 0;
            idx = 0;
        }
    }
    return max;
}
// console.log(nLargest([42,9,1,4,Math.PI,7,8],4))
// --------------------------------------------

// Credit Card Validation
// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows: 
// 1) Set aside the last digit; do not include it in these calculations (until step 5);
// 2) Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3) If any results are larger than 9, subtract 9 from them;
// 4) Add all numbers (not just our odds) together;
// 5) Now add the last digit back in – the sum should be a multiple of 10.
// For example, when given digit array [5,2,2,8,2] , after step 1) it becomes [5,2,2,8] , then after step 2) it is [5,4,2,16] . Post-3) we have [5,4,2,7] , then following 4) it becomes 18 . After step 5) our value is 20 , so ultimately we return true . If the final digit were any non-multiple-of-10, we would instead return false .

function isCreditCardValid(digitArr) {
    console.log(digitArr);
    var lastIdx = digitArr.length - 1;
    var oddIdx = true;
    var sumNum = 0;
    for (i=lastIdx-1; i>=0; i--) {
        if (oddIdx == true) {
            var tempVal = digitArr[i] * 2;
            if  (tempVal > 9) {
                tempVal = tempVal - 9;
            }
            digitArr[i] = tempVal;
            oddIdx = false;
        } else {
            oddIdx = true;
        }
        sumNum += digitArr[i];
    }
    sumNum += digitArr[lastIdx];
    if (sumNum%10 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isCreditCardValid([5,2,2,8,2]))
