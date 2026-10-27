const data =[
    {name:"React",salary:20467,subject:"node",department:"IT"},
    {name:"React",salary:30467,subject:"JS",department:"HR"},
    {name:"React",salary:60467,subject:"HTML",department:"IT"},
    {name:"React",salary:100467,subject:"React",department:"CS"}
    ]
//Here find the avg salary of emp for all users and print the higher order accesending order

let total = 0
data.forEach((emp) => {
    total += emp.salary
})
let avg = total / data.length
console.log("Average Salary:", avg)


