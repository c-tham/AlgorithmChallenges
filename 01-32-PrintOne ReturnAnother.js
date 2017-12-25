// Print One, Return Another
// Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

function printOneReturnAnother(arr) {
    var firstOdd = 0;
    var firstValue = false;
    for (i=0; i<arr.length;i++) {
        if (arr[i] % 2 == 0 && firstValue == false) {
            firstOdd = arr[i]
            firstValue = true;
        }
        if (i > 0) {
            console.log(arr[i]);
        }
    }
    return firstOdd;
}

var newArr = [1,5,2,5,7,2,8];
console.log('the first odd number is '+printOneReturnAnother(newArr));
