// Add Seven to Most
// Build function that accepts array. Return a new array with all values except first , adding 7 to each. Do not alter the original array.

function addSeven2Most(arr) {
    var newArr = [];
    for (i=1; i<arr.length; i++) {
        newArr.push(arr[i]+7);
    }
    return newArr;
}

var tempArr = [1,2,3,4,5,6,7];
console.log(tempArr);
console.log(addSeven2Most(tempArr));
console.log(tempArr);
