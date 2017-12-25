// Count Positives
// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
    var total = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    arr.pop();
    arr.push(total);
    return arr;
}

var tempArr = [-1,1,1,1];
console.log(tempArr);
console.log('Count Posivites - ['+countPositives(tempArr)+']');