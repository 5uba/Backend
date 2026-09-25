import React from "react";

function About() {
  return (
    <section className="about">
      <div className="about-content">

        <div>
          <p className="small-title">ABOUT US</p>

          <h2>Simple. Modern. <span>Useful.</span></h2>

          <p>
            We are learning React by building simple and reusable
            components. Our goal is to create clean and user-friendly
            websites using modern web technologies.
          </p>

          <button>Learn More</button>
        </div>

        <div className="about-box">
          <h3>Why Choose Us?</h3>

          <p>✓ Simple and clean design</p>
          <p>✓ Quality products</p>
          <p>✓ Easy shopping experience</p>
        </div>

      </div>
    </section>
  );
}

export default About;