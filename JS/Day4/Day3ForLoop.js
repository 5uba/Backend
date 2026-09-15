for (let num = 1; num <= 20; num++) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(num);
    }
}
/*Explanation:
First, check every number from 1 to 20. 
Next counts how many numbers can divide 'num' exactly.
If the remainder is 0, 'i' is a factor of 'num'.
Increase the count because we found one factor.
A prime number has exactly two factors: 1 and itself.*/
