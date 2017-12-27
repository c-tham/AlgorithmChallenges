// Factorial
// Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive). For example, factorial(3) = 6 (or 1 * 2 * 3 ); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5 ).

function factorial(num) {
    var sum = 1;
    for (i=1;i<=num;i++) {
        sum *= i;
    }
    console.log('Factorial('+num+') = '+sum);
}
factorial(3);
factorial(5);