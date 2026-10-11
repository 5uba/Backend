import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "../Components/Navbar";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "../Pages/Product";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function AppRouter() {
  return (
    <HashRouter>

      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>}/>
        <Route path="/about" element={<><Navbar /><About /></>}/>
        <Route path="/products" element={<><Navbar /> <Product /></>}/>
        <Route path="/contact" element={<> <Navbar /> <Contact /></>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

      </Routes>

    </HashRouter>
  );
}

export default AppRouter;