// Clock Hand Angles
// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.
// Second: also calculate and print degrees for an additional “week hand” that rotates once each week.

function clockHandAngles(seconds) {
    var clocks = [3600,60,1];
    var hand = [];
    var tempSeconds = seconds;
    for (i=0; i<clocks.length; i++) {
            hand.push([Math.floor(tempSeconds/clocks[i]), tempSeconds%clocks[i]]);
        tempSeconds = hand[i][1];
        // console.log(tempSeconds);
    }
    // console.log(hand);
    if (hand[0][0] > 24 ) {
        newHour = hand[0][0] % 24;
        newHour24 = Math.floor(hand[0][0] / 24);
        console.log('Hour: '+newHour+' plus '+newHour24*24+' hours, Minute: '+hand[1][0]+', Second: '+hand[2][0]);
        console.log('Hour hand: '+(newHour/12*360)+' degs. plus '+newHour24*360+' degs., Minute hand: '+(hand[1][0]/60*360)+' degs., Second hand: '+(hand[2][0]/60*360)+' degs. ');
    } else {
        console.log('Hour: '+hand[0][0]+', Minute: '+hand[1][0]+', Second: '+hand[2][0]);
        console.log('Hour hand: '+(hand[0][0]/12*360)+' degs., Minute hand: '+(hand[1][0]/60*360)+' degs., Second hand: '+(hand[2][0]/60*360)+' degs. ');
    
    }
}
// clockHandAngles(3600);
// clockHandAngles(119730);

function clockHandAngles2(seconds) {

    function decimal(value) {
        return Math.floor(value * 100)/100;
    }

    var clocks = [252000,86400,3600,60,1];
    var hand = [];
    var tempSeconds = seconds;
    for (i=0; i<clocks.length; i++) {
        if (tempSeconds >= clocks[i]) {
            hand.push([(tempSeconds/clocks[i]), tempSeconds%clocks[i]]);
        } else {
            hand.push([0,tempSeconds]);
        }
        tempSeconds = hand[i][1];
        // console.log(tempSeconds);
    }
    // console.log(hand);
    console.log('Total seconds = '+seconds);
    console.log('Week: '+decimal(hand[0][0])+', Day: '+decimal(hand[1][0])+', Hour: '+decimal(hand[2][0])+', Minute: '+decimal(hand[3][0])+', Second: '+decimal(hand[4][0]));
    console.log('Week hand: '+decimal(hand[0][0]/7*360)+' degs., Day hand: '+decimal(hand[1][0]/24*360)+' degs., Hour hand: '+decimal(hand[2][0]/12*360)+' degs., Minute hand: '+decimal(hand[3][0]/60*360)+' degs., Second hand: '+decimal(hand[4][0]/60*360)+' degs. ');
    
}
clockHandAngles2(3600);
clockHandAngles2(119730);
clockHandAngles2(1197300);