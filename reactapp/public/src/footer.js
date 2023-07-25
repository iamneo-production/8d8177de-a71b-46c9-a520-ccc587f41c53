import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

function Footer() {
  return (
    <footer className="insurance-footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Protecting Your Future, One Policy at a Time</h3>
        <p>Your Trusted Insurance Partner</p>
      </div>
      <div className="footer-section">
        <h4>Contact Information</h4>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="footer-section">
        <h4>Address</h4>
        <p>123 Insurance Street</p>
        <p>City, State 12345</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer