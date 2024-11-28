// pages/index.js
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Product from "../components/Products"

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}
