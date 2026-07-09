
const productsRow1 = [
  { image: "/collection/flower1.jpg", name: "White Chrysanthemum", price: "₹299" },
  { image: "/collection/flower2.jpg", name: "Dutch White Roses", price: "₹499" },
  { image: "/collection/flower3.jpg", name: "Peach Roses", price: "₹599" },
  { image: "/collection/flower4.jpg", name: "Blue Daisies", price: "₹449" },
  { image: "/collection/flower5.jpg", name: "Purple Asters", price: "₹349" },
];

export default function PremiumCollection() {
  
  // Reusable Card Component with clean interactions
  const ProductCard = ({ item }) => (
    <div className="w-65 sm:w-75 shrink-0 group px-3 select-none">
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
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            draggable="false"
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
    <section className="py-24 overflow-hidden" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "var(--color-heading)" }}>
          Our Premium Collection
        </h2>
        <div className="w-24 h-0.5 mx-auto mt-5 opacity-40" style={{ backgroundColor: "var(--color-heading)" }} />
      </div>

      {/* INFINITE MARQUEE SYSTEM WRAPPER */}
      <div className="space-y-8 w-full relative">
        
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