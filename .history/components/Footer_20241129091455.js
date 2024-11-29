import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace with the actual logo */}
          <Image
              src="/images/logo.webp"
              alt="Goldibite Logo"
              width={50}
              height={50}
            />
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
