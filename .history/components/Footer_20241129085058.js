import React from "react";
import "./Footer.css"; // Link to your CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace with the actual logo */}
          <img src="your-logo.png" alt="Logo" className="logo-icon" />
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <span className="contact-icon">📞</span> 604-434-1610
          </p>
          <p>
            <span className="contact-icon">📧</span> Goldibite@gmail.com
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>
            <span className="social-icon">📸</span> Instagram
          </p>
          <p>
            <span className="social-icon">✍</span> Blog
          </p>
        </div>
      </div>
    </footer>
  );
}
