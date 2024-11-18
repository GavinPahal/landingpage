// pages/index.js
import Hero from "../components/Hero";
import Features from "../components/Features";
import Coaches from "../components/Coaches";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Coaches />
      <Footer />
    </div>
  );
}
