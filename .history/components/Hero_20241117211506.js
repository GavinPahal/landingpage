import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="imageWrapper">
        <div className="imageContainer">
          <Image
            src="/images/Forrest.jpg"
            alt="Nature Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="overlay">
          <div className="heroTitle">
            <Image
              src="/images/logo.webp"
              alt="Goldibite Logo"
              width={50} // Adjust size as needed
              height={50}
            />
            <h1>Goldibite</h1>
          </div>
          <p className="tagline">BEST NATURE APP EVER</p>
          <p>
            Get a demo and try our new app. Get in touch with nature like you
            never did before.
          </p>
          <a href="#demo" className="ctaButton">
            GET A DEMO
          </a>
        </div>
      </div>
    </section>
  );
}
