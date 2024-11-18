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
              width={50}
              height={50}
            />
            <h1>Goldibite</h1>
          </div>
          <p className="tagline">
            <span className="bestNature">BEST HEALTH</span>
            <span className="appEver">APP EVER</span>
          </p>
          <p className="subTagline">
            <span className="demoText">Get a demo and try our new app.</span>
            <span className="natureText">
              Get in touch with nature like you never did before.
            </span>
          </p>
          <a href="#demo" className="ctaButton">
            GET A DEMO
          </a>
        </div>
      </div>

      {/* New Image on the right side */}
      <div className="rightImageWrapper">
        <div className="rightImageContainer">
          <Image
            src="/images/phone.png" // Replace with your image path
            alt="New Image"
            layout="intrinsic"
            width={500} // Adjust the width based on your preference
            height={500} // Adjust the height based on your preference
          />
        </div>
      </div>
    </section>
  );
}
