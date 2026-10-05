let scores = [60, 75, 30, 80, 55, 70, 20];
let currentStreak = 0;
let longestStreak = 0;
for (let a = 0; a < scores.length; a++) {
    if (scores[a] >= 50) {
        currentStreak++;
        if (currentStreak > longestStreak) {
            longestStreak = currentStreak;
        }
    } else {
        currentStreak = 0;
    }
}
console.log("Longest winning streak = " + longestStreak);

// Explanation:
// Create the scores array.
// Initialize currentStreak and longestStreak to 0.
// Use a for loop to check every score.
// If the score is 50 or above, increase currentStreak.
// If currentStreak exceeds longestStreak, update longestStreak.
// Otherwise, reset currentStreak to 0.
// Repeat until all scores are checked.
// Print the longest winning streak.

// Output:
// Longest winning streak = 3