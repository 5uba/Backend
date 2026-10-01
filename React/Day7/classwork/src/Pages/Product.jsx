function Product() {

  const products = [
    {
      name: "Laptop",
      price: 55000,
    },
    {
      name: "Mobile",
      price: 25000,
    },
    {
      name: "Headphones",
      price: 3000,
    },
    {
      name: "Keyboard",
      price: 1500,
    },
    {
      name: "Smart Watch",
      price: 5000,
    },
    {
      name: "Tablet",
      price: 30000,
    }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-purple-600 font-bold mt-3">₹{product.price}</p>
            <p className="text-gray-500 mt-2">Product No: {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;