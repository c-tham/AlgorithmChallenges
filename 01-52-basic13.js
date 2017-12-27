// print1To255()
// Print all the integers from 1 to 255.
function print1To255() {
    for (i=1; i<256; i++) {
        console.log(i);
    }
}
//print1To255() 
//---------------------------------

// printIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
function printIntsAndSum0To255() {
    var sumInt = 0;
    for (i=0; i<256; i++) {
        sumInt+=i;
        console.log(i+' = '+sumInt);
    }
}
//printIntsAndSum0To255()
//---------------------------------

// printMaxOfArray(arr)
// Given an array, find and print its largest element.
function printMaxOfArray(arr) {
    var largest = arr[0];
    for (i=1; i<arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    console.log('Largest value is '+largest);
}
//printMaxOfArray([4,2,6,0,8,3,9,2,1])
//---------------------------------

// returnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
function returnOddsArray1To255() {
    var oddInt = [];
    for (i=1; i<256; i++) {
        if (i%2 == 0) {
            oddInt.push(i);
        }
    }
    console.log(oddInt);
}
//returnOddsArray1To255();
//---------------------------------

// returnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
    var cnt = 0;
    for (i=0; i<arr.length; i++) {
        if (y < arr[i]) {
            console.log(arr[i]);
            cnt++;
        }
    }
    console.log('Total count is '+cnt);
}
// returnArrayCountGreaterThanY([4,2,6,0,8,3,9,2,1],5);
//---------------------------------

// printMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function printMaxMinAverageArrayVals(arr) {
    var sum = 0;
    var min = 0;
    var max = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
        sum += arr[i];
    }
    console.log('min value is '+min);
    console.log('max value is '+max);
    console.log('sum value is '+sum);
    console.log('avg value is '+(sum/(arr.length-1)));
}
// printMaxMinAverageArrayVals([4,2,6,0,8,3,9,2,1]);
//---------------------------------

// swapStringForArrayNegativeVals(arr ) 
// Given an array of numbers, replace any negative values with the string 'Dojo' .
function swapStringForArrayNegativeVals(arr) {
    for (i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
            arr[i] = 'Dojo';
        }
    }
    console.log(arr);
}
// swapStringForArrayNegativeVals([-4,2,-6,0,8,3,-9,2,1]);
//---------------------------------

// printOdds1To255()
// Print all odd integers from 1 to 255.
function print1To255() {
    for (i=1; i<256; i++) {
        if (i%2 == 0) {
            console.log(i);
        }
    }
}
// print1To255();
//---------------------------------

// printArrayVals(arr)
// Iterate through a given array, printing each value.
function printArrayVals(arr) {
    for (i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
    console.log(arr);
}
// printArrayVals([4,2,6,0,8,3,9,2,1]);
//---------------------------------

// printAverageOfArray(arr)
// Analyze an array’s values and print the average.
function printAverageOfArray(arr) {
    var sum = 0
    for (i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log('average is '+sum/(arr.length-1));
}
// printAverageOfArray([4,2,6,0,8,3,9,2,1]);
//---------------------------------

// squareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
function squareArrayVals(arr) {
    console.log(arr);
    for (i=0; i<arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr
}
// console.log(squareArrayVals([4,2,6,0,8,3,9,2,1]));
//---------------------------------

// zeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function zeroOutArrayNegativeVals(arr) {
    console.log(arr);
    for (i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            console.log(arr[i]);
            arr[i] = 0;
        }
    }
    console.log(arr);
}
// zeroOutArrayNegativeVals([-4,2,-6,0,8,3,-9,2,1]);
//---------------------------------

// shiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
function shiftArrayValsLeft(arr) {
    console.log(arr);
    for (i=1; i<arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr[i-1] = 0;
    console.log(arr);
}
shiftArrayValsLeft([-4,2,-6,0,8,3,-9,2,1]);
