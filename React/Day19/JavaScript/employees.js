let employees = [
    {
        name: "vinayagam",
    department:"MERN",
    salary:60000
    },
    {
        name:"Ganesh",
        department:"JAVA",
        salary:20000
    },
      {
        name: "Dharan",
        department: "Python",
        salary: 40000
    },
  {
        name: "kumar",
    department:"MERN",
    salary:40000
    }
]

let result = {}

for( let emp of employees ){

    if( !result[emp.department] ){

        result[emp.department] = 0 ;
    }

    result[emp.department] += emp.salary;
}

console.log(result);