let numbers = [25, 80, 25, 65, 40, 40, 75, 100, 65];
for (let a = 0; a < numbers.length; a++) {
    for (let b = a + 1; b < numbers.length; b++) {
        if (numbers[a] === numbers[b]) {
            console.log(numbers[a]);
        }
    }
}

/* Explanation:

First, storing the numbers in an array.
next, the first for loop takes one number at a time. And the second for loop checks the remaining numbers.
If both numbers are the same, it means the number is repeated.
If the number is repeated, print that number.
Continue the same process until all the numbers are checked.
Finally, we get the duplicate numbers.

Output:

25
65
40 */