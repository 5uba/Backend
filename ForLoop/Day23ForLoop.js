let balance = 10000;
let withdrawal = 1500;
let attempts = 5;
for (let a = 1; a <= attempts; a++) {
    if (balance >= withdrawal) {
        balance = balance - withdrawal;
        console.log("Withdrawal = ₹" + withdrawal);
        console.log("Remaining balance = ₹" + balance);
    } else {
        console.log("Insufficient balance");
    }

    withdrawal = withdrawal + 500;
}
console.log("Final balance = ₹" + balance);

// Explanation:
// Create three variables - balance, withdrawal, and attempts.
// Start the for loop to repeat the withdrawal process 5 times.
// Check the balance using if. If the balance is enough for the withdrawal, continue.
// Subtract the withdrawal amount from the balance.
// Increase the withdrawal amount by ₹500 for the next attempt.
// If the balance is not enough, print "Insufficient balance".
// Repeat the process until all 5 attempts are completed.
// Print the final balance.

// Output:
// Withdrawal = ₹1500
// Remaining balance = ₹8500
// Withdrawal = ₹2000
// Remaining balance = ₹6500
// Withdrawal = ₹2500
// Remaining balance = ₹4000
// Withdrawal = ₹3000
// Remaining balance = ₹1000
// Insufficient balance
// Final balance = ₹1000

