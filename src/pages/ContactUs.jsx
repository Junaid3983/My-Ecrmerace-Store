import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    orderNumber: '',
    companyName: '',
    rmaNumber: '',
    comments: '',
  });

  const [errors, setErrors] = useState({
    phoneNumber: false,
    email: false,
    comments: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Set error if the field is required and empty
    if ((name === 'phoneNumber' || name === 'email' || name === 'comments') && !value) {
      setErrors({ ...errors, [name]: true });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (!formData.email || !formData.phoneNumber || !formData.comments) {
      setErrors({
        phoneNumber: !formData.phoneNumber,
        email: !formData.email,
        comments: !formData.comments,
      });
      alert('Please fill out all required fields.');
      return;
    }

    // Display success alert
    alert('Form submitted successfully!');

    // Clear form fields
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      orderNumber: '',
      companyName: '',
      rmaNumber: '',
      comments: '',
    });

    // Clear errors
    setErrors({
      phoneNumber: false,
      email: false,
      comments: false,
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We’re happy to answer questions or help you with returns.<br />
        Please fill out the form below if you need assistance.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number <span className="required">REQUIRED</span></label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.phoneNumber ? 'error' : ''}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email Address <span className="required">REQUIRED</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email ? 'error' : ''}
              required
            />
          </div>
          <div className="form-group">
            <label>Order Number</label>
            <input
              type="text"
              name="orderNumber"
              value={formData.orderNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>RMA Number</label>
            <input
              type="text"
              name="rmaNumber"
              value={formData.rmaNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            Comments/Questions <span className="required">REQUIRED</span>
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.comments ? 'error' : ''}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Submit Form</button>
      </form>
    </div>
  );
};

export default ContactUs;