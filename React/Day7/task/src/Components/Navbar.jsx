import { Link } from "react-router-dom";

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
        <span className="text-lg font-bold text-indigo-600">MySite</span>
        <div className="flex gap-1">
          <Link to="/" className={linkClass}>Home</Link>
          <Link to="/services" className={linkClass}>Services</Link>
          <Link to="/about" className={linkClass}>About</Link>
          <Link to="/contact" className={linkClass}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;