import React from 'react';
import './PromoCards.css';

const cards = [
  {
    id: 1,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/product_images/uploaded_images/top-banner-01.jpg",
    link: "#"
  },
  {
    id: 2,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/product_images/uploaded_images/top-banner-02.jpg",
    link: "#"
  },
  {
    id: 3,
    image: "https://cdn11.bigcommerce.com/s-xfjb6c0wb4/product_images/uploaded_images/top-banner-03.jpg",
    link: "#"
  }
];

export const PromoCards = () => {
  return (
    <div className="promo-cards-container">
      {cards.map((card) => (
        <a 
          key={card.id} 
          href={card.link}
          className="promo-card"
        >
          <img 
            src={card.image} 
            alt="Promotional banner" 
            className="promo-image" 
          />
        </a>
      ))}
    </div>
  );
};

export default PromoCards