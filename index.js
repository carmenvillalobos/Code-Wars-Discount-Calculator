// Discount Calculator
// Create a function that takes two arguments: the original price and the discount percentage (both as integers) and returns the final price after the discount.

function discountCalculator(originalPrice, discountPercentage){
    newPrice = originalPrice - (originalPrice * (discountPercentage * 0.01))
}

console.log(discountCalculator(100, 5))