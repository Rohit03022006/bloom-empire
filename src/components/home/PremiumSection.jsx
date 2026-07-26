import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const productsRow1 = [
  { image: "/collection/flower1.webp", name: "White Chrysanthemum" },
  { image: "/collection/flower2.webp", name: "Dutch White Roses" },
  { image: "/collection/flower3.webp", name: "Peach Roses" },
  { image: "/collection/flower4.webp", name: "Blue Daisies" },
  { image: "/collection/flower5.webp", name: "Purple Asters" },
];

export default function PremiumCollection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  // Reusable Card Component with clean interactions
  const ProductCard = ({ item }) => (
    <div className="w-[220px] sm:w-[300px] shrink-0 group px-2 sm:px-3 select-none">
      <div
        className="overflow-hidden rounded-2xl border transition-all duration-300 relative group-hover:shadow-md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          borderColor: "rgba(201,168,76,0.15)"
        }}
      >
        {/* Image Container with Hover Zoom */}
        <div className="overflow-hidden relative h-64 w-full">
          <img
            src={item.image}
            alt={item.name}
            width="300"
            height="256"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable="false"
            loading="lazy"
          />
        </div>

        {/* Text Area Details */}
        <div className="text-center p-4">
          <h3 className="font-semibold tracking-wide truncate" style={{ color: "var(--color-heading)" }}>
            {item.name}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 overflow-hidden" style={{ backgroundColor: "var(--color-background)" }}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-14 text-center transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--color-heading)" }}>
          Our Premium Collection
        </h2>
        <div className="w-24 h-0.5 mx-auto mt-5 opacity-40" style={{ backgroundColor: "var(--color-heading)" }} />
      </div>

      {/* INFINITE MARQUEE SYSTEM WRAPPER */}
      <div className={`space-y-8 w-full relative transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "200ms" }}>

        {/* ROW 1: Auto Scrolls Leftwards */}
        <div className="flex w-full overflow-x-hidden relative mask-image-horizontal">
          <div className="flex animate-marquee-left whitespace-nowrap hover:[animation-play-state:paused] pointer-events-auto">
            {[...productsRow1, ...productsRow1, ...productsRow1].map((item, idx) => (
              <ProductCard key={`row1-${idx}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Branding Text */}
      <p className="text-center mt-16 italic tracking-wide text-sm opacity-80" style={{ color: "var(--color-subheading)" }}>
        Each pot crafted with love & aesthetics ✿
      </p>
    </section>
  );
}