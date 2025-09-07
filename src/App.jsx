import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Carousel from './Components/carousel';
import CardCarousel from './Components/cardcarousel';
import FeaturedProducts from './Components/FeatureProduct';
import PromoCards from './Components/PromoCards';
import NewProducts from './Components/Newproduct'; // Import NewProducts
import PromoCard2 from './Components/promocard2';
import BestSeller from './Components/BestSeller'; // Import BestSeller
import LatestBlog from './Components/LatestBlogs';
import Affiliate from './pages/Affiliate';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Specials from './pages/Special';
import Blogs from './pages/Blogs';
import ShippingReturn from './pages/ShippingReturn';
import GiftCertificate from './pages/GiftCertificate';
import DeliveryInfo from './pages/DeliveryInfo';
import TermsConditions from './pages/TermsConditions';
import SignIn from './Components/Signin';
import Register from './Components/Register';
import CartDetails from './Components/CartDetails';
import HeartProducts from './Components/heartProducts';

function App() {
  // Centralized blog data
  const blogData = [
    {
      id: 1,
      title: "How to Choose the Best Electronics",
      description: "Learn how to pick the best gadgets for your needs.",
      image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/300x300/uploaded_images/blog-01.jpg",
      author: "Admin",
      date: "1st Jan 2025",
    },
    {
      id: 2,
      title: "Top 10 Gadgets of 2025",
      description: "Discover the top gadgets that are trending this year.",
      image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/300x300/uploaded_images/blog-02.jpg",
      author: "John Doe",
      date: "5th Jan 2025",
    },
    {
      id: 3,
      title: "The Future of Smart Homes",
      description: "Explore how smart homes are evolving in 2025.",
      image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/300x300/uploaded_images/blog-03.jpg",
      author: "Jane Smith",
      date: "10th Jan 2025",
    },
    {
      id: 4,
      title: "Best Budget-Friendly Devices",
      description: "Affordable gadgets that deliver great performance.",
      image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/300x300/uploaded_images/blog-04.jpg",
      author: "Admin",
      date: "15th Jan 2025",
    },
    {
      id: 5,
      title: "Tech Trends to Watch in 2025",
      description: "Stay ahead with the latest tech trends.",
      image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/300x300/uploaded_images/blog-05.jpg",
      author: "Tech Guru",
      date: "20th Jan 2025",
    },
  ];

  // Shared state for cart count and cart items
  const [cartCount, setCartCount] = useState(0); // Tracks the number of items in the cart
  const [cartItems, setCartItems] = useState([]); // Tracks the items in the cart
  const [heartProducts, setHeartProducts] = useState([]); // Tracks the favorite products

  // Function to handle adding items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // Add the product to the cart
    setCartCount((prevCount) => prevCount + 1); // Increment the cart count
  };

  // Function to handle adding items to favorites
  const addToHeart = (product) => {
    setHeartProducts((prevItems) => [...prevItems, product]); // Add the product to favorites
    console.log("Added to favorites:", product); // Debugging log
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} cartItems={cartItems} /> {/* Pass cartCount and cartItems */}
      <Routes>
        {/* Default Home Page: Show all sections */}
        <Route
          path="/"
          element={
            <div>
              <Carousel />
              <CardCarousel />
              <FeaturedProducts addToCart={addToCart} addToHeart={addToHeart} /> {/* Pass addToCart and addToHeart */}
              <PromoCards />
              <NewProducts addToCart={addToCart} addToHeart={addToHeart} /> {/* Pass addToCart and addToHeart */}
              <PromoCard2 />
              <BestSeller addToCart={addToCart} addToHeart={addToHeart} /> {/* Pass addToCart and addToHeart */}
              <LatestBlog blogs={blogData} />
            </div>
          }
        />
        {/* Individual Pages */}
        <Route path="/specials" element={<Specials />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/blogs" element={<Blogs blogs={blogData} />} />
        <Route path="/shipping-return" element={<ShippingReturn />} />
        <Route path="/gift-certificate" element={<GiftCertificate />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart-details" element={<CartDetails cartItems={cartItems} />} /> {/* Add CartDetails route */}
        <Route
          path="/heart-products"
          element={<HeartProducts heartProducts={heartProducts} />} // Pass heartProducts as a prop
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;