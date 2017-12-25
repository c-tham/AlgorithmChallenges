// Increment the Seconds
// Given arr , add 1 to odd elements ( [1] , [3] , etc.), console.log all values and return arr .

function incrementSeconds(arr) {
    for (i=0; i<arr.length; i++) {
        if (i%2 != 0) {
            arr[i] += 1;
        }
        console.log(i+'> '+arr[i]);
    }
    return arr;
}
var newArr = [2,1,4,1,5,6,3,7,8,3]
console.log(newArr);
console.log(incrementSeconds(newArr));