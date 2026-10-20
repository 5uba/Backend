const transactions = [
  { type: "credit", amount: 2000, timestamp: "10:00" },
  { type: "debit", amount: 3000, timestamp: "10:05" },
  { type: "debit", amount: 8000, timestamp: "10:10" },
  { type: "credit", amount: 1000, timestamp: "10:15" },
  { type: "debit", amount: 2000, timestamp: "10:20" }
];
function validateTransactions(transactions) {
  let balance = 5000;
  const rejected = [];
  for (let transaction of transactions) {
    if (transaction.amount <= 0) {
      rejected.push(transaction);
      continue;
    }
    if (transaction.type === "credit") {
      balance += transaction.amount;
    } else if (transaction.type === "debit") {
      if (transaction.amount > balance) {
        rejected.push(transaction);
      } else {
        balance -= transaction.amount;
      }
    } else {
      rejected.push(transaction);
    }
  }
  return {
    finalBalance: balance,
    rejectedTransactions: rejected
  };
}
console.log(validateTransactions(transactions));