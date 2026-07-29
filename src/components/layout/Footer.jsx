import { useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo1.png";
import PolicyModal from "../common/PolicyModal";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <>
      <footer
        className="border-t overflow-hidden transition-colors duration-300"
        style={{
          backgroundColor: "var(--color-background)",
          borderColor: "rgba(201,168,76,0.2)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center sm:text-left">
            
            {/* Company Info */}
            <div className="flex flex-col items-center sm:items-start space-y-3">
              <a href="#home" className="inline-block">
                <img
                  src={logo}
                  alt="Bloom Empire"
                  width="180"
                  height="80"
                  className="h-12 sm:h-16 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </a>

              <p
                className="leading-relaxed text-sm opacity-90 max-w-sm"
                style={{ color: "var(--color-subheading)" }}
              >
                Transforming living spaces into vibrant sanctuaries with bespoke floral arrangements and luxury styling.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px]"
                style={{
                  color: "var(--color-heading)",
                }}
              >
                Quick Links
              </h3>

              <ul className="flex flex-wrap sm:flex-col justify-center gap-x-6 gap-y-2.5 sm:gap-y-3 text-sm">
                {[
                  { label: "Home", path: "#home" },
                  { label: "About", path: "#about" },
                  { label: "Gallery", path: "#gallery" },
                  { label: "Process", path: "#process" },
                  { label: "Contact", path: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.path}
                      className="inline-block transition-all duration-300 relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-heading)] hover:after:w-full after:transition-all after:duration-300 hover:scale-105 sm:hover:translate-x-1"
                      style={{ color: "var(--color-subheading)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                className="text-lg sm:text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px]"
                style={{ color: "var(--color-heading)" }}
              >
                Contact Us
              </h3>

              <div className="space-y-3 sm:space-y-3.5 text-sm flex flex-col items-center sm:items-start">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Dilshad+Garden+New+Delhi+India"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 group transition-colors duration-300 max-w-xs"
                  style={{ color: "var(--color-subheading)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
                >
                  <FaMapMarkerAlt
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--color-heading)" }}
                  />
                  <span>Dilshad Garden, New Delhi, India</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 group transition-colors duration-300"
                  style={{ color: "var(--color-subheading)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
                >
                  <FaPhoneAlt
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--color-heading)" }}
                  />
                  <span>+91 9876543210</span>
                </a>

                <a
                  href="mailto:info@bloomempire.com"
                  className="flex items-center gap-2.5 group transition-colors duration-300"
                  style={{ color: "var(--color-subheading)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
                >
                  <FaEnvelope
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: "var(--color-heading)" }}
                  />
                  <span className="break-all">info@bloomempire.com</span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col items-center sm:items-start">
              <h3
                className="text-lg sm:text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-1/2 sm:after:left-0 after:-translate-x-1/2 sm:after:translate-x-0 after:w-8 after:h-[2px]"
                style={{ color: "var(--color-heading)" }}
              >
                Follow Us
              </h3>

              <div className="flex gap-4 justify-center sm:justify-start">
                {[
                  { icon: <FaInstagram />, url: "#", name: "Instagram" },
                  { icon: <FaWhatsapp />, url: "#", name: "WhatsApp" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    aria-label={social.name}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-md"
                    style={{
                      background: "var(--color-button)",
                      color: "var(--color-button-text)",
                    }}
                  >
                    <span className="transition-transform duration-300 hover:scale-110 text-lg">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="border-t mt-8 sm:mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left"
            style={{ borderColor: "rgba(201,168,76,0.2)" }}
          >
            <p
              className="text-xs sm:text-sm order-2 sm:order-1 opacity-80"
              style={{ color: "var(--color-subheading)" }}
            >
              © 2026 Bloom Empire. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm order-1 sm:order-2">
              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="transition-colors duration-300 relative py-0.5 cursor-pointer opacity-90 hover:opacity-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-heading)] hover:after:w-full after:transition-all after:duration-300"
                style={{ color: "var(--color-subheading)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
              >
                Privacy Policy
              </button>

              <span className="opacity-30">•</span>

              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="transition-colors duration-300 relative py-0.5 cursor-pointer opacity-90 hover:opacity-100 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[var(--color-heading)] hover:after:w-full after:transition-all after:duration-300"
                style={{ color: "var(--color-subheading)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-heading)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-subheading)")}
              >
                Terms &amp; Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy & Terms Modal */}
      <PolicyModal type={activeModal} onClose={() => setActiveModal(null)} />
    </>
  );
}
