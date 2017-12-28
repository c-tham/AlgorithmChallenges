// Claire is Where?
// On New Year’s Eve, have fun but don’t forget your way home! For this challenge create four functions ( reset , moveBy , xLocation and yLocation ) to track the travels of Claire, a wanderer. Calling reset() moves Claire home to the origin (0,0) . The moveBy(xOffset,yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y directions respectively. After the calls of reset() , moveBy(1,-2) , and moveBy(3,1) , subsequently calling xLocation() and yLocation() should return 4 and -1 .
// Second: create distFromHome() . Assuming she moves diagonally, return her distance from home.

var xy = [[0,0]];

function reset() {
    for (i=0; i<xy.length; i++) {
        xy.pop();
    }
    xy.push([0,0]);
}

function moveBy(x,y) {
    xy.push([x,y]);
}

function xLocation() {
    var temp = 0
    for (i=0; i<xy.length; i++) {
        temp += xy[i][0];
    }
    return temp;
}

function yLocation() {
    var temp = 0
    for (i=0; i<xy.length; i++) {
        temp += xy[i][1];
    }
    return temp;
}

// console.log(xy.length);
reset();
moveBy(1,-2);
moveBy(3,1);
console.log(xLocation());
console.log(yLocation());
console.log(xy);

function distFromHome() {
    return Math.sqrt((yLocation()*yLocation())+(xLocation()*xLocation()))
}

console.log(distFromHome());
