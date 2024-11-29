import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
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
            <Image
              src="/images/phone-call.png"
              alt="Phone Icon"
              width={20}
              height={20}
              className="contact-icon"
            />
            604-434-1610
          </p>
          <p>
            <Image
              src="/images/Email.jpg"
              alt="Email Icon"
              width={20}
              height={20}
              className="contact-icon"
            />
            Goldibite@gmail.com
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>
            <Image
              src="/images/Instagram.jpg"
              alt="Instagram Icon"
              width={20}
              height={20}
              className="social-icon"
            />
            Instagram
          </p>
          <p>
            <Image
              src="/images/Blog.jpg"
              alt="Blog Icon"
              width={20}
              height={20}
              className="social-icon"
            />
            Blog
          </p>
        </div>
      </div>
    </footer>
  );
}
