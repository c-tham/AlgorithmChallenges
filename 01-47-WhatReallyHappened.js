// What Really Happened?
// Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday() . In this new function test for each disaster independently , instead of assuming exactly one disaster will happen. In other words, with this new function, all five might occur today – or none . Maybe Kenny will survive!

function whatReallyHappended() {
    var Volcanos = 0;
    var Tsunamis = 0;
    var Earthquakes = 0;
    var Blizzards = 0;
    var Meteors = 0;
    for (i=0; i<100; i++) {
        var today = Math.floor(Math.random() * 100);
        // console.log('Today is '+today);
        if (today <= 10) {
            // console.log('Volcanos!');
            Volcanos++;
        } else if (today > 10 && today <= 25) {
            // console.log('Tsunamis!');
            Tsunamis++;
        } else if (today > 25 && today <= 45) {
            // console.log('Earthquakes!');
            Earthquakes++;
        } else if (today > 45 && today <= 70) {
            // console.log('Blizzards!');
            Blizzards++;
        } else if (today > 70 && today <= 100) {
            // console.log('Meteors!');
            Meteors++;
        } 
    }
    console.log('Today is ');
    console.log('Volcanos    -'+Volcanos+'%');
    console.log('Tsunamis    -'+Tsunamis+'%');
    console.log('Earthquakes -'+Earthquakes+'%');
    console.log('Blizzards   -'+Blizzards+'%');
    console.log('Meteors     -'+Meteors+'%');
}

for (i=1; i<10; i++) {
    whatReallyHappended();
}