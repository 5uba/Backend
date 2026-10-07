// Factorial
let num = 5;
let fact= 1;
for (let z = 1; z <= num; z++) {
    fact = fact * z;
}
console.log(fact);

// First, we store 5 in the variable num.
// Next, we initialize fact with 1. We use 1 instead of 0 because when we multiply any number by 0 , the result will always be 0.
// Next, the loop starts from 1 (z = 1) and ends at 5, which is stored in the num variable.
// Then, fact = fact * z.
// The calculation happens step by step:
// 1  1 = 1
// 1 × 2 = 2
// 2 × 3 = 6
// 6 × 4 = 24
// 24 × 5 = 120
// Therefore, the final factorial value is 120
