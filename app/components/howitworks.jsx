"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    title: "Learn",
    subtitle: "Study Materials",
    description:
      "Access expertly crafted chapter-wise notes, revision sheets, and PDF resources for CBSE & ICSE boards — available anytime, anywhere.",
    detail: "1,000+ curated resources",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4"/>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: "Practice",
    subtitle: "Online Tests",
    description:
      "Sharpen your skills with our subject-wise and full-length online mock tests. Instant scoring and performance breakdown included.",
    detail: "Chapter & full-length tests",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
      </svg>
    ),
    title: "Assess",
    subtitle: "Offline Exams & Analytics",
    description:
      "Sit for structured offline examinations at our center. Receive detailed analytics, ranks, and personalized feedback from our experts.",
    detail: "Real exam environment",
  },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "700px",
        background: "radial-gradient(circle, rgba(245,166,35,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{
          textAlign: "center",
          marginBottom: "72px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.6s ease",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F5A623",
            marginBottom: "16px",
            fontWeight: 600,
          }}>
            The Codiora Journey
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            How It Works
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "480px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            A proven three-step path from learning to excellence.
          </p>
        </div>

        {/* Steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          position: "relative",
        }}>
          {/* Connector line (desktop) */}
          <div style={{
            position: "absolute",
            top: "56px",
            left: "calc(16.66% + 24px)",
            right: "calc(16.66% + 24px)",
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(245,166,35,0.3), rgba(245,166,35,0.3), transparent)",
            pointerEvents: "none",
          }} className="connector" />

          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px",
                padding: "40px 32px",
                position: "relative",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `all 0.6s ease ${0.2 + i * 0.15}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = "1px solid rgba(245,166,35,0.25)";
                e.currentTarget.style.background = "rgba(245,166,35,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {/* Step number */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "72px",
                fontWeight: 900,
                color: "rgba(245,166,35,0.07)",
                lineHeight: 1,
                position: "absolute",
                top: "16px",
                right: "24px",
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "rgba(245,166,35,0.1)",
                border: "1px solid rgba(245,166,35,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5A623",
                marginBottom: "24px",
              }}>
                {step.icon}
              </div>

              {/* Content */}
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#F5A623",
                marginBottom: "8px",
                fontWeight: 600,
              }}>
                {step.subtitle}
              </p>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "16px",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                marginBottom: "24px",
              }}>
                {step.description}
              </p>

              {/* Detail tag */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontFamily: "'DM Sans', sans-serif",
                color: "rgba(245,166,35,0.8)",
                fontWeight: 600,
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}