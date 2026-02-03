export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-5"
      style={{ backgroundColor: "var(--color-bg-alt)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="fade-up">
            <div className="relative">
              <div
                className="w-full max-w-md mx-auto rounded-3xl overflow-hidden"
                style={{ height: "480px" }}
              >
                <img
                  src="Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds - Licensed Psychologist in Denver"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              {/* Credentials badge */}
              <div
                className="absolute top-4 -right-5 bg-white rounded-2xl shadow-md px-5 py-3"
                style={{ border: "1px solid var(--color-secondary)" }}
              >
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  Dr. Maya Reynolds
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--color-accent)" }}
                >
                  PsyD · 12+ Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="fade-up fade-up-delay-2">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3 relative left-1"
              style={{ color: "var(--color-accent)" }}
            >
              About Me
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5 relative left-1"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--color-primary-dark)",
              }}
            >
              Healing Starts With a{" "}
              <span style={{ color: "var(--color-primary)" }}>
                Trusted Connection
              </span>
            </h2>
            <p
              className="text-base mb-4 relative left-1"
              style={{ color: "var(--color-text-light)" }}
            >
              I'm Dr. Maya Reynolds, a licensed clinical psychologist based in
              Denver, Colorado. With over 12 years of experience, I help
              individuals navigate anxiety, trauma, depression, and major life
              transitions with compassion and evidence-based care.
            </p>
            <p
              className="text-base mb-6 relative left-1"
              style={{ color: "var(--color-text-light)" }}
            >
              My approach blends Cognitive Behavioral Therapy (CBT) and Eye
              Movement Desensitization and Reprocessing (EMDR) to create a
              deeply personalized experience. I believe every person deserves a
              safe, non-judgmental space to heal — whether through in-person
              sessions in my Denver office or via online therapy from the
              comfort of your home.
            </p>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-3 mb-6 relative left-1">
              {[
                "Licensed PsyD",
                "CBT Certified",
                "EMDR Certified",
                "12+ Years Exp",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: "var(--color-secondary-light)",
                    color: "var(--color-primary-dark)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold text-sm shadow transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
