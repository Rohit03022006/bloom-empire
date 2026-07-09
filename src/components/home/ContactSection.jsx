import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import logo from "../../assets/logo.png";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function ContactSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-8 sm:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <img
            src={logo}
            alt="Bloom Empire"
            className="h-24 sm:h-36 mx-auto"
            loading="lazy"
          />

          <h2
            className="mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-heading)" }}
          >
            Let's Bloom Together
          </h2>

          <p
            className="mt-2 max-w-2xl mx-auto text-sm sm:text-base px-2"
            style={{ color: "var(--color-subheading)" }}
          >
            We'd love to help you transform your home into a beautiful floral experience.
          </p>
        </div>

        {/* Main Layout — single column on mobile, two columns on lg+ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

          {/* LEFT — Contact Information */}
          <div
            className={`rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
              animationDelay: "150ms",
            }}
          >
            <h3
              className="text-xl sm:text-3xl font-bold mb-6 sm:mb-10"
              style={{ color: "var(--color-heading)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-6 sm:space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,.1)" }}
                >
                  <LuPhone size={18} style={{ color: "var(--color-heading)" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: "var(--color-heading)" }}>
                    Phone
                  </h4>
                  <p className="text-sm sm:text-base" style={{ color: "var(--color-subheading)" }}>
                    +91 9876543210
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,.1)" }}
                >
                  <LuMail size={18} style={{ color: "var(--color-heading)" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: "var(--color-heading)" }}>
                    Email
                  </h4>
                  <p className="text-sm sm:text-base break-all" style={{ color: "var(--color-subheading)" }}>
                    hello@bloomempire.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,.1)" }}
                >
                  <LuMapPin size={18} style={{ color: "var(--color-heading)" }} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base" style={{ color: "var(--color-heading)" }}>
                    Address
                  </h4>
                  <p className="text-sm sm:text-base" style={{ color: "var(--color-subheading)" }}>
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Request Form */}
          <form
            className={`rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
              animationDelay: "300ms",
            }}
          >
            <h3
              className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8"
              style={{ color: "var(--color-heading)" }}
            >
              Request Consultation
            </h3>

            <div className="space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="w-full p-3.5 sm:p-4 rounded-xl outline-none text-sm sm:text-base"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                className="w-full p-3.5 sm:p-4 rounded-xl outline-none text-sm sm:text-base"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                aria-label="Phone Number"
                className="w-full p-3.5 sm:p-4 rounded-xl outline-none text-sm sm:text-base"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <textarea
                rows="3"
                placeholder="Tell us about your requirements..."
                aria-label="Requirements Details"
                className="w-full p-3.5 sm:p-4 rounded-xl outline-none resize-none text-sm sm:text-base"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition duration-300 hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--color-button)",
                  color: "var(--color-button-text)",
                }}
              >
                Schedule Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
