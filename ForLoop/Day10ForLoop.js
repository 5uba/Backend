let numbers = [123, 456, 789 , 321]; 
let totalSum = 0; 
for (let a = 0; a < numbers.length; a++) { 
    let num = numbers[a]; 
    while (num > 0) { 
        let digit = num % 10; 
        totalSum = totalSum + digit; 
        num = Math.floor(num / 10); 
    } 
} 
console.log(`Total digit sum = ${totalSum}`);

/*Explanation:
First, create an array containing the numbers 123, 456, 789, 321.
Initialize totalSum as 0 to store the sum of all digits.
The for loop checks each number in the array one by one.
Store the current array value in the num variable.
The while loop runs until all digits of the current number are removed.
Use num % 10 to get the last digit of the number.
Add that digit to totalSum.
Use Math.floor(num / 10) to remove the last digit.
Continue the same process until num becomes 0.
The for loop then moves to the next number and repeats the same process.
Finally, print the total sum of all the digits.

Output:
Total digit sum = 51*/