"use client";

export default function Footer() {
  return (
    <footer
      className="py-24 px-5 "
      style={{ backgroundColor: "#1a2e1f" }}
    >
      <div className="max-w-6xl mx-auto relative left-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                <span className="text-white text-xs font-semibold">MR</span>
              </div>
              <span
                className="text-sm font-semibold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Dr. Maya Reynolds
              </span>
            </div>
            <p className="text-xs" style={{ color: "#7a9b7e" }}>
              Compassionate, evidence-based therapy for anxiety, trauma, and
              life transitions. Denver, CO.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 text-white"
              style={{ color: "var(--color-secondary-light)" }}
            >
              Quick Links
            </h4>
            {["Home", "About", "Services", "Our Office", "FAQ", "Contact"].map(
              (link) => (
                <a
                  key={link}
              

                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-xs mb-2 transition-colors duration-200"
                  style={{ color: "#7a9b7e" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color= "var(--color-secondary-light)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#7a9b7e")
                  }
                >
                  {link}
                </a>
              )
            )}
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 text-white"
              style={{ color: "var(--color-secondary-light)" }}
            >
              Services
            </h4>
            {[
              "Anxiety & Stress Management",
              "Trauma & PTSD Recovery",
              "Depression & Life Transitions",
            ].map((s) => (
              <a
                key={s}
                href="#services"
                className="block text-xs mb-2 transition-colors duration-200"
                style={{ color: "#7a9b7e" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-secondary-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#7a9b7e")
                }
              >
                {s}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4 text-white"
              style={{ color: "var(--color-secondary-light)" }}
            >
              Contact Info
            </h4>
            <p className="text-xs mb-2" style={{ color: "#7a9b7e" }}>
              📍 Denver, Colorado
            </p>
            <p className="text-xs mb-2" style={{ color: "#7a9b7e" }}>
              📞 (720) 555-0198
            </p>
            <p className="text-xs mb-2" style={{ color: "#7a9b7e" }}>
              ✉️ maya@growmytherapy.com
            </p>
            <p className="text-xs" style={{ color: "#7a9b7e" }}>
              🕐 Mon – Fri, 9am – 6pm MT
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "#2e4a34" }}
        >
          <p className="text-xs" style={{ color: "#5a7a5e" }}>
            © 2026 Dr. Maya Reynolds, PsyD. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#5a7a5e" }}>
            Privacy Policy · Terms of Service · HIPAA Compliant
          </p>
        </div>
      </div>
    </footer>
  );
}
