"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-5 "
      style={{ backgroundColor: "var(--color-primary-dark)" }}
    >
      <div className="max-w-5xl mx-auto relative left-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div className="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent-light)" }}
            >
              Get in Touch
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
             Ready to Take the {" "}
              <span  style={{ color: "var(--color-secondary-light)" }}>
                First Step?
              </span>
            </h2>
            <p className="text-base mb-8" style={{ color: "#b8c9b0" }}>
              Taking the first step toward healing is the hardest part — and the
              most important. I'd love to hear from you. Reach out today to
              schedule a free 15-minute consultation call.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              {[
                { icon: "📍", label: "Denver, Colorado" },
                { icon: "📞", label: "(720) 555-0198" },
                { icon: "✉️", label: "maya@growmytherapy.com" },
                { icon: "🕐", label: "Mon – Fri, 9am – 6pm MT" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span
                    className="text-sm"
                    style={{ color: "#b8c9b0" }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - CTA Card */}
          <div className="fade-up fade-up-delay-2">
            <div
              className="bg-white rounded-3xl p-8 shadow-xl"
              style={{ border: "1px solid var(--color-secondary)" }}
            >
              <h3
                className="text-xl font-bold mb-2 text-center"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--color-primary-dark)",
                }}
              >
                Book Your Session
              </h3>
              <p
                className="text-xs text-center mb-6"
                style={{ color: "var(--color-text-light)" }}
              >
                Free 15-minute consultation available
              </p>

              {/* Session type options */}
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { type: "In-Person Session", loc: "Denver Office", icon: "🏢" },
                  { type: "Online Session", loc: "Secure Video Call", icon: "💻" },
                  { type: "Phone Consultation", loc: "15 Min Free Call", icon: "📞" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition-colors duration-200"
                    style={{ border: "1px solid var(--color-secondary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-primary)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor =
                        "var(--color-secondary)")
                    }
                  >
                    <span className="text-xl">{s.icon}</span>
                    <div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "var(--color-primary-dark)" }}
                      >
                        {s.type}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: "var(--color-text-light)" }}
                      >
                        {s.loc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="mailto:maya@growmytherapy.com"
                className="block w-full text-center px-6 py-3.5 rounded-full text-white font-semibold text-sm shadow transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Request an Appointment
              </a>

              <p
                className="text-center text-xs mt-4"
                style={{ color: "var(--color-text-light)" }}
              >
                Typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
