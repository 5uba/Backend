
import { useState, useMemo } from "react";

const initialProducts = [
  { id: 1, name: "Laptop", price: 50000, quantity: 1 },
  { id: 2, name: "Mobile", price: 20000, quantity: 2 },
  { id: 3, name: "Mouse", price: 500, quantity: 1 }
];

function calculateTotal(products) {
  console.log("Total calculation running...");

  return products.reduce(
    (total, product) =>
      total + product.price * product.quantity,
    0
  );
}

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [dark, setDark] = useState(false);

  const total = useMemo(() => {
    return calculateTotal(products);
  }, [products]);

  function updateQuantity(id, amount) {
    setProducts((previousProducts) =>
      previousProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: Math.max(0, product.quantity + amount)
            }
          : product
      )
    );
  }

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <h2>Shopping Cart</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ₹{product.price}</p>
          <p>Quantity: {product.quantity}</p>

          <button onClick={() => updateQuantity(product.id, 1)}>
            +
          </button>

          <button
            onClick={() => updateQuantity(product.id, -1)}
            disabled={product.quantity === 0}
          >
            -
          </button>

          <hr />
        </div>
      ))}

      <h3>Total Amount: ₹{total}</h3>

      <button onClick={() => setDark(!dark)}>
        Change Theme
      </button>
    </div>
  );
}

export default App;
