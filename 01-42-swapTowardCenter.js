// Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Input [ true ,42,"Ada",2, "pizza" ] becomes [ "pizza" ,42,"Ada",2, true ] . Change [1,2,3,4,5,6] to [ 6 ,2, 4 , 3 ,5, 1 ] .

function swapTowardCenter(arr) {
    var centerArr = Math.floor(arr.length / 2);
    var lastArr = arr.length-1;

    for (i=0; i<centerArr; i++) {
        if (i%2 == 0 || i == 0) {
            var temp = arr[i];
            arr[i] = arr[lastArr];
            arr[lastArr] = temp;
        }
        lastArr--;
    }
    return arr;
}

var arr1 = [ true ,42,"Ada",2, "pizza" ];
var arr2 = [1,2,3,4,5,6];
console.log(arr1);
console.log(swapTowardCenter(arr1));
console.log(arr2);
console.log(swapTowardCenter(arr2));