import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-600 text-white p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;