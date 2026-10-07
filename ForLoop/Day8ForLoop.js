let numbers = [15, -8, 22, -5, 10, -12, 30]; 
let positiveCount = 0; 
let negativeCount = 0; 
let positiveSum = 0; 
let negativeSum = 0; 
 
for (let a = 0; a < numbers.length; a++) { 
    if (numbers[a] > 0) { 
        positiveCount++; 
        positiveSum = positiveSum + numbers[a]; 
    } 
    if (numbers[a] < 0) { 
        negativeCount++; 
        negativeSum = negativeSum + numbers[a]; 
    } 
} 
console.log(`Positive count = ${positiveCount}`); 
console.log(`Negative count = ${negativeCount}`); 
console.log(`Positive sum = ${positiveSum}`); 
console.log(`Negative sum = ${negativeSum}`);   

// Explanation:
// First, create an array containing positive and negative numbers.
// Next, initialize four variables 2 for store negative and positive number storing.
// for loop to check every number in the array one by one.
// If the current number is greater than 0, it is a positive number.
// Increase positiveCount by 1.
// Add the current number to positiveSum.
// If the current number is less than 0, it is a negative number.
// Increase negativeCount by 1.
// Add the current number to negativeSum.
// Continue the same process until all numbers in the array are checked.
// Finally, print the positive count, negative count, positive sum, and negative sum.

// Output:
// Positive count = 4
// Negative count = 3
// Positive sum = 77
// Negative sum = -25