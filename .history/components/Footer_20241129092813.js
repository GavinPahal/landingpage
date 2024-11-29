import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#" aria-label="Goldibite Home">
            <Image
              src="/images/logo.webp"
              alt="Goldibite Logo"
              width={50}
              height={50}
            />
          </a>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <a href="tel:6044341610" aria-label="Call Goldibite">
              <Image
                src="/images/phone-call.png"
                alt="Phone Icon"
                width={20}
                height={20}
                className="contact-icon"
              />
              604-434-1610
            </a>
          </p>
          <p>
            <a href="mailto:Goldibite@gmail.com" aria-label="Email Goldibite">
              <Image
                src="/images/email.png"
                alt="Email Icon"
                width={20}
                height={20}
                className="contact-icon"
              />
              Goldibite@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Goldibite Instagram"
            >
              <Image
                src="/images/social-media.png"
                alt="Instagram Icon"
                width={20}
                height={20}
                className="social-icon"
              />
              Instagram
            </a>
          </p>
          <p>
            <a href="/blog" aria-label="Goldibite Blog">
              <Image
                src="/images/blog.png"
                alt="Blog Icon"
                width={20}
                height={20}
                className="social-icon"
              />
              Blog
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
