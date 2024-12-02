import Image from "next/image";

export default function Features() {
  return (
    <section className="features">
      <h2>Future Prospects</h2>
      <div
        className="infoCards"
        style={{ gap: "20px", display: "flex", alignItems: "center" }}
      >
        <div className="card" style={{ margin: "0 10px" }}>
          <Image
            src="/images/ai-language-model (2).png"
            alt="Feature 1"
            width={120}
            height={120}
          />
          <h3>AI Chatbot</h3>
          <p>
            The AI barcode scanner identifies companies, flags ingredient issues
            or cross-contamination, and alerts users with links to related news
            or actions.
          </p>
        </div>


        <div className="card" style={{ margin: "0 10px" }}>
          <Image
            src="/images/trash (3).png"
            alt="Feature 2"
            width={125}
            height={125}
          />
          <h3>Food Recall Alerts</h3>
          <p>
            When a food product is scanned, the app monitors recalls and
            notifies users with sensitivities, including the product's name,
            image, and recall reason, ensuring timely safety alerts.
          </p>
        </div>


        <div className="card" style={{ margin: "0 10px" }}>
          <Image
            src="/images/multiple-users (4).png"
            alt="Feature 3"
            width={125}
            height={125}
          />
          <h3>Multiple User Profiles</h3>
          <p>
            Users can create multiple profiles within one account, enabling
            personalized dietary management and preferences, like allergies and
            language, for each family member or friend.
          </p>
        </div>
      </div>
    </section>
  );
}
