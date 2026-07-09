import Navbar from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import WhyBloomEmpire from "@/components/home/WhyBloomEmpire";
import GallerySection from "@/components/home/GallerySection";
import PremiumSection from "@/components/home/PremiumSection";
import ProcessSection from "@/components/home/ProcessSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/layout/Footer";
import ExclusiveDesigns from "../components/home/ExclusiveDesigns";

export default function Welcome() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyBloomEmpire />
      <GallerySection />
      <ExclusiveDesigns />
      <PremiumSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </>
  );
}