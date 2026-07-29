import { LuFlower2, LuSparkles, LuPalette, LuCrown } from "react-icons/lu";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const designs = [
  {
    icon: LuFlower2,
    title: "Luxury Living Rooms",
    desc: "Premium floral styling crafted for elegant modern interiors.",
  },
  {
    icon: LuPalette,
    title: "Custom Floral Themes",
    desc: "Every arrangement designed around your personal imagination.",
  },
  {
    icon: LuSparkles,
    title: "Signature Installations",
    desc: "Transform empty corners into breathtaking focal points.",
  },
  {
    icon: LuCrown,
    title: "Premium Collection",
    desc: "Exclusive flowers, premium pots and luxury accessories.",
  },
];

export default function ExclusiveDesigns() {
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-8 sm:py-24 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-heading)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`text-center mb-6 sm:mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ color: "var(--color-background)" }}
          >
            Exclusive Designs
          </h2>
          <p
            className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-2"
            style={{ color: "var(--color-background)" }}
          >
            Beautiful floral concepts curated for modern luxury homes.
          </p>
        </div>

        {/* Cards Grid - 1 col on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {designs.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className={`group relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)",
                  borderColor: "rgba(201,168,76,0.2)",
                  animationDelay: `${idx * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                }}
              >
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-500 icon-glassmorphism group-hover:scale-110"
                    >
                      <Icon
                        size={22}
                        style={{ color: "var(--color-background)" }}
                      />
                    </div>

                    <h3
                      className="text-base sm:text-xl font-semibold tracking-wide"
                      style={{ color: "var(--color-background)" }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className="leading-relaxed text-sm pb-6 sm:pb-8"
                    style={{ color: "var(--color-background)" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Watermark — Top-left 1/4 showing at bottom-right corner */}
                <span
                  className="absolute translate-x-1/3 translate-y-1/3 bottom-0 right-0 text-[8rem] sm:text-[12rem] leading-none select-none transition-all duration-700 ease-out transform pointer-events-none opacity-20 sm:opacity-20 group-hover:opacity-40 group-hover:scale-110 group-hover:rotate-12"
                  style={{ color: "var(--color-background)" }}
                  aria-hidden="true"
                >
                  ✿
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
