import { useState } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { LuChevronDown } from "react-icons/lu";

// Flower image imports
import asiaticLilies from "../../assets/Flower_JPGs_Separate/Asiatic_Lilies.webp";
import babysBreath from "../../assets/Flower_JPGs_Separate/Babys_Breath.webp";
import birdOfParadise from "../../assets/Flower_JPGs_Separate/Bird_of_Paradise.webp";
import blueDaisies from "../../assets/Flower_JPGs_Separate/Blue_Daisies.webp";
import chrysanthemums from "../../assets/Flower_JPGs_Separate/Chrysanthemums.webp";
import cremonMum from "../../assets/Flower_JPGs_Separate/Cremon_Mum.webp";
import curcumaFlower from "../../assets/Flower_JPGs_Separate/Curcuma_Flower.webp";
import dutchWhiteRoses from "../../assets/Flower_JPGs_Separate/Dutch_White_Roses.webp";
import gerberaDaisies from "../../assets/Flower_JPGs_Separate/Gerbera_Daisies.webp";
import limonium from "../../assets/Flower_JPGs_Separate/Limonium.webp";
import parinaGentian from "../../assets/Flower_JPGs_Separate/Parina_Gentian.webp";
import peachRoses from "../../assets/Flower_JPGs_Separate/Peach_Roses.webp";
import pearlMillet from "../../assets/Flower_JPGs_Separate/Pearl_Millet.webp";
import pinkChrysanthemums from "../../assets/Flower_JPGs_Separate/Pink_Chrysanthemums.webp";
import purpleAsters from "../../assets/Flower_JPGs_Separate/Purple_Asters.webp";
import purpleCushionPompon from "../../assets/Flower_JPGs_Separate/Purple_Cushion_Pompon_Chrysanthemums.webp";
import purpleWaterLily from "../../assets/Flower_JPGs_Separate/Purple_Tropical_Water_Lily.webp";
import purpleWhiteLisianthus from "../../assets/Flower_JPGs_Separate/Purple_and_White_Lisianthus.webp";
import redChrysanthemums from "../../assets/Flower_JPGs_Separate/Red_Chrysanthemums.webp";
import redCockscomb from "../../assets/Flower_JPGs_Separate/Red_Cockscomb.webp";
import redPompon from "../../assets/Flower_JPGs_Separate/Red_Pompon_Chrysanthemums.webp";
import royalPurpleLisianthus from "../../assets/Flower_JPGs_Separate/Royal_Purple_Lisianthus.webp";
import sprayCarnations from "../../assets/Flower_JPGs_Separate/Spray_Carnations.webp";
import stargazerLily from "../../assets/Flower_JPGs_Separate/Stargazer_Lily.webp";
import whiteDisbudChrysanthemums from "../../assets/Flower_JPGs_Separate/White_Disbud_Chrysanthemums.webp";
import whiteGerberaDaisy from "../../assets/Flower_JPGs_Separate/White_Gerbera_Daisy.webp";
import whiteSantiniChrysanthemums from "../../assets/Flower_JPGs_Separate/White_Santini_Chrysanthemums.webp";
import yellowGerberaDaisies from "../../assets/Flower_JPGs_Separate/Yellow_Gerbera_Daisies.webp";
import yellowPompon from "../../assets/Flower_JPGs_Separate/Yellow_Pompon_Chrysanthemums.webp";

const galleryData = [
  { img: whiteSantiniChrysanthemums, title: "White Santini Chrysanthemums", desc: "Delicate white cluster blooms offering understated elegance." },
  { img: dutchWhiteRoses, title: "Dutch White Roses", desc: "Classic pristine white roses symbolizing purity and refinement." },
  { img: peachRoses, title: "Peach Roses", desc: "Warm, gentle pastel roses perfect for welcoming ambience." },
  { img: chrysanthemums, title: "Chrysanthemum", desc: "Vibrant layered petals bringing rich texture and color." },
  { img: babysBreath, title: "Baby's Breath", desc: "Cloud-like ethereal filler flowers adding delicate grace." },
  { img: blueDaisies, title: "Blue Daisies", desc: "Striking azure petals that pop with playful energy." },
  { img: purpleAsters, title: "Purple Asters", desc: "Deep violet star-shaped blossoms for lush table settings." },
  { img: whiteGerberaDaisy, title: "White Gerbera Daisy", desc: "Crisp, radiant daisy heads radiating joy." },
  { img: gerberaDaisies, title: "Gerbera Daisies", desc: "Bold and lively multicolored focal blooms." },
  { img: yellowGerberaDaisies, title: "Yellow Gerbera Daisies", desc: "Sunny golden yellow petals full of cheer." },
  { img: stargazerLily, title: "Stargazer Lily", desc: "Dramatic fragrant lilies with bold magenta patterns." },
  { img: whiteDisbudChrysanthemums, title: "White Disbud Chrysanthemums", desc: "Grand single-stem white globes for focal elegance." },
  { img: redPompon, title: "Red Roses", desc: "Passionate crimson blossoms timeless in every arrangement." },
  { img: peachRoses, title: "Aqua Pink Roses", desc: "Subtle blush-pink shaded roses with velvety petals." },
  { img: purpleWhiteLisianthus, title: "White Lisianthus", desc: "Gentle rose-like blooms with smooth, silky petals." },
  { img: limonium, title: "White Statice", desc: "Crisp paper-thin textures for lasting floral structures." },
  { img: pearlMillet, title: "Asparagus Virgatus", desc: "Feathery botanical greenery providing organic movement." },
  { img: parinaGentian, title: "Eustoma Grandiflorum", desc: "Sophisticated prairie blooms with bell-shaped elegance." },
  { img: parinaGentian, title: "Prairie Gentian", desc: "Wildflower charm with refined deep color gradients." },
  { img: cremonMum, title: "Cremon Mum", desc: "Sculptural incurved petals creating a regal centerpiece." },
  { img: royalPurpleLisianthus, title: "Royal Purple Lisianthus", desc: "Deep majestic violet velvet tones for luxury spaces." },
  { img: yellowPompon, title: "Yellow Pompon Chrysanthemums", desc: "Cheerful golden spheres full of texture." },
  { img: purpleWhiteLisianthus, title: "Purple and White Lisianthus", desc: "Bi-color contrast blooms bringing artful depth." },
  { img: curcumaFlower, title: "Curcuma Flower", desc: "Exotic tulip-ginger structure with tropical flair." },
  { img: asiaticLilies, title: "Asiatic Lilies", desc: "Bright starburst blossoms that command attention." },
  { img: purpleCushionPompon, title: "Purple Cushion Pompon Chrysanthemum", desc: "Dense violet cushions for rich arrangement volume." },
  { img: limonium, title: "Limonium", desc: "Airy purple sprays adding volume and delicate contrast." },
  { img: redChrysanthemums, title: "Red Bronze Chrysanthemum", desc: "Warm autumnal bronze hues with fiery warmth." },
  { img: pinkChrysanthemums, title: "Pink Chrysanthemum", desc: "Soft blush hues for romantic, gentle arrangements." },
  { img: redChrysanthemums, title: "Red Chrysanthemums", desc: "Deep ruby red petals creating striking focal points." },
  { img: sprayCarnations, title: "Spray Carnations", desc: "Frilled multi-bloom stems with long-lasting beauty." },
  { img: pearlMillet, title: "Pearl Millet", desc: "Rustic architectural grain stems for height and drama." },
  { img: birdOfParadise, title: "Bird of Paradise", desc: "Exotic orange and blue crane-like tropical stems." },
  { img: purpleWaterLily, title: "Purple Tropical Water Lily", desc: "Serene aquatic violet blossoms evoking tranquility." },
  { img: redCockscomb, title: "Red Cockscomb", desc: "Velvety brain-textured crested flowers of intense crimson." },
];

export default function GallerySection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const [flippedCards, setFlippedCards] = useState({});
  const [visibleCount, setVisibleCount] = useState(6);

  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, galleryData.length));
  };

  const visibleItems = galleryData.slice(0, visibleCount);
  const hasMore = visibleCount < galleryData.length;

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
          className={`text-center text-3xl sm:text-5xl font-bold tracking-tight mb-3 sm:mb-4 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ color: "var(--color-heading)" }}
        >
          Our Floral Gallery
        </h2>

        <p 
          className="text-center text-sm sm:text-base mb-8 max-w-xl mx-auto opacity-90"
          style={{ color: "var(--color-subheading)" }}
        >
          Explore our complete collection of exquisite handpicked blooms
        </p>

        {/* Tap hint — only visible on touch/mobile */}
        <p
          className="text-center text-xs opacity-50 mb-6 sm:hidden"
          style={{ color: "var(--color-subheading)" }}
        >
          Tap a card to reveal details
        </p>

        {/* 3D Flip Card Grid — 1 col on mobile, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className={`h-64 sm:h-80 w-full cursor-pointer group transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ 
                perspective: "1000px",
                animationDelay: `${(index % 6) * 100}ms`,
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
                    width="400"
                    height="320"
                    loading="lazy"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  
                  {/* Title overlay at bottom of image */}
                  <div 
                    className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between"
                  >
                    <span className="font-semibold text-xs sm:text-sm text-white drop-shadow-md truncate">
                      {item.title}
                    </span>
                    <span className="text-xs text-amber-200 opacity-80 shrink-0 ml-2">✿</span>
                  </div>
                </div>

                {/* BACK — text */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl p-4 sm:p-6 flex flex-col justify-center items-center text-center overflow-hidden border"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    backgroundColor: "var(--color-background)",
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
                    Tap again to flip back
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button Container */}
        {hasMore && (
          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: "var(--color-button)",
                color: "var(--color-button-text)",
              }}
            >
              <span>Load More Flowers ({galleryData.length - visibleCount} remaining)</span>
              <LuChevronDown className="text-lg animate-bounce" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}