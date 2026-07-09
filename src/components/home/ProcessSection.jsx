"use client";

import { LuSearch, LuCalendarDays, LuLayers, LuSparkles } from "react-icons/lu";

const processSteps = [
  {
    icon: LuSearch,
    title: "1. Consultation & Design Discovery",
    desc: "We connect to map your aesthetic desires and understand your home's layout, lighting, and personality.",
  },
  {
    icon: LuCalendarDays,
    title: "2. Personal Stylist Scheduling",
    desc: "Select a comfortable date and time for our expert floral curators to visit your living spaces.",
  },
  {
    icon: LuLayers,
    title: "3. Bespoke Material Selection",
    desc: "We handpick premium vases, planters, and seasonal blossoms tailored explicitly to your unique custom configuration.",
  },
  {
    icon: LuSparkles,
    title: "4. The Magical Setup Transformation",
    desc: "Our stylists design right inside your home, breathing color and vibrant life into every single corner.",
  },
];

export default function ProcessSection() {
  return (
    <section 
      id="process"
      className="py-24 transition-colors duration-300 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <h2 
          className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-24"
          style={{ color: "var(--color-heading)" }}
        >
          Our Styling Journey
        </h2>

        {/* Zig-Zag Timeline Container */}
        <div className="relative">
          
          {/* Center Vertical Axis Line (Desktop Only) */}
          <div 
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--color-heading)" }}
          />

          <div className="space-y-12 md:space-y-0 relative">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0; // Even index = Left side, Odd index = Right side

              return (
                <div 
                  key={index}
                  className="flex flex-col md:flex-row items-center w-full group relative md:min-h-[200px]"
                >
                  
                  {/* LEFT SIDE BLOCK */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-16 order-2 md:order-1">
                    {isLeft ? (
                      <div className="max-w-md text-center md:text-right space-y-3 p-6 rounded-2xl border border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-bold tracking-wide" style={{ color: "var(--color-heading)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-subheading)" }}>
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      // Empty spacer block for desktop when item content goes right
                      <div className="hidden md:block w-full max-w-md" />
                    )}
                  </div>

                  {/* CENTER NODE DESIGN (Fixed point on the axis line) */}
                  <div 
                    className="absolute left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10 hidden md:flex w-14 h-14 rounded-full items-center justify-center border-2 transition-all duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-heading)"
                    }}
                  >
                    <Icon 
                      className="text-lg transition-transform duration-500 group-hover:rotate-12" 
                      style={{ color: "var(--color-heading)" }}
                    />
                  </div>

                  {/* RIGHT SIDE BLOCK */}
                  <div className="w-full md:w-1/2 flex justify-center md:justify-start md:pl-16 order-3 md:order-2">
                    {!isLeft ? (
                      <div className="max-w-md text-center md:text-left space-y-3 p-6 rounded-2xl border border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 transform hover:-translate-y-1">
                        <h3 className="text-2xl font-bold tracking-wide" style={{ color: "var(--color-heading)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-subheading)" }}>
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      // Empty spacer block for desktop when item content goes left
                      <div className="hidden md:block w-full max-w-md" />
                    )}
                  </div>

                  {/* Mobile Mobile-only icon positioner (top card layout indicator) */}
                  <div className="w-full order-1 flex md:hidden justify-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-lg" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "var(--color-heading)" }}>
                      <Icon />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}