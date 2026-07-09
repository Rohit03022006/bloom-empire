"use client";

import { LuSearch, LuCalendarDays, LuLayers, LuSparkles } from "react-icons/lu";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

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
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-16 sm:py-24 transition-colors duration-300 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <h2
          className={`text-center text-3xl sm:text-5xl font-bold tracking-tight mb-10 sm:mb-24 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ color: "var(--color-heading)" }}
        >
          Our Styling Journey
        </h2>

        {/* ── MOBILE LAYOUT: simple vertical card stack ── */}
        <div className="flex flex-col gap-6 md:hidden">
          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 p-5 rounded-2xl border border-transparent transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{
                  background: "rgba(201,168,76,0.03)",
                  borderColor: "rgba(201,168,76,0.12)",
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center text-lg"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "var(--color-heading)" }}
                >
                  <Icon />
                </div>
                <div>
                  <h3 className="text-base font-bold mb-1 leading-snug" style={{ color: "var(--color-heading)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-subheading)" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── DESKTOP LAYOUT: zig-zag timeline ── */}
        <div className="relative hidden md:block">

          {/* Center Vertical Axis Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--color-heading)" }}
          />

          <div className="space-y-0 relative">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-row items-center w-full group relative min-h-[200px] transition-all duration-700 ${
                    isVisible ? (isLeft ? "animate-fade-in-left" : "animate-fade-in-right") : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* LEFT CONTENT — shown when isLeft, spacer when !isLeft */}
                  <div className="w-1/2 flex justify-end pr-16">
                    {isLeft ? (
                      <div className="max-w-md text-right space-y-3 p-6 rounded-2xl border border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 hover:-translate-y-1 transform">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: "var(--color-heading)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-subheading)" }}>
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="w-full max-w-md" />
                    )}
                  </div>

                  {/* CENTER NODE */}
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex w-14 h-14 rounded-full items-center justify-center border-2 transition-all duration-500 group-hover:scale-110"
                    style={{
                      backgroundColor: "var(--color-background)",
                      borderColor: "var(--color-heading)",
                    }}
                  >
                    <Icon
                      className="text-lg transition-transform duration-500 group-hover:rotate-12"
                      style={{ color: "var(--color-heading)" }}
                    />
                  </div>

                  {/* RIGHT CONTENT — shown when !isLeft, spacer when isLeft */}
                  <div className="w-1/2 flex justify-start pl-16">
                    {!isLeft ? (
                      <div className="max-w-md text-left space-y-3 p-6 rounded-2xl border border-transparent hover:border-[rgba(201,168,76,0.15)] hover:bg-[rgba(201,168,76,0.02)] transition-all duration-300 hover:-translate-y-1 transform">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-wide" style={{ color: "var(--color-heading)" }}>
                          {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed opacity-80" style={{ color: "var(--color-subheading)" }}>
                          {item.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="w-full max-w-md" />
                    )}
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