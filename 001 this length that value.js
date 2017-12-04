
function thisthat(xx,yy) {
    var zz = [];

    for (var i=0; i<=xx-1; i++) {
        zz.push(yy);
    }

    if (xx == yy) {
        console.log('Jinx! '+xx+' and '+yy);
    }
    console.log(zz);
}

thisthat(5,3);
thisthat(3,3);