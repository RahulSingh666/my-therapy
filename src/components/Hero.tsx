"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {/* Soft decorative circle - top right */}
      <div
        className="absolute top-24 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-light), transparent 70%)",
        }}
      />
      {/* Soft decorative circle - bottom left */}
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-secondary), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32">
          {/* Left Content */}
          <div className="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4 relative left-1"
              style={{ color: "var(--color-accent)" }}
            >
              Licensed Clinical Psychologist
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 relative left-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--color-primary-dark)",
              }}
            >
              A Compassionate Space{" "}
              <span style={{ color: "var(--color-primary)" }}>
                to Heal & Grow
              </span>
            </h1>
            <p
              className="text-base md:text-lg mb-8 max-w-lg relative left-1"
              style={{ color: "var(--color-text-light)" }}
            >
              Dr. Maya Reynolds offers evidence-based therapy in Denver,
              Colorado for anxiety, trauma, depression, and life transitions.
              You deserve support that truly understands you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-block px-7 py-3.5 rounded-full text-white font-semibold text-sm text-center shadow-lg transition-opacity duration-200 hover:opacity-85 relative left-1"
                style={{ backgroundColor: "var(--color-primary)" }}
              >
                Book Your First Session
              </a>
              <a
                href="#about"
                className="inline-block px-7 py-3.5 rounded-full font-semibold text-sm text-center border-2 transition-colors duration-200"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
              >
                Learn About Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="fade-up fade-up-delay-2 flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-120">
              {/* Image placeholder with warm gradient */}
              <div
                className="w-full h-full rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, var(--color-secondary-light), var(--color-secondary))",
                }}
              >
                <img
                  src="Dr. Maya Reynolds.png"
                  alt="Calm therapy office space in Denver"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-4 flex items-center gap-3"
                style={{ border: "1px solid var(--color-secondary)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  ✓
                </div>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{ color: "var(--color-primary-dark)" }}
                  >
                    Licensed & Insured
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Accepting new clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
