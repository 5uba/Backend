
import { useState } from "react";

function TaskFour() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Phone", inStock: false },
    { id: 3, name: "Tablet", inStock: true },
  ]);

  function toggleStock(id) {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, inStock: !product.inStock }
          : product
      )
    );
  }

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-3">Product Stock</h2>

      {products.map((product) => (
        <div key={product.id} className="border rounded p-3 mb-3">
          <p>Product: {product.name}</p>
          <p>Stock: {product.inStock ? "Available" : "Out of Stock"}</p>

          <button
            className="border rounded px-3 py-2 mt-2"
            onClick={() => toggleStock(product.id)}
          >
            Toggle Stock
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskFour;
