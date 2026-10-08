let correctPin = 2468;
let enteredPin = 2468;
let attempts = 3;
let loginSuccess = false;
for (let a = 1; a <= attempts; a++) {
    if (enteredPin === correctPin) {
        console.log("Login successful");
        loginSuccess = true;
        break;
    } else {
        console.log("Incorrect PIN");
    }
}
if (loginSuccess === false) {
    console.log("Account locked");
}

// Explanation:
// Create variables for the correct PIN, entered PIN, and number of attempts.
// Create loginSuccess and set it to false.
// Start the for loop. The loop allows a maximum of 3 attempts.
// Check the PIN using if.
// If the entered PIN matches the correct PIN, print "Login successful".
// Set loginSuccess to true and use break to stop the loop.
// If the PIN is wrong, print "Incorrect PIN".
// After the loop, check loginSuccess.
// If it is still false, print "Account locked".
// Output:
// Login successful
