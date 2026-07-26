import { lazy, Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";

const WhyBloomEmpire = lazy(() => import("@/components/home/WhyBloomEmpire"));
const GallerySection = lazy(() => import("@/components/home/GallerySection"));
const ExclusiveDesigns = lazy(() => import("@/components/home/ExclusiveDesigns"));
const PremiumSection = lazy(() => import("@/components/home/PremiumSection"));
const ProcessSection = lazy(() => import("@/components/home/ProcessSection"));
const ContactSection = lazy(() => import("@/components/home/ContactSection"));

export default function Welcome() {
  return (
    <main>
      <HeroSection />
      <Suspense fallback={null}>
        <WhyBloomEmpire />
        <GallerySection />
        <ExclusiveDesigns />
        <PremiumSection />
        <ProcessSection />
        <ContactSection />
      </Suspense>
    </main>
  );
}