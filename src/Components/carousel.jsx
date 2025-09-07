import React, { useState, useEffect } from "react";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/carousel/13/slider-02__42161.jpg?c=1",
    alt: "Image 1",
  },
  {
    id: 2,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/carousel/15/slider-04__97090.jpg?c=1",
    alt: "Image 2",
  },
  {
    id: 3,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/carousel/12/slider-01__80936.jpg?c=1",
    alt: "Image 3",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // State to track if the carousel is paused

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-change images every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [isPaused]); // Re-run effect when `isPaused` changes

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
    >
      <div className="carousel-slide">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].alt}
          className="carousel-image"
        />
      <button className="carousel-button prev" onClick={handlePrev}>
  &lt; {/* Less-than sign */}
</button>
<button className="carousel-button next" onClick={handleNext}>
  &gt; {/* Greater-than sign */}
</button>
      </div>
    </div>
  );
};

export default Carousel;