// Character Art

// From the above, derive the following that accept and draw the given characters, not just asterisks:
// drawLeftChars(num,char) // For all three of these, you
// drawRightChars(num,char) // can safely assume that 'char'
// drawCenteredChars(num,char) // is a string with length 1

function header() {
    var head = '';
    for (i=0;i<8;i++) {
        head += '1234567890';
    }
    console.log(head);
}
header();

function starArt2(num,char) {
    var str = '';
    var strLen = Math.floor(num/char.length);
    for (i=0;i<strLen;i++) {
        str += char;
    }
    // console.log(str);
    return str;
}
console.log(starArt2(65,'XxX'));

function drawLeftStars2(num,char) {
    console.log(starArt2(num,char));
}
drawLeftStars2(70,'OoO');

function drawRightStars2(num,char) {
    var str = '';
    for (i=0; i<75-num; i++) {
        str += ' ';
    }
    console.log(str+starArt2(num,char));
}
drawRightStars2(65,'db');

function drawCenteredStars2(num,char) {
    var str = '';
    for (i=0; i<Math.floor((75-num)/2); i++) {
        str += ' ';
    }
    console.log(str+starArt2(num,char));
}
drawCenteredStars2(65,'pq');