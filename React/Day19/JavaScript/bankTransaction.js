const transactions = [
  { type: "credit", amount: 2000, timestamp: "10:00" },
  { type: "debit", amount: 1500, timestamp: "10:05" },
  { type: "debit", amount: 7000, timestamp: "10:10" },
  { type: "credit", amount: 1000, timestamp: "10:15" },
  { type: "debit", amount: 2000, timestamp: "10:20" }
];
let balance = 5000;
let rejectedTransactions = [];
const result = transactions.map((transaction) => {
  if (transaction.type === "credit") {
    balance = balance + transaction.amount;
  } 
  else if (transaction.type === "debit") {
    if (transaction.amount > balance) {
      rejectedTransactions.push(transaction);
      return {
        ...transaction,
        status: "Rejected",
        balance: balance
      };
    } 
    else {
      balance = balance - transaction.amount;
    }
  }
  return {
    ...transaction,
    status: "Accepted",
    balance: balance
  };
});
console.log("Transaction Details:", result);
console.log("Final Balance:", balance);
console.log("Rejected Transactions:", rejectedTransactions);
