/*TASK 1 – ELECTRICITY BILL CALCULATION
Create variables for:
customerName
unitsConsumed
Rules:
- First 100 units → ₹2 per unit
- 101 to 200 units → ₹3 per unit
- Above 200 units → ₹5 per unit
Calculate the customer's electricity bill.
Example:
unitsConsumed = 250
Concepts:
Variables, Number datatype, Operators, if/else*/

console.log("Task 1");
let customerName = "Subashini";
let unitsConsumed = 250;
let bill = 0;
if (unitsConsumed <= 100) {
    bill = unitsConsumed * 2;
}
else if (unitsConsumed <= 200) {
    bill = (100 * 2) + ((unitsConsumed - 100) * 3);
}
else {
    bill = (100 * 2) + (100 * 3) + ((unitsConsumed - 200) * 5);
}
console.log(`Customer Name = ${customerName}`);
console.log(`Electricity Bill = ₹${bill}`);

/*TASK 2 – ATM CASH WITHDRAWAL
Create:
balance = 15000
withdrawAmount = 4000
Rules:
- Withdrawal amount must be greater than 0.
- Amount must be a multiple of 500.
- Amount must not exceed the balance.
- If everything is valid, deduct the amount.
- Otherwise display the appropriate error message.
Concepts:
Variables, %, &&, Conditions*/

console.log("Task 2");
let balance = 15000;
let withdrawAmount = 4000;
if (withdrawAmount <= 0) {
    console.log("Invalid withdrawal amount");
}
else if (withdrawAmount % 500 != 0) {
    console.log("Amount must be a multiple of 500");
}
else if (withdrawAmount > balance) {
    console.log("Insufficient balance");
}
else {
    balance = balance - withdrawAmount;
    console.log(`Withdrawal Successful = ₹${withdrawAmount}`);
    console.log(`Remaining Balance = ₹${balance}`);
}

/*TASK 3 – EMPLOYEE LOGIN ATTEMPTS
Create:
correctPin = 1234
Allow maximum 3 login attempts.
Rules:
- Check entered PIN.
- If correct, display "Login Successful" and stop the loop.
- If incorrect, continue.
- After 3 failed attempts, display "Account Blocked".
Concepts:
for loop, if/else, break, counter*/

console.log("Task 3");
let correctPin = 1234;
let enteredPins = [1111, 2222, 1234];
for (let a = 0; a < 3; a++) {
    let enteredPin = enteredPins[a];
    if (enteredPin == correctPin) {
        console.log("Login Successful");
        break;
    }
    else {
        console.log("Incorrect PIN");
    }
    if (a == 2) {
        console.log("Account Blocked");
    }
}

/*TASK 4 – MULTIPLICATION BILL TABLE
A shop sells 5 products.
Use a loop to display quantity and total price for a product costing ₹250.
Expected:
Quantity 1 = ₹250
Quantity 2 = ₹500
Quantity 3 = ₹750
Quantity 4 = ₹1000
Quantity 5 = ₹1250
Concepts:
for loop, multiplication, variables*/

console.log("Task 4");
let price = 250;
for (let quantity = 1; quantity <= 5; quantity++) {
    let total = quantity * price;
    console.log(`Quantity ${quantity} = ₹${total}`);
}

/*TASK 5 – SEAT BOOKING DISPLAY
A theatre has:
3 rows
5 seats in each row
Use nested loops to display
Row 1 - Seat 1
Row 1 - Seat 2
...
Row 3 - Seat 5
Concepts:
Nested for loop, rows and columns*/

console.log("Task 5");
let rows = 3;
let seats = 5;
for (let row = 1; row <= rows; row++) {
    for (let seat = 1; seat <= seats; seat++) {
        console.log(`Row ${row} - Seat ${seat}`);
    }
}

/*TASK 6 – DELIVERY CHARGE FUNCTION
Create a function:
calculateDelivery(amount)
Rules:
- Order ₹1000 or above → Free Delivery
- Order ₹500 to ₹999 → ₹50 delivery charge
- Below ₹500 → ₹100 delivery charge
Return the final payable amount.
Concepts:
Function, parameters, return, conditions*/

console.log("Task 6");
function calculateDelivery(amount) {
    let deliveryCharge;
    if (amount >= 1000) {
        deliveryCharge = 0;
    }
    else if (amount >= 500) {
        deliveryCharge = 50;
    }
    else {
        deliveryCharge = 100;
    }
    let finalAmount = amount + deliveryCharge;
    return finalAmount;
}
let result = calculateDelivery(800);
console.log(`Final Payable Amount = ₹${result}`);

/*TASK 7 – FIND HIGHEST SALES
Create:
let sales = [12000, 18000, 9500, 25000, 16000];
Find the highest sales amount.
Condition:
- Use a loop.
- Do not use Math.max().
- Do not use sort().
Expected:
25000
Concepts:
Array, array access, loop, comparison*/

console.log("Task 7");
let sales = [12000, 18000, 9500, 25000, 16000];
let highestSales = sales[0];
for (let a = 1; a < sales.length; a++) {
    if (sales[a] > highestSales) {
        highestSales = sales[a];
    }
}
console.log(`Highest Sales = ₹${highestSales}`);

/*TASK 8 – PALINDROME ARRAY
Create:
let numbers = [1, 2, 3, 2, 1];
Check whether the array is palindrome.
Rules:
- Compare values from beginning and ending.
- Do not use reverse().
Expected:
Palindrome
Concepts:
Array, index, loop, condition, logical thinking*/

console.log("Task 8");
let numbers = [1, 2, 3, 2, 1];
let isPalindrome = true;
for (let z = 0; z < numbers.length / 2; z++) {
    if (numbers[z] != numbers[numbers.length - 1 - z]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log("Array is Palindrome");
}
else {
    console.log("Array is Not Palindrome");
}

/*TASK 9 – STUDENT RESULT PROCESSING
Create:
let marks = [45, 78, 32, 90, 67];
Complete these operations:
1. Use map() to add 5 grace marks to every mark.
2. Use filter() to get marks 50 or above.
3. Print both results.
Concepts:
Array, map(), filter(), callback function*/

console.log("Task 9");
let marks = [45, 78, 32, 90, 67];
let graceMarks = marks.map((mark) => {
    return mark + 5;
});
let passedMarks = graceMarks.filter((mark) => {
    return mark >= 50;
});
console.log("Marks after adding grace = ", graceMarks);
console.log("Marks 50 or above = ", passedMarks);

/*TASK 10 – EMPLOYEE SEARCH
Create:
let employees = [
{ id: 101, name: "Arun", salary: 25000 },
{ id: 102, name: "Priya", salary: 35000 },
{ id: 103, name: "Kumar", salary: 30000 }
];
Find the employee whose id is 102.
Then print:
- Employee name
- Employee salary
Concepts:
Object, Array of Objects, find()*/

console.log("Task 10");
let employees = [
    { id: 101, name: "Arun", salary: 25000 },
    { id: 102, name: "Priya", salary: 35000 },
    { id: 103, name: "Kumar", salary: 30000 }
];
let employee = employees.find((emp) => {
    return emp.id == 102;
});
console.log(`Employee Name = ${employee.name}`);
console.log(`Employee Salary = ₹${employee.salary}`);

/*TASK 11 – SHOPPING CART TOTAL
Create:
let cart = [
{ name: "Shirt", price: 1000 },
{ name: "Shoes", price: 2500 },
{ name: "Bag", price: 1500 }
];
Calculate the total cart amount using reduce().
Expected:
5000
Concepts:
Array of Objects, reduce(), accumulator*/

/*TASK 12 – PRIVATE BANK BALANCE
Create a function:
createAccount()
Inside the function:
let balance = 5000;
Return another function.
The returned function should:
- Receive deposit amount.
- Add amount to balance.
- Return updated balance.
Store the returned function in:
let deposit = createAccount();
Call:
deposit(1000)
deposit(2000)
deposit(500)
Expected:
6000
8000
8500
The previous balance must be remembered between calls.
Concepts:
Function, Closure, lexical scope, private state*/

/*TASK 13 – ORDER CALLBACK
Create:
processOrder(productName, callback)
Requirements:
- Print "Processing Laptop".
- After 2 seconds, send "Order Confirmed" to the callback.
- Print the result inside callback.
Expected:
Processing Laptop
After 2 seconds:
Order Confirmed
Concepts:
Callback, asynchronous callback, setTimeout()*/

/*TASK 14 – PAYMENT USING PROMISE
Create:
makePayment(amount)
Rules:
- Return a Promise.
- If amount is greater than 0:
resolve "Payment Successful"
- Otherwise:
reject "Invalid Payment Amount"
Handle the result using:
.then()
.catch()
Test with:
makePayment(2500)
and
makePayment(0)
Concepts:
Promise, Promise object, resolve(), reject(),
.then(), .catch()*/

/*TASK 15 – COMPLETE ORDER USING ASYNC/AWAIT
Create a Promise-based function:
checkStock(stock)
Rules:
- stock > 0 → resolve "Stock Available"
- stock <= 0 → reject "Out of Stock"
Create:
placeOrder()
Requirements:
- Make placeOrder() an async function.
- Call checkStock() using await.
- Store the returned result.
- Print the result.
- If successful, print "Order Placed".
- Handle errors using try/catch.
Expected:
Stock Available
Order Placed
Concepts:
Promise, async, await, try, catch*/
