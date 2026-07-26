"use client";

import { 
  FiDisc, 
  FiFeather, 
  FiScissors, 
  FiHeart 
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu"; 
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const features = [
  {
    icon: FiDisc,
    title: "Never Bare Again",
    description: "Your home's empty flower pots will never stay bare again.",
  },
  {
    icon: FiFeather,
    title: "Bespoke Imagination",
    description: "We design according to YOUR imagination — every pot tells your story.",
  },
  {
    icon: FiScissors,
    title: "Professional Stylists",
    description: "Professional stylists visit your home & create magic in every corner.",
  },
  {
    icon: FiHeart,
    title: "Admired Elegance",
    description: "Guests won't just visit — they'll admire your home's elegance.",
  },
  {
    icon: LuSparkles, 
    title: "Premium Aesthetics",
    description: "Premium aesthetics that elevate your home's beauty & charm.",
  },
];

export default function WhyBloomEmpire() {
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="py-8 sm:py-20 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-heading)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 mb-6 sm:mb-10 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-background)" }}
          >
            Why Bloom Empire?
          </h2>
          <p 
            className="text-sm sm:text-base lg:text-lg opacity-90 px-2"
            style={{ color: "var(--color-background)" }}
          >
            Crafting custom floral styling layouts that make your living spaces truly unforgettable.
          </p>
        </div>

        {/* Features Grid — 1 col on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`group relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col items-start text-left hover:-translate-y-1.5 hover:shadow-xl ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(201,168,76,0.2)",
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                  e.currentTarget.style.boxShadow = "0 10px 30px -10px rgba(201,168,76,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Watermark */}
                <span 
                  className="absolute -bottom-14 -right-14 text-8xl sm:text-[14rem] select-none transition-all duration-700 ease-out transform pointer-events-none opacity-5 group-hover:opacity-20 group-hover:scale-110 group-hover:-rotate-12" 
                  style={{ color: "var(--color-background)" }}
                  aria-hidden="true"
                >
                  ✿
                </span>

                {/* Icon */}
                <div 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6 shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    backgroundColor: "rgba(201,168,76,0.15)",
                    color: "var(--color-background)",
                  }}
                >
                  <Icon />
                </div>

                <h3 
                  className="text-base sm:text-xl font-semibold mb-2 tracking-wide z-10"
                  style={{ color: "var(--color-background)" }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed opacity-80 transition-colors duration-300 z-10"
                  style={{ color: "var(--color-background)" }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}