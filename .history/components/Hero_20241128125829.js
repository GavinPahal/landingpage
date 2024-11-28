import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="imageWrapper">
        <div className="imageContainer">
          <Image
            src="/images/grocey.jpg"
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
            <span className="bestNature">YOUR BUDDY FOR</span>
            <span className="appEver">FOOD SAFETY</span>
          </p>
          <p className="subTagline">
            <span className="demoText">Get a demo and try our new app.</span>
            <span className="natureText">
            The Right Bite, Every Time
            </span>
          </p>
          <a href="#demo" className="ctaButton">
            GET A DEMO
          </a>
        </div>
      </div>

      
      <div className="rightImageWrapper">
        <div className="rightImageContainer">
          <Image
            src="/images/phone.png"
            alt="New Image"
            layout="intrinsic"
            width={500} 
            height={500} 
          />
        </div>
      </div>
    </section>
  );
}
