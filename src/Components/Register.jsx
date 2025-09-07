"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Register.css"

const Register = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    subscribe: false,
  })

  // Error state
  const [errors, setErrors] = useState({})
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    // Required fields
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "password",
      "confirmPassword",
      "address1",
      "city",
      "state",
      "zipCode",
      "country",
    ]

    requiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "This field is required"
      }
    })

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Password validation
    if (formData.password && formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    // Password confirmation
    if (formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    // Phone validation (optional field)
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    // Zip code validation
    if (formData.zipCode && !/^\d{6}$/.test(formData.zipCode.replace(/[^0-9]/g, ""))) {
      newErrors.zipCode = "Please enter a valid 6-digit zip code"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted successfully:", formData)
      // Here you would typically make an API call to register the user
      alert("Registration successful! You can now sign in.")
      // Redirect to sign in page or show success message
    } else {
      // Scroll to the first error
      const firstError = document.querySelector(".error-message")
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }
  }

  return (
    <div className="register-container">
      <div className="register-header">
        <h1 className="register-title">Create Account</h1>
        <div className="orange-underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-section">
          <h2 className="section-title">Account Details</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                First Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={formSubmitted && errors.firstName ? "input-error" : ""}
              />
              {formSubmitted && errors.firstName && <div className="error-message">{errors.firstName}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={formSubmitted && errors.lastName ? "input-error" : ""}
              />
              {formSubmitted && errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formSubmitted && errors.email ? "input-error" : ""}
              />
              {formSubmitted && errors.email && <div className="error-message">{errors.email}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={formSubmitted && errors.phone ? "input-error" : ""}
                placeholder="Optional"
              />
              {formSubmitted && errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={formSubmitted && errors.password ? "input-error" : ""}
              />
              {formSubmitted && errors.password && <div className="error-message">{errors.password}</div>}
              <div className="password-hint">Password must be at least 8 characters long</div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">
                Confirm Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={formSubmitted && errors.confirmPassword ? "input-error" : ""}
              />
              {formSubmitted && errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>
        </div>

        <div className="form-section">
          <h2 className="section-title">Address</h2>

          <div className="form-group">
            <label htmlFor="address1">
              Address Line 1 <span className="required">*</span>
            </label>
            <input
              type="text"
              id="address1"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              className={formSubmitted && errors.address1 ? "input-error" : ""}
            />
            {formSubmitted && errors.address1 && <div className="error-message">{errors.address1}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="address2">Address Line 2</label>
            <input
              type="text"
              id="address2"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Optional"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={formSubmitted && errors.city ? "input-error" : ""}
              />
              {formSubmitted && errors.city && <div className="error-message">{errors.city}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="state">
                State/Province <span className="required">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={formSubmitted && errors.state ? "input-error" : ""}
              />
              {formSubmitted && errors.state && <div className="error-message">{errors.state}</div>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="zipCode">
                Zip/Postal Code <span className="required">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={formSubmitted && errors.zipCode ? "input-error" : ""}
              />
              {formSubmitted && errors.zipCode && <div className="error-message">{errors.zipCode}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="country">
                Country <span className="required">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={formSubmitted && errors.country ? "input-error" : ""}
              >
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Japan">Japan</option>
                <option value="China">China</option>
                <option value="Brazil">Brazil</option>
              </select>
              {formSubmitted && errors.country && <div className="error-message">{errors.country}</div>}
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">Subscribe to our newsletter for exclusive offers and updates</label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="create-account-button">
            Create Account
          </button>
          <div className="login-link">
            Already have an account? <Link to="/signin">Sign in</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
