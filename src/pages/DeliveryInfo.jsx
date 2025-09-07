import "./DeliveryInfo.css"

const DeliveryInformation = () => {
  return (
    <div className="delivery-information-container">
      <h1 className="page-title">Delivery Information</h1>
      <div className="orange-underline"></div>

      <div className="section">
        <h2 className="section-title">UK Orders</h2>

        <p className="info-text">
          Standard shipping is at a flat rate of £3.25 applies to all orders less than £30. Shipping is{" "}
          <span className="highlight">FREE</span> for all orders over £30. Orders received before 9am usually ship the
          same day and are delivered by Royal Mail 2nd Class.
        </p>

        <p className="info-text">
          Express shipping is at a flat rate of £8 for all orders. Orders received before 9am usually ship the same day
          and are delivered by Royal Mail Special Delivery, guaranteed before 1pm the next working day (excludes
          Saturday).
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">European Orders</h2>

        <p className="info-text">
          Standard shipping at a flat rate of £9 applies to all orders less than £30. A reduced shipping rate of £6
          applies to all orders over £30. Orders received before 9am usually ship the same day and are delivered by your
          local postal service via Royal Mail International Signed For.
        </p>
      </div>
    </div>
  )
}

export default DeliveryInformation
