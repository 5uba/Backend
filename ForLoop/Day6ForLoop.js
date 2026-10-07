let numbers = [10, -5, 20, -8, 15, -3, 7];
let sum = 0;
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] > 0) {
        sum = sum + numbers[a];
    }
}
console.log(`Positive numbers sum = ${sum}`);

/*Explanation:
First storing the numbers in an array
Next, assigning 0 to sum
for loop checks the numbers one by one
If the current number is greater than 0, add that number to sum
Negative numbers are ignored, same process until all the numbers are checked
Finally, print the sum

Output: 
Positive numbers sum = 52*/
