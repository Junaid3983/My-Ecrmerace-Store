import "./promocard2.css"

const PromoCard2 = () => {
  return (
    <div className="promo-cards-container">
      {/* First promo card - just a clickable image */}
      <a href="#" className="promo-card-link">
        <div className="promo-card">
          <img
            src="https://cdn11.bigcommerce.com/s-xfjb6c0wb4/product_images/uploaded_images/bottom-banner-01.jpg"
            alt="iMac Best Sale"
            className="promo-image"
          />
        </div>
      </a>

      {/* Second promo card - just a clickable image */}
      <a href="#" className="promo-card-link">
        <div className="promo-card">
          <img
            src="https://cdn11.bigcommerce.com/s-xfjb6c0wb4/product_images/uploaded_images/bottom-banner-02.jpg"
            alt="Google Gear VR"
            className="promo-image"
          />
        </div>
      </a>
    </div>
  )
}

export default PromoCard2
