
import { useState } from "react";

function ProductForm() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: ""
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (editId !== null) {
      setProducts(products.map((p) =>
        p.id === editId ? { ...form, id: editId } : p
      ));
      setEditId(null);
    } else {
      setProducts([...products, { ...form, id: Date.now() }]);
    }

    setForm({ name: "", price: "", quantity: "" });
  }

  function handleEdit(product) {
    setForm({
      name: product.name,
      price: product.price,
      quantity: product.quantity
    });
    setEditId(product.id);
  }

  return (
    <div>
      <h2>Product Form</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name"
          value={form.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price"
          value={form.price} onChange={handleChange} required />
        <input name="quantity" type="number" placeholder="Quantity"
          value={form.quantity} onChange={handleChange} required />

        <button type="submit">
          {editId !== null ? "Update Product" : "Add Product"}
        </button>
      </form>

      <h3>Product List</h3>

      {products.map((p) => (
        <div key={p.id}>
          <p>Name: {p.name}</p>
          <p>Price: {p.price}</p>
          <p>Quantity: {p.quantity}</p>
          <button onClick={() => handleEdit(p)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default ProductForm;
