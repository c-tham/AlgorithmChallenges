// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative ( not simply multiplied by -1 ). Given [1,-3,5] , return [-1,-3,-5] .

function outlookNegative(arr) {
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i]>0) {
            tempArr.push(0-arr[i]);
        } else {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

var newArr = [1,-3,5];
console.log(newArr);
console.log(outlookNegative(newArr));