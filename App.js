import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";   // ✅ Import Products
import Login from "./Login";
import Register from "./Register";
import Navbar from "./Navbar";
import Contact from "./Contact"; 
import Cart from "./Cart";

// ✅ Toastify imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  // ✅ Add to cart with quantity + toast
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      toast.info(`${product.name} quantity updated in cart!`);
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
      toast.success(`${product.name} added to cart!`);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ Remove from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error("Item removed from cart!");
  };

  // ✅ Update quantity
  const updateQuantity = (productId, qty) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: qty } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <Navbar user={user} setUser={setUser} cart={cart} />
      <Routes>
        <Route path="/" element={<Home user={user} addToCart={addToCart} />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} /> {/* ✅ Products page */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              setCart={setCart}
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          } 
        />
      </Routes>
      <Contact />

      {/* ✅ Toast notification container */}
      <ToastContainer position="top-right" autoClose={2000} />
    </Router>
  );
}

export default App;
