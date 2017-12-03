var sum = 0
for (x=-300000; x<=300000; x++) {
    if (x%2 == 1) {
        sum=sum+x;
    }
}
console.log(sum);
