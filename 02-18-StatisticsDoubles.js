// Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row. Display number of rolls , min , max , and average .

function rollOne() {
    temp = Math.trunc(Math.random()*20);
    // console.log('> '+temp);
    return temp+1;
}

function statisticsUntilDoublenum() {
    var temp = [];
    var highest = 0;
    var lowest = 0;
    var sum = 0;
    var last = 0;
    var curr = 0;
    var num = 0;
    var avg = 0;
    for (i=0; i<20; i++) {
        temp.push(0);
    }
    for (i=0; i<9999; i++) {
        curr = rollOne();
        temp[curr-1]++;
        num++;
        // console.log(curr,last);
        if (curr == last) {
            break;
        }
        last = curr;
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
        avg = (Math.floor(temp[i]/num*1000))/10;
        console.log(i+1+' = '+temp[i]+', avg = '+avg);
    }
    console.log('Lowest = '+lowest);
    console.log('Highest = '+highest);
    console.log('No of rolls = '+sum);
    
}
statisticsUntilDoublenum();