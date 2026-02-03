"use client";

const services = [
  {
    icon: "🌿",
    title: "Anxiety & Stress Management",
    description:
      "Living with anxiety can feel overwhelming. Using evidence-based Cognitive Behavioral Therapy (CBT), I help you identify unhelpful thought patterns, develop coping strategies, and build lasting resilience — so you can reclaim a calmer, more fulfilling life in Denver and beyond.",
    keywords: "anxiety therapy Denver, stress management, CBT",
  },
  {
    icon: "🌊",
    title: "Trauma & PTSD Recovery",
    description:
      "Trauma doesn't have to define your future. As a certified EMDR therapist, I work with you to safely process painful memories and heal at your own pace. Whether from childhood experiences, accidents, or interpersonal trauma, my office in Denver is a secure space for your journey toward peace.",
    keywords: "EMDR therapy Denver, trauma recovery, PTSD counseling",
  },
  {
    icon: "🌱",
    title: "Depression & Life Transitions",
    description:
      "Depression and major life changes — a new city, career shifts, loss, or relationship struggles — can leave you feeling lost. I offer compassionate, individualized therapy that helps you process emotions, rediscover your sense of purpose, and take meaningful steps forward.",
    keywords: "depression therapy Denver, life transitions counseling",
  },

];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-5 relative left-1"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            What I Offer
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--color-primary-dark)",
            }}
          >
            Services Tailored to{" "}
            <span style={{ color: "var(--color-primary)" }}>Your Needs</span>
          </h2>
          <p
            className="text-base"
            style={{ color: "var(--color-text-light)" }}
          >
            Whether you're dealing with anxiety, healing from trauma, or
            navigating a difficult chapter, I'm here to walk beside you with
            patience and care.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`fade-up fade-up-delay-${i + 1} bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300`}
              style={{ border: "1px solid var(--color-secondary)" }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 "
                style={{ backgroundColor: "var(--color-secondary-light)" }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--color-primary-dark)",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed relative left-1"
                style={{ color: "var(--color-text-light)" }}
              >
                {service.description}
              </p>

              {/* Learn more link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-colors duration-200 relative left-1"
                style={{ color: "var(--color-primary)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
              >
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
