let employees = [
  { name: "Arun", department: "IT", salary: 30000 },
  { name: "Priya", department: "HR", salary: 25000 },
  { name: "Kumar", department: "IT", salary: 40000 },
  { name: "Anu", department: "HR", salary: 35000 },
  { name: "Ravi", department: "Sales", salary: 20000 }
];
let result = {};
for (let num = 0; num < employees.length; num++) {
  let dept = employees[num].department;
  let salary = employees[num].salary;
  if (result[dept]) {
    result[dept].totalSalary += salary;
    result[dept].employees.push(employees[num].name);
  } else {
    result[dept] = {
      employees: [employees[num].name],
      totalSalary: salary
    };
  }
}
console.log(result);