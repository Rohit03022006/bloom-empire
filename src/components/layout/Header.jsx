import { useState } from "react";
import logo from "../../assets/logo1.png";

// 1. Core Icons Imported here
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Process", href: "#process" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300"
      style={{
        backgroundColor: "rgba(45, 100, 73, 0.55)",
        borderColor: "rgba(201,168,76,0.25)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.15)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="inline-flex items-center hover:opacity-90 transition-opacity duration-300">
          <img
            src={logo}
            alt="Bloom Empire"
            width="180"
            height="80"
            loading="lazy"
            className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[var(--color-subheading)] hover:text-[var(--color-heading)] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-heading)] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex px-6 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
          style={{
            background: "var(--color-button)",
            color: "var(--color-button-text)",
          }}
        >
          Contact
        </a>

        {/* Mobile Menu Button with Animated Icon Swap */}
        <button
          className="lg:hidden text-2xl sm:text-3xl focus:outline-none transform active:scale-90 transition-transform duration-200 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl"
          style={{ color: "var(--color-heading)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {/* Container creates a smooth cross-fade + 90-degree rotating transition */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span className={`absolute transition-all duration-300 transform ${open ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"}`}>
              <HiMenuAlt3 />
            </span>
            <span className={`absolute transition-all duration-300 transform ${open ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"}`}>
              <HiX />
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Panel Container */}
      <div
        className={`lg:hidden border-b transition-all duration-300 ease-out absolute top-full left-0 w-full shadow-xl backdrop-blur-xl ${
          open ? "translate-y-0 opacity-100 visible" : "-translate-y-4 opacity-0 invisible pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(45, 100, 73, 0.75)",
          borderColor: "rgba(201,168,76,0.2)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="flex flex-col px-4 py-5 sm:p-6 gap-4 sm:gap-5 text-center">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[var(--color-subheading)] hover:text-[var(--color-heading)] transition-all duration-200 transform ${
                open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`, // Multi-element stagger effect
              }}
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className={`w-full py-3 rounded-xl font-semibold text-center transform transition-all duration-300 active:scale-98 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              background: "var(--color-button)",
              color: "var(--color-button-text)",
              transitionDelay: `${navLinks.length * 50}ms`,
            }}
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
