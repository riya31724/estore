import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.error("Item removed from cart!");
  };

  const changeQuantity = (index, value) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + value);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info("Quantity updated!");
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go Shopping</Link></p>
      ) : (
        <div className="cart-items">
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <div className="quantity">
                  <button onClick={() => changeQuantity(idx, -1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => changeQuantity(idx, 1)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(idx)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
