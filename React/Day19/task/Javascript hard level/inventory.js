let inventory = {
  laptop: 5,
  mobile: 10,
  headphone: 3
};
const orders = [
  { id: 1, product: "laptop", quantity: 2 },
  { id: 2, product: "mobile", quantity: 4 },
  { id: 3, product: "headphone", quantity: 5 },
  { id: 4, product: "laptop", quantity: 4 }
];
function allocateOrders(orders) {
  const results = [];
  for (let order of orders) {
    if (
      inventory[order.product] !== undefined &&
      order.quantity > 0 &&
      inventory[order.product] >= order.quantity
    ) {
      inventory[order.product] -= order.quantity;

      results.push({
        ...order,
        status: "Accepted"
      });
    } else {
      results.push({
        ...order,
        status: "Rejected"
      });
    }
  }
  return {
    updatedInventory: inventory,
    orderResults: results
  };
}
console.log(allocateOrders(orders));