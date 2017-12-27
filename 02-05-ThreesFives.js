// Threes and Fives
// Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both . Display the final sum in the console.
// Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000) .

function threesFives() {
    var sumThrees = 0;
    var sumFives = 0;
    var sumThreesFives = 0
    for (i=100; i<=4000000; i++) {
        threes = i % 3;
        fives = i % 5;
        if (threes == 0 && fives != 0) {
            sumThrees += i;
        } else if (threes != 0 && fives == 0) {
            sumFives += i;
        } else if (threes == 0 && fives == 0) {
            sumThreesFives += i;
        }
    }
    console.log('Threes = '+sumThrees);
    console.log('Fives = '+sumFives);
    console.log('Threes and Fives = '+sumThreesFives);
}
threesFives();

function threesFives2(beginValue,endValue) {
    var sumThrees = 0;
    var sumFives = 0;
    var sumThreesFives = 0
    for (i=beginValue; i<=endValue; i++) {
        threes = i % 3;
        fives = i % 5;
        if (threes == 0 && fives != 0) {
            sumThrees += i;
        } else if (threes != 0 && fives == 0) {
            sumFives += i;
        } else if (threes == 0 && fives == 0) {
            sumThreesFives += i;
        }
    }
    console.log('Threes = '+sumThrees);
    console.log('Fives = '+sumFives);
    console.log('Threes and Fives = '+sumThreesFives);
}
threesFives2(100,4000000);