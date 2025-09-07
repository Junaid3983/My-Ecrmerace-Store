import { useRef } from "react";
import "./LatestBlogs.css";

const LatestBlog = ({ blogs }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="latest-blog">
      <div className="latest-blog-header">
        <h2>Latest Blog</h2>
        <div className="latest-blog-buttons">
          <button onClick={scrollLeft}>❮</button>
          <button onClick={scrollRight}>❯</button>
        </div>
      </div>

      <div className="latest-blog-container" ref={scrollRef}>
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <div className="blog-meta">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;