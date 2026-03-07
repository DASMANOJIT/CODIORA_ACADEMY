"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);

    // Animated particle grid
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let dots = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const cols = Math.floor(canvas.width / 60);
      const rows = Math.floor(canvas.height / 60);
      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          dots.push({
            x: (i / cols) * canvas.width,
            y: (j / rows) * canvas.height,
            r: Math.random() * 1.2 + 0.3,
            speed: Math.random() * 0.003 + 0.001,
            offset: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        const opacity = 0.08 + 0.12 * Math.sin(t * d.speed + d.offset);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,166,35,${opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const stats = [
    { value: "1,000+", label: "Test Papers" },
    { value: "500+", label: "Happy Students" },
    { value: "CBSE & ICSE", label: "Boards Covered" },
    { value: "Class 6–12", label: "All Grades" },
  ];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "linear-gradient(160deg, #0A0A0A 0%, #111008 50%, #0A0A0A 100%)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated dot grid */}
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      {/* Gold glow blobs */}
      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-5%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(245,166,35,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Decorative bracket */}
      <div style={{
        position: "absolute",
        right: "8%",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "320px",
        fontFamily: "monospace",
        color: "rgba(245,166,35,0.04)",
        fontWeight: 900,
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-20px",
      }}>
        {"{ }"}
      </div>

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "120px 5% 80px",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(245,166,35,0.08)",
            border: "1px solid rgba(245,166,35,0.25)",
            borderRadius: "100px",
            padding: "6px 16px 6px 8px",
            marginBottom: "32px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease 0.1s",
          }}
        >
          <span style={{
            background: "#F5A623",
            borderRadius: "100px",
            padding: "2px 10px",
            fontSize: "11px",
            fontWeight: 700,
            color: "#0A0A0A",
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}>New</span>
          <span style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "13px",
            fontFamily: "'DM Sans', sans-serif",
          }}>Hybrid Learning — Online & Offline</span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 6vw, 88px)",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            maxWidth: "820px",
            marginBottom: "24px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.7s ease 0.2s",
          }}
        >
          Empowering Students to{" "}
          <span style={{
            background: "linear-gradient(90deg, #F5A623, #FFD080)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Score Higher
          </span>{" "}
          with Expert Guidance
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 1.8vw, 20px)",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "600px",
            lineHeight: 1.7,
            marginBottom: "44px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.35s",
          }}
        >
          Access premium online resources, chapter-wise notes, and offline mock
          tests — designed for CBSE & ICSE students from Class 6 to 12.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "72px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s ease 0.5s",
          }}
        >
          <a
            href="https://drive.google.com/drive/folders/195C7fPLymEjnM8q4r6Z0Zamp5raJo9jE?usp=sharing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(135deg, #F5A623 0%, #E8920A 100%)",
              color: "#0A0A0A",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              padding: "16px 32px",
              borderRadius: "8px",
              boxShadow: "0 8px 32px rgba(245,166,35,0.35)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(245,166,35,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,166,35,0.35)";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Explore Free Material
          </a>
          <a
            href="#tests"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "transparent",
              color: "#FFFFFF",
              textDecoration: "none",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.15)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,166,35,0.5)";
              e.currentTarget.style.color = "#F5A623";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#FFFFFF";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
            </svg>
            Take a Free Mock Test
          </a>
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "0",
            maxWidth: "640px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "40px",
            opacity: visible ? 1 : 0,
            transition: "all 0.7s ease 0.7s",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "0 24px 0 0",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                marginRight: i < stats.length - 1 ? "24px" : "0",
              }}
            >
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(22px, 2.5vw, 30px)",
                fontWeight: 700,
                color: "#F5A623",
                marginBottom: "4px",
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.04em",
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        opacity: 0.4,
        animation: "bounce 2s infinite",
      }}>
        <span style={{ color: "#fff", fontFamily: "'DM Sans', sans-serif", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A623" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}