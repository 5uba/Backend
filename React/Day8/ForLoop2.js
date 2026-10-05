let tickets = [20, 30, 15, 50, 25, 40, 10, 35];
let total = 0;
let highTicketCount = 0;
let highestTicket = tickets[0];
for (let a = 0; a < tickets.length; a++) {
    total = total + tickets[a];
    if (tickets[a] >= 30) {
        highTicketCount++;
    }
    if (tickets[a] > highestTicket) {
        highestTicket = tickets[a];
    }
}
console.log("Total collection = " + total);
console.log("Passengers paid ₹30 or more = " + highTicketCount);
console.log("Highest ticket price = ₹" + highestTicket);

/*Explanation:
Create an array to store the ticket prices of all passengers.
Create three variables named total, highTicketCount, and highestTicket.
Start the for loop to check each ticket price one by one.
Calculate the total collection by adding each ticket price to total.
Check the ticket price using if. If the price is ₹30 or more, increase highTicketCount by 1.
Check the highest ticket price using another if. If the current ticket price is greater than highestTicket, update highestTicket.
Repeat the process until all ticket prices in the array are checked.
Print the final results showing the total collection, number of passengers who paid ₹30 or more, and the highest ticket price.

Output:
Total collection = 225
Passengers paid ₹30 or more = 4
Highest ticket price = ₹50*/