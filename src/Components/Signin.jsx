"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "./Signin.css"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Handle sign-in logic here
    console.log("Signing in with:", email, password)
    alert("Sign-in successful!")
  }

  return (
    <div className="sign-in-container">
      <div className="sign-in-header">
        <h1 className="sign-in-title">Sign In</h1>
        <div className="orange-underline"></div>
      </div>

      <div className="sign-in-content">
        <div className="sign-in-form-container">
          <form onSubmit={handleSubmit} className="sign-in-form">
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="sign-in-button">
                Sign in
              </button>
              <Link to="/forgot-password" className="forgot-password-link">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>

        <div className="new-customer-container">
          <h2 className="new-customer-title">New Customer?</h2>
          <p className="new-customer-text">Create an account with us and you'll be able to:</p>
          <ul className="benefits-list">
            <li>Check out faster</li>
            <li>Save multiple shipping addresses</li>
            <li>Access your order history</li>
            <li>Track new orders</li>
            <li>Save items to your Wish List</li>
          </ul>
          <Link to="/register" className="create-account-button">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn