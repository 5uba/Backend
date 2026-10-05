let orders = ["Delivered", "Pending", "Delivered", "Cancelled", "Pending", "Delivered", "Pending"];
let deliveredCount = 0;
let pendingCount = 0;
let cancelledCount = 0;
for (let z = 0; z < orders.length; z++) {
    if (orders[z] === "Delivered") {
        deliveredCount++;
    } 
    else if (orders[z] === "Pending") {
        pendingCount++;
    } 
    else if (orders[z] === "Cancelled") {
        cancelledCount++;
    }
}
console.log("Delivered orders = " + deliveredCount);
console.log("Pending orders = " + pendingCount);
console.log("Cancelled orders = " + cancelledCount);
if (pendingCount > 0) {
    console.log("Some orders are waiting for delivery");
}

/*Explanation:
Create an array to store the delivery status of all orders.
Create 3 variables named deliveredCount, pendingCount, and cancelledCount to count each type of order.
Start the for loop to check each order status one by one.
Check for Delivered orders using if. If the status is "Delivered", increase deliveredCount by 1.
Check for Pending orders using else if. If the status is "Pending", increase pendingCount by 1.
Check for Cancelled orders using another else if. If the status is "Cancelled", increase cancelledCount by 1.
Repeat the process until all orders in the array are checked.
Print the counts of delivered, pending, and cancelled orders.
Check whether there are pending orders. If pendingCount is greater than 0, print "Some orders are waiting for delivery".

Output:
Delivered orders = 3
Pending orders = 3
Cancelled orders = 1
Some orders are waiting for delivery*/
