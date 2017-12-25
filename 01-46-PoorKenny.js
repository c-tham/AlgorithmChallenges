// Poor Kenny
// Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function poorKenny() {
    var today = Math.floor(Math.random() * 100);
    console.log('Today is '+today);
    if (today <= 10) {
        console.log('Volcanos!');
    } else if (today > 10 && today <= 25) {
        console.log('Tsunamis!');
    } else if (today > 25 && today <= 45) {
        console.log('Earthquakes!');
    } else if (today > 45 && today <= 70) {
        console.log('Blizzards!');
    } else if (today > 70 && today <= 100) {
        console.log('Meteors!');
    } 
}

for (i=1; i<10; i++) {
    poorKenny();
}
