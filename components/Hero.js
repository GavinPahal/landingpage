import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} >
      <div  className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/grocey.jpg"
            alt="Nature Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.overlay}>
          <div className={styles.heroTitle}> 
            <Image
              src="/images/logo.webp"
              alt="Goldibite Logo"
              width={50}
              height={50}
            />
            <h1>Goldibite</h1>
          </div>
          <p className={styles.tagline}> 
            <span className="bestNature">YOUR BUDDY FOR</span>
            <span className="appEver">FOOD SAFETY</span>
          </p>
          <p className={styles.subTagline}>  
            <span className="demoText">Get a demo and try our new app.</span>
            <span className="natureText">The Right Bite, Every Time</span>
          </p>
          <a href="#demo" className={styles.ctaButton}> 
            TRY DEMO
          </a>
        </div>
      </div>

      <div className={styles.rightImageWrapper}>  
        <div className={styles.rightImageContainer}> 
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
