"use client"

import { useState } from "react"
import { getProductsByCategory } from "../services/ProductService"
import "./NewProducts.css"

const NewProducts = ({ addToCart, addToHeart }) => {
  const [startIndex, setStartIndex] = useState(0)

  const visibleCount = 5

  // Fetch products dynamically from the service
  const products = getProductsByCategory("New")

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % products.length)
  }

  const visibleProducts = Array.from({ length: visibleCount }).map((_, i) => {
    return products[(startIndex + i) % products.length]
  })

  return (
    <div className="featured-container">
      <div className="featured-header">
        <h2>New Products</h2>
        <div className="nav-buttons">
          <button onClick={handlePrev}>⟨</button>
          <button onClick={handleNext}>⟩</button>
        </div>
      </div>

      <div className="product-row">
        {visibleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              <img src={product.image || "/placeholder.svg"} alt={product.title} />

              {/* Hover overlay with action buttons */}
              <div className="product-overlay">
                <div className="action-icons">
                  <button
                    className="action-icon"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToHeart(product) // Add to favorites
                    }}
                  >
                    ♡
                  </button>
                  <button className="action-icon">↻</button>
                  <button className="action-icon">👁</button>
                </div>
              </div>

              {/* Add to Cart button */}
              <button
                className="add-to-cart-button"
                onClick={(e) => {
                  e.stopPropagation()
                  addToCart(product) // Add to cart
                }}
              >
                <span className="plus-icon">+</span> Add to Cart
              </button>
            </div>

            {/* Star rating */}
            <div className="product-rating">★★★★★</div>

            <p className="title">{product.title}</p>

            {/* Add the divider lines */}
            <div className="divider-lines">
              <hr />
              <hr />
            </div>

            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewProducts
