import { LuFlower2, LuSparkles, LuPalette, LuCrown } from "react-icons/lu";

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
  return (
    <section
      className="py-24 transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-heading)", // Dark background context
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header section with corrected design color references */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            style={{
              color: "var(--color-background)",
            }}
          >
            Exclusive Designs
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg opacity-90"
            style={{
              color: "var(--color-background)",
            }}
          >
            Beautiful floral concepts curated for modern luxury homes.
          </p>
        </div>

        {/* Cards Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designs.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl border-black transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.6)", // Clean contrast against dark background
                  borderColor: "rgba(201,168,76,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.2)";
                }}
              >
                <div>
                  {/* Icon Block with scale up states */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                    }}
                  >
                    <Icon
                      size={24}
                      style={{
                        color: "var(--color-background)",
                      }}
                    />
                  </div>

                  <h3
                    className="text-xl font-semibold mb-3 tracking-wide"
                    style={{
                      color: "var(--color-background)",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="leading-relaxed text-sm opacity-80 pb-8"
                    style={{
                      color: "var(--color-background)", // Changed to match header text visibility
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* ✿ Watermark icon fixed to match the readable foreground color */}
                <span
                  className="absolute -bottom-8 -right-10 text-9xl sm:text-[14rem] select-none transition-all duration-700 ease-out transform pointer-events-none opacity-5 group-hover:opacity-20 group-hover:scale-110 group-hover:-rotate-12"
                  style={{
                    color: "var(--color-background)", // Fixed: Now it contrasts beautifully against var(--color-heading)!
                  }}
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