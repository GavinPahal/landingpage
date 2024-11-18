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
          <div className="taglineContainer">
            <p className="taglineLine1">Our App Is A</p>
            <p className="taglineLine2">Barcode Scanner</p>
            <p className="taglineLine3">To Check Your Needs</p>
          </div>
          <p>
            Get a demo and try our new app. Scan barcodes and instantly find
            the products you need. Simplify your shopping experience today.
          </p>
          <a href="#demo" className="ctaButton">
            GET A DEMO
          </a>
        </div>
      </div>
    </section>
  );
}
