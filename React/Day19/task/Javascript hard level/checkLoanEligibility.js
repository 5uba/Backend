function checkLoanEligibility(user) {
  const {
    income,
    existingEMI,
    loanAmount,
    annualInterestRate,
    tenureYears
  } = user;
  const monthlyRate = annualInterestRate / 12 / 100;
  const months = tenureYears * 12;
  let proposedEMI;
  if (monthlyRate === 0) {
    proposedEMI = loanAmount / months;
  } else {
    proposedEMI =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }
  proposedEMI = Math.round(proposedEMI);
  const totalEMI = existingEMI + proposedEMI;
  const debtRatio = (totalEMI / income) * 100;
  const reasons = [];
  if (income < 25000) {
    reasons.push("Monthly income must be at least Rs. 25,000");
  }
  if (loanAmount <= 0 || tenureYears <= 0) {
    reasons.push("Loan amount and tenure must be positive");
  }
  if (debtRatio > 40) {
    reasons.push("Total EMI exceeds 40% of monthly income");
  }
  return {
    proposedEMI,
    totalEMI,
    debtRatio: debtRatio.toFixed(2) + "%",
    eligible: reasons.length === 0,
    rejectionReasons: reasons
  };
}
const user = {
  income: 50000,
  existingEMI: 5000,
  loanAmount: 500000,
  annualInterestRate: 10,
  tenureYears: 5
};
console.log(checkLoanEligibility(user));