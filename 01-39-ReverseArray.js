// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3] .

function reverseArray(arr) {
    var tempArr = [];
    for (i=arr.length-1; i >=0; i--) {
        tempArr.push(arr[i]);
    }
    return tempArr;
}

var newArr = [3,1,6,4,2];
console.log(newArr);
console.log(reverseArray(newArr));