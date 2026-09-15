/*TASK 1 – PRIVATE SALARY
Create a function called createEmployee().
Requirements:
- Create a private variable:
let salary = 20000
- Return an inner arrow function.
- Store the returned function in a variable called updateSalary.
- The inner function should receive an amount.
- Add the amount to the existing salary.
- Return the updated salary.
- Call updateSalary() multiple times.
- Salary must remember the previous updated value.
Example:
updateSalary(5000)
Output: 25000
updateSalary(3000)
Output: 28000*/

function createEmployee() {
    let salary = 20000;
    return (amount) => {
        salary = salary + amount;
        return salary;
    };
}
let updateSalary = createEmployee();
console.log(updateSalary(5000));  
console.log(updateSalary(3000));  
console.log(updateSalary(2000));  


/*TASK 2 – PRODUCT STOCK
Create a function called createStock().
Requirements:
- Create a private variable:
let stock = 10
- Return an object containing two arrow functions:
addStock(quantity)
sellProduct(quantity)
- addStock() should increase the stock.
- sellProduct() should decrease the stock.
- Do not allow selling if requested quantity is greater than available stock.
- Store the returned object in a variable called product.
- Call both functions multiple times.
- Stock should remember its previous value.
Example:
product.addStock(5)
Stock: 15
product.sellProduct(3)
Stock: 12
product.sellProduct(2)
Stock: 10*/
function createStock() {
    let stock = 10;
    return {
        addStock: (quantity) => {
            stock = stock + quantity;
            return stock;
        },
        sellProduct: (quantity) => {
            if (quantity > stock) {
                return "Not enough stock";
            }

            stock = stock - quantity;
            return stock;
        }
    };
}
let product = createStock();
console.log(product.addStock(5));       
console.log(product.sellProduct(3));    
console.log(product.sellProduct(2));    
console.log(product.addStock(10));      
console.log(product.sellProduct(25));   
console.log(product.sellProduct(5));    