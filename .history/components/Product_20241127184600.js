import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <div className="infoCards">
        <div className="card">
          <Image
            src="/images/chatbot.jpg"
            alt="Feature 1"
            width={100}
            height={100}
          />
          <h3>AI Chatbot</h3>
          <p> The AI barcode scanner identifies companies, flags ingredient issues or cross-contamination, 
            and alerts users with links to related news or actions. </p>
        </div>
        <div className="card">
          <Image
            src="/images/trash.jpg"
            alt="Feature 2"
            width={75}
            height={75}
          />
          <h3>Usability</h3>
          <p>When a food product is scanned, the app monitors recalls and notifies users with sensitivities, including the product's name, image,
             and recall reason, ensuring timely safety alerts.

          </p>
        </div>
        <div className="card">
          <Image
            src="/images/accessibility.png"
            alt="Feature 2"
            width={75}
            height={75}
          />
          <h3>Accessible to all features</h3>
          <p>Our app empowers users with the tools and information they need to make safe food choices,
             especially when dining out or in unfamiliar environments. With GoldiBite, users can travel freely and confidently.

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
