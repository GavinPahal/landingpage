import Image from 'next/image';
import styles from '../styles/global.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/hero-image.jpg" // Replace with your image
            alt="Hero Image"
            layout="fill" // Ensures image covers the area
            objectFit="cover" // Covers entire container without stretching
          />
          <div className={styles.overlay}>
            <h1>Welcome to Our Landing Page</h1>
            <p>Discover amazing offers and get started today!</p>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <h2>More Information</h2>
        <p>This is a simple landing page with overlay information on images.</p>
      </section>
    </div>
  );
}
