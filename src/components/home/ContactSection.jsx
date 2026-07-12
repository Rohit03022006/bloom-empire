import { useState } from "react";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import logo from "../../assets/logo.png";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

export default function ContactSection() {
  const [sectionRef, isVisible] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [loading, setLoading] = useState(false);

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
        alert("Consultation request submitted successfully!");

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
      className="py-8 sm:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
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
            We'd love to help you transform your home into a beautiful floral
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
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
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`rounded-2xl sm:rounded-3xl p-5 sm:p-10 transition-all duration-700 ${
              isVisible ? "animate-fade-in-right" : "opacity-0"
            }`}
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <h3
              className="text-xl sm:text-3xl font-bold mb-5 sm:mb-8"
              style={{ color: "var(--color-heading)" }}
            >
              Request Consultation
            </h3>

            <div className="space-y-5">
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
                className="w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
                style={{
                  background: "var(--color-button)",
                  color: "var(--color-button-text)",
                }}
              >
                {loading
                  ? "Submitting..."
                  : "Schedule Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
