import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      {/* Mission Statement Section */}
      <section class="missionStatement">
  <h1>Mission Statement</h1>
  <p>
    Our mission is to empower travelers with food allergies and sensitivities by providing a user-friendly, globally accessible app that ensures safety, confidence, and convenience when navigating food choices in unfamiliar environments.
  </p>
</section>


      <div className="infoCards">
        {/* Feature 1 */}
        <div className="card">
          <div className="iconWrapper">
            <Image
              src="/images/iconamoon_scanner (2).svg"
              alt="Feature 1"
              width={130}
              height={130}
            />
          </div>
          <h3>Scan the Product</h3>
          <p>
            Quickly scan a product's barcode or packaging using the app, instantly gathering all relevant ingredient and allergen information.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="card">
          <div className="iconWrapper">
            <Image
              src="/images/magnifying.jpg"
              alt="Feature 2"
              width={130}
              height={130}
            />
          </div>
          <h3>Get the Results</h3>
          <p>
            Receive comprehensive results, including allergen warnings, cross-contamination risks, and suitability assessments for your dietary needs.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="card">
          <div className="iconWrapper">
            <Image
              src="/images/Confident.jpg"
              alt="Feature 3"
              width={130}
              height={130}
            />
          </div>
          <h3>Enjoy With Confidence</h3>
          <p>
            Make safe food choices confidently, whether dining out or shopping, ensuring worry-free meals and travel experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
