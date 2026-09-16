/* TASK 1 – Student Names
Create an array with 5 student names.
Requirements:
- Access the first student.
- Access the third student.
- Access the last student.
- Print all three values using console.log().
Do not use loops or array methods. */

let students = ["Arun", "Bala", "Kumar", "Priya", "Divya"];
console.log(students[0]);
console.log(students[2]);
console.log(students[4]);

/*TASK 2 – Product Prices
Create an array:
[1500, 2500, 3500, 4500, 5500]
Requirements:
- Access 1500 using index.
- Access 3500 using index.
- Access 5500 using index.
- Add the first and last values.
- Print the total.
Expected Output:
7000 */

let prices = [1500, 2500, 3500, 4500, 5500];
let first = prices[0];
let last = prices[4];
let total = first + last;
console.log(total);

/*TASK 3 – Find Array Value Using Index
Create an array:
["HTML", "CSS", "JavaScript", "React", "Node"]
Requirements:
- Print "JavaScript" using its index.
- Print "React" using its index.
- Print "Node" using arr.length concept.
Condition:
Do not directly write the values inside console.log().*/

let arr = ["HTML", "CSS", "JavaScript", "React", "Node"];
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[arr.length - 1]);

/*TASK 4 – Nested Array Access
Create:
let data = [
    ["Arun", 80],
    ["Bala", 75],
    ["Kumar", 90]
];
Requirements:
- Access "Arun".
- Access Arun's mark.
- Access "Bala".
- Access Kumar's mark.
Expected Output:
Arun
80
Bala
90*/

let data = [
    ["Arun", 80],
    ["Bala", 75],
    ["Kumar", 90]
];

console.log(data[0][0]);
console.log(data[0][1]);
console.log(data[1][0]);
console.log(data[2][1]);

/*TASK 5 – Logical Array Access
Create:
let numbers = [10, 20, 30, 40, 50];
Requirements:
- Access the second value.
- Access the second-last value.
- Add both values.
- Print the answer.
Expected Output:
60*/

let numbers = [10, 20, 30, 40, 50];
let second = numbers[1];
let secondLast = numbers[numbers.length - 2];
let answer = second + secondLast;
console.log(answer);