import React from "react";
import Navbar from "@/component/Navbar";
import Hero from "@/component/Hero";
import BentoGrid from "@/component/BentoGrid";
import Pricing from "@/component/Pricing";
import Footer from "@/component/Footer";
import Cta from "@/component/Cta";
import Faq from "@/component/Faq";
import Testimonial from "@/component/Testimonial";
import LogoTicker from "@/component/LogoTicker";

const page = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <Navbar />

      <Hero />
      <LogoTicker />
      <BentoGrid />
      <Testimonial />
      <Pricing />
      <Faq />
      <Cta />

      <Footer />
    </main>
  );
};

export default page;
