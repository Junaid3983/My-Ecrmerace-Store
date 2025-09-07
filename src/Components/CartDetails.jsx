import React from "react";
import "./CartDetails.css";

const CartDetails = ({ cartItems }) => {
  return (
    <div className="cart-details-container">
      <h1>Cart Details</h1>
      {cartItems.length > 0 ? (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-price">{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-cart-message">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDetails;