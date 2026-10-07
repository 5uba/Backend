let numbers = [12, 6, 24, 45, 1, 15];
let largest = numbers[0];
for (let num = 1; num < numbers.length; num++) {
    if (numbers[num] > largest) {
        largest = numbers[num];
    }
}
console.log(largest);

/*Explanation:
1 - Assume the first number is the largest number
2 - Start the loop from index 1 because index 0 is already stored in largest
3 - Check if the current number is greater than the largest number
4 - If it is greater, update largest with the current number
5 - finally, Print the largest number

largest = 12
6 > 12 
24 > 12 
45 > 24  
1 > 45 
15 > 45 

Output: 45 */




let number = [12, 6, 24, 45, 1, 15];
let n = 2;
number.sort((a, b) => b - a);
let result = number[n - 1];
console.log(result);

/*Explanation:

1 - First we are storing the numbers in an array
2 - Next we are storing 2 in n , because we need the 2nd largest number
3 - Next we are sorting the numbers from largest to smallest 45, 24, 15, 12, 6, 1
4 - Then we use n - 1
   because array index starts from 0
   2 - 1 = 1
5 - numbers[1] is 24
6 - Finally we are printing the result
Output: 24 */
