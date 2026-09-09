// EXPRESSIONS AND STATEMENTS
// Expression : An expression is a piece of code that produces a value.

// Arithmetic Expressions
10 + 20;
50 - 10;
5 * 4;
20 / 5;
10 % 3;

// Variable Expressions
age;
age + 5;
age * 2;

// Comparison Expressions
age > 18;
age < 18;
age === 21;
age !== 20;
age >= 18;

// Logical Expressions
age > 18 && age < 30;
age > 25 || age < 10;
!(age < 18);

// String Expressions
"Hello";
"JavaScript";
"Hello " + "World";

// Array Expression
[10, 20, 30];

// Object Expression
{
    name: "Suba",
    age: 21
}

// Function Expression
console.log("Hello");

//Statement : A statement is a complete instruction given to JavaScript.
// Variable Declaration Statement
let name = "Suba";

// Assignment Statement
age = 22;

// Console Statement
console.log(name);

// If Statement
if (age >= 18) {
    console.log("Adult");
}


// If Else Statement
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// For Loop Statement
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// While Statement
let count = 1;
while (count <= 3) {
    console.log(count);
    count++;
}

// Function Declaration Statement
function add(a, b) {
    return a + b;
}

// Return Statement
function getAge() {
    return age;
}
