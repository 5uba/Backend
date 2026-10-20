let cart = [
  { name: "Laptop", price: 4000, quantity: 1, stock: 5 },
  { name: "Mouse", price: 500, quantity: 2, stock: 10 },
  { name: "Keyboard", price: 1000, quantity: 6, stock: 5 }
];
let subtotal = 0;
let validItems = [];
let rejectedItems = [];
for (let num = 0; num < cart.length; num++) {
  let item = cart[num];
  if (item.quantity <= 0 || item.quantity > item.stock) {
    rejectedItems.push(item.name);
  } else {
    subtotal += item.price * item.quantity;
    validItems.push(item);
  }
}

let discount = 0;

if (subtotal > 5000) {
  discount = subtotal * 0.10;
}
let total = subtotal - discount;
console.log("Valid Items:", validItems);
console.log("Rejected Items:", rejectedItems);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Total:", total);