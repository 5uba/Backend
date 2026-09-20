// Missing Number
let numbers = [2, 4, 6, 10, 12, 14];
let expectedSum = 0;
let actualSum = 0;
for (let a = 2; a <= 14; a++) {
    if(a%2==0){
    expectedSum = expectedSum + a;
}}
for (let a = 0; a < numbers.length; a++) {
    actualSum = actualSum + numbers[a];
}
let missingNumber = expectedSum - actualSum;
console.log(`Missing number = ${missingNumber}`);

/*Explanation:
First, create an array containing even numbers, where one number is missing.
Initialize two variables as 0: expectedSum , actualSum
Use the first for loop from 2 to 14.
Check whether each number is even using: if
If the remainder is 0, the number is even.
Add every expected even number to expectedSum.
Use the second for loop to add all the numbers actually present in the array.
Subtract the actual sum from the expected sum
Finally print the output.

Output:
Missing number = 8*/