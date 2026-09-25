import React from "react";
import ProductCard from "./ProductCard";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO MY STORE</span>

          <h1>
            Find Your
            <span> Favorite Products</span>
          </h1>

          <p>
            Discover quality products at simple and affordable prices.
            Explore our collection and find something you love.
          </p>

          <button>Explore Products</button>
        </div>
      </section>

      <section className="products">
        <div className="section-title">
          <p>OUR COLLECTION</p>
          <h2>Popular Products</h2>
          <span>Check out some of our popular products</span>
        </div>

        <div className="product-container">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </main>
  );
}

export default Home;