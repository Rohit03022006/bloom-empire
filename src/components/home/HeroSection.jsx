import { FaArrowRight } from "react-icons/fa";
import { FiHome, FiSmile } from "react-icons/fi";
import heroImg from "../../assets/hero.webp";
import heroImg400 from "../../assets/hero-400.webp";
import heroImg800 from "../../assets/hero-800.webp";
import heroImg1200 from "../../assets/hero-1200.webp";
import { LuSparkles } from "react-icons/lu";

export default function HeroSection() {
  const features = [
    { icon: <FiHome />, text: "Transform your home." },
    { icon: <LuSparkles />, text: "Elevate your space." },
    { icon: <FiSmile />, text: "Impress every guest." },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 sm:pt-28 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-4 sm:py-12">

        {/* Content Side */}
        <div className="space-y-5 sm:space-y-6 text-left animate-fade-in-left">

          {/* Subheading / Tag — constrained so it wraps gracefully on 320px */}
          <span
            className="inline-block uppercase tracking-widest text-[10px] sm:text-xs font-semibold px-3 py-1.5 sm:px-4 rounded-full border backdrop-blur-sm shadow-sm transition-transform duration-300 hover:scale-105 max-w-full"
            style={{
              color: "var(--color-heading)",
              borderColor: "rgba(201,168,76,0.3)",
              backgroundColor: "rgba(201,168,76,0.05)",
              wordBreak: "break-word",
            }}
          >
            Bloom Empire — Because Your Home Deserves to Bloom ✿
          </span>

          {/* Main Heading — scales fluidly across all breakpoints */}
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] tracking-tight transition-colors duration-300"
            style={{ color: "var(--color-heading)" }}
          >
            Flowers &amp; Bouquets <br />
            <span className="opacity-90">for the Soul</span>
          </h1>

          {/* Feature Badges — single column on phones, 3 columns on sm+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[rgba(201,168,76,0.02)] transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 shrink-0 rounded-xl flex items-center justify-center text-lg shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: "rgba(201,168,76,0.1)",
                    color: "var(--color-heading)",
                  }}
                >
                  {feature.icon}
                </div>
                <span
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: "var(--color-subheading)" }}
                >
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Display Side — centered on mobile, right-aligned on desktop */}
        <div className="relative w-full flex justify-center lg:justify-end">
          {/* Ambient glow */}
          <div
            className="absolute -inset-5 rounded-full filter blur-3xl opacity-10 animate-pulse pointer-events-none"
            style={{ backgroundColor: "var(--color-heading)" }}
          />

          {/* Hero image — uses aspect-square so height is always proportional */}
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[500px] aspect-square rounded-3xl overflow-hidden border shadow-2xl group transition-all duration-500 hover:border-[rgba(201,168,76,0.4)]">
            <img
              src={heroImg}
              srcSet={`${heroImg400} 400w, ${heroImg800} 800w, ${heroImg1200} 1200w`}
              sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 500px"
              alt="Premium Floral Arrangements"
              width="500"
              height="500"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
