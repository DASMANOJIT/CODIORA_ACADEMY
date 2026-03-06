"use client";
import { useEffect, useRef, useState } from "react";

const onlineFeatures = [
  "Anytime access to study materials",
  "Chapter-wise video notes",
  "Online mock tests with instant results",
  "Progress tracking dashboard",
  "Download PDFs for offline study",
];

const offlineFeatures = [
  "Structured classroom environment",
  "Proctored offline test series",
  "Direct expert mentoring",
  "Detailed rank & performance analytics",
  "Physical study material kit",
];

export default function HybridAdvantage() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hybrid"
      ref={ref}
      style={{
        background: "#0A0A0A",
        padding: "100px 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Diagonal stripe decoration */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "repeating-linear-gradient(45deg, rgba(245,166,35,0.015) 0px, rgba(245,166,35,0.015) 1px, transparent 1px, transparent 60px)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        {/* Header */}
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
            marginBottom: "12px",
            fontWeight: 600,
          }}>
            Our Unique Edge
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800,
            color: "#FFFFFF",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}>
            The Hybrid Advantage
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Flexibility of digital learning combined with the discipline and rigor of a physical center.
          </p>
        </div>

        {/* Split Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "0",
          alignItems: "center",
        }}
        className="hybrid-grid"
        >
          {/* Online Card */}
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "20px 0 0 20px",
            padding: "48px 40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-32px)",
            transition: "all 0.7s ease 0.2s",
            height: "100%",
          }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "8px",
            }}>Online</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}>
              Learn at your own pace, wherever you are
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {onlineFeatures.map((f, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Center divider */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 24px",
            opacity: visible ? 1 : 0,
            transition: "all 0.6s ease 0.5s",
            zIndex: 2,
          }}>
            <div style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #F5A623, #E8920A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 48px rgba(245,166,35,0.35)",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 800,
              fontSize: "13px",
              color: "#0A0A0A",
              letterSpacing: "0.05em",
            }}>
              + 
            </div>
          </div>

          {/* Offline Card */}
          <div style={{
            background: "linear-gradient(135deg, rgba(245,166,35,0.06) 0%, rgba(245,166,35,0.02) 100%)",
            border: "1px solid rgba(245,166,35,0.15)",
            borderRadius: "0 20px 20px 0",
            padding: "48px 40px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(32px)",
            transition: "all 0.7s ease 0.3s",
            height: "100%",
          }}>
            <div style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: "rgba(245,166,35,0.15)",
              border: "1px solid rgba(245,166,35,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "24px",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="1.8">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "26px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "8px",
            }}>Offline</h3>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(255,255,255,0.4)",
              marginBottom: "32px",
              lineHeight: 1.6,
            }}>
              Structured center experience with expert support
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {offlineFeatures.map((f, i) => (
                <li key={i} style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5,
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: "center",
          marginTop: "56px",
          opacity: visible ? 1 : 0,
          transition: "all 0.6s ease 0.7s",
        }}>
          <a href="#enroll" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "linear-gradient(135deg, #F5A623, #E8920A)",
            color: "#0A0A0A",
            textDecoration: "none",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            fontWeight: 700,
            padding: "16px 36px",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(245,166,35,0.3)",
          }}>
            Experience the Best of Both Worlds →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hybrid-grid {
            grid-template-columns: 1fr !important;
          }
          .hybrid-grid > div:first-child {
            border-radius: 20px 20px 0 0 !important;
          }
          .hybrid-grid > div:last-child {
            border-radius: 0 0 20px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}