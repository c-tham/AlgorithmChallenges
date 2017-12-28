// Clock Hand Angles, Revisited
// Return to your previous clockHandAngles solution. Allow fractional values for input seconds , but change your implementation to print only integer values for angles (in degrees) of the various hands.

function clockHandAngles3(seconds) {

    function decimal(value) {
        return Math.ceil((value * 100)/100);
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
clockHandAngles3(3600);
clockHandAngles3(119730);
clockHandAngles3(1197300);