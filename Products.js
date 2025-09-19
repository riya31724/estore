import React, { useState } from "react";
import "./App.css";

function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Smartphone", price: 15000, category: "Electronics", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&q=80" },
    { id: 2, name: "Laptop", price: 45000, category: "Electronics", img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&q=80" },
    { id: 3, name: "Headphones", price: 3500, category: "Accessories", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&q=80" },
    { id: 4, name: "Camera", price: 25000, category: "Electronics", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&q=80" },
    { id: 5, name: "Watch", price: 5000, category: "Fashion", img: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?w=400&h=400&fit=crop&q=80" },
    { id: 6, name: "Tablet", price: 20000, category: "Electronics", img: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=400&h=400&fit=crop&q=80" },
    { id: 7, name: "Bottle", price: 800, category: "Home", img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&q=80" },
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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ✅ Filtered Products
  const filteredProducts = products.filter((p) => {
    return (
      (filter === "All" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="products-container">
      <h2 className="products-title">✨ Our Products ✨</h2>

      {/* ✅ Search + Filter */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
        </select>
      </div>

      {/* ✅ Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.img} alt={p.name} className="product-img" />
              <h3 className="product-name">{p.name}</h3>
              <p className="product-price">₹{p.price.toLocaleString()}</p>
              <button className="add-btn" onClick={() => addToCart(p)}>
                🛒 Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-products">❌ No products found!</p>
        )}
      </div>
    </div>
  );
}

export default Products;
