import React, { useState, useEffect } from "react";
import "./CardCarousel.css";

const cards = [
  {
    id: 1,
    name: "Shop All",
    items: 10,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/p/category-img-06__37886.original.jpg",
  },
  {
    id: 2,
    name: "Laptop",
    items: 5,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/v/category-img-01__58748.original.jpg",
  },
  {
    id: 3,
    name: "Speaker",
    items: 8,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/e/category-img-02__12056.original.jpg",
  },
  {
    id: 4,
    name: "Computers",
    items: 12,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/i/category-img-04__86929.original.jpg",
  },
  {
    id: 5,
    name: "Beagle",
    items: 6,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/c/category-img-05__65253.original.jpg",
  },
  {
    id: 6,
    name: "Basenji",
    items: 4,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/images/stencil/original/l/category-img-03__88208.original.jpg",
  },
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const visibleCards = [
    cards[currentIndex % cards.length],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
    cards[(currentIndex + 3) % cards.length],
  ];

  return (
    <div
      className="card-carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {visibleCards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-content">
            <h3>{card.name}</h3>
            <p>{card.items} items</p>
          </div>
          <img src={card.image} alt={card.name} className="card-image" />
        </div>
      ))}
    </div>
  );
};

export default CardCarousel;
