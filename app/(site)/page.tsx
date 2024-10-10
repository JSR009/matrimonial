import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "This is matrimonial website",
  description: "This is Home page for the matrimonial website",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
