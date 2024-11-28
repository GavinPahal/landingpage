import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <div className="infoCards">
        <div className="card">
          <Image
            src="/images/chatbot.jpg"
            alt="Feature 1"
            width={125}
            height={125}
          />
          <h3>AI Chatbot</h3>
          <p> The AI barcode scanner identifies companies, flags ingredient issues or cross-contamination, 
            and alerts users with links to related news or actions. </p>
        </div>
        <div className="card">
          <Image
            src="/images/trash.jpg"
            alt="Feature 2"
            width={125}
            height={125}
          />
          <h3>Food Recall Alerts</h3>
          <p>When a food product is scanned, the app monitors recalls and notifies users with sensitivities, including the product's name, image,
             and recall reason, ensuring timely safety alerts.

          </p>
        </div>
        <div className="card">
          <Image
            src="/images/accessibility.png"
            alt="Feature 2"
            width={125}
            height={125}
          />
          <h3>Multiple User Profiles</h3>
          <p>Users can create multiple profiles within one account, enabling personalized dietary management and preferences, like allergies and language,
             for each family member or friend.

          </p>
        </div>
        <div className="card">
          <Image
            src="/images/customer.jpg"
            alt="Feature 2"
            width={125}
            height={125}
          />
          <h3>Company Analysis</h3>
          <p>An AI Chatbot provides instant, personalized help with food safety, ingredient details,
             and travel-specific allergy info, guiding users through unfamiliar cuisines and regulations.

          </p>
        </div>
        
      </div>
      
    </section>
  );
}
