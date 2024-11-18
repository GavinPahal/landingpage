import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="imageWrapper">
        <Image
          src="/images/till-rottmann-sSv8BwFBqrU-unsplash.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          width={100}
          height={100}
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
