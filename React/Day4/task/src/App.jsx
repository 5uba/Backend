import React from "react";
import "./App.css";
// import Header from "./Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;