// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food" . If no array elements are "food" , then print "I'm hungry" once.

function alwaysHungry(arr) {
    var foodCount = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] == 'food' || arr[i] == 'FOOD' ) {
            foodCount++;
            console.log('yummy');
        }
    }
    if (foodCount == 0) {
        console.log("I'm hungry");
    }
}

var arr1 = ["hello","bye","food","FOOD","why"];
console.log(arr1);
alwaysHungry(arr1);
var arr2 = ["hello","bye","f00d","F00D","why"];
console.log(arr2);
alwaysHungry(arr2);