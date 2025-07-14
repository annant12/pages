import AboutSection from "@/Components/About";
import Features from "@/Components/Feature";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Specifications from "@/Components/Specification";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Specifications />
      <AboutSection />
      <Footer />
    </div>
  );
}
