let pins = [1234, 5678, 1111, 4321, 9999];
let correctPin = 4321;
let found = false;
for (let a = 0; a < pins.length; a++) {
    if (pins[a] === correctPin) {
        found = true;
        break;
    }
}
if (found) {
    console.log("Correct PIN found");
} else {
    console.log("Correct PIN not found");
}

/*Explanation:
Create an array of PIN attempts.
Store the correct PIN in correctPin.
Create found = false.
Use the for loop to check each PIN.
If a PIN matches correctPin, change found to true.
Use break to stop the loop immediately.
Use if/else to print the final result.

Output:
Correct PIN found*/