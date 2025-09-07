"use client"
import React from 'react';
import { Share, Printer, Facebook, Mail, Twitter, Linkedin } from 'lucide-react';
import "./Blogs.css";

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs-container">
      <h1 className="blogs-title">
        Our Blogs
        <span className="title-underline"></span>
      </h1>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <div className="blog-image-container">
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="blog-image"
              />
              <div className="blog-date-badge">
                {blog.date}
              </div>
            </div>

            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-author">
                {blog.author} on {blog.date}
              </p>
              <p className="blog-description">{blog.description}</p>
              <a href="#" className="read-more-link">
                Read More
              </a>

              <div className="social-icons">
                <button className="social-icon">
                  <Facebook size={18} />
                </button>
                <button className="social-icon">
                  <Mail size={18} />
                </button>
                <button className="social-icon">
                  <Printer size={18} />
                </button>
                <button className="social-icon">
                  <Twitter size={18} />
                </button>
                <button className="social-icon">
                  <Linkedin size={18} />
                </button>
                <button className="social-icon">
                  <Share size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
