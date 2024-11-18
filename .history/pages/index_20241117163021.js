// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section with Image and Overlay */}
      <section className="heroSection">
        <div className="imageContainer">
          <Image 
            src="/images/hero-image.jpg" // Replace with your hero image
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="overlay">
            <h1>Transform Your Basketball Skills</h1>
            <p>Join our program and elevate your game</p>
            <a href="#cta" className="ctaButton">Get Started</a>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="infoSection">
        <h2>Why Choose Us?</h2>
        <div className="infoCards">
          <div className="card">
            <Image src="/images/feature1.jpg" alt="Feature 1" width={400} height={300} />
            <h3>Expert Coaching</h3>
            <p>Learn from the best in the game with personalized coaching.</p>
          </div>
          <div className="card">
            <Image src="/images/feature2.jpg" alt="Feature 2" width={400} height={300} />
            <h3>Proven Results</h3>
            <p>Our program has helped thousands of players improve their skills.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="ctaSection">
        <h2>Ready to Get Started?</h2>
        <p>Take the first step toward improving your game.</p>
        <a href="#signup" className="ctaButton">Sign Up Now</a>
      </section>

      {/* Footer Section */}
      <footer className="footerSection">
        <p>&copy; 2024 Basketball Skills Program | All Rights Reserved</p>
      </footer>
    </div>
  );
}
