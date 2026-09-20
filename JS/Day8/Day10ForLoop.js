// Find Frequency of a Number
let numbers = [10, 20, 10, 30, 10, 40, 20];
let search = 10;
let count = 0;
for (let a = 0; a < numbers.length; a++) {
    if (numbers[a] == search) {
        count = count + 1;
    }
}
console.log(`Frequency of ${search} is ${count}`);

/*Explanation:
First, create an array containing some numbers.
next, search = 10 means to find how many times 10 appears.
Initialize count as 0.
Use the for loop to check every number in the array.
If the current number is equal to search:
if (numbers[a] == search)
Increase count by 1.
After checking all the numbers, print the frequency.

Output:
Frequency of 10 is 3*/