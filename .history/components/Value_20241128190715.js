import Image from "next/image";

export default function Features() {
  return (
    <section className="coreValues">
      <div className="coreMission">
        <h1>Core Values</h1>
      </div>

      <div className="valueCards">
        <div className="valueCard" style={{ margin: "0 10px" }}>
          <div className="textContent">
            <h3>Safety</h3>
            <p>
            GoldiBite places significant emphasis on ensuring user safety by providing quick and reliable assistance in the event of food reactions. The platform is designed to empower users with the tools and resources they need to respond promptly and effectively to any unexpected situation. By prioritizing user well-being,
             GoldiBite ensures that individuals can handle emergencies with confidence and peace of mind.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/images/iconamoon_scanner (1).jpg"
              alt="Feature 1"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="valueCard" style={{ margin: "0 10px" }}>
          <div className="textContent">
            <h3>Usability</h3>
            <p>
            Many food safety apps struggle with user-friendliness, making it challenging for individuals to navigate them effectively. GoldiBite, however,
             is intentionally designed with simplicity and intuitiveness in mind, ensuring that users of all ages and technical skill levels can easily access and manage critical information about their food allergies and sensitivities.

            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/images/magnifying.jpg"
              alt="Feature 2"
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="valueCard" style={{ margin: "0 10px" }}>
          <div className="textContent">
            <h3>Accessible to All Features</h3>
            <p>
            GoldiBite provides users with comprehensive tools and reliable information to make informed and safe food choices, especially in situations like dining out or exploring unfamiliar environments. By offering valuable insights and support, the app enables users to navigate their food options with ease and confidence. With GoldiBite, users can travel and dine freely,
             assured that their safety and well-being are always a priority.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/images/access-control.jpg"
              alt="Feature 3"
              width={150}
              height={150}
            />
          </div>
          
        </div>
        <div className="valueCard" style={{ margin: "0 10px" }}>
          <div className="textContent">
            <h3>Global Portability</h3>
            <p>
            GoldiBite’s features are thoughtfully designed to be functional and valuable across a wide range of countries. The app provides localized information tailored to the user’s specific location, including critical details such as emergency hotlines, local allergen regulations, and region-specific guidance. This ensures users have access to the support and information they need, 
            no matter where they are in the world.
            </p>
          </div>
          <div className="imageContent">
            <Image
              src="/images/global.jpg"
              alt="Feature 3"
              width={150}
              height={150}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
