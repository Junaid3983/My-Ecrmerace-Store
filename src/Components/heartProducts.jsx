import React from "react";
import "./heartProducts.css";

const HeartProducts = ({ heartProducts }) => {
  return (
    <div className="heart-products-container">
      <h1>Favorite Products</h1>
      {heartProducts.length > 0 ? (
        <ul className="heart-products-list">
          {heartProducts.map((product, index) => (
            <li key={index} className="heart-product-item">
              <img
                src={product.image}
                alt={product.title}
                className="heart-product-image"
              />
              <div className="heart-product-details">
                <p className="heart-product-title">{product.title}</p>
                <p className="heart-product-price">{product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-heart-message">You have no favorite products yet.</p>
      )}
    </div>
  );
};

export default HeartProducts;