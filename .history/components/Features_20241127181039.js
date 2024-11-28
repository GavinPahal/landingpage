import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <div className="infoCards">
        <div className="card">
          <Image
            src="/images/security.png"
            alt="Feature 1"
            width={75}
            height={75}
          />
          <h3>Scan the Product</h3>
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
          <h3>Get the Results</h3>
          <p>After scanning, the app delivers comprehensive results, including allergen warnings, potential cross-contamination risks,
             and an assessment of the product's suitability based on the user's specific dietary needs and sensitivities.
          </p>
        </div>
        <div className="card">
          <Image
            src="/images/accessibility.png"
            alt="Feature 2"
            width={75}
            height={75}
          />
          <h3>Enjoy With Confidence</h3>
          <p>With the results, users can confidently make safe food choices, whether dining out or shopping,
             ensuring worry-free meals and travel experiences.
          </p>
        </div>
        <div className="card">
          <Image
            src="/images/globe.png"
            alt="Feature 2"
            width={75}
            height={75}
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
