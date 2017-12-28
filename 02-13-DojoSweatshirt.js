// Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

function sweatshirtPricing(num) {
    cost = 20;
    discount = 1;

    if (num == 2) {
        discount = (100-9)/100; 
    } else if (num == 3) {
        discount = (100-19)/100;
    } else if (num >= 4) {
        discount = (100-35)/100;
    }
    subtotal = (cost*num) * discount;

    return Math.ceil(subtotal);
}
console.log(sweatshirtPricing(1));
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));
console.log(sweatshirtPricing(5));