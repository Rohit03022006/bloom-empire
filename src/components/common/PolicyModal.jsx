import { LuX } from "react-icons/lu";

export default function PolicyModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all duration-300 animate-scale-in"
        style={{
          backgroundColor: "var(--color-background)",
          borderColor: "rgba(201,168,76,0.3)",
          color: "var(--color-subheading)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-between border-b pb-4 mb-6" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--color-heading)" }}>
            {title}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full transition-colors duration-200 hover:bg-black/10 cursor-pointer"
            style={{ color: "var(--color-heading)" }}
          >
            <LuX className="text-2xl" />
          </button>
        </div>

        {/* Modal Content */}
        {isPrivacy ? (
          <div className="space-y-5 text-sm sm:text-base leading-relaxed">
            <p>
              At <strong>Bloom Empire</strong>, your privacy is important to us. This Privacy Policy outlines the simple types of information we collect and how we safeguard it.
            </p>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                1. Information We Collect
              </h3>
              <p>
                We only collect information you voluntarily provide through our contact form, such as your name, phone number, email address, and home styling preferences.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                2. How We Use Your Information
              </h3>
              <p>
                Your information is strictly used to communicate with you regarding your floral styling inquiries, schedule home consultations, and deliver custom service updates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                3. Data Security & Protection
              </h3>
              <p>
                We maintain appropriate safety measures to keep your data secure. We never sell, trade, or rent your personal details to third parties.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                4. Contact Us
              </h3>
              <p>
                If you have any questions regarding this Privacy Policy, feel free to reach out to us at <strong>info@bloomempire.com</strong>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-5 text-sm sm:text-base leading-relaxed">
            <p>
              Welcome to <strong>Bloom Empire</strong>. By accessing our website or booking our floral styling services, you agree to the following simple terms.
            </p>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                1. Styling & Consultation Services
              </h3>
              <p>
                Bloom Empire provides custom home floral styling, vase arrangements, and setup services tailored to client preferences discussed during consultation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                2. Appointments & Scheduling
              </h3>
              <p>
                Styling sessions are scheduled based on mutual convenience. If you need to reschedule or cancel an appointment, please notify us at least 24 hours in advance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                3. Materials & Custom Floral Orders
              </h3>
              <p>
                Due to seasonal availability, specific flower varieties may vary slightly. We ensure all substitute blooms meet our high standards of quality and aesthetics.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-1" style={{ color: "var(--color-heading)" }}>
                4. Service Excellence
              </h3>
              <p>
                Our professional stylists take maximum care during in-home setup to ensure a flawless and beautiful experience for your living space.
              </p>
            </div>
          </div>
        )}

        {/* Footer Close Button */}
        <div className="mt-8 pt-4 border-t text-right" style={{ borderColor: "rgba(201,168,76,0.2)" }}>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
            style={{
              backgroundColor: "var(--color-button)",
              color: "var(--color-button-text)",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
