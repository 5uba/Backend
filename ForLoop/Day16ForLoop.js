let marks = [78, 45, 32, 90, 28, 65];
let total = 0;
let passCount = 0;
let failCount = 0;
for (let a = 0; a < marks.length; a++) {
    total = total + marks[a];
    if (marks[a] >= 35) {
        passCount++;
    } else {
        failCount++;
    }
}
console.log("Total marks = " + total);
console.log("Pass subjects = " + passCount);
console.log("Fail subjects = " + failCount);

/*Explanation:
Create an array to store the marks of all subjects.
Create three variables named total, passCount, and failCount.
Start the for loop to check each mark one by one.
Calculate the total by adding each mark to total.
Check whether the student passed by using if condition. If the mark is 35 or above, increase passCount.
Check the failed subjects using else. If the mark is below 35, increase failCount.
Repeat the process until all the marks in the array are checked.
Print the final results.

Output:
Total marks = 338
Pass subjects = 4
Fail subjects = 2*/