import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

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
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section 
      ref={sectionRef}
      id="gallery"
      className="py-12 sm:py-16 transition-colors duration-300 select-none"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <h2 
          className={`text-center text-3xl sm:text-5xl font-bold tracking-tight mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ color: "var(--color-heading)" }}
        >
          Our Creations Gallery
        </h2>

        {/* Tap hint — only visible on touch/mobile */}
        <p
          className="text-center text-xs opacity-50 mb-6 sm:hidden"
          style={{ color: "var(--color-subheading)" }}
        >
          Tap a card to reveal its story
        </p>

        {/* 3D Flip Card Grid — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {galleryData.map((item, index) => (
            <div
              key={index}
              // h-64 on mobile gives a usable tap area without overflowing the viewport
              className={`h-64 sm:h-80 w-full cursor-pointer group transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ 
                perspective: "1000px",
                animationDelay: `${index * 100}ms`,
              }}
              onClick={() => handleCardClick(index)}
            >
              {/* Inner flippable wrapper */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-out shadow-md hover:shadow-xl rounded-2xl border"
                style={{
                  transform: flippedCards[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                  transformStyle: "preserve-3d",
                  borderColor: "rgba(201,168,76,0.15)",
                }}
              >
                {/* FRONT — image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* BACK — text */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-center overflow-hidden border"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: "rgba(26,58,42,0.97)",
                    borderColor: "rgba(201,168,76,0.3)",
                  }}
                >
                  <span
                    className="absolute -bottom-6 -right-6 text-9xl opacity-5 pointer-events-none"
                    style={{ color: "var(--color-heading)" }}
                    aria-hidden="true"
                  >
                    ✿
                  </span>

                  <h3 
                    className="text-base sm:text-xl font-bold tracking-wide mb-2 sm:mb-3"
                    style={{ color: "var(--color-heading)" }}
                  >
                    {item.title}
                  </h3>
                  
                  <p 
                    className="text-xs sm:text-sm leading-relaxed max-w-xs"
                    style={{ color: "var(--color-subheading)" }}
                  >
                    {item.desc}
                  </p>
                  
                  <span 
                    className="mt-4 sm:mt-6 text-[10px] sm:text-xs uppercase tracking-widest font-semibold opacity-60"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Tap again to see image
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