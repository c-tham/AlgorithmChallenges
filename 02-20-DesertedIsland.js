// Date, on a Deserted Island
// After a particularly fabulous New Year’s Eve party to end 2016, Eduardo wakes to find himself stranded on a deserted island. He misses his home in Burbank, but at least now he can spend plenty of time outdoors – and you can’t beat the commute! To pass the time until he is rescued, he counts sunrises.
// 1) Help Eduardo track what day of the week it is. Create a weekdayName(weekdayNum) function that, given a number between 1 and 7, will console.log a string containing the day of the week for that number (given 1 , log "Sunday" ). Use a SWITCH statement.
// 2) Expand weekdayName() to create weekdayName2(dayNum) accepting numbers up to
// 365. Return weekday as before, given number of days total. "Sunday" still corresponds to 1 .
// 3) Create a new function someDays() that calls weekDayName2() seventeen times, with randomly generated integers as high as 365. Log each result string. If it is a weekday, add the phrase "Work hard!" , and if it is a weekend day, add "Enjoy your day off!"
// 4) Build function monthName(monthNum) that, given a number from 1 to 12, returns a string containing month for that number ( "May" corresponds to 5 ). Use an array, without loops.
// 5) Now expand monthName() to create monthToDays(monthNum) , returning the number of days in that month, in the year 2017. Hint: use a SWITCH statement for the days in each month.
// 6) Despite using his ember expertise to create a glowing SOS visible from space, the days go by and sadly Eduardo is still not rescued. Is it spring yet? It might as well be. Build on monthName() to create dayToMonth(dayNum) . If given a day number since the year began, return the current month (assume it is not a Leap Year). Given 75 , return "March" .
// 7) Eduardo builds a Dojo bootcamp on the island. Initially his students only find Ninja Gold in caves, but eventually even his tree sloths can write code quickly! Dojo classes meet Monday thru Friday, so let’s reincorporate weekday to our calculations. Construct fullDate(dayNum) to accept number of days so far in 2017, and return a full date string. He hardly remembers that fateful New Year’s Eve party, but he knows it was a Saturday. Given 142 , return "Monday, May 22, 2017" .
// 8) Times flies when you’re at a Dojo – months in fact. Build fullDate2(dayNum) that will be given a 4-digit integer: the days that have passed since December 31, 2016. This number can stretch into future years! You can assume that any year number divisible by four is a leap year and has a 29-day February. Given 8475 , return "Thursday, March 15, 2040" .
// 9) Eduardo hacks the Google Maps API and adds this long-forgotten island back onto the map. Soon he is rescued! News of his Hemingway-like stoicism make him famous for centuries. Build fullDate3(dayNum) to handle days up to 140,000! Note: years 2100, 2200, and 2300 are not leap years (although 2400 is ). Given 139947 , return "Tuesday, February 29, 2400" .
// Having completed this epic saga, you are ready for additional concepts and chapters! Journey safely….

function weekdayName(weekdayNum) {
    switch (weekdayNum) {
        case 1:
            // console.log('Sunday');
            return 'Sunday';
            break;
        case 2:
            // console.log('Monday');
            return 'Monday';
            break;
        case 3:
            // console.log('Tuesday');
            return 'Tuesday';
            break;
        case 4:
            // console.log('Wednesday');
            return 'Wednesday';
            break;
        case 5:
            // console.log('Thursday');
            return 'Thursday';
            break;
        case 6:
            // console.log('Friday');
            return 'Friday';
            break;
        case 7:
            // console.log('Saturday');
            return 'Saturday';
            break;
    }
} 
// console.log(weekdayName(1));

function weekdayName2(dayNum) {
    day = dayNum % 7;
    if (day == 0) {
        day = 7;
    }
    // console.log(day);
    // console.log(weekdayName(day));
    // return ([day, weekdayName(day)]);
    return (weekdayName(day));
}
// console.log(weekdayName2(7));

function someDays() {
    var tempDay = [];
    var cnt = 0;
    for (i=0; i<17; i++) {
        day = Math.trunc(Math.random()*366);
        tempDay.push(weekdayName2(day));
        // console.log(tempDay);
        switch (tempDay[i][0]) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                console.log(tempDay[i][0]+' = Work hard!');
                break;
            case 6:
            case 7:
                console.log(tempDay[i][0]+' = Enjoy your day off!');
                break;
        }
    }
}
// someDays();

function monthName(monthNum) {
    mth = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return mth[monthNum-1];
}
// console.log(monthName(5));

function monthToDays(monthNum) {
    switch (monthNum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
            break;
        case 2:
            return 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            break;
    }
}
// console.log(monthToDays(2));
// console.log(monthToDays(11));
// console.log(monthToDays(12));

function dayToMonth(dayNum) {
    var days = 0
    for (i=1;i<13;i++) {
        days += monthToDays(i);
        if (days>dayNum) {
            return [i,monthName(i)];
            break;
        }
    }
}
// console.log(dayToMonth(75));

function fullDate(dayNum) {
    var mth = [];
    var days = 0;
    mth.push(dayToMonth(dayNum));
    for (i=1; i<mth[0][0]; i++) {
        days += monthToDays(i);
    }
    theDay = dayNum - days;
    console.log(weekdayName2(dayNum)+', '+mth[0][1]+' '+theDay+', 2017');
    // console.log(mth, dayNum - days);
}
// fullDate(142);

function fullDate2(dayNum) {
    var mth = [];
    var days = 0;
    var yr = 0;
    var tempDay = dayNum;
    var tempYr = 0;
    for (i=2017;i<3000;i++) {
        if (i%4 == 0) {
            yr = 366;
        } else {
            yr = 365;
        }
        if (tempDay > yr) {
            tempDay -= yr;
        } else {
            tempYr = i;
            break;
        }
    }
    // console.log(tempYr, tempDay);
    mth.push(dayToMonth(tempDay));
    // console.log(mth);
    for (i=1; i<mth[0][0]; i++) {
        days += monthToDays(i);
    }
    theDay = tempDay - days -1; // Start Dec 31, 2016
    console.log(weekdayName2(tempDay)+', '+mth[0][1]+' '+theDay+', '+tempYr);
    // console.log(mth, tempDay - days);
}
// fullDate2(8475);

function weekdayName3(dayNum) {
    day = dayNum % 7;
    if (day == 0) {
        day = 7;
    }
    // console.log(day,dayNum);
    // console.log(weekdayName(day));
    // return ([day, weekdayName(day)]);
    return (weekdayName(day));
}

function monthToDays3(monthNum, yr) {
    switch (monthNum) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
            break;
        case 2:
            if (yr ==  366) {
                return 29;
                break;
            } else {
                return 28;
                break;
            }
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            break;
    }
}

function dayToMonth3(dayNum,yr) {
    var days = 0
    for (i=1;i<13;i++) {
        days += monthToDays3(i,yr);
        if (days>=dayNum) {
            // console.log(i,monthName(i));
            return [i,monthName(i)];
            break;
        }
    }
}

function fullDate3(dayNum) {
    var mth = [];
    var days = 0;
    var yr = 0;
    var tempDay = dayNum;
    var tempYr = 0;
    for (i=2017;i<3000;i++) {
        if (i%4 == 0) {
            if (i == 2100 || i == 2200 || i == 2300) {
                yr = 365;
            } else {
                yr = 366;
            }
        } else {
            yr = 365;
        }
        if (tempDay > yr) {
            tempDay -= yr;
            // console.log(tempDay, yr);
        } else {
            tempYr = i;
            break;
        }
    }
    // console.log(tempYr, tempDay, yr);
    mth.push(dayToMonth3(tempDay,yr));
    // console.log(mth);
    for (i=1; i<mth[0][0]; i++) {
        days += monthToDays3(i,yr);
        // console.log(days);
    }
    theDay = tempDay - days; // Start Dec 31, 2016
    console.log(weekdayName3(tempDay)+', '+mth[0][1]+' '+theDay+', '+tempYr);
    // console.log(mth, tempDay - days);
}
fullDate3(8475);
fullDate3(139947); 
//Given 139947 , return "Tuesday, February 29, 2400" .
// NOT "Wednesday, Feb 29, 2400". dont know why?!?!?


