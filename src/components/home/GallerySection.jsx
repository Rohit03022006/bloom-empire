import { useState } from "react";

const galleryData = [
  {
    img: "/gallery/1.jpg",
    title: "Enchanted Orchids",
    desc: "Vibrant arrangement crafted specifically to transform dull hallway spaces.",
  },
  {
    img: "/gallery/2.jpg",
    title: "Minimalist Tulip Basin",
    desc: "Clean geometric styles aligned perfect for modern living room centerpieces.",
  },
  {
    img: "/gallery/3.jpg",
    title: "Royal Bouquet Suite",
    desc: "A rich collection of deep hues designed to capture your guests' admiration.",
  },
  {
    img: "/gallery/4.jpg",
    title: "Verdant Balcony Accents",
    desc: "Bespoke greenery ensuring your empty outdoor flower pots never stay bare.",
  },
  {
    img: "/gallery/5.jpg",
    title: "Imperial Dining Setup",
    desc: "Elegantly scaled low-profile arrangements to optimize dinner styling.",
  },
  {
    img: "/gallery/6.jpg",
    title: "Blossom Corner Magic",
    desc: "Professional boutique styling created exclusively for cozy reading corners.",
  },
];

export default function GallerySection() {
  // Track which card indices are flipped
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle flip state for this card
    }));
  };

  return (
    <section 
      id="gallery"
      className="py-24 transition-colors duration-300 select-none"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <h2 
          className="text-center text-4xl sm:text-5xl font-bold tracking-tight mb-16"
          style={{ color: "var(--color-heading)" }}
        >
          Our Creations Gallery
        </h2>

        {/* 3D Flip Card Container Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((item, index) => (
            <div
              key={index}
              className="h-80 w-full cursor-pointer group"
              style={{ perspective: "1000px" }} // Activates 3D space depth
              onClick={() => handleCardClick(index)}
            >
              {/* Inner flippable element wrapper */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-out preserve-3d shadow-md hover:shadow-xl rounded-2xl border"
                style={{
                  transform: flippedCards[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                
                {/* FRONT SIDE (Image display) */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  {/* Gentle hover interactive overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* BACK SIDE (Text & details overlay) */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden rounded-2xl p-6 flex flex-col justify-center items-center text-center overflow-hidden border"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: "rgba(251, 248, 235, 0.04)",
                    borderColor: "rgba(201,168,76,0.3)",
                  }}
                >
                  {/* Soft Background Accent Decoration */}
                  <span className="absolute -bottom-6 -right-6 text-9xl opacity-5 pointer-events-none" style={{ color: "var(--color-heading)" }}>
                    ✿
                  </span>

                  <h3 
                    className="text-xl font-bold tracking-wide mb-3 transform translate-y-0 transition-transform duration-300 delay-100"
                    style={{ color: "var(--color-heading)" }}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed max-w-xs"
                    style={{ color: "var(--color-subheading)" }}
                  >
                    {item.desc}
                  </p>
                  
                  <span 
                    className="mt-6 text-xs uppercase tracking-widest font-semibold opacity-60 hover:opacity-100 transition-opacity"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Click to reveal image
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}