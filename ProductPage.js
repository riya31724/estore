import React from "react";
import { useParams, Link } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  // Simple product data for demo
  const products = [
    { id: "1", name: "iPhone 15", price: "₹75,000" },
    { id: "2", name: "Samsung Galaxy S24 Ultra", price: "₹59,990" },
    { id: "3", name: "OnePlus 12", price: "₹55,000" }
  ];

  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found!</p>;

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}

export default ProductPage;
