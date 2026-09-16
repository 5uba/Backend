/*TASK 1 – MAP: Employee Salary Increment
Create an array:
let salaries = [15000, 20000, 25000, 30000, 35000];
Requirements:
- Use map() only.
- Increase every employee salary by 2000.
- Store the result in a new array.
- Print original salaries.
- Print updated salaries.
Expected Output:
[17000, 22000, 27000, 32000, 37000]*/
let salaries = [15000, 20000, 25000, 30000, 35000];
let updatedSalaries = salaries.map(function(salary) {
    return salary + 2000;
});
console.log("Original Salaries:",salaries);
console.log("Updated Salaries:",updatedSalaries);

/*TASK 2 – FILTER: Find Eligible Students
Create an array:
let marks = [35, 78, 42, 90, 25, 67, 55];
Requirements:
- Use filter() only.
- Find students who scored 50 or above.
- Store them in a new array.
- Print the result.
Expected Output:
[78, 90, 67, 55]*/
let marks = [35, 78, 42, 90, 25, 67, 55];
let eligibleStudents = marks.filter(function(mark) {
    return mark >= 50;
});
console.log(eligibleStudents);

/*TASK 3 – FIND: Find One Product
Create:
let products = [
    { id: 101, name: "Laptop", price: 55000 },
    { id: 102, name: "Mouse", price: 800 },
    { id: 103, name: "Keyboard", price: 1500 },
    { id: 104, name: "Monitor", price: 12000 }
];
Requirements:
- Use find().
- Find the product whose id is 103.
- Store the result in a variable.
- Print the complete product.
- Print only the product name.
Expected Output:
{ id: 103, name: "Keyboard", price: 1500 }
Keyboard*/
let products = [
    { id: 101, name: "Laptop", price: 55000 },
    { id: 102, name: "Mouse", price: 800 },
    { id: 103, name: "Keyboard", price: 1500 },
    { id: 104, name: "Monitor", price: 12000 }
];
let product = products.find(function(item) {
    return item.id === 103;
});
console.log(product);
console.log(product.name);


/*TASK 4 – REDUCE: Shopping Cart Total
Create:
let cart = [
    { name: "Shirt", price: 1200 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 3000 },
    { name: "Bag", price: 1500 }
];
Requirements:
- Use reduce() only.
- Calculate the total cart price.
- Initial accumulator value must be 0.
- Print the final total.
Expected Output:
8200*/
let cart = [
    { name: "Shirt", price: 1200 },
    { name: "Shoes", price: 2500 },
    { name: "Watch", price: 3000 },
    { name: "Bag", price: 1500 }

];
let total = cart.reduce(function(accumulator, item) {
    return accumulator + item.price;
}, 0);
console.log(total);


/*TASK 5 – COMBINED REAL-WORLD TASK
Create:
let students = [
    { id: 1, name: "Arun", mark: 85 },
    { id: 2, name: "Bala", mark: 45 },
    { id: 3, name: "Kumar", mark: 72 },
    { id: 4, name: "Priya", mark: 95 },
    { id: 5, name: "Ravi", mark: 38 }
];
Complete the following:
1. MAP
Create a new array containing only student names.
Expected:
["Arun", "Bala", "Kumar", "Priya", "Ravi"]
2. FILTER
Find students whose mark is 60 or above.
Expected:
Arun
Kumar
Priya
3. FIND
Find the student whose id is 4.
Expected:
{ id: 4, name: "Priya", mark: 95 }
4. REDUCE
Calculate the total marks of all students.
Expected:
335
5. REDUCE
Calculate the average mark.
Expected:
67
RULES:
- Do not use for loop.
- Do not use while loop.
- Use map() for transformation.
- Use filter() for multiple matching records.
- Use find() for one matching record.
- Use reduce() for calculation.*/

