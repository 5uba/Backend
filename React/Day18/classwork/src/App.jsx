// import { useState, useEffect } from "react";
// function App() {
//   const [carts, setCarts] = useState([]);
//   const [search, setSearch] = useState("");
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://dummyjson.com/carts");
//       const data = await response.json();
//       setCarts(data.carts);
//     };
//     fetchData();
//   }, []);
//   const filterCarts = [];
//   for (let a = 0; a < carts.length; a++) {
//     if (String(carts[a].userId).includes(search)) {
//       filterCarts.push(carts[a]);
//     }
//   }
//   return (
//     <div>
//       <h1>Cart Details</h1>
//       <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
//       <div>
//         {filterCarts.map((cart) => (
//           <div key={cart.id}>
//             <h3>Cart ID: {cart.id}</h3>
//             <p>User ID: {cart.userId}</p>
//             <p>Total: {cart.total}</p>
//             <p>Products: {cart.totalProducts}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default App;


import { useState, useEffect } from "react";
function App() {
  const [carts, setCarts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/carts");
      const data = await response.json();
      setCarts(data.carts);
    };
    fetchData();
  }, []);
  const filteredCarts = [];
  for (let i = 0; i < carts.length; i++) {
    if (String(carts[i].id).includes(search) || String(carts[i].userId).includes(search)) {
      filteredCarts.push(carts[i]);
    }
  }
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Cart Details</h1>
      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}className="border p-2 rounded mb-5 w-full"/>
      <div className="flex flex-wrap gap-4">
        {filteredCarts.map((cart) => (
          <div key={cart.id} className="border rounded p-4 w-60">
            <h3 className="font-bold">Cart ID: {cart.id}</h3>
            <p>User ID: {cart.userId}</p>
            <p>Total: {cart.total}</p>
            <p>Products: {cart.totalProducts}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;