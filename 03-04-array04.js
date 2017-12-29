// Array: Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr) , to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr) {
    console.log(arr);
    var idx = 0;
    var tempVal = 0, lastRand = 0;
    for (i=0; i<arr.length; i++) {
        idx = Math.floor(Math.random() * (arr.length-1));
        if (idx == lastRand) {
            idx = Math.ceil(Math.random() * (arr.length-2));
        }
        tempVal = arr[idx];
        arr[idx] = arr[idx+1];
        arr[idx+1] = tempVal;
        lastRand = idx;
        // console.log(arr);
    }
    return arr;
}
// console.log(shuffle([1,2,3,4,5,6,7,8,9]));
// -------------------------------------------------

// Array: Remove Range
// Given array, and indices start and end , remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4) , change to [20,30,70] and return it.

function removeRange(arr,num1,num2) {
    var tempArr = []
    for (i=0; i<arr.length; i++) {
        if (i >= num1 && i <= num2) {
            // continie
        } else {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
// console.log(removeRange([20,30,40,50,60,70],2,4))
// -------------------------------------------------

// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2] , change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6] .

function intermediateSums(arr) {
    var sum = 0;
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        if (i%10 == 0 && i > 0) {
            tempArr.push(sum);
            sum = 0;
        }
        tempArr.push(arr[i]);
        sum += arr[i];
    }
    if (sum > 0) {
        tempArr.push(sum);
    }
    return tempArr;
}
// console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]))
// -------------------------------------------------

// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false] .

function doubleTrouble(arr) {
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        tempArr.push(arr[i]);
        tempArr.push(arr[i]);
    }
    return tempArr;
}
// console.log(doubleTrouble([4,"Ulysses",42,false]));
// -------------------------------------------------

// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40] , return new array containing [1,10,2,20,30,40] .
// Second: combine the two arrays’ values into the first array , instead of into a new array. Much more fun!

function zipIt(arr1,arr2) {
    console.log(arr1+'  =  '+arr2);
    var len1 = arr1.length;
    var len2 = arr2.length;
    var tempArr = [];
    if (len1 > len2) {
        for (i=0; i<len2; i++) {
            tempArr.push(arr1[i]);
            tempArr.push(arr2[i]);
        }
        for (i=len2; i<len1; i++) {
            tempArr.push(arr1[i]);
        }
    } else { // len2 >= len1
        for (i=0; i<len1; i++) {
            tempArr.push(arr1[i]);
            tempArr.push(arr2[i]);
        }
        for (i=len1; i<len2; i++) {
            tempArr.push(arr2[i]);
        }
    }
    return tempArr;
}
// console.log(zipIt([1,2],[10,20,30,40]))
// console.log(zipIt([10,20,30,40],[1,2]))


function zipIt2(arr1,arr2) {
    console.log(arr1+'  =  '+arr2);
    var len1 = arr1.length-1;
    var len2 = arr2.length-1;
    var steps = 1;

    for (i=0; i<len1; i++) {
        arr1.push(null);
        // console.log(i+'-'+arr1+'  =  '+arr2);
    }
    arr1.push(null);
    for (i=len1; i>0; i--) {
        arr1[i*2] = arr1[i];
        arr1[i] = null;
        // console.log(i+'-'+arr1+'  =  '+arr2);
    }
    for (i=0; i<len2+1; i++) {
        arr1[steps] = arr2[i];
        steps += 2;
        // console.log(i+'-'+arr1+'  =  '+arr2);
    }
    for (x=0; x<len1; x++) {
        for (y=x; y<arr1.length-1; y++) {
            if (arr1[y] == null) {
                arr1[y] = arr1[y+1];
                arr1[y+1] = null;
            }
            // console.log(y+'-'+arr1+'  =  '+arr2);
        }
        // console.log(x+'-'+arr1+'  =  '+arr2);
    }
    return arr1;
}
// console.log(zipIt2([1,2],[10,20,30,40]))
console.log(zipIt2([10,20,30,40,50,60],[1,2,3,4,5]));
console.log(zipIt2([10,20,30,40,50,60],[1,2,3,4,5,6]));
console.log(zipIt2([10,20,30,40,50,60],[1,2,3,4,5,6,7]));