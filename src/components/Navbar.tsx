"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "About", "Services", "Our Office", "FAQ", "Contact "];

  return (
    <nav
      className={`relative top-1 left-1 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <span className="text-white text-sm font-semibold">MR</span>
          </div>
          <span
            className="text-lg font-semibold"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--color-primary-dark)",
            }}
          >
            Dr. Maya Reynolds
          </span>
          
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "var(--color-text-light)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-light)")
              }
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Book a Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl relative right-1.5"
          style={{ color: "var(--color-primary-dark)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-3"
          style={{ backgroundColor: "var(--color-white)" }}
        >
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium py-2 border-b"
              style={{
                color: "var(--color-text-light)",
                borderColor: "var(--color-secondary)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: "var(--color-primary)" }}
            onClick={() => setMenuOpen(false)}
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  );
}
