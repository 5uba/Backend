// 1. Private Bank Balance
// Create a function called createBankAccount().
// Requirements:
// - Inside the function create:
// let balance = 5000
// - balance must not be directly accessible outside.
// - Return a function called checkBalance().
// - checkBalance() should print the current balance.
// - Try creating another balance variable outside with value 100000.
// - Prove that the outside balance does not change the private balance.
// Expected:
// Outside Balance: 100000
// Account Balance: 5000

function createBankAccount() {
    let balance = 5000;
    function checkBalance() {
        console.log("Account Balance:", balance);
    }
    return checkBalance;
}
let balance = 100000;
console.log("Outside Balance:", balance);
let account = createBankAccount();
account(); 


// 2. DEPOSIT USING CLOSURE
// Create a function called createAccount().
// Requirements:
// - Create private variable:
// let balance = 1000
// - Return two functions:
// deposit(amount)
// getBalance()
// - deposit() should add money to balance.
// - getBalance() should display the current balance.
// Example:
// account.deposit(500)
// account.deposit(200)
// account.getBalance()
// Expected Output:
// 1700
// Condition:
// Do not directly access or modify balance outside createAccount().

function createAccount() {
    let balance = 1000;
    function deposit(amount) {
        balance = balance + amount;
    }
    function getBalance() {
        console.log(balance);
    }
    return {
        deposit: deposit,
        getBalance: getBalance
    };
}
let account1 = createAccount();
account1.deposit(500);
account1.deposit(200);
account1.getBalance();







