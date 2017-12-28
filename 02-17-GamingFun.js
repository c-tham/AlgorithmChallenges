// Gaming Fun(damentals)
// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong? 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive). 2) Second, create a function playFives(num) , which should call rollOne() multiple times – ‘ num ' times, in fact, where 'num' is input parameter to playFives(num) . Each time, it should print the value rollOne() returns, and if that return value is 5, also print “That’s good luck!” 3) Third, create a new function named playStatistics() , which should call rollOne() eight times (but not print anything after each call). After the last of these eight calls, it should print out the lowest and highest values that it received from rollOne , among those eight calls. 4) Fourth, make a copy of playStatistics and add code to make playStatistics2() , so that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls. 5) Fifth, copy playStatistics2 and add code to it to make playStatistics3(num) , so that it will roll as many times as you want, instead of always doing this eight times. 6) Finally, make a copy of playStatistics3 and change it to create playStatistics4(num) , so that at the end instead of the total sum, it prints the average roll.

function rollOne() {
    temp = Math.trunc(Math.random()*6);
    // console.log('> '+temp);
    return temp+1;
}
// console.log(rollOne());

function playFives(num) {
    for (i=0; i<num; i++) {
        var temp = rollOne();
        console.log('> '+temp);
        if (temp == 5) {
            console.log("That's good luck!");
        }
    }
}
// playFives(5);

function playStatistics() {
    var temp = [0,0,0,0,0,0];
    for (i=0; i<8; i++) {
        temp[rollOne()-1]++;
    }
    for (i=0; i<temp.length; i++) {
        console.log(i+1+' = '+temp[i]);
    }
}
// playStatistics();

function playStatistics2() {
    var temp = [0,0,0,0,0,0];
    var highest = 0;
    var lowest = 0;
    var sum = 0;
    for (i=0; i<8; i++) {
        temp[rollOne()-1]++;
    }
    highest = temp[0];
    lowest = temp[0];
    for (i=0; i<temp.length; i++) {
        if (temp[i]>highest) {
            highest = temp[i];
        } else if (temp[i]<lowest) {
            lowest = temp[i];
        } 
        sum += temp[i];
        console.log(i+1+' = '+temp[i]);
    }
    console.log('Lowest = '+lowest);
    console.log('Highest = '+highest);
    console.log('Sum of all = '+sum);
}
// playStatistics2();

function playStatistics3(num) {
    var temp = [0,0,0,0,0,0];
    var highest = 0;
    var lowest = 0;
    var sum = 0;
    for (i=0; i<num; i++) {
        temp[rollOne()-1]++;
    }
    highest = temp[0];
    lowest = temp[0];
    for (i=0; i<temp.length; i++) {
        if (temp[i]>highest) {
            highest = temp[i];
        } else if (temp[i]<lowest) {
            lowest = temp[i];
        } 
        sum += temp[i];
        console.log(i+1+' = '+temp[i]);
    }
    console.log('Lowest = '+lowest);
    console.log('Highest = '+highest);
    console.log('Sum of all = '+sum);
}
// playStatistics3(10000);

function playStatistics4(num) {
    var temp = [0,0,0,0,0,0];
    var highest = 0;
    var lowest = 0;
    var sum = 0;
    for (i=0; i<num; i++) {
        temp[rollOne()-1]++;
    }
    highest = temp[0];
    lowest = temp[0];
    for (i=0; i<temp.length; i++) {
        if (temp[i]>highest) {
            highest = temp[i];
        } else if (temp[i]<lowest) {
            lowest = temp[i];
        } 
        sum += temp[i];
        console.log(i+1+' = '+temp[i]);
        console.log('Average of '+(i+1)+' = '+temp[i]/num*100);
    }
    console.log('Lowest = '+lowest);
    console.log('Highest = '+highest);
    console.log('Sum of all = '+sum);
    
}
playStatistics4(10000);