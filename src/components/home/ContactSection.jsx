import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";

import logo from "../../assets/logo.png";

export default function ContactSection() {
  return (
    <section
      className="py-24"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-16">
          <img
            src={logo}
            alt="Bloom Empire"
            className="h-40 mx-auto rounded-full"
          />

          <h2
            className="mt-6 text-5xl font-bold"
            style={{
              color: "var(--color-heading)",
            }}
          >
            Let's Bloom Together
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto"
            style={{
              color: "var(--color-subheading)",
            }}
          >
            We'd love to help you transform your home into a beautiful floral
            experience.
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}

          <div
            className="rounded-3xl p-10"
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <h3
              className="text-3xl font-bold mb-10"
              style={{
                color: "var(--color-heading)",
              }}
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
                    style={{
                      color: "var(--color-heading)",
                    }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{
                      color: "var(--color-heading)",
                    }}
                  >
                    Phone
                  </h4>

                  <p
                    style={{
                      color: "var(--color-subheading)",
                    }}
                  >
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
                    style={{
                      color: "var(--color-heading)",
                    }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{
                      color: "var(--color-heading)",
                    }}
                  >
                    Email
                  </h4>

                  <p
                    style={{
                      color: "var(--color-subheading)",
                    }}
                  >
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
                    style={{
                      color: "var(--color-heading)",
                    }}
                  />
                </div>

                <div>
                  <h4
                    className="font-semibold"
                    style={{
                      color: "var(--color-heading)",
                    }}
                  >
                    Address
                  </h4>

                  <p
                    style={{
                      color: "var(--color-subheading)",
                    }}
                  >
                    Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <form
            className="rounded-3xl p-10"
            style={{
              border: "1px solid rgba(201,168,76,.2)",
              background: "rgba(255,255,255,.02)",
            }}
          >
            <h3
              className="text-3xl font-bold mb-8"
              style={{
                color: "var(--color-heading)",
              }}
            >
              Request Consultation
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl outline-none"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl outline-none"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl outline-none"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <textarea
                rows="5"
                placeholder="Tell us about your requirements..."
                className="w-full p-4 rounded-xl outline-none resize-none"
                style={{
                  background: "rgba(255,255,255,.04)",
                  color: "var(--color-subheading)",
                  border: "1px solid rgba(201,168,76,.15)",
                }}
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-semibold transition duration-300 hover:opacity-90"
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
