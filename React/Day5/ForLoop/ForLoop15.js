let fuel = [8, 10, 7, 12, 9, 11, 6];
let total = 0;
for (let a = 0; a < fuel.length; a++) {
    total = total + fuel[a];
}
let average = total / fuel.length;+
console.log("Total fuel used = " + total + " litres");
console.log("Average fuel used = " + average + " litres");

// Explanation:
// Create an array containing fuel used each day.
// Create total and set it to 0.
// Start the for loop.
// Add each day's fuel to total.
// After the loop, divide total by the number of days.
// Store the result in average.
// Print the total and average fuel used.

// Output:
// Total fuel used = 63 litres
// Average fuel used = 9 litres
