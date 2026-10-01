let prices = [250, 750, 400, 900, 150, 600];
let total = 0;
let highPriceCount = 0;
let lowPriceCount = 0;
for (let a = 0; a < prices.length; a++) {
    total = total + prices[a];
    if (prices[a] > 500) {
        highPriceCount++;
    } else {
        lowPriceCount++;
    }
}
console.log("Total price = " + total);
console.log("Products above ₹500 = " + highPriceCount);
console.log("Products ₹500 or below = " + lowPriceCount);

// Explanation:
// Create an array to store the prices of all products.
// Create three variables named total, highPriceCount, and lowPriceCount.
// total stores the total price.
// highPriceCount counts products above ₹500.
// lowPriceCount counts products ₹500 or below.
// Start the for loop to check each product price one by one.
// Calculate the total by adding each product price to total.
// Check the product price using the if condition. If the price is greater than ₹500, increase highPriceCount by 1.
// Check the lower-priced products using else. If the price is ₹500 or below, increase lowPriceCount by 1.
// Repeat the process until all the product prices in the array are checked.
// Print the final results showing the total price, products above ₹500, and products ₹500 or below.

// Output:
// Total price = 3050
// Products above ₹500 = 3
// Products ₹500 or below = 3