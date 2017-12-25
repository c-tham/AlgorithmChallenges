// Print Low, Return High
// Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

var arrValue = [3,5,1,7,4,2];

function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (i=1; i<arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr [i] > high) {
            high = arr[i];
        }
    }
    console.log ('Lowest value = '+low);
    return high;
}

console.log('Highest value = '+printLowReturnHigh(arrValue));
