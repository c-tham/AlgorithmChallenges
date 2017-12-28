// Array: Push Front
// Given array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr,val) {
    var tempArr = [];
    tempArr.push(val);
    for (i=0; i<arr.length; i++) {
        tempArr.push(arr[i]);
    }
    return tempArr;
}
console.log(pushFront([3,4,5,6,7,8],0));

// Array: Insert At
// Given array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val) .

function insertAt(arr,num,val) {
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        if (i == num) {
            tempArr.push(val);
        }
        tempArr.push(arr[i]);
    }
    return tempArr;
}
console.log(insertAt([3,4,5,6,7,8],0,0));

// Array: Pop Front
// Given array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop() .

function popFront(arr) {
    var tempArr = [];
    var tempVal = 0;
    for (i=1; i<arr.length; i++) {
        tempArr.push(arr[i]);
    }
    return tempArr;
}
console.log(popFront([3,4,5,6,7,8]));

// Array: Remove At
// Given array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop() . Think of popFront(arr) as equivalent to removeAt(arr,0) .

function removeAt(arr,num) {
    var tempArr = [];
    var tempVal = 0;
    for (i=0; i<arr.length; i++) {
        if (num == i) {
            // continue;
        } else {
            tempArr.push(arr[i]);
        }
        
    }
    return tempArr;
}
console.log(removeAt([3,4,5,6,7,8],0));

// Array: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4] , return [2,1,4,3] . For example, change input ["Brendan",true,42] to [true,"Brendan",42] . As with all array challenges, do this without using any built-in array methods.

function swapPairs(arr) {
    var tempNum = arr.length;
    if (tempNum%2 != 0) {
        tempNum -= 1;
    }
    for (i=0; i<tempNum; i+= 2) {
        // console.log(arr[i],arr[i+1])
        var tempVal = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = tempVal; 
    }
    return arr;
}
console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));

// Array: Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
// Second: solve this without using any nested loops.

function removeDuplicates(arr) {
    var tempArr = [];
    var tempVal = arr[0];
    tempArr.push(tempVal);
    for (i=1; i<arr.length; i++) {
        if (tempVal != arr[i]) {
            tempVal = arr[i];
            tempArr.push(tempVal);
        };
    }
    return tempArr;
}
console.log(removeDuplicates([1,2,3,3,4,5,6,7,7,7,8]))