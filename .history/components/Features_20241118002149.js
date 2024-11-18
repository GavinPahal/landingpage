// components/Features.js
import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <h2>Core Values</h2>
      <div className="infoCards">
        <div className="card">
          <Image
            src="/images/emergency.png"
            alt="Feature 1"
            width={75}
            height={75}
          />
          <h3>Safety</h3>
          <p> GoldiBite places extensive significance on user safety by offering quick assistance in the case of food reactions, 
            ensuring that users can respond effectively to any situation. </p>
        </div>
        <div className="card">
          <Image
            src="/images/usability.png"
            alt="Feature 2"
            width={75}
            height={75}
          />
          <h3>Usability</h3>
          <p>Many food safety apps fail in user-friendliness. GoldiBite is designed to be as intuitive as possible, 
            ensuring that everyone can easily manage and access the information they need for their food allergies and sensitivities,
          </p>
        </div>
        <div className="card">
          <Image
            src="/images/usability.png"
            alt="Feature 2"
            width={400}
            height={300}
          />
          <h3>Accessible to all features</h3>
          <p>Our app empowers users with the tools and information they need to make safe food choices,
             especially when dining out or in unfamiliar environments. With GoldiBite, users can travel freely and confidently.

          </p>
        </div>
        <div className="card">
          <Image
            src="/images/feature2.jpg"
            alt="Feature 2"
            width={400}
            height={300}
          />
          <h3>Global Portability</h3>
          <p> GoldiBite features are designed to be useful in as many countries as possible,
             providing localized information based on the user's location, such as emergency hotlines and local allergen regulations.

          </p>
        </div>
        
      </div>
      
    </section>
  );
}
