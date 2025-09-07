"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import {
  FaRegHeart,
  FaRegUser,
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaChevronDown,
  FaWhatsapp,
  FaChevronRight,
  FaPlus,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = ({ cartCount }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  // Close dropdowns when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest(".categories-container") && !e.target.closest(".categories-button")) {
      setIsCategoriesOpen(false);
    }
    if (!e.target.closest(".user-dropdown-container")) {
      setIsUserDropdownOpen(false);
    }
  };

  // Add event listener for clicking outside
  useState(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Top Row */}
      <div className="navbar-top">
        {/* Logo */}
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input type="text" placeholder="Search the store" />
          <button className="search-button">
            <FaSearch /> Search
          </button>
        </div>

        {/* WhatsApp Contact */}
        <div className="whatsapp-contact">
          <FaWhatsapp className="whatsapp-icon" />
          <div className="contact-info">
            <span className="contact-label">Whatsapp:</span>
            <a href="https://wa.me/03485589287" target="_blank" rel="noopener noreferrer" className="contact-number">
              03485589287
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="navbar-bottom">
        {/* Shop by Categories Button */}
        <div className="categories-container">
          <button className="categories-button" onClick={toggleCategories}>
            <FaBars className="menu-icon" /> SHOP BY CATEGORIES
          </button>

          {isCategoriesOpen && (
            <div className="categories-dropdown">
              <ul className="categories-menu">
                <li className="category-item">
                  <Link to="/shop-all">
                    <FaChevronRight className="category-icon" /> Shop All
                  </Link>
                </li>
                <li className="category-item has-submenu">
                  <Link to="/laptop">
                    <FaChevronRight className="category-icon" /> Laptop
                    <FaChevronDown className="submenu-indicator" />
                  </Link>
                </li>
                <li className="category-item">
                  <Link to="/computers">
                    <FaChevronRight className="category-icon" /> Computers
                  </Link>
                </li>
                <li className="category-item has-submenu">
                  <Link to="/speakers">
                    <FaChevronRight className="category-icon" /> Speakers
                    <FaChevronDown className="submenu-indicator" />
                  </Link>
                </li>
                <li className="category-item">
                  <Link to="/tablets">
                    <FaChevronRight className="category-icon" /> Tablets
                  </Link>
                </li>
                <li className="category-item">
                  <Link to="/ipods">
                    <FaChevronRight className="category-icon" /> Ipods
                  </Link>
                </li>
                <li className="category-item more-item">
                  <Link to="/more-categories">
                    <FaPlus className="category-icon" /> More
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/specials">Specials</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/affiliate">Affiliate</Link>
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="#">
              More <FaChevronDown className="dropdown-icon" />
            </a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blogs">Our Blogs</Link>
                </li>
                <li>
                  <Link to="/shipping-return">Shipping & Return</Link>
                </li>
                <li>
                  <Link to="/gift-certificate">Gift Certificate</Link>
                </li>
                <li>
                  <Link to="/delivery-info">Delivery Information</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* Icons */}
        <div className="icon-container">
          <Link to="/heart-products" className="icon-link"> {/* Navigate to heart-products */}
            <FaRegHeart className="icon" title="Wishlist" />
          </Link>
          <div className="user-dropdown-container">
            <a
              href="#"
              className="icon-link"
              onClick={(e) => {
                e.preventDefault();
                toggleUserDropdown();
              }}
            >
              <FaRegUser className="icon" title="Account" />
            </a>
            {isUserDropdownOpen && (
              <div className="user-dropdown-menu">
                <div className="user-dropdown-item">
                  <i className="dropdown-item-icon fas fa-lock"></i>
                  <Link to="/signin">Sign in</Link>
                </div>
                <div className="user-dropdown-item">
                  <i className="dropdown-item-icon fas fa-user"></i>
                  <Link to="/register">Register</Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart-details" className="icon-link cart-icon-container">
            <FaShoppingCart className="icon" title="Cart" />
            <span className="cart-count">{cartCount}</span> {/* Display dynamic cart count */}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="navbar-divider"></div>
    </nav>
  );
};

export default Navbar;