// https://support.microsoft.com/en-us/help/214019/method-to-determine-whether-a-year-is-a-leap-year

// To determine whether a year is a leap year, follow these steps: 
// 1 If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// 2 If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// 3 If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// 4 The year is a leap year (it has 366 days).
// 5 The year is not a leap year (it has 365 days).

// For this reason, the following years are not leap years:
// 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600
// This is because they are evenly divisible by 100 but not by 400.

// The following years are leap years:
// 1600, 2000, 2400
// This is because they are evenly divisible by both 100 and 400. 


var yy = 1800;

if (yy%4 == 0) {
    if (yy%100 == 0) {
        if (yy%400 == 0) {
            console.log(yy+' /400 is leap year (366 days)');
            } else {
            console.log(yy+' /400 is not a leap year (365 days)');
            }
        } else {
            console.log(yy+' /100 is leap year (366 days)');
        } 
    } else {
    console.log(yy+' is not a leap year (365 days)');
}

