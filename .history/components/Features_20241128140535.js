import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <div className="infoCards">
        <div className="text1">
          <Image
            src="/images/iconamoon_scanner (1).jpg"
            alt="Feature 1"
            width={150}
            height={150}
          />
          <h3>Scan the Product</h3>
          <p>This step allows users to quickly and effortlessly scan a product's barcode or packaging using the app.
             It eliminates the need for extensive research by instantly gathering all relevant ingredient and allergen information. </p>
        </div>
        <div className="text2">
          <Image
            src="/images/magnifying.jpg"
            alt="Feature 2"
            width={150}
            height={150}
          />
          <h3>Get the Results</h3>
          <p>After scanning, the app delivers comprehensive results, including allergen warnings, potential cross-contamination risks,
             and an assessment of the product's suitability based on the user's specific dietary needs and sensitivities.
          </p>
        </div>
        <div className="card">
          <Image
            src="/images/Confident.jpg"
            alt="Feature 2"
            width={150}
            height={150}
          />
          <h2>Enjoy With Confidence</h2>
          <p>With the results, users can confidently make safe food choices, whether dining out or shopping,
             ensuring worry-free meals and travel experiences.
          </p>
        </div>
      </div>
      
    </section>
  );
}
