import { useState, useEffect } from "react";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("none");
  const [page, setPage] = useState(1);
  const limit = 5;
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://dummyjson.com/products?limit=0"
      );
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, []);
  const categories = [
    ...new Set(products.map((product) => product.category))
  ];
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  const totalPages = Math.ceil(filteredProducts.length / limit);
  const startIndex = (page - 1) * limit;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + limit
  );
  return (
    <div>
      <h2>Product List</h2>
      <input type="text" placeholder="Search product" value={search} onChange={(e) => {setSearch(e.target.value); setPage(1);}}/>
      <select value={category} onChange={(e) => {setCategory(e.target.value); setPage(1);}}>
        <option value="all">All Categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select value={sort} onChange={(e) => {setSort(e.target.value); setPage(1);}}>
        <option value="none">Default Order</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      {displayedProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
      {displayedProducts.length === 0 && <p>No products found.</p>}
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span> Page {page} of {Math.max(totalPages, 1)} </span>
      <button onClick={() => setPage(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}
export default ProductList;