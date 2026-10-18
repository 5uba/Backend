let employees = [
  { name: "Raja", salary: 25000 },
  { name: "Priya", salary: 35000 },
  { name: "Kumar", salary: 40000 },
  { name: "Devi", salary: 28000 }
];
let result = [];
let totalSalary = 0;
for (let q = 0; q < employees.length; q++) {
  if (employees[q].salary > 30000) {
    result.push(employees[q]);
    totalSalary += employees[q].salary;
  }
}

console.log(result);
console.log("Total Salary:", totalSalary);