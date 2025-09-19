import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Navbar({ user, setUser, cart }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MyShop</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>

        {user ? (
          <li className="user-menu">
            <div
              className="user-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user.name[0].toUpperCase()}
            </div>
            {dropdownOpen && (
              <div className="dropdown">
                <p>Hello, {user.name}</p>
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}

        {/* ✅ Cart Button direct Cart page kholega */}
        <li className="cart">
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">{cart.length}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
