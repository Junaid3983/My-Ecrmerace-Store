"use client"
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-title">
            <i className="envelope-icon"></i>
            <h3>Sign Up For Newsletter</h3>
          </div>
          <p className="newsletter-text">...and receive $20 coupon on next shopping</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" className="email-input" />
            <button className="subscribe-button">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-container">
          {/* Info Column */}
          <div className="footer-column">
            <h4 className="column-title">Info</h4>
            <div className="info-content">
              <div className="address-block">
                <i className="location-icon"></i>
                <div>
                  <p>Acme Widgets</p>
                  <p>123 Widget Street</p>
                  <p>Acmeville, AC 12345</p>
                  <p>United States of America</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="email-icon"></i>
                <a href="mailto:support@yourstore.com">support@yourstore.com</a>
              </div>
              <div className="contact-item">
                <i className="phone-icon"></i>
                <a href="tel:9876543210" className="phone-number">
                  9876543210
                </a>
              </div>
            </div>
          </div>

          {/* Navigate Column */}
          <div className="footer-column">
            <h4 className="column-title">Navigate</h4>
            <div className="two-column-links">
              <ul className="footer-links-list">
                <li>
                  <a href="#">Specials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Our Blogs</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
              <ul className="footer-links-list">
                <li>
                  <a href="#">About As</a>
                </li>
                <li>
                  <a href="#">Affiliate</a>
                </li>
                <li>
                  <a href="#">Gift Certificates</a>
                </li>
                <li>
                  <a href="#">Delivery Information</a>
                </li>
                <li>
                  <a href="#">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Categories Column */}
          <div className="footer-column">
            <h4 className="column-title">Categories</h4>
            <div className="two-column-links">
              <ul className="footer-links-list">
                <li>
                  <a href="#">Shop All</a>
                </li>
                <li>
                  <a href="#">Computers</a>
                </li>
                <li>
                  <a href="#">Beagle</a>
                </li>
                <li>
                  <a href="#">Barbet</a>
                </li>
                <li>
                  <a href="#">Ipods</a>
                </li>
                <li>
                  <a href="#">Gadgets</a>
                </li>
                <li>
                  <a href="#">Mouse</a>
                </li>
                <li>
                  <a href="#">Cameras</a>
                </li>
              </ul>
              <ul className="footer-links-list">
                <li>
                  <a href="#">Laptop</a>
                </li>
                <li>
                  <a href="#">Speakers</a>
                </li>
                <li>
                  <a href="#">Basenji</a>
                </li>
                <li>
                  <a href="#">Tablets</a>
                </li>
                <li>
                  <a href="#">Laptop Stand</a>
                </li>
                <li>
                  <a href="#">Cell Phones</a>
                </li>
                <li>
                  <a href="#">Video Games</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Brands Column */}
          <div className="footer-column">
            <h4 className="column-title">Popular Brands</h4>
            <div className="brands-container">
              <a href="#" className="brand-tag">
                Shoppe Fabs
              </a>
              <a href="#" className="brand-tag">
                Mountain Climbing
              </a>
              <a href="#" className="brand-tag">
                Premium Quality
              </a>
              <a href="#" className="brand-tag">
                Summer Camping
              </a>
              <a href="#" className="brand-tag">
                Wintage Spoon
              </a>
              <a href="#" className="brand-tag">
                Foodzone
              </a>
              <a href="#" className="brand-tag">
                Walking Dreams
              </a>
              <a href="#" className="brand-tag">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="footer-divider"></div>

      {/* Payment and Features Section */}
      <div className="payment-features-section">
        <div className="payment-features-container">
          {/* Payment Methods */}
          <div className="payment-methods">
            <img src="data:image/png;base64,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" alt="American Express" className="payment-icon" />
            <img src="data:image/png;base64,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" alt="Discover" className="payment-icon" />
            <img src="data:image/png;base64,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" alt="Mastercard" className="payment-icon" />
            <img src="data:image/png;base64,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" alt="PayPal" className="payment-icon" />
          </div>

          {/* Features */}
          <div className="feature-item">
            <i className="plane-icon"></i>
            <span>Free Shipping</span>
          </div>

          <div className="feature-item">
            <i className="support-icon"></i>
            <span>24/7 Free Support</span>
          </div>

          <div className="feature-item">
            <i className="discount-icon"></i>
            <span>Daily Discount</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <div className="copyright-container">
          <p>Powered by BigCommerce © 2025 PayeeShop</p>
        </div>
      </div>

      {/* Back to top button */}
      <div className="back-to-top-container">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="back-to-top-button"
          aria-label="Back to top"
        >
          <span className="arrow-up"></span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
