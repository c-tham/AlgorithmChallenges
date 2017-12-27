// Generate Coin Change
// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents) . Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).
// Second: can you simplify/shorten your code?
// Example output, given (94) :
// 94 cents can be represented by:
// quarters:3
// dimes:1
// nickels:1
// pennies:4
// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

function generateCoinChange(num) {
    quarters = Math.floor(num/25);
    dimes = Math.floor((num-(quarters*25))/10);
    nickels = Math.floor((num-(quarters*25)-(dimes*10))/5);
    pennies = Math.floor(num-(quarters*25)-(dimes*10)-(nickels*5));
    console.log(num+' cents can be represented by:');
    console.log(' quarters = '+quarters);
    console.log(' dimes    = '+dimes);
    console.log(' nickels  = '+nickels);
    console.log(' pennies  = '+pennies);
}
console.log('1st version');
generateCoinChange(94);

function generateCoinChange2(num) {
var coinType = [25,10,5,1];
var coinValue = [];

    function coins(num,val) {
        divides = Math.floor(num/val);
        reminders = num%val;
        coinValue.push([divides,reminders]);
        // console.log(coinType);
        // console.log(coinValue);
    }
    var tempNum = num;
    for (i=0;i<coinType.length;i++) {
        // console.log(tempNum,coinType[i])
        coins(tempNum,coinType[i]);
        tempNum = coinValue[i][1];
    }
    // console.log(coinValue);
    console.log(num+' cents can be represented by:');
    console.log(' quarters = '+coinValue[0][0]);
    console.log(' dimes    = '+coinValue[1][0]);
    console.log(' nickels  = '+coinValue[2][0]);
    console.log(' pennies  = '+coinValue[3][0]);
}
console.log('2nd version');
generateCoinChange2(92);

function generateCoinChange3(num) {
    var coinType = [100,50,25,10,5,1];
    var coinValue = [];
    
        function coins(num,val) {
            divides = Math.floor(num/val);
            reminders = num%val;
            coinValue.push([divides,reminders]);
            // console.log(coinType);
            // console.log(coinValue);
        }
        var tempNum = num;
        for (i=0;i<coinType.length;i++) {
            // console.log(tempNum,coinType[i])
            coins(tempNum,coinType[i]);
            tempNum = coinValue[i][1];
        }
        // console.log(coinType);
        // console.log(coinValue);
        console.log(num+' cents can be represented by:');
        for (i=0; i<coinType.length; i++) {
            console.log(' '+coinType[i]+' = '+coinValue[i][0])
        }
    }
console.log('3rd version');
generateCoinChange3(92);
generateCoinChange3(194);
generateCoinChange3(192);
generateCoinChange3(200);