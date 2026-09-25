import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        My<span> Store</span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button className="nav-button">Shop Now</button>
    </nav>
  );
}

export default Navbar;