// pages/index.js
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Product from "../components/Product"
import Value from "../components/value"

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Value />
      <Product />
      <Footer />
    </div>
  );
}
