let transactions = [
    [2500, 4500, 12000],
    [3000, 15000, 2000],
    [8000, 5000, 11000]
];
for (let a = 0; a < transactions.length; a++) {
    for (let b = 0; b < transactions[a].length; b++) {
        if (transactions[a][b] > 10000) {
            console.log(`Suspicious transaction = ₹${transactions[a][b]}`);
        }
    }
}

Explanation:
transactions -> 3 days' transactions.
Outer for -> one day at a time.
Inner for-> that day's transactions.
if -> checks whether transaction is greater than 10000.
If yes -> print it as Suspicious transaction.

Output:
Suspicious transaction = ₹12000
Suspicious transaction = ₹15000
Suspicious transaction = ₹11000