
import { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Keyboard", price: 1000 },
  { id: 4, name: "Mouse", price: 500 },
  { id: 5, name: "Monitor", price: 10000 }
]

function filterProducts(products, search) {
  console.log("Filtering products...");

  return products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const filteredProducts = useMemo(() => {
    return filterProducts(products, search);
  }, [search]);

  return (
    <div>
      <h2>Product Search</h2>

      <input type="text" placeholder="Search product" value={search} onChange={(e) => setSearch(e.target.value)}/>

      <h3>Products</h3>

      {filteredProducts.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}
        </p>
      ))}

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;
