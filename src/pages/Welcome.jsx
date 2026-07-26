import { lazy, Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import SectionSkeleton from "@/components/common/SectionSkeleton";

const WhyBloomEmpire  = lazy(() => import("@/components/home/WhyBloomEmpire"));
const GallerySection  = lazy(() => import("@/components/home/GallerySection"));
const ExclusiveDesigns = lazy(() => import("@/components/home/ExclusiveDesigns"));
const PremiumSection  = lazy(() => import("@/components/home/PremiumSection"));
const ProcessSection  = lazy(() => import("@/components/home/ProcessSection"));
const ContactSection  = lazy(() => import("@/components/home/ContactSection"));

const Section = ({ children }) => (
  <Suspense fallback={<SectionSkeleton />}>
    {children}
  </Suspense>
);

export default function Welcome() {
  return (
    <main>
      {/* Hero is always eager — above the fold */}
      <HeroSection />

      {/* Every section below is code-split and shows a shimmer skeleton while loading */}
      <Section><WhyBloomEmpire /></Section>
      <Section><GallerySection /></Section>
      <Section><ExclusiveDesigns /></Section>
      <Section><PremiumSection /></Section>
      <Section><ProcessSection /></Section>
      <Section><ContactSection /></Section>
    </main>
  );
}