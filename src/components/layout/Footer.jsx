import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

export default function Footer() {
  return (
    // OPPOSITE: Swapped bg to cream (#f5f0dc) and border to deep green tint
    <footer className="bg-[#f5f0dc] border-t border-[#132b1f]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company */}
          <div className="transition-all duration-300 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img
              src={logo}
              alt="Bloom Empire"
              className="h-16 sm:h-20 w-auto object-contain transition-transform duration-500 hover:scale-102 mx-auto sm:mx-0"
              loading="lazy"
            />

            {/* OPPOSITE: Text changed to dark green (#132b1f) */}
            <p className="mt-4 text-[#132b1f]/80 leading-relaxed text-sm">
              HEHEHEHHEHEHE
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            {/* OPPOSITE: Headings flipped to rich deep green, underline matches */}
            <h3 className="text-[#132b1f] text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:w-8 after:h-[1px] after:bg-[#132b1f]/30">
              Quick Links
            </h3>

            {/* OPPOSITE: Text elements flipped to dark green */}
            <ul className="space-y-3 text-[#132b1f]/90">
              {[
                { label: "Home", path: "#home" },
                { label: "About", path: "#about" },
                { label: "Gallery", path: "#gallery" },
                { label: "Contact", path: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    className="inline-block transition-all duration-300 hover:text-[#c9a84c] hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-[#132b1f] text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:w-8 after:h-[1px] after:bg-[#132b1f]/30">
              Contact
            </h3>

            <div className="space-y-4 text-[#132b1f]/90">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center sm:justify-start items-start gap-3 group transition-colors duration-300 hover:text-[#c9a84c]"
              >
                <FaMapMarkerAlt className="mt-1 text-[#b08e35] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>East Delhi, Delhi, India</span>
              </a>

              <a
                href="tel:+919876543210"
                className="flex justify-center sm:justify-start items-start gap-3 group transition-colors duration-300 hover:text-[#c9a84c]"
              >
                <FaPhoneAlt className="mt-1 text-[#b08e35] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span>+91 34567890</span>
              </a>

              <a
                href="mailto:info@bloomempire.com"
                className="flex justify-center sm:justify-start items-start gap-3 group transition-colors duration-300 hover:text-[#c9a84c]"
              >
                <FaEnvelope className="mt-1 text-[#b08e35] shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <span className="break-all">info@bloomempire.com</span>
              </a>
            </div>
          </div>
          {/* Social */}
          <div className="text-center sm:text-left">
            {/* OPPOSITE: Headings flipped to rich deep green */}
            <h3 className="text-[#132b1f] text-xl font-semibold mb-4 tracking-wide relative inline-block after:absolute after:bottom-[-2px] after:left-0 after:w-8 after:h-[1px] after:bg-[#132b1f]/30">
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
                  // OPPOSITE: Circular buttons inverted -> Dark green fill background with cream color icon
                  className="w-11 h-11 rounded-full bg-[#132b1f] flex items-center justify-center text-[#f5f0dc] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-md hover:shadow-[0_4px_15px_rgba(19,43,31,0.2)]"
                >
                  <span className="transition-transform duration-300 hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* OPPOSITE: Internal separator borders and secondary notes inverted to dark green tones */}
        <div className="border-t border-[#132b1f]/15 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#132b1f]/70 text-xs sm:text-sm text-center md:text-left order-2 md:order-1">
            © 2026 Bloom Empire. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-[#132b1f]/70 order-1 md:order-2">
            <a
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-[#c9a84c] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors duration-300 hover:text-[#c9a84c] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#c9a84c] hover:after:w-full after:transition-all after:duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}