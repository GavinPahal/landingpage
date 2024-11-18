// pages/index.js
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <InfoSection />
      <CTASection />
      <Footer />
    </div>
  );
}
