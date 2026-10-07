let numbers = [10, 11, 20, 21, 30, 31, 40, 41];
let evenCount = 0;
let oddCount = 0;
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log(`Even numbers = ${evenCount}`);
console.log(`Odd numbers = ${oddCount}`);

/* Explanation:
First, storing the numbers in an array.
Next, evenCount and oddCount as 0.
The for loop checks the numbers one by one.
If the number is divisible by 2, it is an even number, so evenCount increases by 1.
Otherwise, it is an odd number, so oddCount increases by 1.
Continue the same process until all the numbers are checked.
Finally, we print the total count of even and odd numbers.

Output:
Even numbers = 4
Odd numbers = 4 */