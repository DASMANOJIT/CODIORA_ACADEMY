"use client";
import { useState, useEffect } from "react";
import Image from "../../public/logo.png";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Courses", href: "#courses" },
    { label: "Study Material", href: "https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharings" },
    { label: "Mock Tests", href: "#enroll" },
    { label: "Hybrid Model", href: "#hybrid" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(245,166,35,0.15)" : "none",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="Codiora Academy logo - online learning platform for students and free educational content"
            style={{ height: "120px", width: "auto" }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#F5A623")}
                onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.75)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }} className="desktop-cta">
          <a
            href="https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharings"
            style={{
              color: "#F5A623",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              border: "1px solid rgba(245,166,35,0.4)",
              padding: "9px 20px",
              borderRadius: "6px",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(245,166,35,0.1)";
              e.target.style.borderColor = "#F5A623";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.borderColor = "rgba(245,166,35,0.4)";
            }}
          >
            Free Material
          </a>
          <a
            href="#enroll"
            style={{
              background: "linear-gradient(135deg, #F5A623 0%, #E8920A 100%)",
              color: "#0A0A0A",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              padding: "9px 22px",
              borderRadius: "6px",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 16px rgba(245,166,35,0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 6px 24px rgba(245,166,35,0.45)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 16px rgba(245,166,35,0.3)";
            }}
          >
            Enroll Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="hamburger"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#F5A623",
                borderRadius: "2px",
                transition: "all 0.3s",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 1
                      ? "scaleX(0)"
                      : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            padding: "20px 5%",
            borderTop: "1px solid rgba(245,166,35,0.15)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#enroll"
            style={{
              display: "block",
              marginTop: "16px",
              background: "linear-gradient(135deg, #F5A623, #E8920A)",
              color: "#0A0A0A",
              textAlign: "center",
              padding: "12px",
              borderRadius: "6px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Enroll Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
