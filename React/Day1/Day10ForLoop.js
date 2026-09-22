let numbers = [12, 25, 18, 30, 25, 40, 18];
let repeatedNumber;
for (let a = 0; a < numbers.length; a++) {
    for (let b = a + 1; b < numbers.length; b++) {
        if (numbers[a] === numbers[b]) {
            repeatedNumber = numbers[a];
            break;
        }
    }
    if (repeatedNumber !== undefined) {
        break;
    }
}
console.log(`First repeated number = ${repeatedNumber}`);

/*Explanation:
1.The array is 12, 25, 18, 30, 25, 40, 18.
2.The first for loop selects one number at a time.
3.The second for loop compares the selected number with the numbers after it.
4.If numbers[a] === numbers[b], the current number is repeated, so store it in repeatedNumber.
5.break stops the inner loop because we already found a repeated number.
6.This condition if (repeatedNumber !== undefined) checks whether a repeated number was found. If found, the outer loop also stops.
7.Finally, print the repeatedNumber.

Output:
First repeated number = 25*/