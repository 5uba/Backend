let ratings = [3, 5, 4, 2, 5, 3, 4, 1];
let goodRatings = 0;
for (let a = 0; a < ratings.length; a++) {
    if (ratings[a] >= 4) {
        goodRatings++;
    }
}
console.log("Good ratings = " + goodRatings);

/*Explanation:
Create the ratings array.
goodRatings = 0 → count starts from 0.
for loop checks every rating.
if checks whether rating is 4 or above.
If yes, goodRatings++.
Finally, print the count.

Output:
Good ratings = 4*/