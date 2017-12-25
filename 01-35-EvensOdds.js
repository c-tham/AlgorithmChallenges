// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr) {
    var evenCount = 0;
    var oddCount = 0;
    for (i=0; i<arr.length; i++) {
        console.log('> '+arr[i]);
        if (arr[i]%2 == 0) {
            if (evenCount >= 3) {
                console.log("That's odd!");
                evenCount = 0;
            }
            evenCount++;
        } else {
            if (oddCount >= 3) {
                console.log("Even more so!");
                oddCount = 0;
            }
            oddCount++;
        }
    }
}

evensOdds([2,1,51,3,1,5,8,3,2,8,3]);