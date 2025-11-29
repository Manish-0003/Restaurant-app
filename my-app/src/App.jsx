import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./CartContext";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import Menu from "./components/Pages/Menu/Menu";
import Gallery from "./components/Pages/Gallery/Gallery";
import Cart from "./components/Pages/Cart/Cart";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import OrderSuccess from "./components/Pages/OrderSuccess/OrderSuccess";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";

const App = () => {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery/>} />
           <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
             <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/login" element={<Login />} />
               <Route path="/signup" element={<Signup />} />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
