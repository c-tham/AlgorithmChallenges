// Previous Lengths
// You are passed an array containing strings. Working within that same array, replace each string with a number – the length of the string at previous array index – and return the array.

function previousLength(arr) {
    prevLen = arr[0].length;
    for (i=1; i<arr.length; i++) {
        nextLen = arr[i].length;
        arr[i] = prevLen;
        prevLen = nextLen;
    }
    arr.push(prevLen);
    return arr;
}

var newArr = ['hello','bye','why la','yes, but why'];
console.log(newArr);
console.log(previousLength(newArr));