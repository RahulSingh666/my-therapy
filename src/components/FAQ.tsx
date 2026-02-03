"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of therapy do you offer?",
    a: "I specialize in Cognitive Behavioral Therapy (CBT) and Eye Movement Desensitization and Reprocessing (EMDR). These evidence-based approaches are tailored to each client's unique needs — whether you're working through anxiety, trauma, depression, or a major life transition.",
  },
  {
    q: "Do you offer online therapy sessions?",
    a: "Yes! In addition to in-person sessions at my Denver office, I offer secure, confidential video therapy sessions for clients across Colorado. Online therapy gives you the flexibility to heal from wherever you feel most comfortable.",
  },
  {
    q: "How long does therapy typically take?",
    a: "Every person's journey is different. Some clients see meaningful progress in just a few sessions, while others benefit from longer-term support. Together, we'll set clear goals and check in regularly so therapy moves at a pace that feels right for you.",
  },
  {
    q: "What should I expect during my first session?",
    a: "Your first session is all about getting to know each other. I'll ask about your background, what's been on your mind, and what you hope to work on. There's no pressure — it's a safe, judgment-free space to share at your own comfort level.",
  },
  {
    q: "Do you accept insurance?",
    a: "I work with several insurance providers. Please reach out directly so we can verify your coverage and discuss payment options. I'm committed to making quality mental health care accessible.",
  },
  {
    q: "Is therapy the right fit for me?",
    a: "If you're feeling stuck, overwhelmed, or struggling with difficult emotions, therapy can be a powerful step forward. You don't need to be in crisis to benefit — many people come to therapy simply to grow, heal, and feel more like themselves.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 px-5 relative left-1"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div className="max-w-3xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-14 fade-up ">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Questions & Answers
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--color-primary-dark)",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "var(--color-primary)" }}>Questions</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md fade-up"
              style={{ border: "1px solid var(--color-secondary)" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className="text-sm font-semibold pr-4"
                  style={{ color: "var(--color-primary-dark)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="text-lg shrink-0 transition-transform duration-300"
                  style={{
                    color: "var(--color-primary)",
                    transform:
                      openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-light)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
