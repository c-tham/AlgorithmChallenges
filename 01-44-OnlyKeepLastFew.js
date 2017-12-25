// Only Keep the Last Few
// Stan learned something today: that directly decrementing an array’s .length immediately shortens it by that amount. Given array arr and number X , remove all except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3) , change the given array to [6,8,10] and return it.

function keepLastFew(arr,n) {
    var newArr = [];
    for (i=0; i<arr.length; i++) {
        if (i >= arr.length-3) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var tempArr = [2,4,6,8,10];
var tempN = 3;
console.log(tempArr);
console.log(keepLastFew(tempArr,tempN));
