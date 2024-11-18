import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <section className="heroSection">
        <div className="imageContainer">
          <Image 
            src="/images/hero-image.jpg" // Replace with your image
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
          <div className="overlay">
            <h1>Welcome to Our Landing Page</h1>
            <p>Discover amazing offers and get started today!</p>
          </div>
        </div>
      </section>
      <section className="contentSection">
        <h2>More Information</h2>
        <p>This is a simple landing page with overlay information on images.</p>
      </section>
    </div>
  );
}
