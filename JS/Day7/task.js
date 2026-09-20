// Write the Syntex of the Promise and ASYNC & AWAIT
/*
1. Promise Syntax:
const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("Success");
    } else {
        reject("Error");
    }

});
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

2. Async & Await Syntax:
const functionName = async () => {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

functionName();
*/

/*TASK 1 – CALLBACK
Create a function called calculate().
Requirements:
- Pass two numbers and one callback function.
- Add the two numbers.
- Send the result to the callback.
- Print the result using callback.
Basic Syntax:
const calculate = (a, b, callback) => {\
// add numbers
callback(result);
};
calculate(10, 20, (result) => {
// print result
});
--------------------------------------------------*/
const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
};
calculate(10, 20, (result) => {
    console.log("Result:", result);
});

/*TASK 2 – PROMISE
Create a function called checkNumber().
Requirements:
- Pass one number.
- Return a Promise.
- If number is greater than 10, resolve "Valid Number".
- Otherwise reject "Invalid Number".
- Use .then() and .catch().
Basic Syntax:
const checkNumber = (number) => {
return new Promise((resolve, reject) => {
if (condition) {
resolve();
} else {
reject();
}
});
};
checkNumber(20)
.then((result) => {
// print success
})
.catch((error) => {
// print error
});
--------------------------------------------------*/


/*TASK 3 – ASYNC / AWAIT
Use the same checkNumber() Promise function.
Requirements:
- Create a function called verifyNumber().
- Make it async.
- Call checkNumber() using await.
- Print the result.
- Handle the error using try/catch.
Basic Syntax:
const verifyNumber = async () => {
try {
const result = await checkNumber(20);
// print result
} catch (error) {
// print error
}
};
verifyNumber();*/