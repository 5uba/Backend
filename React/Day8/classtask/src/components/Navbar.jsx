import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center p-4">
      <div className="flex gap-5">
        <Link to="/">All Sports</Link>
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/kids">Kids</Link>
      </div>
      <Link to="/login" className="ml-auto">
        Login
      </Link>
    </nav>
  );
}
export default Navbar;