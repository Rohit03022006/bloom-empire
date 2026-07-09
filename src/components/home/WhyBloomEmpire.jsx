"use client";

import { 
  FiDisc, 
  FiFeather, 
  FiScissors, 
  FiHeart 
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu"; 

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
  return (
    <section 
      className="py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-heading)" }} // OPPOSITE: Swapped to heading color
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-background)" }} // OPPOSITE: Flipped for visibility
          >
            Why Bloom Empire?
          </h2>
          <p 
            className="text-base sm:text-lg opacity-90"
            style={{ color: "var(--color-background)" }} // OPPOSITE: Flipped to background contrast
          >
            Crafting custom floral styling layouts that make your living spaces truly unforgettable.
          </p>
        </div>

        {/* Features Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 justify-center">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col items-start text-left hover:-translate-y-1.5 hover:shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)", // Clean contrast fill for dark backgrounds
                  borderColor: "rgba(201,168,76,0.2)",
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
                {/* ✿ Watermark icon scaled up and inverted to contrast background */}
                <span 
                  className="absolute -bottom-6 -right-8 text-9xl sm:text-[12rem] select-none transition-all duration-700 ease-out transform pointer-events-none opacity-5 group-hover:opacity-20 group-hover:scale-110 group-hover:-rotate-12" 
                  style={{ color: "var(--color-background)" }}
                >
                  ✿
                </span>

                {/* Animated Icon Circle */}
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6"
                  style={{ 
                    backgroundColor: "rgba(201,168,76,0.15)",
                    color: "var(--color-background)" // OPPOSITE: Flipped icon color
                  }}
                >
                  <Icon />
                </div>

                {/* Content block */}
                <h3 
                  className="text-xl font-semibold mb-2 tracking-wide z-10"
                  style={{ color: "var(--color-background)" }} // OPPOSITE: Flipped header text
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-sm leading-relaxed opacity-80 transition-colors duration-300 z-10"
                  style={{ color: "var(--color-background)" }} // OPPOSITE: Flipped body text
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