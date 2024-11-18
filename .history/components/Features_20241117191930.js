// components/Features.js
import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <h2>Core Values</h2>
      <div className="infoCards">
        <div className="card">
          <Image
            src="/images/feature1.jpg"
            alt="Feature 1"
            width={400}
            height={300}
          />
          <h3>Safety</h3>
          <p> GoldiBite places extensive significance on user safety by offering quick assistance in the case of food reactions, ensuring that users can respond effectively to any situation. </p>
        </div>
        <div className="card">
          <Image
            src="/images/feature2.jpg"
            alt="Feature 2"
            width={400}
            height={300}
          />
          <h3>Proven Results</h3>
          <p>We deliver exceptional results for our students.</p>
        </div>
      </div>
    </section>
  );
}
