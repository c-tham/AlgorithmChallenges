// Array: Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5] , change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr) {
    // console.log(arr);
    var min = arr[arr.length-1];
    var idx = 0;
    for (i=arr.length; i>=0; i--) {
        arr[i] = arr[i-1];
        if (arr[i]<min) {
            min = arr[i];
            idx = i;
        }
    }
    // console.log(min, idx);
    arr[0] = min;
    // console.log(arr);
    for (i=1; i<arr.length; i++) {
         if (arr[i] == min) {
             arr[i] = arr[i+1];
             min = arr[i];
         }
    }
    arr[arr.length--];  // array pop
    // console.log(arr);
    return arr;
}
// console.log(minToFront([4,2,1,3,5]));
//------------------------------------------

// Array: Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working ‘in-place’ means that you cannot use a second array – move values within the array that you are given . As always, do not use built-in array functions such as splice() .

function reverse(arr) {
    console.log(arr);
    len = arr.length;
    for (x=0; x<arr.length-1; x++) {
        arr[len] = arr[0];
        for (y=0; y<len; y++) {
            arr[y] = arr[y+1];
        }
        len--;
        arr[len] = null;
        // console.log(arr);
    }
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length--];
    return arr;
}
// console.log(reverse([4,2,1,3,5]));
//------------------------------------------

// Array: Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr ’s values to th e right by that amount. ‘Wrap-around’ any values that shift off array’s end to the other side, s o that no data is lost. Operate in-place: given ([1,2,3],1) , change the array to [3,1,2] . Don’ t use built-in functions . Second: allow negative shiftBy (shift L, not R) . Third: minimize memory usage. With no new array, handle arrays/ shiftBy s in the millions . Fourth: minimize the touches of each element .

function rotateArr(arr,shiftBy) {
    console.log(arr);
    for (x=0; x<shiftBy; x++) {
        for (y=arr.length; y>=1; y--) {
            arr[y] = arr[y-1];
        }
        arr[0] = arr[arr.length-1];
        arr[arr.length--];
        // console.log(arr);
    }
    return arr;
}
// console.log(rotateArr([1,2,3],1));
// console.log(rotateArr([1,2,3],2));

function rotateArr2(arr,shiftBy) {
    console.log(arr);
    if (shiftBy > 0) {
        for (x=0; x<shiftBy; x++) {
            for (y=arr.length; y>=1; y--) {
                arr[y] = arr[y-1];
            }
            arr[0] = arr[arr.length-1];
            arr[arr.length--];
            console.log(x+' '+arr);
        }
    }
    if (shiftBy < 0) {
        for (x=0; x<(shiftBy*-1); x++) {
            arr[arr.length] = arr[0];
            for (y=1; y<arr.length; y++) {
                arr[y-1] = arr[y];
            }
            arr[arr.length--];
            console.log(x+' '+arr);
        }
    }
    return arr;
}
// console.log(rotateArr2([1,2,3],10000000));
// console.log(rotateArr2([1,2,3],-10000000));
//------------------------------------------

// Array: Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie within a specific known range. Given arr and values min and max , retain only the array values between min and max . Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr,min,max) {
    console.log(arr);
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
// console.log(filterRange([3,2,6,7,3,8,1,0,5],4,7));
//------------------------------------------

// Array: Concat
// Replicate JavaScript’s concat() . Create a standalone function that accepts two arrays. Return a new array containing the first array’s elements, followed by the second array’s elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2] .

function arrConcat(arr1,arr2) {
    tempArr = []
    for (i=0; i<arr1.length; i++) {
        tempArr.push(arr1[i]);
    }
    for (i=0; i<arr2.length; i++) {
        tempArr.push(arr2[i]);
    }
    return tempArr;
}
// console.log(arrConcat(['a','b'], [1,2]));
//------------------------------------------

// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away.
// Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7] . Given [0,4] return [4] . As always with challenges, do not use built-in array functions such as unshift() .

function skyLineHeights(arr) {
    var min = 0;
    var max = 0;
    var tempArr = [];
    for (i=0; i<arr.length; i++) {
        if (arr[i] > max && arr[i] > min) {
            max = arr[i];
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
console.log(skyLineHeights([-1,1,1,7,3]));
console.log(skyLineHeights([0,4]));
