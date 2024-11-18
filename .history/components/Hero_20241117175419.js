// components/Hero.js
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="imageWrapper">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="overlay">
          <h1>Basketball Skills Program</h1>
          <p>Enhance your skills and reach your potential!</p>
          <a href="#cta" className="ctaButton">
            Start Today
          </a>
        </div>
      </div>
    </section>
  );
}
