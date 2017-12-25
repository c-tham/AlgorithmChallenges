// Scale the Array
// Given array arr and number num , multiply each arr value by num , and return the changed arr .

function scaleArray(arr,n) {
    for (i=0; i<arr.length; i++) {
        arr[i] *= n;
    }
    return arr;
}

var tempArr = [1,2,3,4,5];
var tempNum = 3;
console.log(tempArr);
console.log(scaleArray(tempArr,tempNum));
