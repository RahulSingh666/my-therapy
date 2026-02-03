const officeFeatures = [
  {
    icon: "🔒",
    title: "Private & Confidential",
    desc: "A completely soundproofed, private space designed for your comfort and security.",
  },
  {
    icon: "🌿",
    title: "Calming Environment",
    desc: "Thoughtfully designed with natural elements to help you feel at ease the moment you walk in.",
  },
  {
    icon: "💚",
    title: "In-Person & Online",
    desc: "Choose what works best for you — visit our Denver office or connect from home via secure video sessions.",
  },
];

export default function OurOffice() {
  return (
    <section
      id="our-office"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Visit Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--color-primary-dark)",
            }}
          >
            A Calm Space{" "}
            <span style={{ color: "var(--color-primary)" }}>
              Built for Healing
            </span>
          </h2>
          <p
            className="text-base"
            style={{ color: "var(--color-text-light)" }}
          >
            Our Denver office is more than just a room — it's a sanctuary where
            you can feel safe, heard, and supported every step of the way.
          </p>
        </div>

        {/* Image Grid + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image collage */}
          <div className="fade-up">
            <div className="grid grid-cols-2 gap-4">
              {/* Large image top-left spanning 2 rows */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ gridRow: "span 2", height: "320px" }}
              >
                <img
                  src="office1.jpeg"
                  alt="Cozy therapy office in Denver - warm and welcoming"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Top-right */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "152px" }}
              >
                <img
                  src="office2.jpeg"
                  alt="Relaxing corner of the therapy office"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom-right */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ height: "152px" }}
              >
                <img
                  src="office3.avif"
                  alt="Natural light in our Denver counseling space"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="fade-up fade-up-delay-2">
            <div
              className="rounded-2xl p-7 mb-6"
              style={{ backgroundColor: "var(--color-white)" }}
            >
              <h3
                className="text-lg font-bold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--color-primary-dark)",
                }}
              >
                📍 Our Location
              </h3>
              <p
                className="text-sm relative left-1"
                style={{ color: "var(--color-text-light)" }}
              >
                Located in the heart of Denver, Colorado, our office is
                easily accessible and nestled in a quiet, peaceful setting.
                We also offer fully secure online therapy sessions for
                clients across Colorado.
              </p>
              <div
                className="mt-4 pt-4 flex flex-col sm:flex-row gap-4 text-sm font-medium"
                style={{
                  borderTop: "1px solid var(--color-secondary)",
                  color: "var(--color-primary-dark)",
                }}
              >
                <span>📍 Denver, Colorado</span>
                <span>💻 Online Sessions Available</span>
              </div>
            </div>

            {/* Feature list */}
            <div className="flex flex-col gap-4">
              {officeFeatures.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ backgroundColor: "var(--color-secondary-light)" }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4
                      className="text-sm font-bold mb-0.5"
                      style={{ color: "var(--color-primary-dark)" }}
                    >
                      {f.title}
                    </h4>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-light)" }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
