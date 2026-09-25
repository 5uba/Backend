import React from "react";

function ProductCard() {
  return (
    <div className="product-card">

      <div className="product-image">
        🎧
      </div>

      <span className="product-tag">POPULAR</span>

      <h3>Wireless Headphones</h3>

      <p className="product-description">
        High-quality wireless headphones with clear sound.
      </p>

      <div className="product-bottom">
        <strong>₹1,499</strong>

        <button>Buy Now</button>
      </div>

    </div>
  );
}

export default ProductCard;