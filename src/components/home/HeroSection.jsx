import { FaArrowRight } from "react-icons/fa";
// Added clean, minimal line icons to fit your premium aesthetic
import { FiHome, FiSmile } from "react-icons/fi";
import heroImg from "../../assets/hero.jpg";
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
      className="min-h-screen flex items-center pt-20 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12">
        {/* Content Side */}
        <div className="space-y-6 text-left animate-fade-in-left">
          {/* Subheading / Tag */}
          <span
            className="inline-block uppercase tracking-widest text-xs font-semibold px-4 py-1.5 rounded-full border backdrop-blur-sm shadow-sm transform hover:scale-105 transition-transform duration-300"
            style={{
              color: "var(--color-heading)",
              borderColor: "rgba(201,168,76,0.3)",
              backgroundColor: "rgba(201,168,76,0.05)",
            }}
          >
            Bloom Empire — Because Your Home Deserves to Bloom ✿
          </span>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight transition-colors duration-300"
            style={{ color: "var(--color-heading)" }}
          >
            Flowers & Bookeys <br />
            <span className="opacity-90">for the Soul</span>
          </h1>

          {/* New Icon Features Section */}
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl border border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 group"
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

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            {/* Primary Button */}
            <button
              className="group px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--color-button)",
                color: "var(--color-button-text)",
              }}
            >
              Explore
              <FaArrowRight className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>

          </div>
        </div>

        {/* Image Display Side */}
        <div className="relative w-full flex justify-center lg:justify-end">
          {/* Decorative background ambient glow */}
          <div
            className="absolute -inset-4 rounded-full filter blur-3xl opacity-10 animate-pulse pointer-events-none"
            style={{ backgroundColor: "var(--color-heading)" }}
          />

          {/* Framed Image Element */}
          <div className="relative max-w-137.5 w-full aspect-square rounded-3xl overflow-hidden border shadow-2xl group transition-all duration-500 hover:border-[rgba(201,168,76,0.4)]">
            <img
              src={heroImg}
              alt="Premium Floral Arrangements"
              className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-700 ease-out"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
