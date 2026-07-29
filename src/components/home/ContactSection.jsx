import { useState } from "react";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import logo from "../../assets/logo.webp";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function ContactSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "cors",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setSubmittedName(formData.name);
        setIsSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          requirements: "",
        });
      } else {
        alert("Submission failed. The server returned an unsuccessful response.");
      }
    } catch (error) {
      console.error("Form Submission Error:", error);
      alert(
        "Something went wrong while sending your request. " +
        "Please try again, or contact us directly if the issue persists."
      );
    }

    setLoading(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="pt-4 pb-8 sm:pt-8 sm:pb-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-6 sm:mb-16 transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <img
            src={logo}
            alt="Bloom Empire"
            width="144"
            height="144"
            className="h-24 sm:h-36 w-auto object-contain mx-auto"
            loading="lazy"
          />

          <h2
            className="mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-bold heading-gradient"
          >
            Let's Bloom Together
          </h2>

          <p
            className="mt-2 max-w-2xl mx-auto text-sm sm:text-base px-2"
            style={{ color: "var(--color-subheading)" }}
          >
            We'd love to help you transform your home into a beautiful floral
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-10 overflow-hidden transition-all duration-700 ${isVisible ? "animate-fade-in-left" : "opacity-0"
              }`}
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <h3
              className="text-xl sm:text-3xl font-bold mb-6 sm:mb-10"
              style={{ color: "var(--color-heading)" }}
            >
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,.1)",
                  }}
                >
                  <LuPhone
                    size={20}
                    style={{ color: "var(--color-heading)" }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Phone
                  </h4>

                  <p style={{ color: "var(--color-subheading)" }}>
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,.1)",
                  }}
                >
                  <LuMail
                    size={20}
                    style={{ color: "var(--color-heading)" }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Email
                  </h4>

                  <p style={{ color: "var(--color-subheading)" }}>
                    hello@bloomempire.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(201,168,76,.1)",
                  }}
                >
                  <LuMapPin
                    size={20}
                    style={{ color: "var(--color-heading)" }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{ color: "var(--color-heading)" }}
                  >
                    Address
                  </h4>

                  <p style={{ color: "var(--color-subheading)" }}>
                    Dilshad Garden, New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            {/* Animated Flower SVG - Desktop only, absolutely positioned */}
            <div
              className="hidden lg:block absolute -bottom-16 -right-16 select-none pointer-events-none"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 200 200"
                width="280"
                height="280"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer petals */}
                <g style={{ transformOrigin: "100px 100px", animation: "flowerOuterSpin 18s linear infinite" }}>
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <ellipse
                      key={i}
                      cx="100"
                      cy="58"
                      rx="11"
                      ry="22"
                      fill="rgba(201,168,76,0.2)"
                      style={{
                        transformOrigin: "100px 100px",
                        transform: `rotate(${deg}deg)`,
                        animation: `petalPulse 4s ease-in-out ${i * 0.4}s infinite`,
                      }}
                    />
                  ))}
                </g>
                {/* Inner petals */}
                <g style={{ transformOrigin: "100px 100px", animation: "flowerInnerSpin 12s linear infinite reverse" }}>
                  {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg, i) => (
                    <ellipse
                      key={i}
                      cx="100"
                      cy="68"
                      rx="7"
                      ry="16"
                      fill="rgba(231,195,95,0.28)"
                      style={{
                        transformOrigin: "100px 100px",
                        transform: `rotate(${deg}deg)`,
                        animation: `petalPulse 3s ease-in-out ${i * 0.3}s infinite`,
                      }}
                    />
                  ))}
                </g>
                {/* Center */}
                <circle cx="100" cy="100" r="18" fill="rgba(201,168,76,0.5)" style={{ animation: "corePulse 3s ease-in-out infinite" }} />
                <circle cx="100" cy="100" r="10" fill="rgba(231,195,95,0.9)" />
                <circle cx="100" cy="100" r="5" fill="#2d6449" />
              </svg>
            </div>
          </div>

          {/* Form Container */}
          <div
            className={`rounded-2xl sm:rounded-3xl p-4 sm:p-10 transition-all duration-700 ${isVisible ? "animate-fade-in-right" : "opacity-0"
              }`}
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-8 px-2 animate-scale-in">
                {/* SVG Animated Success Checkmark */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 animate-circle-scale"
                  style={{
                    background: "rgba(201,168,76,.12)",
                    border: "1px solid rgba(201,168,76,.25)",
                  }}
                >
                  <svg
                    className="w-10 h-10 text-[var(--color-heading)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="animate-checkmark-draw"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ color: "var(--color-heading)" }}
                >
                  Request Received!
                </h3>

                <p
                  className="max-w-md mb-8 text-sm sm:text-base"
                  style={{ color: "var(--color-subheading)" }}
                >
                  Thank you,{" "}
                  <span className="font-semibold text-[var(--color-heading)]">
                    {submittedName}
                  </span>
                  ! We have received your consultation request. Our floral design team will get in touch with you shortly.
                </p>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 cursor-pointer"
                  style={{
                    background: "var(--color-button)",
                    color: "var(--color-button-text)",
                  }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-xl sm:text-3xl font-bold mb-3"
                  style={{ color: "var(--color-heading)" }}
                >
                  Request Consultation
                </h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl outline-none"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    color: "var(--color-subheading)",
                    border: "1px solid rgba(201,168,76,.15)",
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl outline-none"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    color: "var(--color-subheading)",
                    border: "1px solid rgba(201,168,76,.15)",
                  }}
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl outline-none"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    color: "var(--color-subheading)",
                    border: "1px solid rgba(201,168,76,.15)",
                  }}
                />

                <textarea
                  rows="4"
                  name="requirements"
                  placeholder="Tell us about your requirements..."
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl outline-none resize-none"
                  style={{
                    background: "rgba(255,255,255,.04)",
                    color: "var(--color-subheading)",
                    border: "1px solid rgba(201,168,76,.15)",
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90 ${loading ? "animate-pulse-glow cursor-not-allowed opacity-75" : "cursor-pointer"
                    }`}
                  style={{
                    background: "var(--color-button)",
                    color: "var(--color-button-text)",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-[var(--color-button-text)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Schedule Consultation"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
