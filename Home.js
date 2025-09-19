import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home({ addToCart }) {
  const sliderImages = [
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop&q=80",
    "https://plus.unsplash.com/premium_photo-1699855177095-44b4da0508de?w=1200&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1561715276-a2d087060f1d?w=1200&h=400&fit=crop&q=80",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Product list
  const products = [
    { id: 1, name: "Smartphone", price: 15000, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=250&h=250&fit=crop&q=80" },
    { id: 2, name: "Laptop", price: 45000, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=250&h=250&fit=crop&q=80" },
    { id: 3, name: "Headphones", price: 3500, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=250&h=250&fit=crop&q=80" },
    { id: 4, name: "Camera", price: 25000, img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=250&h=250&fit=crop&q=80" },
    { id: 5, name: "Watch", price: 5000, img: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=250&h=250&fit=crop&q=80" },
    { id: 6, name: "Tablet", price: 20000, img: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=250&h=250&fit=crop&q=80" },
    { id: 7, name: "Speaker", price: 3000, img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=250&h=250&fit=crop&q=80" },
    { id: 8, name: "Mouse", price: 1200, img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=250&h=250&fit=crop&q=80" },
    { id: 9, name: "Keyboard", price: 1800, img: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=250&h=250&fit=crop&q=80" },
    { id: 10, name: "Earbuds", price: 3000, img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=250&h=250&fit=crop&q=80" },
    { id: 11, name: "Smart TV", price: 40000, img: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=250&h=250&fit=crop&q=80" },
    { id: 12, name: "Bottle", price: 800, img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=250&h=250&fit=crop&q=80" },
    { id: 13, name: "Drone", price: 35000, img: "https://images.unsplash.com/photo-1617897903246-719242758050?w=250&h=250&fit=crop&q=80" },
    { id: 14, name: "Projector", price: 20000, img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=250&h=250&fit=crop&q=80" },
    { id: 15, name: "Laptop Stand", price: 2500, img: "https://images.unsplash.com/photo-1623251609314-97cc1f84e3ed?w=250&h=250&fit=crop&q=80" },
    { id: 16, name: "Microphone", price: 3000, img: "https://images.unsplash.com/photo-1476136236990-838240be4859?w=250&h=250&fit=crop&q=80" },
    { id: 17, name: "VR Headset", price: 18000, img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=250&h=250&fit=crop&q=80" },
    { id: 18, name: "External Hard Drive", price: 4500, img: "https://images.unsplash.com/photo-1624895608078-e9f564cbe3fa?w=250&h=250&fit=crop&q=80" },
    { id: 19, name: "Smart Speaker", price: 6000, img: "https://images.unsplash.com/photo-1529359744902-86b2ab9edaea?w=250&h=250&fit=crop&q=80" },
    { id: 20, name: "Router", price: 2500, img: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=250&h=250&fit=crop&q=80" }
  ];

  return (
    <div className="home">
      {/* Slider Section */}
      <div className="slider">
        <img src={sliderImages[currentIndex]} alt="banner" />

        <div className="slider-text">
          <h1>Big Sale This Week!</h1>
          <p>Get the best products at amazing prices</p>
        </div>

        <button onClick={goPrev} className="slider-arrow left">&#10094;</button>
        <button onClick={goNext} className="slider-arrow right">&#10095;</button>

        <div className="slider-dots">
          {sliderImages.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            ></span>
          ))}
        </div>
      </div>

      <h2>🔥 Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
            </Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
